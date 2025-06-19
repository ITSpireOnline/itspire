import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import StatsCounter from "@/components/stats-counter"
import AboutSection from "@/components/about-section"
import WorkingProcess from "@/components/working-process"
// import PartnersSection from "@/components/partners-section"
import ServicesSection from "@/components/services-section"
import ClientsSection from "@/components/clients-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
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
    </div>
  )
}
