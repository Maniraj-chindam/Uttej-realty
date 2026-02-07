"use client";

import { motion } from "framer-motion";

const advantages = [
    "Verified Properties",
    "Transparent Pricing",
    "Legal Support",
    "Registration Assistance",
    "After Sales Service",
];

export default function WhyChooseSection() {
    return (
        <section id="trust" className="py-20 md:py-28 lg:py-36 px-5 md:px-8 lg:px-20 bg-charcoal-900">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-10 h-px bg-champagne-500/60" />
                        <span className="text-champagne-400 font-sans text-[10px] uppercase tracking-[0.25em]">
                            Why Us
                        </span>
                        <span className="w-10 h-px bg-champagne-500/60" />
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                        The Uttej Advantage
                    </h2>
                </motion.div>

                {/* Luxury Checklist */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                    {advantages.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 bg-charcoal-800/50 backdrop-blur-sm rounded-full px-6 py-3 md:px-8 md:py-4"
                        >
                            <span className="text-champagne-500 text-lg">✓</span>
                            <span className="font-sans text-sm md:text-base text-white/90">{item}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
