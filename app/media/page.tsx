import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaGradientBlock from '@/components/CtaGradientBlock';
import MediaHero from './MediaHero';
import MediaGallery from './MediaGallery';
import getMedia from './media';
import { Media } from '@/lib/types';
import Link from 'next/link';


const cta = {
  heading: 'Partner With Us To Deliver Decent Housing In Imo',
  subtext:
    'Support our mission to provide affordable, inclusive, and sustainable housing for all residents of Imo State.',
  cta: { text: 'Contact Us', href: '/contact' },
} as const;


const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
];
const currentLanguage = 'en';

export default async function MediaPage({ searchParams }: { searchParams?: Promise<{ page?: string }> }) {

  const sp = await searchParams;
  const page = Number(sp?.page || 1);
  const res = await getMedia(page);
  const items = (res?.items ?? []) as unknown as Media[];
  const total = res?.total ?? 0;
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  // const items = [
  //   {
  //     id: 'm1',
  //     image: '<insert image link for Image 1 here>',
  //     caption: 'Opening of the Community Justice Centre in Owerri'
  //   },
  //   {
  //     id: 'm2',
  //     image: '<insert image link for Image 2 here>',
  //     caption: 'Governor Uzodimma swears in Justice Nzeukwu as Acting Chief Judge'
  //   },
  //   {
  //     id: 'm3',
  //     image: '<insert image link for Image 3 here>',
  //     caption: 'Swearing-in of the Chief Judge, President CCA, and other justices'
  //   },
  //   {
  //     id: 'm4',
  //     image: '<insert image link for Image 4 here>',
  //     caption: 'Inauguration ceremony of the Small Claims Court, Owerri'
  //   },
  // ];
  


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        ctaText="Get Started"
        ctaLink="/get-started"
        languages={languages}
        currentLanguage={currentLanguage}
      />

      <main className="flex-grow">
        <MediaHero />
        <MediaGallery items={items} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex items-center justify-center gap-3">
            <Link
              aria-disabled={page <= 1}
              className={`px-3 py-2 rounded border border-slate-300 text-slate-700 ${page <= 1 ? 'pointer-events-none opacity-50' : ''}`}
              href={`?page=${Math.max(1, page - 1)}`}
            >
              Previous
            </Link>
            <span className="text-sm text-slate-600">Page {page} of {totalPages}</span>
            <Link
              aria-disabled={page >= totalPages}
              className={`px-3 py-2 rounded border border-slate-300 text-slate-700 ${page >= totalPages ? 'pointer-events-none opacity-50' : ''}`}
              href={`?page=${Math.min(totalPages, page + 1)}`}
            >
              Next
            </Link>
          </div>
        )}
      </main>

      <CtaGradientBlock heading={cta.heading} subtext={cta.subtext} cta={cta.cta} />
      <Footer />
    </div>
  );
}
