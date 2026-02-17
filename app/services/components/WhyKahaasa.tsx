import Icon from '@/components/ui/AppIcon';

interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function WhyKahaasa() {
  const differentiators: Differentiator[] = [
    {
      id: 'diff_experience',
      title: '5+ Years of Delivery Experience',
      description: 'Trusted by teams building mission-critical systems across industries',
      icon: 'ClockIcon',
    },
    {
      id: 'diff_expertise',
      title: 'Cross-Industry Expertise',
      description: 'Banking, Manufacturing, Logistics, Healthcare, and Enterprise platforms',
      icon: 'BuildingOffice2Icon',
    },
    {
      id: 'diff_engineering',
      title: 'AI-First Engineering',
      description: 'Every solution designed with intelligence and automation at its core',
      icon: 'CpuChipIcon',
    },
    {
      id: 'diff_security',
      title: 'Enterprise-Grade Security & Cloud',
      description: 'Scalable, compliant, and production-ready architectures',
      icon: 'ShieldCheckIcon',
    },
    {
      id: 'diff_mindset',
      title: 'Product Mindset',
      description: 'We build platforms, not just projects—thinking long-term and scalable',
      icon: 'LightBulbIcon',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
            Why Choose{' '}
            <span className="relative inline-block">
              Kahaasa
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for real-world scale with proven expertise and cutting-edge technology
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => (
            <div
              key={diff.id}
              className="group relative bg-white p-8 rounded-2xl border-2 border-border hover:border-primary transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon
                  name={diff.icon as any}
                  variant="solid"
                  size={28}
                  className="text-primary"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {diff.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to experience the Kahaasa difference?
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
            Let's Talk About Your Project
          </button>
        </div>
      </div>
    </section>
  );
}