'use client';

import Icon from '@/components/ui/AppIcon';

interface Product {
  id: string;
  name: string;
  icon: string;
  technologies: string[];
  color: string;
  bgColor: string;
}

export default function AIRBDSProductMap() {
  const products: Product[] = [
    {
      id: 'map_epalm',
      name: 'E-Palm',
      icon: 'DevicePhoneMobileIcon',
      technologies: ['AI', 'Mobile Intelligence', 'Security'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'map_skyvak',
      name: 'Skyvak',
      icon: 'CloudIcon',
      technologies: ['Cloud', 'AI', 'Data Science', 'Security'],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'map_taipan',
      name: 'Taipan',
      icon: 'ShieldCheckIcon',
      technologies: ['Security', 'AI', 'Blockchain'],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      id: 'map_woven',
      name: 'Woven',
      icon: 'GlobeAltIcon',
      technologies: ['Web Technology', 'AI', 'Data Analytics'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'map_leesure',
      name: 'Leesure',
      icon: 'CommandLineIcon',
      technologies: ['RPA', 'AI', 'Process Intelligence'],
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
            AIRBDS<sup className="text-2xl">™</sup> Product Intelligence Map
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each product leverages multiple AIRBDS technologies to deliver comprehensive solutions
          </p>
        </div>

        {/* Product Map Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative p-6 rounded-2xl border-2 border-border hover:border-${product.color.replace('text-', '')} transition-all duration-500 hover:scale-105 cursor-pointer ${
                product.bgColor
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 border-2 border-border group-hover:border-current transition-colors shadow-sm">
                <Icon
                  name={product.icon as any}
                  variant="solid"
                  size={32}
                  className={product.color}
                />
              </div>

              {/* Product Name */}
              <h3 className={`text-2xl font-heading font-bold mb-4 ${product.color}`}>
                {product.name}
              </h3>

              {/* Technology Badges */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Technologies:
                </div>
                {product.technologies.map((tech, techIndex) => (
                  <div
                    key={`${product.id}_tech_${techIndex}`}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-2 h-2 rounded-full ${product.color.replace('text-', 'bg-')}`} />
                    <span className="text-sm font-medium text-foreground">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon
                  name="ArrowTopRightOnSquareIcon"
                  variant="outline"
                  size={20}
                  className={product.color}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified digital foundation that integrates emerging technologies to accelerate
            enterprise transformation
          </p>
        </div>
      </div>
    </section>
  );
}