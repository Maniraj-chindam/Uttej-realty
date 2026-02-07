"use client";

import { motion } from "framer-motion";

const steps = [
    { number: "01", title: "Discovery", desc: "Share your requirements" },
    { number: "02", title: "Shortlisting", desc: "Curated options for you" },
    { number: "03", title: "Site Visit", desc: "Private property tours" },
    { number: "04", title: "Negotiation", desc: "Best price secured" },
    { number: "05", title: "Documentation", desc: "Legal paperwork handled" },
    { number: "06", title: "Handover", desc: "Keys to your new home" },
];

export default function ProcessSection() {
    return (
        <section id="experience" className="py-20 md:py-28 lg:py-36 px-5 md:px-8 lg:px-20 bg-ivory-100">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-10 h-px bg-champagne-500" />
                        <span className="text-champagne-600 font-sans text-[10px] uppercase tracking-[0.25em]">
                            Your Journey
                        </span>
                        <span className="w-10 h-px bg-champagne-500" />
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900">
                        Simple Process
                    </h2>
                </motion.div>

                {/* Numbered Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-luxury transition-shadow duration-500"
                        >
                            {/* Number */}
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-champagne-500 text-charcoal-900 font-serif text-lg font-medium mb-4">
                                {step.number}
                            </span>

                            {/* Title */}
                            <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-1">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="font-sans text-xs text-charcoal-500">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
