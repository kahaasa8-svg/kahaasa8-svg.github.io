import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function CoreCapabilities() {
  const services: Service[] = [
    {
      id: 'service_ai_ml',
      icon: 'SparklesIcon',
      title: 'AI & Machine Learning',
      description: 'Predictive intelligence, real-time insights, and self-learning systems',
      href: '/services#ai-ml',
    },
    {
      id: 'service_chatbots',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'LLM Chatbots & AI Agents',
      description: 'Production-ready conversational AI for customer support and operations',
      href: '/services#chatbots',
    },
    {
      id: 'service_saas',
      icon: 'CloudIcon',
      title: 'SaaS Product Engineering',
      description: 'Cloud-native SaaS platforms designed for speed, security, and scale',
      href: '/services#saas',
    },
    {
      id: 'service_data',
      icon: 'ChartBarIcon',
      title: 'Data Science & Analytics',
      description: 'Turn complex data into clear, actionable intelligence',
      href: '/services#data',
    },
    {
      id: 'service_rpa',
      icon: 'CommandLineIcon',
      title: 'Robotic Process Automation',
      description: 'Automate repetitive workflows and accelerate operations',
      href: '/services#rpa',
    },
    {
      id: 'service_blockchain',
      icon: 'CubeTransparentIcon',
      title: 'Blockchain Solutions',
      description: 'Secure, transparent, and decentralized digital systems',
      href: '/services#blockchain',
    },
    {
      id: 'service_ux',
      icon: 'DevicePhoneMobileIcon',
      title: 'AI-Driven User Experiences',
      description: 'Adaptive interfaces powered by behavior intelligence',
      href: '/services#ux',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
            Everything You Need to Build an{' '}
            <span className="gradient-text">AI-Driven Business</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive capabilities across the entire digital transformation spectrum
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative bg-white p-8 rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Icon
                  name={service.icon as any}
                  variant="outline"
                  size={28}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold">Learn More</span>
                <Icon
                  name="ArrowRightIcon"
                  variant="outline"
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}