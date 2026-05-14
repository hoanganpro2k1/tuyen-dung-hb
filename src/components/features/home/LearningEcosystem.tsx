'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/constants/images';
import { GraduationCap, StarColorBlack } from '@/components/common/icons';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Project-based Learning',
    description: 'Học bằng thực hành thông qua các dự án, tình huống thực tế',
  },
  {
    title: 'Visual \n E-learning',
    description: 'Học qua hình ảnh như flashcards, video... giúp học viên nhớ nhanh & nhớ lâu hơn kiến thức',
  },
  {
    title: 'Active \n E-learning',
    description: 'Học chủ động qua các hoạt động giao tiếp thực hành, tranh luận – xử lý tình huống',
  },
];

const LearningEcosystem = () => {
  const lmsContentRef = useRef<HTMLDivElement>(null);
  const mentorContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lockHeight = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current) {
        // Use a small timeout or requestAnimationFrame to ensure layout is complete
        requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.height = `${ref.current.offsetHeight}px`;
          }
        });
      }
    };

    lockHeight(lmsContentRef);
    // Note: mentor-content in Astro was the grid container, but lockElHeight was called on it.
    // However, in Astro it looks like it was meant to lock the inner content of the card.
    // I'll apply it to the cards' inner content containers if needed.
  }, []);

  return (
    <section className="mx-auto max-w-[1232px] bg-white py-12 md:py-24">
      <div className="mx-auto px-4">
        <div className="mb-16 flex flex-col text-center">
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute -top-12 -right-4 md:-left-32 md:top-0 animate-bounce-slow">
              <Image
                width={140}
                height={140}
                src={IMAGES.home.LearningBook}
                alt="Learning Book"
                className="h-auto w-[60px] object-cover md:w-[140px]"
              />
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-black uppercase md:text-[42px] leading-tight">
                <span className="text-red-primary">Tối ưu hành trình học</span><br />
                <span
                  className="mt-3 inline-block rounded-xl bg-gradient-to-r from-red-primary to-gold-primary px-8 py-2 text-white md:mt-2 md:text-[36px] shadow-lg"
                >
                  & Luyện thi tiếng Trung
                </span>
              </h2>
              <div className="mt-8 flex items-center justify-center gap-3 px-4 md:px-0">
                <StarColorBlack className="size-6 md:size-8 text-[#373737]" />
                <p className="max-w-[600px] text-lg font-bold text-[#373737] md:text-[24px] leading-relaxed">
                  Bằng hệ sinh thái đào tạo hiện đại theo chuẩn đại học hàng đầu thế giới
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Features Cards */}
      <div
        className="no-scrollbar relative flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-8 sm:mb-20 sm:px-9 md:overflow-x-visible md:pb-0"
      >
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="flex w-[80%] flex-shrink-0 snap-center flex-col items-center md:w-auto md:flex-1">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-gray-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <div className="flex min-h-[110px] items-center justify-center bg-gradient-to-b from-[#8A0101] to-red-primary px-6 py-8 text-center group-hover:from-red-primary group-hover:to-[#E02E34] transition-colors">
                  <h3 className="whitespace-pre-line text-lg font-black uppercase leading-tight text-white md:text-[24px]">
                    {feature.title}
                  </h3>
                </div>
                <div className="flex min-h-[150px] flex-grow items-center justify-center bg-white p-8 text-center">
                  <p className="text-base font-semibold leading-relaxed text-[#373737] md:text-lg">{feature.description}</p>
                </div>
              </div>
            </div>

            {index < features.length - 1 && (
              <div className="flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-gold-primary to-red-primary shadow-lg border-2 border-white">
                  <span className="text-2xl font-bold leading-none text-white">+</span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 px-4 md:mt-20 md:grid-cols-2 md:gap-16">
        {/* LMS Card */}
        <div className="group relative">
          <div
            className="relative z-10 overflow-hidden rounded-[24px] bg-gradient-to-br from-gold-primary via-red-primary to-[#8A0101] p-1 transition-all duration-500 shadow-2xl hover:scale-[1.02]"
          >
            <div 
              ref={lmsContentRef}
              className="relative z-10 overflow-hidden rounded-[22px] bg-white p-4 md:p-6"
            >
              <h3
                className="rounded-2xl border border-white/20 bg-gradient-to-r from-[#7D1900] to-red-primary py-4 text-center text-[24px] font-black text-white transition-all duration-500 group-hover:from-gold-primary group-hover:to-red-primary group-hover:text-[32px] md:py-3 md:text-[28px] shadow-inner"
              >
                Công nghệ <br />LMS độc quyền
              </h3>

              <div className="mt-4 flex flex-col md:mt-6">
                <div className="grid grid-rows-[0fr] transition-all duration-500 lg:group-hover:grid-rows-[1fr]">
                  <div className="min-h-0 overflow-hidden">
                    <div className="mb-6 rounded-2xl bg-red-primary/5 p-6 border border-red-primary/10">
                      <p className="text-base font-medium leading-relaxed text-[#373737] md:text-xl">
                        <strong className="text-red-primary">Người bạn công nghệ LMS tích hợp AI</strong> - nhắc học thông minh, chấm chữa tự động, theo sát
                        lộ trình.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image 
                    src={IMAGES.home.shot1} 
                    width={609} 
                    height={398} 
                    alt="LMS Technology" 
                    className="h-auto w-full transform transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements on hover */}
          <div
            className="pointer-events-none absolute -left-20 top-1/2 z-20 hidden w-[340px] -translate-y-1/2 opacity-0 transition-all duration-700 group-hover:-left-10 group-hover:opacity-100 lg:block xl:w-[400px]"
          >
            <Image
              src={IMAGES.home.hoverShowLms}
              alt="LMS Dashboard"
              className="h-auto w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />
          </div>

          <div
            className="pointer-events-none absolute -bottom-10 -left-10 z-30 w-[220px] opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100 hidden lg:block"
          >
            <Image
              src={IMAGES.home.hoverShowHocba}
              alt="HocBa Mascot"
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Mentor Card */}
        <div className="group relative">
          <div
            className="relative z-10 overflow-hidden rounded-[24px] bg-gradient-to-br from-gold-primary via-red-primary to-[#8A0101] p-1 transition-all duration-500 shadow-2xl hover:scale-[1.02]"
          >
            <div className="relative z-10 overflow-hidden rounded-[22px] bg-white p-4 md:p-6 h-full">
              <h3
                className="rounded-2xl border border-white/20 bg-gradient-to-r from-[#7D1900] to-red-primary py-4 text-center text-[24px] font-black text-white transition-all duration-500 group-hover:from-gold-primary group-hover:to-red-primary group-hover:text-[32px] md:py-3 md:text-[28px] shadow-inner"
              >
                Mentor học thuật <br /> đồng hành 24/7
              </h3>
              <div className="mt-4 overflow-hidden rounded-2xl md:mt-6 shadow-lg">
                <Image
                  src={IMAGES.home.shot2}
                  alt="Academic Mentor"
                  className="h-auto w-full transform transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Floating elements on hover */}
          <div
            className="pointer-events-none absolute -right-20 top-1/2 z-20 hidden -translate-y-1/2 opacity-0 transition-all duration-700 group-hover:-right-10 group-hover:opacity-100 lg:block xl:w-[360px]"
          >
            <Image
              src={IMAGES.home.hoverScore}
              alt="Score Card"
              className="h-auto w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />
          </div>

          <div
            className="pointer-events-none absolute -bottom-12 -right-10 z-30 hidden opacity-0 transition-all duration-500 group-hover:-bottom-4 group-hover:opacity-100 lg:block w-[280px]"
          >
            <Image src={IMAGES.home.hoverCamKet} alt="Cam kết đồng hành" className="h-auto w-full drop-shadow-xl" />
          </div>

          <div
            className="pointer-events-none absolute -right-16 -top-10 z-30 hidden opacity-0 transition-all duration-500 group-hover:-top-4 group-hover:opacity-100 lg:block w-[140px]"
          >
            <Image src={IMAGES.home.iconShot2} alt="Core Values" className="h-auto w-full drop-shadow-xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningEcosystem;
