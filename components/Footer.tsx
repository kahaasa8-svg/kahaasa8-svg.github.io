import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = {
    services: [
      { id: 'footer_ai_ml', label: 'AI & Machine Learning', href: '/services#ai-ml' },
      { id: 'footer_chatbots', label: 'LLM Chatbots', href: '/services#chatbots' },
      { id: 'footer_saas', label: 'SaaS Engineering', href: '/services#saas' },
    ],
    products: [
      { id: 'footer_epalm', label: 'E-Palm', href: '/portfolio#epalm' },
      { id: 'footer_skyvak', label: 'Skyvak', href: '/portfolio#skyvak' },
      { id: 'footer_taipan', label: 'Taipan', href: '/portfolio#taipan' },
    ],
    company: [
      { id: 'footer_about', label: 'About Us', href: '/homepage#about' },
      { id: 'footer_contact', label: 'Contact', href: '/homepage#contact' },
    ],
  };

  const socialLinks = [
    { id: 'social_linkedin', icon: 'ShareIcon', href: '#', label: 'LinkedIn' },
    { id: 'social_twitter', icon: 'ChatBubbleLeftRightIcon', href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Top Row - Link Groups */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row - Legal & Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© {currentYear} Kahaasa Technologies</span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Icon name={social.icon as any} variant="outline" size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}