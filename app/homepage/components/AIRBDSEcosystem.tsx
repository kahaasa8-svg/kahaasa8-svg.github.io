'use client';

import Icon from '@/components/ui/AppIcon';

interface Technology {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  bgColor: string;
}

export default function AIRBDSEcosystem() {
  const technologies: Technology[] = [
    {
      id: 'tech_ai',
      name: 'Artificial Intelligence',
      icon: 'CpuChipIcon',
      description: 'Intelligent decision-making and predictive insights',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'tech_iot',
      name: 'Internet of Things',
      icon: 'SignalIcon',
      description: 'Real-time connectivity and smart orchestration',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'tech_rpa',
      name: 'Robotic Process Automation',
      icon: 'CommandLineIcon',
      description: 'Autonomous, scalable process execution',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'tech_blockchain',
      name: 'Blockchain Technology',
      icon: 'CubeTransparentIcon',
      description: 'Trusted, transparent digital transactions',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      id: 'tech_data',
      name: 'Data Science & Analytics',
      icon: 'ChartBarIcon',
      description: 'Insight-driven strategies powered by data',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 'tech_security',
      name: 'Next-Gen Security',
      icon: 'ShieldCheckIcon',
      description: 'Built-in protection for digital enterprises',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <section id="airbds" className="py-32 px-6 md:px-12 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Icon name="CpuChipIcon" variant="solid" size={20} className="text-accent" />
            <span className="text-sm font-bold uppercase tracking-widest text-accent">
              Core Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
            AIRBDS<sup className="text-2xl">™</sup> Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six integrated technologies, one unified platform—powering intelligent enterprises
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className={`group relative p-8 rounded-3xl border-2 border-border hover:border-${tech.color.replace('text-', '')} transition-all duration-500 hover:scale-105 hover:-rotate-2 cursor-pointer ${
                tech.bgColor
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl ${tech.bgColor} border-2 border-${tech.color.replace('text-', '')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <Icon
                  name={tech.icon as any}
                  variant="solid"
                  size={32}
                  className={tech.color}
                />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-heading font-bold mb-3 ${tech.color}`}>
                {tech.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tech.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon
                  name="ArrowTopRightOnSquareIcon"
                  variant="outline"
                  size={20}
                  className={tech.color}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            By fusing AI, automation, and secure digital infrastructure, Kahaasa transforms
            businesses into{' '}
            <span className="font-bold text-foreground">intelligent enterprises</span>—capable
            of continuous innovation and limitless growth.
          </p>
        </div>
      </div>
    </section>
  );
}