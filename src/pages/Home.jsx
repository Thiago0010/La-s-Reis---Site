import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import MethodologySection from '../components/home/MethodologySection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
    return (
        <div className="w-full">
            <HeroSection />
            <AboutSection />
            <MethodologySection />
            <ServicesSection />
            <TestimonialsSection />
            <ContactSection />
        </div>
    );
}