"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal-950 text-white pb-24 md:pb-0">
            {/* Main Footer */}
            <div className="py-12 px-5 md:px-8 lg:px-20 border-t border-charcoal-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="col-span-2 md:col-span-1">
                            <Link href="/" className="inline-block mb-4">
                                <span className="font-serif text-2xl font-medium text-white">
                                    Uttej Realty
                                </span>
                            </Link>
                            <p className="font-sans text-sm text-charcoal-400 leading-relaxed">
                                Your trusted partner in premium real estate.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-wide text-champagne-400 mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {["Home", "Properties", "Services", "About", "Contact"].map((link) => (
                                    <li key={link}>
                                        <button
                                            onClick={() => {
                                                const element = document.querySelector(`#${link.toLowerCase()}`);
                                                if (element) element.scrollIntoView({ behavior: "smooth" });
                                            }}
                                            className="font-sans text-sm text-charcoal-400 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-wide text-champagne-400 mb-4">
                                Properties
                            </h4>
                            <ul className="space-y-3">
                                {["Flats", "Villas", "Houses", "Plots", "Commercial"].map((item) => (
                                    <li key={item}>
                                        <span className="font-sans text-sm text-charcoal-400">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-wide text-champagne-400 mb-4">
                                Contact
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="tel:+919876543210" className="font-sans text-sm text-charcoal-400 hover:text-white transition-colors">
                                        +91 98765 43210
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@uttejrealty.com" className="font-sans text-sm text-charcoal-400 hover:text-white transition-colors">
                                        info@uttejrealty.com
                                    </a>
                                </li>
                                <li>
                                    <span className="font-sans text-sm text-charcoal-400">
                                        HITEC City, Hyderabad
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="py-4 px-5 md:px-8 lg:px-20 border-t border-charcoal-800/30">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
                    <p className="font-sans text-xs text-charcoal-500">
                        © {currentYear} Uttej Realty. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="font-sans text-xs text-charcoal-500 hover:text-charcoal-300">
                            Privacy
                        </a>
                        <a href="#" className="font-sans text-xs text-charcoal-500 hover:text-charcoal-300">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
