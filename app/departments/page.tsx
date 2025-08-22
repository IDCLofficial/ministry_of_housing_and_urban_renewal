import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DepartmentsHero from '@/components/DepartmentsHero';
import DepartmentsStructure from '@/components/DepartmentsStructure';
import CtaGradientBlock from '@/components/CtaGradientBlock';

export default function DepartmentsPage() {

  const hero = {
    title: 'Our Structure',
    subtitle: 'Each department plays a unique role in advancing justice, upholding the rule of law, and supporting good governance across Imo State.',
  } as const;

  const departments = [
    {
      name: 'Housing Projects & Development',
      title: 'Housing Projects & Development',
      imageSrc: '/housing.jpg',
      body:
        'Oversees design and execution of housing estates',
    },
    {
      name: 'Urban Renewal Department',
      title: 'Urban Renewal Department',
      imageSrc: '/municipal.jpg',
      body:
        'Leads slum upgrading and redevelopment programs',
    },
    {
      name: 'Rural Housing Department',
      title: 'Rural Housing Department',
      imageSrc: '/No-Image-Placeholder.svg',
      body:
        'Focuses on housing in underserved rural areas',
    },
    {
      name: 'Planning & Strategy Department',
      title: 'Planning & Strategy Department',
      imageSrc: '/planning.jpeg',
      body:
        'Conducts research and formulates housing policies',
    },
    {
      name: 'Legal & Regulatory Services Department',
      title: 'Legal & Regulatory Services Department',
      imageSrc: '/lawyer.jpg',
      body:
        'Ensures compliance with building codes and regulations',
    },
    {
      name: 'Finance & Accounts Department',
      title: 'Finance & Accounts Department',
      imageSrc: '/finance.jpeg',
      body:
        'Manages budgets, revenue, and financial operations',
    },
    {
      name: 'Public Relations & Engagement',
      title: 'Public Relations & Engagement',
      imageSrc: '/No-Image-Placeholder.svg',
      body:
        'Handles stakeholder outreach and communications',
    },
    {
      name: 'Procurement & Supplies Department',
      title: 'Procurement & Supplies Department',
      imageSrc: '/No-Image-Placeholder.svg',
      body:
        'Manages transparent sourcing of materials and services',
    },
  ] as const;

  const cta = {
    heading: 'Partner With Us To Uphold Justice In Imo',
    subtext:
      'Support our mission to strengthen the rule of law and ensure equitable access to justice for all citizens of Imo State.',
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
