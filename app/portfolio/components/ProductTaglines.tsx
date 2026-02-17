'use client';

import Icon from '@/components/ui/AppIcon';

interface Product {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
}

export default function ProductTaglines() {
  const products: Product[] = [
    {
      id: 'tag_epalm',
      name: 'E-Palm',
      tagline: 'Mobile experiences, redefined',
      icon: 'DevicePhoneMobileIcon',
      color: 'text-blue-600',
    },
    {
      id: 'tag_skyvak',
      name: 'Skyvak',
      tagline: 'Scale faster in the cloud',
      icon: 'CloudIcon',
      color: 'text-emerald-600',
    },
    {
      id: 'tag_taipan',
      name: 'Taipan',
      tagline: 'Trust your data',
      icon: 'ShieldCheckIcon',
      color: 'text-red-600',
    },
    {
      id: 'tag_woven',
      name: 'Woven',
      tagline: 'The future of the web',
      icon: 'GlobeAltIcon',
      color: 'text-purple-600',
    },
    {
      id: 'tag_leesure',
      name: 'Leesure',
      tagline: 'Automate everything',
      icon: 'CommandLineIcon',
      color: 'text-amber-600',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
            Product Taglines
          </h2>
          <p className="text-xl text-muted-foreground">
            Five products, one unified vision—intelligent enterprise solutions
          </p>
        </div>

        {/* Taglines Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 snap-center bg-slate-50 p-8 rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-border group-hover:border-current transition-colors">
                    <Icon
                      name={product.icon as any}
                      variant="solid"
                      size={28}
                      className={product.color}
                    />
                  </div>
                  <h3 className={`text-2xl font-heading font-bold ${product.color}`}>
                    {product.name}
                  </h3>
                </div>
                <p className="text-lg italic text-muted-foreground">{product.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}