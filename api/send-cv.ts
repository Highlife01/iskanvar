import { Resend } from 'resend';

export const config = {
    runtime: 'edge',
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

function escapeHtml(input: string): string {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function sanitizeFilename(name: string): string {
    return name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120) || 'belge';
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
        const cvFile = formData.get('cv') as File | null;
        const criminalRecordFile = formData.get('criminalRecord') as File | null;

        if (!rawFullName.trim()) {
            return new Response(JSON.stringify({ error: 'Ad Soyad alanı zorunludur.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const fullName = escapeHtml(rawFullName.trim().slice(0, 120));
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
        if (cvFile && cvFile.size > 0) {
            if (cvFile.size > MAX_FILE_SIZE) {
                return new Response(JSON.stringify({ error: 'CV dosya boyutu en fazla 10 MB olabilir.' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            const arrayBuffer = await cvFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({
                filename: `CV-${sanitizeFilename(cvFile.name)}`,
                content: buffer,
            });
        }

        if (criminalRecordFile && criminalRecordFile.size > 0) {
            if (criminalRecordFile.size > MAX_FILE_SIZE) {
                return new Response(JSON.stringify({ error: 'Adli sicil dosya boyutu en fazla 10 MB olabilir.' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            const arrayBuffer = await criminalRecordFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({
                filename: `SabikaKaydi-${sanitizeFilename(criminalRecordFile.name)}`,
                content: buffer,
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Iskanvar IK <onboarding@resend.dev>',
            to: ['cebrailkara@gmail.com'],
            subject: `Yeni İş ve Sabıka Kaydı Başvurusu: ${fullName}`,
            html: `
        <h1>Yeni İnsan Kaynakları Başvurusu</h1>
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>Başvuru Tarihi:</strong> ${escapeHtml(new Date().toLocaleString('tr-TR'))}</p>
        <br/>
        <p>Adayın CV'si ve Sabıka Kaydı ektedir.</p>
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
