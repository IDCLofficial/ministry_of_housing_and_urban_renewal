import React from 'react';

export default function NewsHero({ title }: { title: string }) {
  return (
    <section className="bg-[#0B1C34] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight whitespace-pre">
          {title}
        </h1>
      </div>
    </section>
  );
}
