import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIRBDSProductMap from './components/AIRBDSProductMap';
import ProductShowcase from './components/ProductShowcase';
import ProductTaglines from './components/ProductTaglines';
import IntegrationCapabilities from './components/IntegrationCapabilities';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Portfolio - Kahaasa | E-Palm, Skyvak, Taipan, Woven, Leesure Products',
  description:
    'Explore Kahaasa\'s product ecosystem: E-Palm (mobile), Skyvak (cloud), Taipan (security), Woven (web), Leesure (RPA). Production-ready platforms powered by AIRBDS technology.',
  keywords:
    'product portfolio, mobile platform, cloud computing, data security, web technology, RPA, enterprise software, AIRBDS products',
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <Icon name="CubeIcon" variant="solid" size={20} className="text-secondary" />
              <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                Product Ecosystem
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground mb-6">
              Our Technology Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              A unified digital foundation integrating AIRBDS technologies to accelerate enterprise
              transformation—designed to connect systems, data, and intelligence across your
              organization
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="CubeIcon" variant="solid" size={20} className="text-secondary" />
                <span className="font-semibold text-foreground">5 Products</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CpuChipIcon" variant="solid" size={20} className="text-secondary" />
                <span className="font-semibold text-foreground">6 AIRBDS Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RocketLaunchIcon" variant="solid" size={20} className="text-secondary" />
                <span className="font-semibold text-foreground">Production-Ready</span>
              </div>
            </div>
          </div>
        </section>

        <AIRBDSProductMap />
        <ProductShowcase />
        <ProductTaglines />
        <IntegrationCapabilities />

        {/* Page CTA */}
        <section className="py-32 px-6 md:px-12 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
              Ready to Leverage Our Product Ecosystem?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how Kahaasa products can accelerate your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Contact Sales
                <Icon
                  name="ArrowRightIcon"
                  variant="outline"
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href="/services"
                className="px-8 py-4 bg-transparent text-foreground border-2 border-border rounded-xl font-bold hover:bg-slate-50 hover:border-primary transition-all flex items-center gap-2 group"
              >
                View Services
                <Icon
                  name="RectangleStackIcon"
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