"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PropertyCardProps {
    id: string;
    title: string;
    location: string;
    price: string;
    bhk: string | null;
    size: string;
    type: string;
    image: string;
    amenities?: string[];
    onEnquire?: (id: string) => void;
}

export default function PropertyCard({
    id,
    title,
    location,
    price,
    bhk,
    size,
    type,
    image,
    amenities = [],
    onEnquire,
}: PropertyCardProps) {
    const scrollToForm = () => {
        const formElement = document.getElementById("lead-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
        if (onEnquire) {
            onEnquire(id);
        }
    };

    const typeColors: Record<string, string> = {
        flat: "bg-blue-500",
        villa: "bg-emerald-500",
        house: "bg-amber-500",
        plot: "bg-violet-500",
        commercial: "bg-rose-500",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 card-hover"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Property Type Badge */}
                <div className={`absolute top-4 left-4 ${typeColors[type] || "bg-charcoal-700"} text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide`}>
                    {type}
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal-900 font-bold text-lg px-4 py-2 rounded-lg shadow-soft">
                    {price}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-1">
                    {title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-charcoal-500 text-sm mb-4">
                    <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-charcoal-100">
                    {bhk && (
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="text-sm font-medium text-charcoal-700">{bhk}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span className="text-sm font-medium text-charcoal-700">{size}</span>
                    </div>
                </div>

                {/* CTA Button */}
                <button
                    onClick={scrollToForm}
                    className="w-full bg-charcoal-900 hover:bg-gold-500 text-white hover:text-charcoal-900 font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                    <span>Enquire Now</span>
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </motion.div>
    );
}
