'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  logoUrl:
    'https://pub-60de11c8c43b49ea9bd786eb6273aa91.r2.dev/ed0d7fe4077272df5309c4bcf8c897a2.svg',
  logoAlt: 'Company Logo',
  badge: 'New Release',
  title: 'Build the Future with AI-Powered Development',
  subtitle:
    'Transform your ideas into production-ready applications with our cutting-edge platform. Ship faster, scale smarter, and innovate without limits.',
  primaryCtaText: 'Start Building',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format',
  heroImageAlt: 'Developer workspace with multiple screens showing code',
  stats: [
    { label: 'Active Developers', value: '50K+', icon: 'users' },
    { label: 'Apps Deployed', value: '1M+', icon: 'zap' },
    { label: 'Customer Rating', value: '4.9', icon: 'star' },
  ],
  features: ['Zero-config deployment', 'Real-time collaboration', 'Enterprise security'],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    setIsVideoPlaying(true);
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-5 h-5" />;
      case 'zap':
        return <Zap className="w-5 h-5" />;
      case 'star':
        return <Star className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo */}
        <div className="pt-8 pb-4">
          <Image
            src={config.logoUrl}
            alt={config.logoAlt}
            width={200}
            height={60}
            className="h-12 w-auto"
            data-editable-src="logoUrl"
            priority
          />
        </div>

        {/* Main Hero Content */}
        <div className="py-20 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="flex justify-start">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <span data-editable="badge">{config.badge}</span>
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>

              {/* Features List */}
              <div className="flex flex-wrap gap-4">
                {config.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span data-editable={`features[${idx}]`}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handlePrimaryClick}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                  data-editable-href="primaryCtaHref"
                  data-href={config.primaryCtaHref}
                >
                  <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleSecondaryClick}
                  className="group"
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {config.stats.map((stat, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      {getIcon(stat.icon)}
                      <span className="text-2xl font-bold" data-editable={`stats[${idx}].value`}>
                        {stat.value}
                      </span>
                    </div>
                    <p
                      className="text-sm text-muted-foreground"
                      data-editable={`stats[${idx}].label`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={config.heroImageUrl}
                  alt={config.heroImageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  data-editable-src="heroImageUrl"
                  priority
                />

                {/* Overlay for video state */}
                {isVideoPlaying && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
