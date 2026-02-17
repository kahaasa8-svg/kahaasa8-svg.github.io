import Icon from '@/components/ui/AppIcon';

export default function IntegrationCapabilities() {
  return (
    <section className="py-32 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-6">
            One Platform, Infinite Possibilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our products integrate seamlessly to create comprehensive enterprise solutions
          </p>
        </div>

        {/* Integration Example */}
        <div className="bg-white p-12 rounded-3xl border-2 border-border shadow-xl">
          <div className="max-w-4xl mx-auto">
            {/* Use Case Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Icon name="LinkIcon" variant="solid" size={20} className="text-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  Integration Example
                </span>
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                Enterprise Mobile Banking Solution
              </h3>
              <p className="text-lg text-muted-foreground">
                How Kahaasa products work together to deliver a complete solution
              </p>
            </div>

            {/* Flow Diagram */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="DevicePhoneMobileIcon" variant="solid" size={24} className="text-blue-600" />
                    <h4 className="text-xl font-heading font-bold text-foreground">E-Palm</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Native mobile app provides user-friendly interface with biometric authentication
                    and AI-powered personalization
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <Icon name="ArrowDownIcon" variant="solid" size={32} className="text-primary" />
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="CloudIcon" variant="solid" size={24} className="text-emerald-600" />
                    <h4 className="text-xl font-heading font-bold text-foreground">Skyvak</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Cloud infrastructure handles scalability, auto-scaling during peak transaction
                    times, and global content delivery
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <Icon name="ArrowDownIcon" variant="solid" size={32} className="text-primary" />
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="ShieldCheckIcon" variant="solid" size={24} className="text-red-600" />
                    <h4 className="text-xl font-heading font-bold text-foreground">Taipan</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Security layer ensures end-to-end encryption, real-time fraud detection, and
                    compliance with banking regulations
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="CheckBadgeIcon" variant="solid" size={28} className="text-secondary" />
                  <h4 className="text-xl font-heading font-bold text-foreground">Result</h4>
                </div>
                <p className="text-foreground font-medium">
                  Enterprise-grade mobile banking solution with secure transactions, scalable
                  infrastructure, and delightful user experience—delivered in weeks, not months
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            This is just one example. Kahaasa products can be combined in countless ways to solve
            your unique business challenges.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
            Discuss Your Integration Needs
          </button>
        </div>
      </div>
    </section>
  );
}