'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroContent {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const heroContent: HeroContent[] = [
  {
    id: 'hero_transform',
    title: 'Digital Transformation at Scale',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b9cfc75-1764651774193.png",
    alt: 'Digital network visualization with glowing blue nodes representing AI transformation',
    description: 'Kahaasa empowers businesses to reimagine growth by embedding AI, automation, and intelligence at the core of operations.'
  },
  {
    id: 'hero_intelligent',
    title: 'Intelligent Enterprise Solutions',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c8db019-1766872376297.png",
    alt: 'Futuristic AI interface with holographic displays showing data analytics',
    description: 'Transform into an intelligent enterprise capable of continuous innovation, operational excellence, and superior customer experiences.'
  },
  {
    id: 'hero_airbds',
    title: 'AIRBDS Technology Platform',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed59f1b5-1768042768043.png",
    alt: 'Advanced technology stack visualization with interconnected AI components',
    description: 'A future-ready ecosystem of AI, IoT, RPA, Blockchain, Data Science, and Security—powering your digital transformation.'
  }];


  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          {/* Left Column - Interactive Headlines */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4 fade-in-up">
              <div className="w-16 h-0.5 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Est. 2019 • Chennai
              </span>
            </div>

            <div className="space-y-6">
              {heroContent.map((content, index) =>
              <div
                key={content.id}
                className={`cursor-pointer transition-all duration-500 ${
                activeIndex === index ?
                'opacity-100 translate-x-6' : 'opacity-30 translate-x-0'}`
                }
                onMouseEnter={() => setActiveIndex(index)}>

                  <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-none text-foreground">
                    {content.title.split(' ').map((word, i) =>
                  <span
                    key={`${content.id}_word_${i}`}
                    className={`inline-block mr-3 ${
                    i === content.title.split(' ').length - 1 ||
                    i === content.title.split(' ').length - 2 ?
                    'text-primary' : ''}`
                    }>

                        {word}
                      </span>
                  )}
                  </h1>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Image & Floating Cards */}
          <div className="lg:col-span-5 relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
              <AppImage
                src={heroContent[activeIndex].image}
                alt={heroContent[activeIndex].alt}
                className="w-full h-full object-cover transition-all duration-700" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-10 -left-10 z-10 bg-white p-8 rounded-3xl shadow-2xl max-w-sm border border-border fade-in-up delay-300">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                AIRBDS Ecosystem
              </p>
              <p className="text-lg font-semibold leading-tight text-foreground">
                {heroContent[activeIndex].description}
              </p>
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border animate-float">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="CpuChipIcon" variant="solid" size={20} className="text-accent" />
                <span className="text-sm font-bold text-foreground">5+ Years</span>
              </div>
              <p className="text-xs text-muted-foreground">Delivery Experience</p>
            </div>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-20 flex flex-col sm:flex-row gap-6 lg:ml-6 fade-in-up delay-400">
          <a
            href="#airbds"
            className="group flex items-center justify-between border-b-2 border-border pb-4 hover:border-primary transition-all">

            <span className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Explore AIRBDS Platform
            </span>
            <Icon
              name="ArrowRightIcon"
              variant="outline"
              size={20}
              className="text-foreground group-hover:translate-x-2 transition-transform" />

          </a>
          <a
            href="/portfolio"
            className="group flex items-center justify-between border-b-2 border-border pb-4 hover:border-secondary transition-all">

            <span className="text-sm font-semibold uppercase tracking-widest text-foreground">
              See Our Products
            </span>
            <Icon
              name="ArrowRightIcon"
              variant="outline"
              size={20}
              className="text-foreground group-hover:translate-x-2 transition-transform" />

          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <Icon name="ChevronDownIcon" variant="outline" size={20} className="animate-bounce" />
      </div>
    </section>);

}

