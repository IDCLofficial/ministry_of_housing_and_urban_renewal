import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactSection from './ContactSection';
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Contact the Ministry of Housing & Urban Development, Imo State Government: office location and ways to reach the ministry.",
  path: "/contact",
});


export default function ContactPage() {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];
  const currentLanguage = 'en';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        ctaText="Get Started"
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />

      <main className="flex-grow">
        <ContactHero />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
