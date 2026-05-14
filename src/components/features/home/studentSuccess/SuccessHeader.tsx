'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { IMAGES } from '@/lib/constants/images';
import CommitmentBadge from '../ui/CommitmentBadge';

const SuccessHeader = () => {
  return (
    <div className="container mx-auto mb-10 rounded-t-[40px] bg-gradient-to-b from-[#FFF7EF] to-white/0 px-4 pt-12 md:mb-20 md:pt-20">
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 flex flex-row items-center gap-4 md:mb-12">
          <div className="w-[60px] md:w-32 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
            <Image 
              src={IMAGES.home.iconShot2} 
              alt="Target Icon" 
              width={128} 
              height={128} 
              className="h-auto w-full rotate-[270deg] drop-shadow-xl" 
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="bg-gradient-to-r from-[#7D1900] to-red-primary bg-clip-text text-xl font-black uppercase leading-tight text-transparent md:text-[36px] lg:text-[42px] tracking-tight">
              Được tin tưởng & lựa chọn bởi
            </h2>
            <div className="mt-3 md:mt-4 transform hover:scale-[1.02] transition-transform">
              <CommitmentBadge className="px-6 py-3 text-[16px] font-black md:text-[32px] md:py-4 shadow-2xl">
                hàng chục nghìn học viên trên toàn quốc
              </CommitmentBadge>
            </div>
          </div>
        </div>

        <div className="flex max-w-4xl items-start gap-4 px-6 md:px-0">
          <div className="mt-2 flex-shrink-0">
            <Star className="size-6 text-gold-primary md:size-10 animate-pulse" strokeWidth={3} />
          </div>
          <p className="max-w-[800px] text-lg font-bold leading-relaxed text-[#373737] md:text-2xl opacity-90 text-justify md:text-center">
            Đây chính là sự ghi nhận quý giá nhất để Học Bá không ngừng cải tiến chương trình, phương pháp và trải nghiệm
            học tập – giúp mỗi học viên học đúng hướng và tiến bộ rõ ràng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessHeader;
