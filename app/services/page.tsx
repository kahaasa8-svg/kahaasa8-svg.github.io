import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDeepDive from './components/ServiceDeepDive';
import WhyKahaasa from './components/WhyKahaasa';
import IndustryExpertise from './components/IndustryExpertise';
import MethodologyTimeline from './components/MethodologyTimeline';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Services - Kahaasa | AI, Cloud, Data Science, RPA, Blockchain Solutions',
  description:
    'Comprehensive digital transformation services: AI/ML, LLM Chatbots, SaaS Engineering, Data Science, RPA, Blockchain, and AI-driven UX. 5+ years of enterprise expertise.',
  keywords:
    'AI services, machine learning, chatbot development, SaaS development, data science, RPA, blockchain, cloud computing, digital transformation services',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Icon name="RectangleStackIcon" variant="solid" size={20} className="text-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground mb-6">
              Everything You Need to Build an{' '}
              <span className="gradient-text">AI-Driven Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Comprehensive capabilities across the AIRBDS technology stack—from AI and automation to
              cloud infrastructure and security
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="CheckBadgeIcon" variant="solid" size={20} className="text-secondary" />
                <span className="font-semibold text-foreground">7 Core Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="UserGroupIcon" variant="solid" size={20} className="text-secondary" />
                <span className="font-semibold text-foreground">5 Industries</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ClockIcon" variant="solid" size={20} className="text-secondary" />
                <span className="font-semibold text-foreground">5+ Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        <ServiceDeepDive />
        <WhyKahaasa />
        <IndustryExpertise />
        <MethodologyTimeline />

        {/* Page CTA */}
        <section className="py-32 px-6 md:px-12 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
              Let's Build Your Digital Future
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Schedule a consultation to discuss how Kahaasa can transform your business
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Start Consultation
                <Icon
                  name="ArrowRightIcon"
                  variant="outline"
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href="/portfolio"
                className="px-8 py-4 bg-transparent text-foreground border-2 border-border rounded-xl font-bold hover:bg-slate-50 hover:border-primary transition-all flex items-center gap-2 group"
              >
                View Portfolio
                <Icon
                  name="CubeIcon"
                  variant="outline"
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}