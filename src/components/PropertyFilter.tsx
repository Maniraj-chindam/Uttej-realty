"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PropertyFilterProps {
    onFilterChange: (filters: { type: string; budget: string }) => void;
}

export default function PropertyFilter({ onFilterChange }: PropertyFilterProps) {
    const [selectedType, setSelectedType] = useState("all");
    const [selectedBudget, setSelectedBudget] = useState("all");

    const propertyTypes = [
        { value: "all", label: "All Properties" },
        { value: "flat", label: "Flats" },
        { value: "villa", label: "Villas" },
        { value: "house", label: "Houses" },
        { value: "plot", label: "Plots" },
        { value: "commercial", label: "Commercial" },
    ];

    const budgetRanges = [
        { value: "all", label: "Any Budget" },
        { value: "0-10000000", label: "Under ₹1 Cr" },
        { value: "10000000-25000000", label: "₹1 Cr - ₹2.5 Cr" },
        { value: "25000000-50000000", label: "₹2.5 Cr - ₹5 Cr" },
        { value: "50000000+", label: "Above ₹5 Cr" },
    ];

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
        onFilterChange({ type, budget: selectedBudget });
    };

    const handleBudgetChange = (budget: string) => {
        setSelectedBudget(budget);
        onFilterChange({ type: selectedType, budget });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-soft mb-10"
        >
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Property Type Filter */}
                <div className="flex-1">
                    <label className="block text-sm font-medium text-charcoal-600 mb-3">
                        Property Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {propertyTypes.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => handleTypeChange(type.value)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedType === type.value
                                        ? "bg-gold-500 text-charcoal-900 shadow-gold"
                                        : "bg-charcoal-50 text-charcoal-600 hover:bg-charcoal-100"
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Budget Filter */}
                <div className="lg:w-64">
                    <label className="block text-sm font-medium text-charcoal-600 mb-3">
                        Budget Range
                    </label>
                    <select
                        value={selectedBudget}
                        onChange={(e) => handleBudgetChange(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-charcoal-700 appearance-none cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 1rem center",
                            backgroundSize: "1.25rem",
                        }}
                    >
                        {budgetRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                                {range.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </motion.div>
    );
}
