"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Requirement Discussion",
        description: "Share your property preferences, budget, and location requirements with our experts.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Property Shortlisting",
        description: "We curate a selection of verified properties that match your exact requirements.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Site Visit",
        description: "Personal site visits with our team to evaluate properties and neighborhood.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Price Negotiation",
        description: "Our experts negotiate the best possible price, saving you lakhs on your investment.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Documentation",
        description: "Complete legal verification and documentation assistance with expert lawyers.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        number: "06",
        title: "Registration & Handover",
        description: "Hassle-free property registration and keys handover to complete your journey.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
        ),
    },
];

export default function ProcessTimeline() {
    return (
        <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-200 via-gold-500 to-gold-200" />

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Step Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-luxury transition-all duration-500 card-hover h-full">
                            {/* Step Number & Icon */}
                            <div className="flex items-center gap-4 mb-4">
                                {/* Number Circle */}
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-charcoal-900 shadow-gold">
                                        {step.icon}
                                    </div>
                                    {/* Connector dot for desktop - positioned on timeline */}
                                    <div className="hidden lg:block absolute -top-[2.75rem] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-soft" />
                                </div>
                                <span className="text-3xl font-serif font-bold text-gradient-gold">{step.number}</span>
                            </div>

                            {/* Content */}
                            <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-charcoal-500 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>

                        {/* Mobile/Tablet Connector Line */}
                        {index < steps.length - 1 && (
                            <div className="lg:hidden absolute left-7 top-full h-8 w-0.5 bg-gradient-to-b from-gold-500 to-gold-200" />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
