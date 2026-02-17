import Icon from '@/components/ui/AppIcon';

interface Phase {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  activities: string[];
}

export default function MethodologyTimeline() {
  const phases: Phase[] = [
    {
      id: 'phase_discovery',
      number: '01',
      title: 'Discovery',
      description: 'Deep-dive into your business challenges and objectives',
      icon: 'MagnifyingGlassIcon',
      activities: ['Stakeholder interviews', 'Technical audit', 'Requirement gathering', 'Feasibility analysis'],
    },
    {
      id: 'phase_design',
      number: '02',
      title: 'Design',
      description: 'Architect solutions tailored to your specific needs',
      icon: 'PencilSquareIcon',
      activities: ['System architecture', 'UI/UX design', 'Database design', 'API specifications'],
    },
    {
      id: 'phase_develop',
      number: '03',
      title: 'Develop',
      description: 'Build with agile methodology and continuous feedback',
      icon: 'CodeBracketIcon',
      activities: ['Sprint planning', 'Code development', 'Unit testing', 'Code reviews'],
    },
    {
      id: 'phase_deploy',
      number: '04',
      title: 'Deploy',
      description: 'Seamless launch with zero downtime and full monitoring',
      icon: 'RocketLaunchIcon',
      activities: ['CI/CD setup', 'Production deployment', 'Performance testing', 'Go-live support'],
    },
    {
      id: 'phase_support',
      number: '05',
      title: 'Support',
      description: 'Ongoing optimization and feature enhancement',
      icon: 'WrenchScrewdriverIcon',
      activities: ['24/7 monitoring', 'Bug fixes', 'Feature updates', 'Performance optimization'],
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
            Our Proven Methodology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured approach ensuring predictable outcomes and transparent progress
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {phases.map((phase, index) => (
              <div key={phase.id} className="relative">
                {/* Phase Card */}
                <div className="bg-white p-6 rounded-2xl border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 relative z-10">
                  {/* Number Badge */}
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg">
                    {phase.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon
                      name={phase.icon as any}
                      variant="outline"
                      size={28}
                      className="text-primary"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>

                  {/* Activities */}
                  <ul className="space-y-1">
                    {phase.activities.map((activity, actIndex) => (
                      <li
                        key={`${phase.id}_activity_${actIndex}`}
                        className="text-xs text-foreground flex items-start gap-1"
                      >
                        <Icon
                          name="CheckIcon"
                          variant="solid"
                          size={14}
                          className="text-secondary mt-0.5 flex-shrink-0"
                        />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow (Desktop) */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-2 z-20">
                    <Icon
                      name="ChevronRightIcon"
                      variant="solid"
                      size={24}
                      className="text-primary"
                    />
                  </div>
                )}

                {/* Arrow (Mobile) */}
                {index < phases.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <Icon
                      name="ChevronDownIcon"
                      variant="solid"
                      size={24}
                      className="text-primary"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}