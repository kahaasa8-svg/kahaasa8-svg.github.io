'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Product {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  technologies: string[];
  color: string;
  href: string;
}

export default function ProductTeaser() {
  const products: Product[] = [
    {
      id: 'product_epalm',
      name: 'E-Palm',
      tagline: 'Mobile experiences, redefined',
      icon: 'DevicePhoneMobileIcon',
      technologies: ['AI', 'Mobile Intelligence', 'Security'],
      color: 'text-blue-600',
      href: '/portfolio#epalm',
    },
    {
      id: 'product_skyvak',
      name: 'Skyvak',
      tagline: 'Scale faster in the cloud',
      icon: 'CloudIcon',
      technologies: ['Cloud', 'AI', 'Data Science', 'Security'],
      color: 'text-emerald-600',
      href: '/portfolio#skyvak',
    },
    {
      id: 'product_taipan',
      name: 'Taipan',
      tagline: 'Trust your data',
      icon: 'ShieldCheckIcon',
      technologies: ['Security', 'AI', 'Blockchain'],
      color: 'text-red-600',
      href: '/portfolio#taipan',
    },
    {
      id: 'product_woven',
      name: 'Woven',
      tagline: 'The future of the web',
      icon: 'GlobeAltIcon',
      technologies: ['Web Technology', 'AI', 'Data Analytics'],
      color: 'text-purple-600',
      href: '/portfolio#woven',
    },
    {
      id: 'product_leesure',
      name: 'Leesure',
      tagline: 'Automate everything',
      icon: 'CommandLineIcon',
      technologies: ['RPA', 'AI', 'Process Intelligence'],
      color: 'text-amber-600',
      href: '/portfolio#leesure',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <Icon name="CubeIcon" variant="solid" size={20} className="text-secondary" />
              <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                Product Ecosystem
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
              Our Technology Products
            </h2>
            <p className="text-xl text-muted-foreground">
              A unified digital foundation integrating AIRBDS technologies
            </p>
          </div>

          <Link
            href="/portfolio"
            className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
          >
            View All Products
            <Icon
              name="ArrowRightIcon"
              variant="outline"
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group flex-shrink-0 w-80 snap-center"
              >
                <div className="bg-white p-8 rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon
                      name={product.icon as any}
                      variant="solid"
                      size={32}
                      className={product.color}
                    />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-heading font-bold mb-2 ${product.color}`}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 italic">
                    {product.tagline}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2">
                    {product.technologies.map((tech, index) => (
                      <span
                        key={`${product.id}_tech_${index}`}
                        className="px-3 py-1 bg-slate-50 text-xs font-mono font-semibold text-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn More</span>
                    <Icon
                      name="ArrowRightIcon"
                      variant="outline"
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-4 flex justify-center gap-2">
            {products.map((_, index) => (
              <div
                key={`scroll_indicator_${index}`}
                className="w-2 h-2 rounded-full bg-border"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}