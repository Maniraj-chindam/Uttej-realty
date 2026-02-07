"use client";

import { motion } from "framer-motion";

const stats = [
    { number: "25+", label: "Projects Associated", icon: "🏗️" },
    { number: "₹2000Cr", label: "Worth Closed", icon: "💰" },
    { number: "500+", label: "Happy Clients", icon: "👤" },
    { number: "15+", label: "Years Experience", icon: "⭐" },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-28 lg:py-36 px-5 md:px-8 lg:px-20 bg-ivory-100">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-8"
                >
                    <span className="w-10 h-px bg-champagne-500" />
                    <span className="text-champagne-600 font-sans text-[10px] uppercase tracking-[0.25em]">
                        About Us
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900 mb-8 leading-tight"
                >
                    Where Trust Meets
                    <br />
                    <span className="text-champagne-600">Exceptional Service</span>
                </motion.h2>

                {/* Professional Copy */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-charcoal-600 text-base md:text-lg leading-relaxed mb-14 max-w-3xl"
                >
                    Uttej Realty is a trusted real-estate advisory and channel partner specializing in premium residential and commercial properties. With deep builder relationships and a client-first approach, we provide curated property options, negotiation support, and complete documentation assistance.
                </motion.p>

                {/* Stat Cards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-soft text-center hover:shadow-luxury transition-shadow duration-500"
                        >
                            <span className="text-3xl mb-3 block">{stat.icon}</span>
                            <p className="font-serif text-2xl md:text-3xl font-medium text-charcoal-900 mb-1">
                                {stat.number}
                            </p>
                            <p className="font-sans text-xs md:text-sm text-charcoal-500 uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
