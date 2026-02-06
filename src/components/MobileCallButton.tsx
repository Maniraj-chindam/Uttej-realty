"use client";

import { motion } from "framer-motion";

export default function MobileCallButton() {
    const phoneNumber = "+919876543210";

    return (
        <motion.a
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            href={`tel:${phoneNumber}`}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-3 bg-charcoal-900 text-white py-4 font-sans text-sm uppercase tracking-elegant"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Now</span>
        </motion.a>
    );
}
