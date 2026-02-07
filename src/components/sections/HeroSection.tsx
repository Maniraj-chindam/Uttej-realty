"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-end md:items-center overflow-hidden"
        >
            {/* Background Video - Fullscreen cinematic */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Gradient Overlays - Stronger for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-charcoal-950/20" />

            {/* Content - Centered for elegant presentation */}
            <div className="relative z-10 w-full px-5 md:px-8 lg:px-20 pb-36 md:pb-28 pt-40 md:pt-32">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-champagne-400 text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] mb-6 md:mb-8"
                    >
                        Trusted Property Consultants
                    </motion.p>

                    {/* Main Headline - Elegant and clear */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="font-serif text-[2.75rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 md:mb-8"
                    >
                        Premium Real Estate
                        <br />
                        <span className="text-champagne-400">Advisory</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-white/70 text-sm md:text-base font-sans font-light tracking-wide mb-10 md:mb-12"
                    >
                        Flats • Independent Homes • Investment Properties
                    </motion.p>

                    {/* CTA Buttons - Full width on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center"
                    >
                        <button
                            onClick={() => scrollToSection("consultation")}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 font-sans font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-500 gold-glow-hover active:scale-[0.98]"
                        >
                            <span>Book Private Consultation</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollToSection("portfolio")}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-sans font-medium text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-500 active:scale-[0.98]"
                        >
                            Explore Portfolio
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade to ivory */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ivory-100 to-transparent pointer-events-none hidden md:block" />
        </section>
    );
}
