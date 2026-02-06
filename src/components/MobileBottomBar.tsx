"use client";

import { motion } from "framer-motion";

export default function MobileBottomBar() {
    const phoneNumber = "+919876543210";
    const whatsappNumber = "919876543210";
    const whatsappMessage = encodeURIComponent("Hello, I'm interested in premium properties.");

    const scrollToProperties = () => {
        const element = document.getElementById("portfolio");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
            {/* Glass Background */}
            <div className="bg-ivory-100/95 backdrop-blur-lg border-t border-charcoal-100 safe-area-bottom">
                <div className="grid grid-cols-3 divide-x divide-charcoal-100">
                    {/* Call Button */}
                    <a
                        href={`tel:${phoneNumber}`}
                        className="flex flex-col items-center justify-center py-3 gap-1 active:bg-charcoal-50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-charcoal-900 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <span className="font-sans text-[10px] uppercase tracking-wide text-charcoal-600">Call Now</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center py-3 gap-1 active:bg-charcoal-50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-champagne-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-charcoal-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                        <span className="font-sans text-[10px] uppercase tracking-wide text-charcoal-600">WhatsApp</span>
                    </a>

                    {/* Properties Button */}
                    <button
                        onClick={scrollToProperties}
                        className="flex flex-col items-center justify-center py-3 gap-1 active:bg-charcoal-50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center">
                            <svg className="w-5 h-5 text-charcoal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <span className="font-sans text-[10px] uppercase tracking-wide text-charcoal-600">Properties</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
