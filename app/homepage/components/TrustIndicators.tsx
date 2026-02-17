import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
}

interface Industry {
  id: string;
  name: string;
  icon: string;
}

export default function TrustIndicators() {
  const metrics: Metric[] = [
    {
      id: 'metric_experience',
      value: '5+',
      label: 'Years of Delivery',
      description: 'Trusted by teams building mission-critical systems',
    },
    {
      id: 'metric_industries',
      value: '5',
      label: 'Industry Verticals',
      description: 'Banking, Manufacturing, Logistics, Healthcare, Enterprise',
    },
    {
      id: 'metric_products',
      value: '5',
      label: 'Product Portfolio',
      description: 'Production-ready platforms powered by AIRBDS',
    },
    {
      id: 'metric_approach',
      value: '100%',
      label: 'AI-First Engineering',
      description: 'Every solution designed with intelligence at core',
    },
  ];

  const industries: Industry[] = [
    { id: 'ind_banking', name: 'Banking & Financial Services', icon: 'BuildingLibraryIcon' },
    { id: 'ind_manufacturing', name: 'Manufacturing', icon: 'CogIcon' },
    { id: 'ind_logistics', name: 'Logistics & Supply Chain', icon: 'TruckIcon' },
    { id: 'ind_healthcare', name: 'Healthcare', icon: 'HeartIcon' },
    { id: 'ind_enterprise', name: 'Enterprise Digital Services', icon: 'BuildingOfficeIcon' },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Metrics */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground mb-6">
                Built for Real-World Scale
              </h2>
              <p className="text-lg text-muted-foreground">
                Enterprise-grade capabilities backed by proven delivery experience
              </p>
            </div>

            <div className="space-y-8">
              {metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="border-l-4 border-primary pl-6 py-2 hover:border-secondary transition-colors"
                >
                  <div className="text-5xl font-heading font-bold text-foreground mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-primary mb-1">
                    {metric.label}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Industries */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Cross-Industry Expertise
              </h3>
              <p className="text-muted-foreground">
                Delivering transformative solutions across diverse sectors
              </p>
            </div>

            <div className="space-y-4">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                    <Icon
                      name={industry.icon as any}
                      variant="outline"
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {industry.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Trust Badge */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="ShieldCheckIcon" variant="solid" size={24} className="text-primary" />
                <span className="text-sm font-bold text-foreground">
                  Enterprise-Grade Security
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Scalable, compliant, and production-ready architectures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}