"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#portfolio", label: "Properties" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const phoneNumber = "919876543210";
    const whatsappMessage = encodeURIComponent("Hello, I'm interested in premium properties.");

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                    ? "glass py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                {/* Thin divider line when scrolled */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-champagne-500/20 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
                <div className="flex items-center justify-between px-5 md:px-8 lg:px-20">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col">
                        <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-charcoal-900">
                            Uttej Realty
                        </span>
                        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-charcoal-500 font-sans -mt-0.5">
                            Premium Properties
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className="relative text-charcoal-600 hover:text-charcoal-900 font-sans text-sm tracking-wide transition-colors duration-300 group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne-500 transition-all duration-400 group-hover:w-full" />
                            </button>
                        ))}
                    </nav>

                    {/* Right Side - WhatsApp + Menu */}
                    <div className="flex items-center gap-3">
                        {/* WhatsApp Icon - Always visible */}
                        <a
                            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-charcoal-900 text-white hover:bg-champagne-600 hover:text-charcoal-900 transition-all duration-300"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>

                        {/* Desktop CTA */}
                        <button
                            onClick={() => scrollToSection("#consultation")}
                            className="hidden lg:block text-sm font-sans font-medium tracking-wide uppercase text-charcoal-900 border-b border-champagne-500 pb-1 hover:text-champagne-600 transition-colors duration-300"
                        >
                            Consultation
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-4 relative flex flex-col justify-between">
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-0.5 bg-charcoal-900 origin-left"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full h-0.5 bg-charcoal-900"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-0.5 bg-charcoal-900 origin-left"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-charcoal-900/30 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-ivory-100 p-6 pt-24"
                        >
                            <nav className="flex flex-col gap-1">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.href}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-left font-serif text-2xl text-charcoal-800 hover:text-champagne-600 py-4 border-b border-charcoal-100 transition-colors"
                                    >
                                        {link.label}
                                    </motion.button>
                                ))}
                            </nav>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                onClick={() => scrollToSection("#consultation")}
                                className="mt-8 w-full bg-charcoal-900 text-white font-sans text-sm uppercase tracking-wide py-4 hover:bg-champagne-600 hover:text-charcoal-900 transition-all"
                            >
                                Book Consultation
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
