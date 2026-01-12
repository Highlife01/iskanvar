import { Resend } from 'resend';

export const config = {
    runtime: 'edge', // Optional: Use edge runtime for faster cold starts
};

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const formData = await request.formData();
        const fullName = formData.get('fullName') as string;
        const phone = formData.get('phone') as string;
        const city = formData.get('city') as string;
        const district = formData.get('district') as string;
        const file = formData.get('file') as File | null;
        const consent = formData.get('consent') as string;

        const resendApiKey = process.env.RESEND_API_KEY;

        console.log('API Key Check:', resendApiKey ? 'Exists' : 'Missing', resendApiKey ? `Length: ${resendApiKey.length}` : '');

        if (!resendApiKey) {
            console.error('RESEND_API_KEY is missing from environment variables');
            return new Response(JSON.stringify({ error: 'Resend API Key is missing from env' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const resend = new Resend(resendApiKey);

        const attachments = [];
        if (file && file.size > 0) {
            // Read file content
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            attachments.push({
                filename: file.name,
                content: buffer,
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Iskanvar <onboarding@resend.dev>',
            to: ['cebrailkara@gmail.com'], // Updated to authorized testing email
            subject: `Yeni İskan Başvurusu: ${fullName}`,
            html: `
        <h1>Yeni Başvuru Detayları</h1>
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>İl/İlçe:</strong> ${city} / ${district}</p>
        <p><strong>Hizmet Türü:</strong> ${formData.get('serviceType') === 'imar' ? 'İmar Durum Araştırma (3000 TL)' : 'Bina İskan Araştırma (3000 TL)'}</p>
        <p><strong>Onay Metni:</strong> ${consent}</p>
        <br/>
        <p>Dosya ektedir.</p>
      `,
            attachments: attachments
        });

        if (error) {
            console.error('Resend error:', error);
            return new Response(JSON.stringify({ error: error.message }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Handler error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
