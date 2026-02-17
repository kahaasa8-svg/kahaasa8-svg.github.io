'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  useCases: string[];
  deliverables: string[];
}

export default function ServiceDeepDive() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'service_ai_ml',
      icon: 'SparklesIcon',
      title: 'Artificial Intelligence & Machine Learning',
      shortDesc: 'Predictive intelligence, real-time insights, and self-learning systems',
      fullDesc:
        'Our AI/ML solutions transform raw data into intelligent decision-making engines. We build custom machine learning models that adapt to your business patterns, predict future trends, and automate complex decision processes. From computer vision to natural language processing, we leverage cutting-edge algorithms to solve real-world business challenges.',
      technologies: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'OpenAI GPT',
        'Hugging Face',
        'MLflow',
      ],
      useCases: [
        'Predictive maintenance for manufacturing',
        'Customer churn prediction',
        'Fraud detection systems',
        'Recommendation engines',
      ],
      deliverables: [
        'Custom ML models',
        'Model deployment pipelines',
        'Real-time inference APIs',
        'Performance monitoring dashboards',
      ],
    },
    {
      id: 'service_chatbots',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'LLM Chatbots & AI Agents',
      shortDesc: 'Production-ready conversational AI for customer support and operations',
      fullDesc:
        'We engineer intelligent conversational systems powered by Large Language Models (LLMs) that understand context, maintain conversation history, and provide human-like interactions. Our chatbots integrate seamlessly with your existing systems, handle complex queries, and scale to support millions of conversations.',
      technologies: [
        'GPT-4',
        'Claude',
        'LangChain',
        'Rasa',
        'Dialogflow',
        'Azure Bot Service',
      ],
      useCases: [
        'Customer support automation',
        'Internal knowledge base assistant',
        'Sales qualification bot',
        'HR onboarding assistant',
      ],
      deliverables: [
        'Multi-channel chatbot deployment',
        'Intent recognition models',
        'Conversation analytics',
        'CRM/ticketing integrations',
      ],
    },
    {
      id: 'service_saas',
      icon: 'CloudIcon',
      title: 'SaaS Product Engineering',
      shortDesc: 'Cloud-native SaaS platforms designed for speed, security, and scale',
      fullDesc:
        'We architect and build multi-tenant SaaS platforms from ground up, focusing on scalability, security, and developer experience. Our expertise spans microservices architecture, API-first design, real-time data processing, and enterprise-grade security. We handle everything from infrastructure automation to CI/CD pipelines.',
      technologies: [
        'Next.js',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'Kubernetes',
        'AWS/Azure',
      ],
      useCases: [
        'B2B enterprise platforms',
        'Project management tools',
        'Collaboration software',
        'Analytics dashboards',
      ],
      deliverables: [
        'Scalable cloud architecture',
        'Multi-tenant database design',
        'API gateway & microservices',
        'Admin & billing portals',
      ],
    },
    {
      id: 'service_data',
      icon: 'ChartBarIcon',
      title: 'Data Science & Analytics',
      shortDesc: 'Turn complex data into clear, actionable intelligence',
      fullDesc:
        'Our data science team transforms fragmented data into strategic insights. We build end-to-end data pipelines, create predictive models, and design interactive dashboards that empower decision-makers. From data warehousing to real-time analytics, we ensure your data works for you.',
      technologies: [
        'Python',
        'Apache Spark',
        'Tableau',
        'Power BI',
        'Snowflake',
        'BigQuery',
      ],
      useCases: [
        'Customer behavior analysis',
        'Supply chain optimization',
        'Financial forecasting',
        'Marketing attribution modeling',
      ],
      deliverables: [
        'Data warehouse architecture',
        'ETL/ELT pipelines',
        'Predictive analytics models',
        'Interactive BI dashboards',
      ],
    },
    {
      id: 'service_rpa',
      icon: 'CommandLineIcon',
      title: 'Robotic Process Automation',
      shortDesc: 'Automate repetitive workflows and accelerate operations',
      fullDesc:
        'We deploy intelligent automation bots that handle repetitive, rule-based tasks with precision and speed. Our RPA solutions integrate with existing systems without disruption, process data across multiple platforms, and provide detailed audit trails. Free your team from manual work to focus on strategic initiatives.',
      technologies: [
        'UiPath',
        'Automation Anywhere',
        'Blue Prism',
        'Python automation',
        'Selenium',
        'Power Automate',
      ],
      useCases: [
        'Invoice processing automation',
        'Data entry & migration',
        'Report generation',
        'Email response automation',
      ],
      deliverables: [
        'Custom automation bots',
        'Process workflow documentation',
        'Exception handling logic',
        'Performance analytics',
      ],
    },
    {
      id: 'service_blockchain',
      icon: 'CubeTransparentIcon',
      title: 'Blockchain Solutions',
      shortDesc: 'Secure, transparent, and decentralized digital systems',
      fullDesc:
        'We build enterprise blockchain solutions that bring transparency, security, and efficiency to your operations. From smart contracts to decentralized applications (dApps), we leverage blockchain technology to create tamper-proof systems for supply chain, finance, and identity management.',
      technologies: [
        'Ethereum',
        'Hyperledger Fabric',
        'Solidity',
        'Web3.js',
        'IPFS',
        'Polygon',
      ],
      useCases: [
        'Supply chain traceability',
        'Digital identity verification',
        'Smart contract automation',
        'Tokenization platforms',
      ],
      deliverables: [
        'Blockchain architecture design',
        'Smart contract development',
        'dApp frontend & backend',
        'Security audits',
      ],
    },
    {
      id: 'service_ux',
      icon: 'DevicePhoneMobileIcon',
      title: 'AI-Driven User Experiences',
      shortDesc: 'Adaptive interfaces powered by behavior intelligence',
      fullDesc:
        'We design and develop user experiences that adapt to individual user behavior using AI. Our interfaces learn from user interactions, personalize content in real-time, and optimize conversion paths. Combining UX best practices with machine learning, we create digital experiences that feel intuitive and intelligent.',
      technologies: [
        'React',
        'Next.js',
        'TensorFlow.js',
        'A/B Testing',
        'Segment',
        'Mixpanel',
      ],
      useCases: [
        'Personalized content recommendations',
        'Adaptive navigation systems',
        'Predictive search interfaces',
        'Behavior-driven onboarding',
      ],
      deliverables: [
        'UI/UX design system',
        'Personalization engine',
        'A/B testing framework',
        'User analytics dashboard',
      ],
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
            Deep-Dive into Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore comprehensive technical expertise across every service offering
          </p>
        </div>

        {/* Services Accordion */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-2 border-border rounded-2xl overflow-hidden hover:border-primary transition-colors"
            >
              {/* Service Header */}
              <button
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="w-full p-8 flex items-start gap-6 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={service.icon as any}
                    variant="outline"
                    size={28}
                    className="text-primary"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.shortDesc}</p>
                </div>

                <Icon
                  name={expandedId === service.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  variant="outline"
                  size={24}
                  className="text-muted-foreground flex-shrink-0"
                />
              </button>

              {/* Expanded Content */}
              {expandedId === service.id && (
                <div className="px-8 pb-8 pt-4 border-t border-border bg-slate-50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                          Overview
                        </h4>
                        <p className="text-foreground leading-relaxed">{service.fullDesc}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, index) => (
                            <span
                              key={`${service.id}_tech_${index}`}
                              className="px-3 py-1 bg-white text-xs font-mono font-semibold text-foreground rounded-lg border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                          Use Cases
                        </h4>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase, index) => (
                            <li
                              key={`${service.id}_usecase_${index}`}
                              className="flex items-start gap-2"
                            >
                              <Icon
                                name="CheckCircleIcon"
                                variant="solid"
                                size={20}
                                className="text-secondary flex-shrink-0 mt-0.5"
                              />
                              <span className="text-sm text-foreground">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, index) => (
                            <li
                              key={`${service.id}_deliverable_${index}`}
                              className="flex items-start gap-2"
                            >
                              <Icon
                                name="CubeIcon"
                                variant="outline"
                                size={20}
                                className="text-accent flex-shrink-0 mt-0.5"
                              />
                              <span className="text-sm text-foreground">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 group">
                      Contact Us About This Service
                      <Icon
                        name="ArrowRightIcon"
                        variant="outline"
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}