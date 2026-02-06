"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import propertiesData from "@/data/properties.json";

const filterTypes = [
    { value: "all", label: "All" },
    { value: "flat", label: "Flats" },
    { value: "villa", label: "Villas" },
    { value: "house", label: "Houses" },
    { value: "plot", label: "Plots" },
];

export default function PropertiesSection() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProperties = useMemo(() => {
        if (activeFilter === "all") return propertiesData;
        return propertiesData.filter((p) => p.type === activeFilter);
    }, [activeFilter]);

    const scrollToForm = () => {
        const element = document.getElementById("consultation");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="portfolio" className="py-16 md:py-24 lg:py-32 px-5 md:px-8 lg:px-20 bg-ivory-100">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    {/* Section Label */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-champagne-500" />
                        <span className="text-champagne-600 font-sans text-[10px] uppercase tracking-[0.2em]">
                            Featured Properties
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal-900 mb-2">
                        Exclusive Listings
                    </h2>
                    <p className="text-charcoal-500 text-sm">Handpicked premium properties</p>
                </motion.div>

                {/* Filters - Horizontal scroll on mobile */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-2 overflow-x-auto pb-4 mb-6 hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0"
                >
                    {filterTypes.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`flex-shrink-0 font-sans text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${activeFilter === filter.value
                                    ? "bg-charcoal-900 text-white"
                                    : "bg-stone-100 text-charcoal-600 active:bg-stone-200"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                {/* Properties Grid - Vertical cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProperties.map((property, index) => (
                            <motion.article
                                key={property.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-soft active:shadow-lg transition-shadow"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    {/* Type Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="font-sans text-[10px] uppercase tracking-wide bg-white/90 backdrop-blur-sm text-charcoal-800 px-3 py-1.5 rounded-full">
                                            {property.type}
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="absolute bottom-3 right-3">
                                        <span className="font-serif text-lg font-medium bg-charcoal-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                                            {property.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    {/* Location */}
                                    <p className="font-sans text-[10px] text-champagne-600 uppercase tracking-wide mb-1">
                                        {property.location}
                                    </p>

                                    {/* Title */}
                                    <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-2 leading-snug">
                                        {property.title}
                                    </h3>

                                    {/* Details */}
                                    <div className="flex items-center gap-3 text-charcoal-500 text-sm mb-4">
                                        {property.bhk && <span>{property.bhk}</span>}
                                        <span className="w-1 h-1 rounded-full bg-charcoal-300" />
                                        <span>{property.size}</span>
                                    </div>

                                    {/* CTA */}
                                    <button
                                        onClick={scrollToForm}
                                        className="w-full bg-charcoal-900 text-white font-sans text-sm uppercase tracking-wide py-3 rounded-lg hover:bg-champagne-600 hover:text-charcoal-900 transition-colors active:scale-[0.98]"
                                    >
                                        Enquire Now
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredProperties.length === 0 && (
                    <div className="text-center py-12">
                        <p className="font-serif text-xl text-charcoal-400 mb-2">No properties found</p>
                        <p className="text-charcoal-500 text-sm">Try a different filter</p>
                    </div>
                )}

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <button
                        onClick={scrollToForm}
                        className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wide text-charcoal-600 border-b border-champagne-500 pb-1"
                    >
                        Request More Properties
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
