import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  useCases: string[];
  image: string;
  alt: string;
  icon: string;
  color: string;
}

export default function ProductShowcase() {
  const products: Product[] = [
  {
    id: 'epalm',
    name: 'E-Palm',
    tagline: 'Mobile experiences, redefined',
    description:
    'A smart mobile application ecosystem that delivers seamless, user-centric digital experiences.',
    fullDescription:
    'E-Palm enables rapid mobile innovation with secure, scalable, and AI-enabled capabilities for modern enterprises. Built on native iOS and Android frameworks with cross-platform compatibility, E-Palm provides a comprehensive mobile platform for customer-facing and internal applications.',
    features: [
    'Native iOS & Android development',
    'AI-powered personalization',
    'Offline-first architecture',
    'Biometric authentication',
    'Push notification engine',
    'In-app analytics'],

    technologies: ['AI', 'Mobile Intelligence', 'Security'],
    useCases: [
    'Customer mobile banking apps',
    'Field service management',
    'Retail point-of-sale systems',
    'Healthcare patient portals'],

    image:
    "https://images.unsplash.com/photo-1687168644714-3343aa9b5af8",
    alt: 'Modern smartphone displaying mobile application interface with clean UI design',
    icon: 'DevicePhoneMobileIcon',
    color: 'text-blue-600'
  },
  {
    id: 'skyvak',
    name: 'Skyvak',
    tagline: 'Scale faster in the cloud',
    description:
    'A future-ready cloud computing solution that enables scalable infrastructure and optimized performance.',
    fullDescription:
    'Skyvak empowers organizations to migrate, modernize, and manage workloads with speed and flexibility. Built on AWS, Azure, and GCP, Skyvak provides multi-cloud orchestration, auto-scaling, and cost optimization—enabling businesses to focus on innovation while infrastructure scales automatically.',
    features: [
    'Multi-cloud orchestration',
    'Auto-scaling infrastructure',
    'Cost optimization algorithms',
    'Disaster recovery automation',
    'Container management (K8s)',
    'Serverless architecture support'],

    technologies: ['Cloud', 'AI', 'Data Science', 'Security'],
    useCases: [
    'SaaS platform hosting',
    'Big data processing pipelines',
    'Microservices deployment',
    'Global content delivery'],

    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1c069732d-1764757637236.png",
    alt: 'Cloud computing visualization with interconnected servers and data flow',
    icon: 'CloudIcon',
    color: 'text-emerald-600'
  },
  {
    id: 'taipan',
    name: 'Taipan',
    tagline: 'Trust your data',
    description:
    'An advanced data security framework designed to protect enterprise data across all environments.',
    fullDescription:
    'Taipan ensures privacy, compliance, and trust through intelligent threat detection and secure architecture. With end-to-end encryption, real-time threat monitoring, and blockchain-based audit trails, Taipan provides enterprise-grade security for applications, networks, and cloud environments.',
    features: [
    'End-to-end encryption',
    'Real-time threat detection',
    'Blockchain audit trails',
    'Zero-trust architecture',
    'Compliance automation (GDPR, HIPAA)',
    'Vulnerability scanning'],

    technologies: ['Security', 'AI', 'Blockchain'],
    useCases: [
    'Financial data protection',
    'Healthcare record security',
    'Supply chain verification',
    'Identity management systems'],

    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_11ccb7654-1766593769469.png",
    alt: 'Digital security shield with encrypted data streams and protection layers',
    icon: 'ShieldCheckIcon',
    color: 'text-red-600'
  },
  {
    id: 'woven',
    name: 'Woven',
    tagline: 'The future of the web',
    description:
    'A modern web technology solution built for high performance, scalability, and immersive experiences.',
    fullDescription:
    'Woven enables enterprises to build responsive, intelligent, and future-proof web applications. Powered by Next.js, React, and serverless architecture, Woven delivers blazing-fast page loads, SEO optimization, and real-time collaboration features—perfect for SaaS platforms, e-commerce, and enterprise portals.',
    features: [
    'Next.js & React framework',
    'Server-side rendering (SSR)',
    'Progressive web app (PWA)',
    'Real-time collaboration',
    'SEO optimization',
    'Headless CMS integration'],

    technologies: ['Web Technology', 'AI', 'Data Analytics'],
    useCases: [
    'SaaS product interfaces',
    'E-commerce storefronts',
    'Corporate websites',
    'Customer portals'],

    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1278e5e50-1764670617656.png",
    alt: 'Modern web development workspace with code editor and responsive design mockups',
    icon: 'GlobeAltIcon',
    color: 'text-purple-600'
  },
  {
    id: 'leesure',
    name: 'Leesure',
    tagline: 'Automate everything',
    description:
    'An intelligent automation platform that streamlines business processes through robotic workflows.',
    fullDescription:
    'Leesure reduces operational complexity, improves efficiency, and enables organizations to scale with minimal human intervention. Using RPA, AI, and process mining, Leesure automates repetitive tasks across systems—from data entry to invoice processing—freeing teams to focus on strategic work.',
    features: [
    'Visual workflow builder',
    'AI-powered decision making',
    'Cross-system integration',
    'Exception handling',
    'Process mining & analytics',
    'Attended & unattended bots'],

    technologies: ['RPA', 'AI', 'Process Intelligence'],
    useCases: [
    'Invoice processing automation',
    'HR onboarding workflows',
    'Data migration tasks',
    'Report generation'],

    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_10fe12ce6-1767609864582.png",
    alt: 'Robotic process automation visualization with workflow diagrams and automated tasks',
    icon: 'CommandLineIcon',
    color: 'text-amber-600'
  }];


  return (
    <section className="py-32 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-32">
        {products.map((product, index) =>
        <div
          key={product.id}
          id={product.id}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
          }>

            {/* Image Column */}
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-border group">
                <AppImage
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Icon
                  name={product.icon as any}
                  variant="solid"
                  size={20}
                  className={product.color} />

                  <span className="text-sm font-bold text-foreground">{product.name}</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 border border-border">
                <Icon name="CubeIcon" variant="solid" size={18} className={product.color} />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Product {index + 1}
                </span>
              </div>

              <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${product.color}`}>
                {product.name}
              </h2>

              <p className="text-xl italic text-muted-foreground mb-6">{product.tagline}</p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.features.map((feature, featureIndex) =>
                <div
                  key={`${product.id}_feature_${featureIndex}`}
                  className="flex items-start gap-2">

                      <Icon
                    name="CheckCircleIcon"
                    variant="solid"
                    size={18}
                    className="text-secondary flex-shrink-0 mt-0.5" />

                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                )}
                </div>
              </div>

              {/* Technology Badges */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                  AIRBDS Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.technologies.map((tech, techIndex) =>
                <span
                  key={`${product.id}_tech_${techIndex}`}
                  className="px-3 py-1 bg-white text-xs font-mono font-semibold text-foreground rounded-lg border border-border shadow-sm">

                      {tech}
                    </span>
                )}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                  Use Cases
                </h4>
                <div className="space-y-2">
                  {product.useCases.map((useCase, useCaseIndex) =>
                <div
                  key={`${product.id}_usecase_${useCaseIndex}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground">

                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>{useCase}</span>
                    </div>
                )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}

