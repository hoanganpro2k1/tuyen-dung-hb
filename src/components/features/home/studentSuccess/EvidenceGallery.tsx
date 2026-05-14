'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/constants/images';

const col1 = IMAGES.home.evidenceGallery.col1;
const col2 = IMAGES.home.evidenceGallery.col2;
const col3 = IMAGES.home.evidenceGallery.col3;

// Triple repeat is best for 33.33% infinite loop logic
const fullCol1 = [...col1, ...col1, ...col1];
const fullCol2 = [...col2, ...col2, ...col2];
const fullCol3 = [...col3, ...col3, ...col3];

const EvidenceGallery = () => {
  return (
    <div className="relative overflow-hidden bg-red-primary py-10 md:py-24">
      <div className="container relative z-10 mx-auto h-[500px] px-0 md:h-[800px] md:px-4">
        {/* Hybrid Container: Horizontal swipe on mobile, Grid on desktop */}
        <div
          id="evidence-gallery-scroll"
          className="no-scrollbar flex h-full snap-x snap-mandatory gap-x-6 overflow-x-auto px-[10%] md:grid md:grid-cols-3 md:gap-x-12 md:overflow-x-visible md:px-0"
        >
          {/* Column 1: Up */}
          <div className="flex min-w-[85%] snap-center flex-col md:min-w-0 md:animate-marquee-up hover:[animation-play-state:paused]">
            {fullCol1.map((img, index) => (
              <div key={`col1-${index}`} className="mb-6 w-full shrink-0 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <Image 
                  src={img} 
                  alt={`Evidence 1-${index}`} 
                  width={500}
                  height={800}
                  className="h-auto w-full object-cover rounded-2xl border-4 border-white/10" 
                  priority={index < 3}
                />
              </div>
            ))}
          </div>

          {/* Column 2: Down */}
          <div className="flex min-w-[85%] snap-center flex-col md:min-w-0 md:animate-marquee-down hover:[animation-play-state:paused]">
            {fullCol2.map((img, index) => (
              <div key={`col2-${index}`} className="mb-6 w-full shrink-0 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <Image 
                  src={img} 
                  alt={`Evidence 2-${index}`} 
                  width={500}
                  height={800}
                  className="h-auto w-full object-cover rounded-2xl border-4 border-white/10"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>

          {/* Column 3: Up */}
          <div className="flex min-w-[85%] snap-center flex-col md:min-w-0 md:animate-marquee-up hover:[animation-play-state:paused]">
            {fullCol3.map((img, index) => (
              <div key={`col3-${index}`} className="mb-6 w-full shrink-0 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <Image 
                  src={img} 
                  alt={`Evidence 3-${index}`} 
                  width={500}
                  height={800}
                  className="h-auto w-full object-cover rounded-2xl border-4 border-white/10"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Gradient Overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-40 bg-gradient-to-b from-red-primary to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-red-primary to-transparent"></div>
      
      {/* Decorative side blurs */}
      <div className="pointer-events-none absolute -left-20 top-1/2 z-30 size-80 -translate-y-1/2 rounded-full bg-gold-primary/20 blur-[100px]"></div>
      <div className="pointer-events-none absolute -right-20 top-1/2 z-30 size-80 -translate-y-1/2 rounded-full bg-gold-primary/20 blur-[100px]"></div>
    </div>
  );
};

export default EvidenceGallery;
