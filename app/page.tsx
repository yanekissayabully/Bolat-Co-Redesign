import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { HeroSection, AboutSection } from '@/components/home/hero-section'
import {
  ServicesPreview,
  AdvantagesSection,
  CasesPreview,
  CtaBanner,
} from '@/components/home/home-sections'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AdvantagesSection />
        <ServicesPreview />
        <CasesPreview />
        {/* <CtaBanner /> */}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
