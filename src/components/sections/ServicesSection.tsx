"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        title: "Residential Flats",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    },
    {
        title: "Independent Houses",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    },
    {
        title: "Luxury Villas",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
    },
    {
        title: "Commercial Spaces",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
    },
    {
        title: "Investment Properties",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    },
    {
        title: "Open Plots",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80",
    },
];

export default function ServicesSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section id="services" className="py-16 md:py-24 lg:py-32 bg-stone-100">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="px-5 md:px-8 lg:px-20 mb-8">
                    {/* Section Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="w-8 h-px bg-champagne-500" />
                        <span className="text-champagne-600 font-sans text-[10px] uppercase tracking-[0.2em]">
                            Our Services
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl md:text-4xl font-medium text-charcoal-900"
                    >
                        Property Expertise
                    </motion.h2>
                </div>

                {/* Swipeable Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-4 px-5 md:px-8 lg:px-20 hide-scrollbar snap-x snap-mandatory"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-[200px] md:w-[260px] snap-start group cursor-pointer"
                        >
                            {/* Card */}
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="260px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/10 to-transparent" />

                                {/* Title Overlay */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="font-serif text-lg md:text-xl text-white leading-tight">
                                        {service.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scroll Indicator - Mobile only */}
                <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
                    <span className="text-charcoal-400 text-xs">Swipe to explore</span>
                    <svg className="w-4 h-4 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
