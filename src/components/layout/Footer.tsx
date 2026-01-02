'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  // Quick Links
  quickLinksTitle: 'Quick Links',
  quickLinks: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Components', href: '/components' },
    { label: 'Testing Guide', href: '/testing' },
  ],

  // Developer Resources
  resourcesTitle: 'Developer Resources',
  resources: [
    { label: 'API Reference', href: '/api' },
    { label: 'Code Examples', href: '/examples' },
    { label: 'GitHub', href: 'https://github.com' },
  ],

  // Legal & Contact
  legalTitle: 'Legal & Contact',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ],

  // Social Links
  socialLinks: [
    { icon: 'github', href: 'https://github.com', label: 'GitHub' },
    { icon: 'twitter', href: 'https://twitter.com', label: 'Twitter' },
    { icon: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  ],

  // Copyright
  copyrightText: '© 2024 Test Site. Built for developers.',

  // Newsletter
  newsletterTitle: 'Developer Updates',
  newsletterDescription: 'Get notified about new testing tools and framework updates.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="footer" className="bg-muted text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">
              <span data-editable="quickLinksTitle">{config.quickLinksTitle}</span>
            </h3>
            <ul className="space-y-2">
              {config.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`quickLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`quickLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Resources */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">
              <span data-editable="resourcesTitle">{config.resourcesTitle}</span>
            </h3>
            <ul className="space-y-2">
              {config.resources.map((resource, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(resource.href)}
                    data-editable-href={`resources[${idx}].href`}
                    data-href={resource.href}
                  >
                    <span data-editable={`resources[${idx}].label`}>{resource.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">
              <span data-editable="legalTitle">{config.legalTitle}</span>
            </h3>
            <ul className="space-y-2">
              {config.legalLinks.map((legal, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(legal.href)}
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={legal.href}
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{legal.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">
              <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
            </h3>
            <p className="text-sm">
              <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder={config.newsletterPlaceholder}
                className="px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                data-editable="newsletterPlaceholder"
              />
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-sm">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {config.socialLinks.map((social, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground"
                onClick={() => handleLinkClick(social.href)}
                data-editable-href={`socialLinks[${idx}].href`}
                data-href={social.href}
                aria-label={social.label}
              >
                {renderIcon(social.icon)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
