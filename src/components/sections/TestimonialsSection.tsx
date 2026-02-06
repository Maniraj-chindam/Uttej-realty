"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import testimonials from "@/data/testimonials.json";

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section id="testimonials" className="py-16 md:py-24 lg:py-32 px-5 md:px-8 lg:px-20 bg-stone-100">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-8 h-px bg-champagne-500" />
                        <span className="text-champagne-600 font-sans text-[10px] uppercase tracking-[0.2em]">
                            Testimonials
                        </span>
                        <span className="w-8 h-px bg-champagne-500" />
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal-900">
                        Client Stories
                    </h2>
                </motion.div>

                {/* Testimonial Card - Swipeable */}
                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className="bg-white rounded-3xl p-6 md:p-10 shadow-soft"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-center"
                        >
                            {/* Quote */}
                            <p className="font-serif text-xl md:text-2xl text-charcoal-800 leading-relaxed mb-8 italic">
                                &ldquo;{currentTestimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-champagne-400/40">
                                    <Image
                                        src={currentTestimonial.image}
                                        alt={currentTestimonial.name}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-sans font-medium text-charcoal-900">
                                        {currentTestimonial.name}
                                    </p>
                                    <p className="font-sans text-xs text-charcoal-500">
                                        {currentTestimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots Navigation */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-8 bg-champagne-500"
                                    : "w-2 bg-charcoal-300"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Swipe hint - mobile only */}
                <p className="text-center text-charcoal-400 text-xs mt-4 md:hidden">
                    Swipe to see more
                </p>
            </div>
        </section>
    );
}
