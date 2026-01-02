'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code2, Terminal, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: 'Developer Tools',
  title: 'Clean Testing Environment',
  subtitle:
    'Streamlined, focused workspace for developers building better web experiences. No distractions, just essential functionality.',
  ctaText: 'Start Testing',
  ctaHref: '/dashboard',
  secondaryCtaText: 'View Docs',
  secondaryCtaHref: '/docs',
  features: ['Component Testing', 'Framework Agnostic', 'Developer Friendly'],
  stats: [
    { label: 'Tests Run', value: '10K+' },
    { label: 'Components', value: '500+' },
    { label: 'Frameworks', value: '12' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Badge
              variant="secondary"
              className="bg-muted text-muted-foreground px-4 py-2 text-sm font-medium"
            >
              <Terminal className="w-4 h-4 mr-2" />
              <span data-editable="badge">{config.badge}</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span data-editable="title">{config.title}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-medium"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-medium"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div
            className={`mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-muted-foreground">
                  <Code2 className="w-4 h-4 mr-2 text-primary" />
                  <span data-editable={`features[${idx}]`} className="text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Card className="bg-card text-card-foreground border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {config.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                        <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visual Element */}
          <div
            className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl"></div>
              <div className="relative bg-muted/50 border border-border rounded-lg p-8 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-4">
                  <Zap className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Ready to build?</div>
                    <div className="text-lg font-semibold">Start testing your components</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
