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
        const cvFile = formData.get('cv') as File | null;
        const criminalRecordFile = formData.get('criminalRecord') as File | null;

        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
            console.error('RESEND_API_KEY is missing from environment variables');
            return new Response(JSON.stringify({ error: 'Resend API Key is missing from env' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const resend = new Resend(resendApiKey);

        const attachments = [];
        if (cvFile && cvFile.size > 0) {
            const arrayBuffer = await cvFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({
                filename: `CV-${cvFile.name}`,
                content: buffer,
            });
        }

        if (criminalRecordFile && criminalRecordFile.size > 0) {
            const arrayBuffer = await criminalRecordFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({
                filename: `SabikaKaydi-${criminalRecordFile.name}`,
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
        <p><strong>Başvuru Tarihi:</strong> ${new Date().toLocaleString('tr-TR')}</p>
        <br/>
        <p>Adayın CV'si ve Sabıka Kaydı ektedir.</p>
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
