"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    const phoneNumber = "+919876543210";
    const whatsappNumber = "919876543210";
    const whatsappMessage = encodeURIComponent("Hello, I'm interested in premium properties.");

    return (
        <section id="contact" className="py-16 md:py-24 lg:py-32 px-5 md:px-8 lg:px-20 bg-charcoal-900">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-8 h-px bg-champagne-500/60" />
                        <span className="text-champagne-400 font-sans text-[10px] uppercase tracking-[0.2em]">
                            Reach Out
                        </span>
                        <span className="w-8 h-px bg-champagne-500/60" />
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-3">
                        Get in Touch
                    </h2>
                    <p className="font-sans text-charcoal-400 text-sm">
                        Ready to find your dream property? Contact us today.
                    </p>
                </motion.div>

                {/* Contact Buttons - Large tap targets */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
                >
                    {/* Call Button */}
                    <a
                        href={`tel:${phoneNumber}`}
                        className="flex items-center justify-center gap-3 bg-charcoal-800 hover:bg-charcoal-700 text-white rounded-2xl p-5 transition-colors active:scale-[0.98]"
                    >
                        <div className="w-12 h-12 rounded-full bg-champagne-500/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-champagne-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <p className="font-sans text-xs text-charcoal-400 uppercase tracking-wide">Tap to call</p>
                            <p className="font-sans font-medium">+91 98765 43210</p>
                        </div>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 rounded-2xl p-5 transition-colors active:scale-[0.98]"
                    >
                        <div className="w-12 h-12 rounded-full bg-charcoal-900/20 flex items-center justify-center">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <p className="font-sans text-xs text-charcoal-900/60 uppercase tracking-wide">Message us</p>
                            <p className="font-sans font-medium">WhatsApp Chat</p>
                        </div>
                    </a>
                </motion.div>

                {/* Address */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <p className="font-sans text-xs text-charcoal-400 uppercase tracking-wide mb-2">Office Address</p>
                    <p className="font-sans text-white">Madhapur, HITEC City, Hyderabad</p>
                    <p className="font-sans text-charcoal-400 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </motion.div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden h-[200px] md:h-[300px]"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2958023453684!2d78.38730187516447!3d17.445405283460785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </section>
    );
}
