import { Resend } from 'resend';

export const config = {
    runtime: 'edge',
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_MIME_TYPES = new Set([
    'application/pdf',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
]);

function escapeHtml(input: string): string {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function sanitizeFilename(name: string): string {
    return name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120) || 'tapu-belgesi';
}

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const formData = await request.formData();
        const rawFullName = (formData.get('fullName') as string) || '';
        const rawPhone = (formData.get('phone') as string) || '';
        const rawEmail = (formData.get('email') as string) || '';
        const rawCity = (formData.get('city') as string) || 'Belirtilmedi';
        const rawDistrict = (formData.get('district') as string) || 'Belirtilmedi';
        const rawServiceType = (formData.get('serviceType') as string) || 'iskan';
        const rawPageUrl = (formData.get('pageUrl') as string) || '';
        const rawNotes = (formData.get('notes') as string) || '';
        const file = formData.get('file') as File | null;
        const consent = (formData.get('consent') as string) || '';

        if (!rawFullName.trim() || !rawPhone.trim()) {
            return new Response(JSON.stringify({ error: 'Ad Soyad ve Telefon alanları zorunludur.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const fullName = escapeHtml(rawFullName.trim().slice(0, 120));
        const phone = escapeHtml(rawPhone.trim().slice(0, 40));
        const email = escapeHtml(rawEmail.trim().slice(0, 120) || 'Belirtilmedi');
        const city = escapeHtml(rawCity.trim().slice(0, 80));
        const district = escapeHtml(rawDistrict.trim().slice(0, 80));
        const pageUrl = escapeHtml(rawPageUrl.trim().slice(0, 300) || 'https://www.iskanvar.com.tr');
        const notes = escapeHtml(rawNotes.trim().slice(0, 500));

        const serviceLabel =
            rawServiceType === 'imar'
                ? 'İmar Durum Araştırma (3.000 TL)'
                : rawServiceType === 'tapu'
                ? 'Tapu İnceleme (2.000 TL)'
                : 'Bina İskan Araştırma (3.000 TL)';

        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
            console.error('RESEND_API_KEY is missing from environment variables');
            return new Response(JSON.stringify({ error: 'Sunucu e-posta yapılandırması eksik.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const resend = new Resend(resendApiKey);

        const attachments = [];
        if (file && file.size > 0) {
            if (file.size > MAX_FILE_SIZE) {
                return new Response(JSON.stringify({ error: 'Dosya boyutu en fazla 10 MB olabilir.' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            if (file.type && !ALLOWED_MIME_TYPES.has(file.type.toLowerCase())) {
                return new Response(JSON.stringify({ error: 'Yalnızca PDF veya görsel (JPG, PNG, WEBP) dosyaları yüklenebilir.' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            attachments.push({
                filename: sanitizeFilename(file.name),
                content: buffer,
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Iskanvar <onboarding@resend.dev>',
            to: ['cebrailkara@gmail.com'],
            subject: `Yeni Başvuru (${serviceLabel}): ${fullName} - ${city}/${district}`,
            html: `
        <h2>Yeni Başvuru Detayları</h2>
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>Telefon (WhatsApp):</strong> ${phone}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>İl / İlçe:</strong> ${city} / ${district}</p>
        <p><strong>Hizmet Türü:</strong> ${serviceLabel}</p>
        <p><strong>Başvuru Sayfası:</strong> ${pageUrl}</p>
        ${notes ? `<p><strong>Ek Not / Ön Test Sonucu:</strong> ${notes}</p>` : ''}
        <p><strong>KVKK Onayı:</strong> ${escapeHtml(consent)}</p>
        <p><strong>Tapu Dosyası:</strong> ${attachments.length > 0 ? 'Ektedir' : 'Yüklenmedi (Hızlı Başvuru)'}</p>
      `,
            attachments,
        });

        if (error) {
            console.error('Resend error:', error.message);
            return new Response(JSON.stringify({ error: 'Başvuru iletilirken bir hata oluştu.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
            },
        });

    } catch (error) {
        console.error('Handler error');
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
