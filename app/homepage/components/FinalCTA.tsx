import Icon from '@/components/ui/AppIcon';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
          <Icon name="RocketLaunchIcon" variant="solid" size={20} className="text-white" />
          <span className="text-sm font-bold uppercase tracking-widest text-white">
            Start Your Transformation
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-white mb-6">
          Ready to Transform Your Enterprise?
        </h2>

        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Let's architect your digital future with AI-driven solutions and AIRBDS technology
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-2xl hover:shadow-white/20 flex items-center gap-2 group">
            Schedule Consultation
            <Icon
              name="ArrowRightIcon"
              variant="outline"
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/10 hover:border-white transition-all flex items-center gap-2 group">
            View Case Studies
            <Icon
              name="DocumentTextIcon"
              variant="outline"
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-300">
            <a
              href="mailto:contactus@kahaasa.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Icon name="EnvelopeIcon" variant="outline" size={20} />
              <span className="text-sm font-medium">contactus@kahaasa.com</span>
            </a>
            <a
              href="https://wa.me/918072326423"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Icon name="PhoneIcon" variant="outline" size={20} />
              <span className="text-sm font-medium">+91 8072 326423</span>
            </a>
            <div className="flex items-center gap-2">
              <Icon name="MapPinIcon" variant="outline" size={20} />
              <span className="text-sm font-medium">Chennai, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}