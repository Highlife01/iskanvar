import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Upload, FileText, X, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

interface HRFormData {
    fullName: string;
    cv: FileList;
    criminalRecord: FileList;
}

const HRPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedCV, setSelectedCV] = useState<File | null>(null);
    const [selectedRecord, setSelectedRecord] = useState<File | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch
    } = useForm<HRFormData>();

    // Watch file inputs
    const cvInput = watch("cv");
    const recordInput = watch("criminalRecord");

    if (cvInput && cvInput.length > 0 && cvInput[0] !== selectedCV) {
        setSelectedCV(cvInput[0]);
    }

    if (recordInput && recordInput.length > 0 && recordInput[0] !== selectedRecord) {
        setSelectedRecord(recordInput[0]);
    }

    const onSubmit = async (data: HRFormData) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("fullName", data.fullName);

        if (data.cv && data.cv.length > 0) {
            formData.append("cv", data.cv[0]);
        }

        if (data.criminalRecord && data.criminalRecord.length > 0) {
            formData.append("criminalRecord", data.criminalRecord[0]);
        }

        try {
            const response = await fetch("/api/send-cv", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Başvuru gönderilirken bir hata oluştu.");
            }

            toast.success("Başvurunuz başarıyla alındı!", {
                description: "CV ve Sabıka Kaydınız iletildi.",
                duration: 5000,
                icon: <CheckCircle2 className="text-green-500" />
            });

            reset();
            setSelectedCV(null);
            setSelectedRecord(null);
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Başvuru gönderilemedi.", {
                description: error instanceof Error ? error.message : "Lütfen daha sonra tekrar deneyin.",
                duration: 5000,
                icon: <AlertCircle className="text-red-500" />
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleRemoveCV = () => {
        reset({ ...watch(), cv: undefined });
        setSelectedCV(null);
    };

    const handleRemoveRecord = () => {
        reset({ ...watch(), criminalRecord: undefined });
        setSelectedRecord(null);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20">
            <Helmet>
                <title>İnsan Kaynakları | İskanvar - Kariyer Fırsatları</title>
                <meta name="description" content="İskanvar ailesine katılmak için insan kaynakları formu. CV'nizi ve sabıka kaydınızı gönderin." />
            </Helmet>

            <Navbar />

            <main className="pt-32 px-4 container mx-auto max-w-2xl">
                <div className="text-center mb-10 space-y-3">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        Kariyer Başvurusu
                    </h1>
                    <p className="text-lg text-slate-600 max-w-md mx-auto">
                        Aşağıdaki formdan CV'nizi ve Adli Sicil Kaydınızı yükleyerek başvurunuzu tamamlayabilirsiniz.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                    <div className="p-8 md:p-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                            {/* Personal Info Section */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">1</span>
                                    Kişisel Bilgiler
                                </h3>

                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="text-sm font-semibold text-slate-900 ml-1">
                                        Ad Soyad
                                    </label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        placeholder="Adınız ve Soyadınız"
                                        className={`w-full px-5 py-4 bg-slate-50 border ${errors.fullName ? 'border-red-300 ring-4 ring-red-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50'} rounded-2xl outline-none transition-all duration-300 font-medium placeholder:text-slate-400`}
                                        {...register("fullName", { required: "Ad Soyad alanı zorunludur" })}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-xs font-medium ml-1 flex items-center gap-1">
                                            <AlertCircle size={12} /> {errors.fullName.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Documents Section */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">2</span>
                                    Belgeler
                                </h3>

                                {/* CV Upload */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-900 ml-1 flex items-center gap-2">
                                        CV Yükle <span className="text-red-500">*</span>
                                    </label>

                                    {!selectedCV ? (
                                        <div className="relative group">
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                {...register("cv", { required: "Lütfen CV dosyanızı yükleyiniz" })}
                                            />
                                            <div className={`w-full border-2 border-dashed ${errors.cv ? 'border-red-300 bg-red-50/50' : 'border-slate-300 bg-slate-50 group-hover:border-indigo-400 group-hover:bg-indigo-50/30'} rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300`}>
                                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                                    <Upload className="text-indigo-600" size={24} />
                                                </div>
                                                <p className="text-slate-900 font-medium text-sm">CV Seçin veya Sürükleyin</p>
                                                <p className="text-slate-500 text-xs mt-1">PDF, DOC, DOCX</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex items-center justify-between group">
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600 shadow-sm">
                                                    <FileText size={20} />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-semibold text-slate-900 truncate pr-4 text-sm">{selectedCV.name}</p>
                                                    <p className="text-slate-500 text-xs">{(selectedCV.size / 1024 / 1024).toFixed(2)} MB</p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleRemoveCV}
                                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all ml-2 flex-shrink-0"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    )}
                                    {errors.cv && (
                                        <p className="text-red-500 text-xs font-medium ml-1 flex items-center gap-1">
                                            <AlertCircle size={12} /> {errors.cv.message}
                                        </p>
                                    )}
                                </div>

                                {/* Criminal Record Upload */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-900 ml-1 flex items-center gap-2">
                                        Adli Sicil Kaydı <span className="text-slate-400 text-xs font-normal">(Opsiyonel ama Önerilir)</span>
                                    </label>

                                    {!selectedRecord ? (
                                        <div className="relative group">
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                {...register("criminalRecord")}
                                            />
                                            <div className="w-full border-2 border-dashed border-slate-300 bg-slate-50 group-hover:border-purple-400 group-hover:bg-purple-50/30 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300">
                                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                                    <ShieldCheck className="text-purple-600" size={24} />
                                                </div>
                                                <p className="text-slate-900 font-medium text-sm">Sabıka Kaydı Seçin</p>
                                                <p className="text-slate-500 text-xs mt-1">PDF, Resim dosyaları</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full bg-purple-50 border border-purple-100 rounded-2xl p-4 flex items-center justify-between group">
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-purple-600 shadow-sm">
                                                    <ShieldCheck size={20} />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-semibold text-slate-900 truncate pr-4 text-sm">{selectedRecord.name}</p>
                                                    <p className="text-slate-500 text-xs">{(selectedRecord.size / 1024 / 1024).toFixed(2)} MB</p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleRemoveRecord}
                                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all ml-2 flex-shrink-0"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    )}
                                </div>

                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-slate-200 hover:shadow-indigo-200 transform transition-all duration-300 hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2 mt-8"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Gönderiliyor...
                                    </>
                                ) : (
                                    <>
                                        Başvuruyu Tamamla
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 text-center px-4">
                    <p className="text-xs text-slate-400 leading-relaxed">
                        6698 sayılı KVKK kapsamında kişisel verileriniz iş başvuru süreçlerinin yürütülmesi amacıyla işlenmektedir.
                        <br />
                        Adli sicil kaydınız sadece güvenlik soruşturması ve işe alım kriterleri için değerlendirilecektir.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default HRPage;
