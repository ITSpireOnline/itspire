"use client";

import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import StatsCounter from "@/components/stats-counter";
import AboutSection from "@/components/about-section";
import WorkingProcess from "@/components/working-process";
import ServicesSection from "@/components/services-section";
import ClientsSection from "@/components/clients-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";
import ContactFormPopup from "@/components/ContactFormPopup";
import { useState } from "react";

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onConsultClick={handleOpenPopup} />
      <HeroBanner />
      <StatsCounter />
      <AboutSection />
      <WorkingProcess />
      <ServicesSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
      <ContactFormPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}