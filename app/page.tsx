
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSplit from '@/components/AboutSplit';
import DepartmentsSplit from '@/components/DepartmentsSplit';
import AboutCommissioner from '@/components/AboutCommissioner';
import LatestNews from '@/components/LatestNews';
import FeaturedPartners from '@/components/FeaturedPartners';
import CtaGradientBlock from '@/components/CtaGradientBlock';
import Footer from '@/components/Footer'
import HomeClient from '@/components/HomeClient';
import { contentfulService } from '@/lib/contentful';
// Hero data
const heroData = {
  title: 'Ministry of Housing and Urban Development',
  subtitle:
    'To deliver affordable and sustainable housing solutions through strategic partnerships, policy reform, and urban regeneration.',
  cta: {
    text: 'Learn More',
    link: '/about',
  },
  stats: [],
  bgImage: '/housing.jpg',
} as const;

// Featured Partners section
const featuredPartnersData = {
  title: 'Our Partners',
  partners: [
    { name: 'Nigerian Institute of Building (NIOB)', logoText: 'Logo' },
    { name: 'Imo State House of Assembly (Housing Legislation)', logoText: 'Logo' },
    { name: 'State and Local Governments', logoText: 'Logo' },
    { name: 'Federal Agencies on Housing Initiatives', logoText: 'Logo' },
  ],
} as const;

// CTA gradient block
const ctaGradientData = {
  heading: 'Partner With Us To Deliver Decent Housing In Imo',
  subtext:
    'Support our mission to provide affordable, inclusive, and sustainable housing for all residents of Imo State.',
  cta: { text: 'Contact Us', href: '/contact' },
} as const;

// About Commissioner section (split)
const aboutCommissionerData = {
  heading: 'Message from the Commissioner',
  body:
    "Welcome to the Ministry of Housing and Urban Development, Imo State. Under the leadership of Commissioner Bede Eke, we are dedicated to urban renewal, mass housing, and sustainable development in alignment with our state’s vision.",
  cta: { text: 'Learn More', href: '/about' },
  imageSrc: '/bede.jpg',
} as const;

// Latest News section
const latestNewsData = {
  title: 'News & Updates',
  subtitle:
    'Policy updates, housing initiatives, urban renewal programs, and partnership announcements from the Ministry.',
  posts: [
    {
      id: 1,
      imageSrc: '/images/news-1.jpg',
      title: 'Mass Housing Schemes: Umuoma Nekede, Anara, Mgbidi',
      date: '20th July',
      tag: 'Housing Projects',
      excerpt:
        "Progress update on large-scale housing development across key zones, coordinated to expand affordable home access.",
      href: '#',
    },
    {
      id: 2,
      imageSrc: '/images/news-2.jpg',
      title: 'Policy Reform for the Housing Sector',
      date: '20th July',
      tag: 'Policy Reform',
      excerpt:
        'Modernization of the Housing Corporation framework to enable PPPs and efficient housing delivery across Imo State.',
      href: '#',
    },
    {
      id: 3,
      imageSrc: '/images/news-3.jpg',
      title: 'Urban Renewal & Slum Upgrading',
      date: '20th July',
      tag: 'Urban Renewal',
      excerpt:
        'Ongoing regeneration projects focus on safer, inclusive communities through planning, infrastructure, and service upgrades.',
      href: '#',
    },
  ],
} as const;

// About section (split)
const aboutSplitData = {
  heading: 'About Us',
  body:
    'The Imo State Ministry of Housing and Urban Development delivers affordable and sustainable housing solutions through strategic partnerships, policy reform, and urban regeneration across the state.',
  cta: { text: 'Learn More', href: '/about' },
  imageSrc: '/municipal.jpg',
  hoverImageSrc: '/housingCorp.jpeg',
} as const;

// Departments section (split)
const departmentsSplitData = {
  heading: 'Our Departments & Their\nFunctions',
  description:
    'Key departments advancing affordable housing, urban renewal, and good governance across Imo State.',
  items: [
    {
      title: 'Housing Projects & Development',
      description:
        'Designs and supervises the construction of housing estates across the state.',
    },
    {
      title: 'Urban Renewal Department',
      description:
        'Plans and implements urban regeneration and slum upgrade programs.',
    },
    {
      title: 'Estate Management',
      description:
        'Manages government-owned estates, allocations, rent collection, and maintenance.',
    },
    {
      title: 'Mortgage & Home Ownership',
      description:
        'Facilitates home financing options and interfaces with mortgage institutions.',
    },
  ],
  cta: { text: 'See All Departments', href: '#departments' },
  imageSrc: '/housing2.png',
} as const;

// Footer is now self-contained; no footerData needed

// Language options
const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
];
const currentLanguage = 'en';

export default function Home() {
  // Navbar data
  // Scroll-triggered animations: reveal on enter
  return (
    <div className="min-h-screen flex flex-col">
      <HomeClient />
      <Navbar
        ctaText="Get Started" 
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />
      
      <main className="flex-grow">
        <div className="reveal animate-delay-100">
          <Hero 
            title={heroData.title}
            subtitle={heroData.subtitle}
            cta={heroData.cta}
            stats={heroData.stats}
            bgImage={heroData.bgImage}
          />
        </div>

        <div className="reveal animate-delay-200">
          <AboutSplit
            heading={aboutSplitData.heading}
            body={aboutSplitData.body}
            cta={aboutSplitData.cta}
            imageSrc={aboutSplitData.imageSrc}
            hoverImageSrc={aboutSplitData.hoverImageSrc}
          />
        </div>

        <div className="reveal animate-delay-300">
          <DepartmentsSplit
            heading={departmentsSplitData.heading}
            description={departmentsSplitData.description}
            items={departmentsSplitData.items}
            cta={departmentsSplitData.cta}
            imageSrc={departmentsSplitData.imageSrc}
          />
        </div>
        
        <div className="reveal animate-delay-400">
          <AboutCommissioner
            heading={aboutCommissionerData.heading}
            body={aboutCommissionerData.body}
            cta={aboutCommissionerData.cta}
            imageSrc={aboutCommissionerData.imageSrc}
          />
        </div>

        <div className="reveal animate-delay-500">
          <Suspense fallback={<div>Loading...</div>}>
            <LatestNews
              title={latestNewsData.title}
              subtitle={latestNewsData.subtitle}
            />
          </Suspense>
        </div>
        
        <div className="reveal animate-delay-600">
          <FeaturedPartners
            title={featuredPartnersData.title}
            partners={featuredPartnersData.partners}
          />
        </div>

        <div className="reveal animate-delay-800">
          <CtaGradientBlock
            heading={ctaGradientData.heading}
            subtext={ctaGradientData.subtext}
            cta={ctaGradientData.cta}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
