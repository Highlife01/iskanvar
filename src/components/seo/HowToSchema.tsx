import { Helmet } from 'react-helmet-async';

interface HowToStep {
    name: string;
    text: string;
    url?: string;
}

interface HowToSchemaProps {
    name: string;
    description: string;
    steps: HowToStep[];
    totalTime?: string; // ISO 8601 duration format, e.g., "P3D" for 3 days
    estimatedCost?: {
        value: string;
        currency: string;
    };
    tool?: string[];
    supply?: string[];
}

const HowToSchema = ({
    name,
    description,
    steps,
    totalTime,
    estimatedCost,
    tool = [],
    supply = []
}: HowToSchemaProps) => {
    const howToSchema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "description": description,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            ...(step.url && { "url": step.url })
        }))
    };

    if (totalTime) {
        howToSchema["totalTime"] = totalTime;
    }

    if (estimatedCost) {
        howToSchema["estimatedCost"] = {
            "@type": "MonetaryAmount",
            "value": estimatedCost.value,
            "currency": estimatedCost.currency
        };
    }

    if (tool.length > 0) {
        howToSchema["tool"] = tool.map(t => ({
            "@type": "HowToTool",
            "name": t
        }));
    }

    if (supply.length > 0) {
        howToSchema["supply"] = supply.map(s => ({
            "@type": "HowToSupply",
            "name": s
        }));
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(howToSchema)}
            </script>
        </Helmet>
    );
};

export default HowToSchema;

// Predefined HowTo for İskan Sorgulama
export const IskanSorgulamaHowTo: HowToSchemaProps = {
    name: "İskan Sorgulama Nasıl Yapılır?",
    description: "Bir binanın iskan durumunu adım adım nasıl sorgulayacağınızı öğrenin.",
    totalTime: "P1D",
    steps: [
        {
            name: "Tapu Bilgilerinizi Hazırlayın",
            text: "Tapu senedinizdeki ada parsel numarasını veya tam adres bilgisini not alın."
        },
        {
            name: "E-Devlet veya TAKBİS Kontrolü",
            text: "E-devlet TAKBİS sistemine girerek tapu bilgilerinizi görüntüleyin ve kat mülkiyeti durumunu kontrol edin."
        },
        {
            name: "Belediyeye Başvuru",
            text: "İlgili belediyenin İmar ve Şehircilik Müdürlüğü'ne ada parsel numaranız ile başvurun."
        },
        {
            name: "Arşiv Sorgulaması",
            text: "Belediye arşivlerinden yapının iskan belgesi, ruhsat tarihi ve proje uygunluğu bilgilerini talep edin."
        },
        {
            name: "Sonuç Değerlendirmesi",
            text: "Alınan bilgileri değerlendirin. Kat mülkiyeti varsa iskanlı, kat irtifakı varsa iskansızdır."
        }
    ],
    tool: ["Tapu senedi", "E-devlet hesabı", "Kimlik belgesi"],
    supply: ["Dilekçe (belediye başvurusu için)"]
};
