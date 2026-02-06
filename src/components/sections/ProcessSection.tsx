"use client";

import { motion } from "framer-motion";

const steps = [
    { number: "01", title: "Discovery", desc: "Share your requirements" },
    { number: "02", title: "Shortlist", desc: "Curated properties" },
    { number: "03", title: "Site Visit", desc: "Private tours" },
    { number: "04", title: "Negotiate", desc: "Best price secured" },
    { number: "05", title: "Register", desc: "Smooth handover" },
];

export default function ProcessSection() {
    return (
        <section id="experience" className="py-16 md:py-24 lg:py-32 px-5 md:px-8 lg:px-20 bg-ivory-100">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-champagne-500" />
                        <span className="text-champagne-600 font-sans text-[10px] uppercase tracking-[0.2em]">
                            Your Journey
                        </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal-900">
                        Simple Process
                    </h2>
                </motion.div>

                {/* Mobile Timeline - Vertical */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-champagne-500/30 md:hidden" />

                    <div className="space-y-6 md:space-y-0 md:flex md:gap-4 md:overflow-x-auto md:pb-4 hide-scrollbar">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative flex gap-4 md:flex-col md:flex-shrink-0 md:w-[160px] md:text-center"
                            >
                                {/* Number Circle */}
                                <div className="relative z-10 w-12 h-12 rounded-full bg-champagne-500 flex items-center justify-center flex-shrink-0 md:mx-auto">
                                    <span className="font-serif text-lg font-medium text-charcoal-900">{step.number}</span>
                                </div>

                                {/* Content */}
                                <div className="pt-1 md:pt-0 md:mt-4">
                                    <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="font-sans text-sm text-charcoal-500">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Arrow for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-6 -right-2 text-champagne-500">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
