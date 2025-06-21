"use client";

import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import StatsCounter from "@/components/stats-counter";
import AboutSection from "@/components/about-section";
import WorkingProcess from "@/components/working-process";
// import PartnersSection from "@/components/partners-section" // Keep commented if not used
import ServicesSection from "@/components/services-section";
import ClientsSection from "@/components/clients-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";
import ContactFormPopup from "@/components/ContactFormPopup";
import { useState } from "react";

export default function HomePage() {
  // State to control the visibility of the ContactFormPopup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Pass handleOpenPopup as a function to onConsultClick */}
      <Header onConsultClick={handleOpenPopup} />
      <HeroBanner />
      <StatsCounter />
      <AboutSection />
      <WorkingProcess />
      {/* <PartnersSection /> */}
      <ServicesSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />

      {/* Pass the state and the closing function to the popup */}
      <ContactFormPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}