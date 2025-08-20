import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DepartmentsHero from '@/components/DepartmentsHero';
import DepartmentsStructure from '@/components/DepartmentsStructure';
import CtaGradientBlock from '@/components/CtaGradientBlock';

export default function DepartmentsPage() {

  const hero = {
    title: 'Our Structure',
    subtitle: 'Each department advances affordable housing delivery, urban renewal, and good governance across Imo State.',
  } as const;

  const departments = [
    {
      name: 'Housing Projects & Development',
      title: 'Housing Projects & Development',
      imageSrc: '/housing.jpg',
      body:
        'Designs and supervises the construction of housing estates across the state.',
    },
    {
      name: 'Urban Renewal Department',
      title: 'Urban Renewal Department',
      imageSrc: '/municipal.jpg',
      body:
        'Plans and implements urban regeneration and slum upgrade programs.',
    },
    {
      name: 'Estate Management',
      title: 'Estate Management',
      imageSrc: '/housing2.png',
      body:
        'Manages government-owned estates, allocations, rent collection, and facility maintenance.',
    },
    {
      name: 'Building Regulations & Control',
      title: 'Building Regulations & Control',
      imageSrc: '/ocda.png',
      body:
        'Enforces building codes, conducts inspections, and ensures structural integrity and safety.',
    },
    {
      name: 'Mortgage & Home Ownership Schemes',
      title: 'Mortgage & Home Ownership Schemes',
      imageSrc: '/mortgage_home.jpg',
      body:
        'Facilitates access to housing finance in collaboration with mortgage institutions and cooperatives.',
    },
    {
      name: 'Land Allocation & Documentation',
      title: 'Land Allocation & Documentation',
      imageSrc: '/land.jpg',
      body:
        'Handles processing and allocation of lands, issuance of land titles, and documentation.',
    },
  ] as const;

  const cta = {
    heading: 'Partner With Us To Deliver Decent Housing In Imo',
    subtext:
      'Support our mission to provide affordable, inclusive, and sustainable housing for all residents of Imo State.',
    cta: { text: 'Contact Us', href: '/contact' },
  } as const;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar ctaText="Get Started" ctaLink="/get-started" />

      <main className="flex-grow">
        <DepartmentsHero title={hero.title} subtitle={hero.subtitle} />
        <DepartmentsStructure departments={departments} />
        <CtaGradientBlock heading={cta.heading} subtext={cta.subtext} cta={cta.cta} />
      </main>

      <Footer />
    </div>
  );
}
