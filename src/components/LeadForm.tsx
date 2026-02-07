"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const propertyTypes = [
    { value: "", label: "Property Interest" },
    { value: "flat", label: "Residential Flat" },
    { value: "villa", label: "Luxury Villa" },
    { value: "house", label: "Independent House" },
    { value: "plot", label: "Land / Plot" },
    { value: "commercial", label: "Commercial Space" },
    { value: "investment", label: "Investment Property" },
];

const budgetRanges = [
    { value: "", label: "Budget Range" },
    { value: "50L-1Cr", label: "₹50 L - ₹1 Cr" },
    { value: "1Cr-2Cr", label: "₹1 Cr - ₹2 Cr" },
    { value: "2Cr-5Cr", label: "₹2 Cr - ₹5 Cr" },
    { value: "5Cr-10Cr", label: "₹5 Cr - ₹10 Cr" },
    { value: "10Cr+", label: "₹10 Cr+" },
];

export default function LeadForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        propertyType: "",
        budget: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                phone: "",
                email: "",
                propertyType: "",
                budget: "",
            });
        }, 4000);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-champagne-500/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-champagne-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h4 className="font-serif text-2xl text-charcoal-900 mb-2">Thank You</h4>
                <p className="font-sans text-charcoal-500">
                    Our advisory team will contact you within 24 hours.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    required
                    className="input-luxury"
                />
            </div>

            {/* Phone */}
            <div>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    required
                    className="input-luxury"
                />
            </div>

            {/* Email */}
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    className="input-luxury"
                />
            </div>

            {/* Property Type */}
            <div className="relative">
                <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="select-luxury"
                >
                    {propertyTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                            {type.label}
                        </option>
                    ))}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* Budget */}
            <div className="relative">
                <select
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="select-luxury"
                >
                    {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                            {range.label}
                        </option>
                    ))}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-luxury mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processing
                    </span>
                ) : (
                    "Request Confidential Callback"
                )}
            </button>
        </form>
    );
}
