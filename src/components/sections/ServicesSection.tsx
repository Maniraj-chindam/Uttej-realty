"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Residential Flats",
        description: "Premium apartments in prime locations",
        icon: "🏠",
    },
    {
        title: "Independent Houses",
        description: "Spacious homes for growing families",
        icon: "🏡",
    },
    {
        title: "Luxury Villas",
        description: "Exclusive gated community living",
        icon: "🏰",
    },
    {
        title: "Commercial Spaces",
        description: "Prime retail & office locations",
        icon: "🏢",
    },
    {
        title: "Investment Properties",
        description: "High-yield investment opportunities",
        icon: "📈",
    },
    {
        title: "Open Plots",
        description: "Land for custom construction",
        icon: "🌳",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 md:py-28 lg:py-36 px-5 md:px-8 lg:px-20 bg-stone-100">
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
                            Our Services
                        </span>
                        <span className="w-10 h-px bg-champagne-500" />
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900">
                        Property Expertise
                    </h2>
                </motion.div>

                {/* Services Grid - Vertical Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-soft hover:shadow-luxury transition-all duration-500 group cursor-pointer"
                        >
                            {/* Icon */}
                            <span className="text-4xl md:text-5xl mb-4 block group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </span>

                            {/* Title */}
                            <h3 className="font-serif text-lg md:text-xl font-medium text-charcoal-900 mb-2">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="font-sans text-sm text-charcoal-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
