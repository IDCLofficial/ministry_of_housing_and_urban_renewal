import React from 'react';
import { Media } from '@/lib/types';

export default function MediaCard({ item, onClick }: { item: Media; onClick: () => void }) {
  return (
    <figure
      className="rounded-xl overflow-hidden group cursor-zoom-in"
      onClick={onClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https:${item.fields.img.fields.file.url}`}
        alt={item.fields.title || 'Media item'}
        className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <figcaption className="mt-2 text-sm text-slate-600">{item.fields.title}</figcaption>
    </figure>
  );
}
