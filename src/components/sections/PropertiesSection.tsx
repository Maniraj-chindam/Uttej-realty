"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import propertiesData from "@/data/properties.json";

// Filter Pills
const filterTypes = [
    { value: "all", label: "All" },
    { value: "flat", label: "Flats" },
    { value: "villa", label: "Villas" },
    { value: "house", label: "Houses" },
    { value: "plot", label: "Plots" },
];

// Budget Filter Pills
const budgetFilters = [
    { value: "all", label: "Any Budget" },
    { value: "under1cr", label: "Under ₹1 Cr" },
    { value: "1to3cr", label: "₹1-3 Cr" },
    { value: "3to5cr", label: "₹3-5 Cr" },
    { value: "above5cr", label: "₹5 Cr+" },
];

// Mini Property Card Component
function PropertyCard({
    property,
    index,
}: {
    property: (typeof propertiesData)[0];
    index: number;
}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const scrollToForm = () => {
        const element = document.getElementById("consultation");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, margin: "-50px" }}
            whileTap={{ scale: 1.02 }}
            className="flex-shrink-0 w-[75vw] md:w-[340px] lg:w-[360px] snap-start"
        >
            <div className="bg-white rounded-[14px] overflow-hidden shadow-soft border border-stone-100/80">
                {/* Image Container - 4:5 Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden">
                    {/* Skeleton Loader */}
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-stone-100 animate-pulse">
                            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100" />
                        </div>
                    )}

                    <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className={`object-cover transition-all duration-700 ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                            }`}
                        sizes="(max-width: 768px) 75vw, 360px"
                        loading="lazy"
                        onLoad={() => setImageLoaded(true)}
                    />

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 via-transparent to-transparent" />
                </div>

                {/* Content - Bottom 30% */}
                <div className="p-4">
                    {/* Project Name */}
                    <h3 className="font-serif text-base font-medium text-charcoal-900 leading-snug mb-1 line-clamp-1">
                        {property.title}
                    </h3>

                    {/* Location - Muted */}
                    <p className="font-sans text-xs text-charcoal-400 mb-3">
                        {property.location.split(",")[0]}
                    </p>

                    {/* Price + CTA Row */}
                    <div className="flex items-center justify-between">
                        {/* Price - Bold, Subtle Gold */}
                        <span className="font-serif text-lg font-semibold text-champagne-600">
                            {property.price}
                        </span>

                        {/* Tiny CTA */}
                        <button
                            onClick={scrollToForm}
                            className="font-sans text-xs font-medium uppercase tracking-wide text-charcoal-600 border border-charcoal-200 px-4 py-2 rounded-full hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900 transition-all duration-300 active:scale-95"
                        >
                            View
                        </button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function PropertiesSection() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [budgetFilter, setBudgetFilter] = useState("all");

    const filteredProperties = useMemo(() => {
        let filtered = propertiesData;

        // Type filter
        if (activeFilter !== "all") {
            filtered = filtered.filter((p) => p.type === activeFilter);
        }

        // Budget filter
        if (budgetFilter !== "all") {
            filtered = filtered.filter((p) => {
                const value = p.priceValue;
                switch (budgetFilter) {
                    case "under1cr":
                        return value < 10000000;
                    case "1to3cr":
                        return value >= 10000000 && value < 30000000;
                    case "3to5cr":
                        return value >= 30000000 && value < 50000000;
                    case "above5cr":
                        return value >= 50000000;
                    default:
                        return true;
                }
            });
        }

        return filtered;
    }, [activeFilter, budgetFilter]);

    const scrollToForm = () => {
        const element = document.getElementById("consultation");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="portfolio" className="py-20 md:py-28 lg:py-36 bg-ivory-100">
            {/* Header - With padding */}
            <div className="px-5 md:px-8 lg:px-20 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    {/* Section Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-px bg-champagne-500" />
                        <span className="text-champagne-600 font-sans text-[10px] uppercase tracking-[0.25em]">
                            Featured Properties
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900 mb-2">
                        Exclusive Listings
                    </h2>
                    <p className="text-charcoal-500 text-sm">
                        Handpicked premium properties
                    </p>
                </motion.div>
            </div>

            {/* Sticky Filter Pills */}
            <div className="sticky top-16 z-30 bg-ivory-100/95 backdrop-blur-sm py-4 border-b border-stone-200/50">
                <div className="px-5 md:px-8 lg:px-20">
                    {/* Type Filters */}
                    <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                        {filterTypes.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={`flex-shrink-0 font-sans text-xs px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === filter.value
                                    ? "bg-charcoal-900 text-white"
                                    : "bg-white text-charcoal-600 border border-stone-200 active:bg-stone-100"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                        <span className="w-px h-6 bg-stone-200 mx-1 self-center" />
                        {budgetFilters.slice(1, 4).map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() =>
                                    setBudgetFilter(
                                        budgetFilter === filter.value ? "all" : filter.value
                                    )
                                }
                                className={`flex-shrink-0 font-sans text-xs px-4 py-2 rounded-full transition-all duration-300 ${budgetFilter === filter.value
                                    ? "bg-champagne-500 text-charcoal-900"
                                    : "bg-white text-charcoal-600 border border-stone-200 active:bg-stone-100"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Horizontal Swipeable Carousel */}
            <div className="mt-6">
                <AnimatePresence mode="wait">
                    {filteredProperties.length > 0 ? (
                        <motion.div
                            key={`${activeFilter}-${budgetFilter}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex gap-4 overflow-x-auto pl-5 pr-[25vw] md:pl-8 md:pr-8 lg:pl-20 lg:pr-20 pb-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
                            style={{
                                scrollPaddingLeft: "20px",
                                WebkitOverflowScrolling: "touch",
                            }}
                        >
                            {filteredProperties.map((property, index) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16 px-5"
                        >
                            <p className="font-serif text-xl text-charcoal-400 mb-2">
                                No properties found
                            </p>
                            <p className="text-charcoal-500 text-sm mb-6">
                                Try adjusting your filters
                            </p>
                            <button
                                onClick={() => {
                                    setActiveFilter("all");
                                    setBudgetFilter("all");
                                }}
                                className="font-sans text-sm text-champagne-600 underline"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Load More / Request More */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mt-8 px-5"
            >
                <button
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wide text-charcoal-600 border-b border-champagne-500 pb-1 hover:text-champagne-600 transition-colors duration-300"
                >
                    Request More Properties
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </button>
            </motion.div>
        </section>
    );
}
