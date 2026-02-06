import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cormorant",
    display: "swap",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#C9A962",
};

export const metadata: Metadata = {
    title: "Uttej Realty | Premium Real Estate Consultants | Hyderabad",
    description:
        "Uttej Realty - Your trusted partner in premium real estate. We curate exceptional flats, villas, independent houses, plots, and commercial properties in Hyderabad. Verified listings, expert negotiation, and white-glove service.",
    keywords:
        "luxury real estate Hyderabad, premium flats, villas Hyderabad, independent houses, plots, commercial properties, real estate consultant, property investment, NRI property",
    authors: [{ name: "Uttej Realty" }],
    openGraph: {
        title: "Uttej Realty | Premium Real Estate Consultants",
        description: "Curating exceptional properties for exceptional people. Luxury real estate advisory in Hyderabad.",
        type: "website",
        locale: "en_IN",
        siteName: "Uttej Realty",
    },
    twitter: {
        card: "summary_large_image",
        title: "Uttej Realty | Premium Real Estate Consultants",
        description: "Curating exceptional properties for exceptional people.",
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "RealEstateAgent",
                            name: "Uttej Realty",
                            description: "Premium real estate consultants in Hyderabad",
                            url: "https://uttejrealty.com",
                            telephone: "+91-9876543210",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Madhapur, HITEC City",
                                addressLocality: "Hyderabad",
                                addressRegion: "Telangana",
                                postalCode: "500081",
                                addressCountry: "IN",
                            },
                            priceRange: "₹₹₹₹",
                            openingHours: "Mo-Sa 09:00-19:00",
                        }),
                    }}
                />
            </head>
            <body className="font-sans antialiased bg-ivory-100 text-charcoal-900 overflow-x-hidden">
                <Header />
                <main>{children}</main>
                <Footer />
                <MobileBottomBar />
            </body>
        </html>
    );
}
