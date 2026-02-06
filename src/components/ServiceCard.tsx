"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 card-hover border border-charcoal-50"
        >
            {/* Icon Container */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center mb-6 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-500">
                <div className="text-gold-600 group-hover:text-charcoal-900 transition-colors duration-500">
                    {icon}
                </div>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors">
                {title}
            </h3>

            {/* Description */}
            <p className="text-charcoal-500 text-sm leading-relaxed">
                {description}
            </p>

            {/* Learn More Link */}
            <div className="mt-6 flex items-center gap-2 text-gold-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </motion.div>
    );
}
