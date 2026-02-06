"use client";

import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";

export default function LeadCaptureSection() {
    return (
        <section id="consultation" className="py-16 md:py-24 lg:py-32 px-5 md:px-8 lg:px-20 bg-ivory-100">
            <div className="max-w-xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-8 h-px bg-champagne-500" />
                        <span className="text-champagne-600 font-sans text-[10px] uppercase tracking-[0.2em]">
                            Get Started
                        </span>
                        <span className="w-8 h-px bg-champagne-500" />
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal-900 mb-3">
                        Private Consultation
                    </h2>
                    <p className="font-sans text-charcoal-500 text-sm leading-relaxed">
                        Share your requirements and our experts will curate the perfect properties for you.
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-6 md:p-8 shadow-soft"
                >
                    <LeadForm />
                </motion.div>

                {/* Trust Note */}
                <p className="text-center mt-6 font-sans text-xs text-charcoal-400">
                    🔒 Your information is 100% confidential
                </p>
            </div>
        </section>
    );
}
