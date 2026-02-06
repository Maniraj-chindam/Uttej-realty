import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PropertiesSection />
            <WhyChooseSection />
            <ProcessSection />
            <TestimonialsSection />
            <LeadCaptureSection />
            <ContactSection />
        </>
    );
}
