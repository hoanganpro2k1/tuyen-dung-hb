'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { IMAGES } from '@/lib/constants/images';

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState<'hsk' | 'job'>('hsk');

  return (
    <section
      id="roadmap-section"
      className="relative bg-white py-12 md:py-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src={IMAGES.roadmap.bg} 
          alt="Background Pattern" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-20">
          <div className="flex items-center gap-6 md:gap-10">
            <div className="relative w-16 md:w-32 transform hover:scale-110 transition-transform duration-500">
              <Image
                src={IMAGES.roadmap.icon}
                alt="Roadmap Icon"
                width={128}
                height={128}
                className="h-auto w-full drop-shadow-2xl [filter:contrast(1.1)_saturate(1.2)]"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="w-fit rounded-2xl bg-gradient-to-r from-[#B90E00] to-gold-primary px-6 py-2 text-lg font-black uppercase text-white shadow-xl md:py-4 md:text-3xl tracking-tight">
                Chiến lược học tinh gọn
              </h2>
              <p className="mt-2 bg-gradient-to-r from-[#7D1900] to-red-primary bg-clip-text text-2xl font-black uppercase text-transparent md:mt-4 md:text-5xl lg:text-6xl">
                Lộ trình tổng quan
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden justify-center gap-12 md:flex mb-16">
          <div className="relative flex flex-col items-center">
            <button
              onClick={() => setActiveTab('hsk')}
              className={cn(
                'relative flex h-20 w-80 items-center justify-center rounded-2xl text-xl font-black uppercase tracking-widest transition-all duration-500 shadow-xl border-2',
                activeTab === 'hsk'
                  ? 'bg-gradient-to-r from-gold-primary via-[#E46B2C] to-red-primary text-white border-white scale-110 z-10'
                  : 'bg-gray-100 text-[#3A3A3A] border-transparent hover:bg-gray-200'
              )}
            >
              Luyện thi HSK
            </button>
            {activeTab === 'hsk' && (
              <div className="absolute -bottom-6 animate-bounce">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                  <path d="M20 24L0 0H40L20 24Z" fill="#B90E0A" />
                </svg>
              </div>
            )}
          </div>

          <div className="relative flex flex-col items-center">
            <button
              onClick={() => setActiveTab('job')}
              className={cn(
                'relative flex h-20 w-80 items-center justify-center rounded-2xl text-xl font-black uppercase tracking-widest transition-all duration-500 shadow-xl border-2 leading-tight px-4 text-center',
                activeTab === 'job'
                  ? 'bg-gradient-to-r from-[#7D1900] to-red-primary text-white border-white scale-110 z-10'
                  : 'bg-gray-100 text-[#3A3A3A] border-transparent hover:bg-gray-200'
              )}
            >
              Tiếng Trung cho<br />người đi làm
            </button>
            {activeTab === 'job' && (
              <div className="absolute -bottom-6 animate-bounce">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                  <path d="M20 24L0 0H40L20 24Z" fill="#B90E0A" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="flex justify-center md:hidden mb-12">
          <div className="grid w-full max-w-sm grid-cols-2 gap-2 rounded-2xl bg-gray-100 p-2 shadow-inner">
            <button
              onClick={() => setActiveTab('hsk')}
              className={cn(
                'rounded-xl py-4 text-xs font-black uppercase transition-all duration-300',
                activeTab === 'hsk'
                  ? 'bg-gradient-to-r from-red-primary to-[#7D1900] text-white shadow-lg'
                  : 'text-gray-500'
              )}
            >
              Luyện thi HSK
            </button>
            <button
              onClick={() => setActiveTab('job')}
              className={cn(
                'rounded-xl py-4 text-xs font-black uppercase transition-all duration-300',
                activeTab === 'job'
                  ? 'bg-gradient-to-r from-red-primary to-[#7D1900] text-white shadow-lg'
                  : 'text-gray-500'
              )}
            >
              Người đi làm
            </button>
          </div>
        </div>

        {/* Roadmap Display */}
        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[40px] bg-white/80 backdrop-blur-md p-6 md:p-12 shadow-2xl border border-white/50 overflow-hidden group">
            <div className="relative transform transition-transform duration-700 hover:scale-[1.01]">
              {activeTab === 'hsk' ? (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <Image
                    src={IMAGES.roadmap.hsk}
                    alt="Lộ trình HSK"
                    width={1400}
                    height={800}
                    className="h-auto w-full object-contain [filter:contrast(1.05)_saturate(1.1)] drop-shadow-xl"
                  />
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <Image
                    src={IMAGES.roadmap.job}
                    alt="Lộ trình Người đi làm"
                    width={1400}
                    height={800}
                    className="h-auto w-full object-contain [filter:contrast(1.05)_saturate(1.1)] drop-shadow-xl"
                  />
                </div>
              )}
            </div>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-white/10 rounded-[40px]"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -left-40 bottom-20 size-96 rounded-full bg-red-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute -right-40 top-40 size-96 rounded-full bg-gold-primary/10 blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Roadmap;
