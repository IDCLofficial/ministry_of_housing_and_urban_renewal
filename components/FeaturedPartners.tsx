export interface PartnerItem {
  name: string;
  logoText?: string; // fallback text when no image provided
  imgSrc?: string;  // optional image path
  href?: string;  
}

export interface FeaturedPartnersProps {
  title: string; // Featured Partners
  partners: ReadonlyArray<PartnerItem>;
}

export default function FeaturedPartners({ title, partners }: FeaturedPartnersProps) {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">{title}</h2>
        <div className="mt-8 flex gap-x-8 gap-y-6 items-center justify-center">
          {partners.map((p, idx) => (
              <div key={idx} className="h-[100px] w-[100px]">
                {p.imgSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.imgSrc} alt={p.name} className="object-cover h-full w-full" />
                ) : (
                  <span className="text-gray-500 text-xl font-semibold select-none">{p.logoText || p.name}</span>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
