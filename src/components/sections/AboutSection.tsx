"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
    { icon: "₹", label: "Crores Worth Deals" },
    { icon: "🏗️", label: "Builder Tie-ups" },
    { icon: "👤", label: "Personal Guidance" },
    { icon: "⚖️", label: "Legal Support" },
    { icon: "🤝", label: "After Sales Care" },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 lg:py-32 px-5 md:px-8 lg:px-20 bg-ivory-100">
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <span className="w-8 h-px bg-champagne-500" />
                    <span className="text-champagne-600 font-sans text-[10px] uppercase tracking-[0.2em]">
                        Our Story
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900 mb-6 leading-tight"
                >
                    Where Trust Meets
                    <br />
                    <span className="text-champagne-600">Exceptional Service</span>
                </motion.h2>

                {/* Story */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-charcoal-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
                >
                    Uttej Realty is a trusted channel partner specializing in premium real estate.
                    With deep builder relationships and end-to-end advisory, we help clients
                    purchase verified properties with confidence. From discovery to registration,
                    we are your dedicated partners.
                </motion.p>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-10"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85"
                        alt="Luxury property"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent" />

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6">
                        <div className="flex items-center gap-6 md:gap-10">
                            <div>
                                <p className="font-serif text-3xl md:text-4xl font-medium text-white">15+</p>
                                <p className="text-white/70 text-xs uppercase tracking-wide">Years</p>
                            </div>
                            <div className="w-px h-10 bg-white/30" />
                            <div>
                                <p className="font-serif text-3xl md:text-4xl font-medium text-white">₹2000Cr</p>
                                <p className="text-white/70 text-xs uppercase tracking-wide">Deals Closed</p>
                            </div>
                            <div className="w-px h-10 bg-white/30 hidden sm:block" />
                            <div className="hidden sm:block">
                                <p className="font-serif text-3xl md:text-4xl font-medium text-white">500+</p>
                                <p className="text-white/70 text-xs uppercase tracking-wide">Families</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Highlights - Horizontal scroll on mobile */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 flex items-center gap-3 bg-stone-100 rounded-full px-5 py-3"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-sans text-sm text-charcoal-700 whitespace-nowrap">{item.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
