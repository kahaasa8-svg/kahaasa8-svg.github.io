import Icon from '@/components/ui/AppIcon';

interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  examples: string[];
}

export default function IndustryExpertise() {
  const industries: Industry[] = [
    {
      id: 'ind_banking',
      name: 'Banking & Financial Services',
      icon: 'BuildingLibraryIcon',
      description: 'Secure, compliant digital banking and fintech solutions',
      examples: ['Digital banking platforms', 'Payment gateways', 'Fraud detection', 'KYC automation'],
    },
    {
      id: 'ind_manufacturing',
      name: 'Manufacturing',
      icon: 'CogIcon',
      description: 'Smart factory solutions and supply chain optimization',
      examples: ['Predictive maintenance', 'Quality control AI', 'Inventory management', 'IoT sensors'],
    },
    {
      id: 'ind_logistics',
      name: 'Logistics & Supply Chain',
      icon: 'TruckIcon',
      description: 'End-to-end visibility and route optimization systems',
      examples: ['Fleet management', 'Route optimization', 'Warehouse automation', 'Tracking systems'],
    },
    {
      id: 'ind_healthcare',
      name: 'Healthcare',
      icon: 'HeartIcon',
      description: 'HIPAA-compliant healthcare technology and patient management',
      examples: ['Telemedicine platforms', 'Patient records', 'Appointment scheduling', 'Medical imaging AI'],
    },
    {
      id: 'ind_enterprise',
      name: 'Enterprise Digital Services',
      icon: 'BuildingOfficeIcon',
      description: 'Large-scale enterprise platforms and digital transformation',
      examples: ['CRM systems', 'ERP platforms', 'Collaboration tools', 'Business intelligence'],
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="BriefcaseIcon" variant="solid" size={20} className="text-secondary" />
            <span className="text-sm font-bold uppercase tracking-widest text-secondary">
              Industry Focus
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
            Cross-Industry Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering transformative solutions across diverse sectors with deep domain knowledge
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group bg-slate-50 p-8 rounded-2xl border border-border hover:bg-white hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                  <Icon
                    name={industry.icon as any}
                    variant="outline"
                    size={28}
                    className="text-primary"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              </div>

              {/* Examples */}
              <div className="space-y-2">
                {industry.examples.map((example, index) => (
                  <div
                    key={`${industry.id}_example_${index}`}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}