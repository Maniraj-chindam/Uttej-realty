"use client";

import { motion } from "framer-motion";

const trustPoints = [
    { icon: "✓", label: "Verified Listings" },
    { icon: "💰", label: "Negotiation Support" },
    { icon: "⚖️", label: "Legal Assistance" },
    { icon: "📋", label: "Registration Handling" },
    { icon: "💎", label: "Transparent Pricing" },
    { icon: "👤", label: "Dedicated Advisor" },
];

export default function WhyChooseSection() {
    return (
        <section id="trust" className="py-16 md:py-24 lg:py-32 px-5 md:px-8 lg:px-20 bg-charcoal-900">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-8 h-px bg-champagne-500/60" />
                        <span className="text-champagne-400 font-sans text-[10px] uppercase tracking-[0.2em]">
                            Why Us
                        </span>
                        <span className="w-8 h-px bg-champagne-500/60" />
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-white">
                        The Uttej Advantage
                    </h2>
                </motion.div>

                {/* Trust Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {trustPoints.map((point, index) => (
                        <motion.div
                            key={point.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-charcoal-800/50 rounded-2xl p-5 md:p-6 text-center"
                        >
                            <span className="text-3xl mb-3 block">{point.icon}</span>
                            <p className="font-sans text-sm text-white/90">{point.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
