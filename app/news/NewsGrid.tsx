"use client";
import React from 'react';
import NewsCard from './NewsCard';
import { NewsPost } from '@/lib/types';

export default function NewsGrid({ query, items }: { query: string, items: NewsPost[]}) {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {items && items.length > 0 ? (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item: NewsPost) => (
              <NewsCard key={item.fields.slug} item={item} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-gray-500 text-lg">No news available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
