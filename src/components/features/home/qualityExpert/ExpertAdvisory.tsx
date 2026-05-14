'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/constants/images';
import { StarColorGradient } from '@/components/common/icons';
import Link from '../ui/Link';

const achievements = [
  'Chủ tịch Hiệp hội Giáo viên Tiếng Trung tại Hoa Kỳ (CLTA) nhiệm kỳ 2019 - 2020.',
  'Là đồng biên tập của cuốn Pedagogical Grammar and Grammar Pedagogy in Chinese as a Second Language (2022) – công trình đầu tiên hệ thống hoá lý thuyết và thực tiễn ngữ pháp sư phạm trong giảng dạy tiếng Trung như ngoại ngữ.',
];

const ExpertAdvisory = () => {
  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div
        className="absolute left-0 top-[100px] size-[200px] rounded-full bg-gradient-to-bl from-gold-primary/20 to-transparent blur-[60px] max-sm:hidden"
      ></div>
      <div className="relative mx-auto max-w-[1481px] rounded-[40px] bg-gradient-to-b from-[#FFF7EF] to-white/0 p-8 md:p-12">
        <div
          className="absolute bottom-[200px] left-4 size-24 rounded-full bg-gradient-to-bl from-gold-primary/30 to-transparent blur-xl max-sm:hidden"
        ></div>
        
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <div className="mb-6 flex items-end justify-center gap-3 text-white md:gap-5">
              <Image 
                src={IMAGES.home.MegaPhoneIcon} 
                alt="Megaphone Icon" 
                width={90} 
                height={90} 
                className="h-auto w-[40px] md:w-[90px] animate-bounce-slow" 
              />
              <div className="bg-gradient-to-r from-gold-primary to-red-primary rounded-xl px-6 py-3 shadow-xl transform -rotate-2">
                <p className="text-base font-black uppercase tracking-wider md:text-[24px] lg:text-[34px] leading-tight">
                  Học Bá hân hạnh giới thiệu
                </p>
              </div>
            </div>
            <h2
              className="mb-4 bg-gradient-to-r from-[#7D1900] to-red-primary bg-clip-text text-2xl font-black uppercase leading-tight text-transparent md:text-[36px] lg:text-[42px]"
            >
              Cố vấn chuyên môn quốc tế độc quyền
            </h2>
            <div className="flex items-center justify-center gap-3 text-[#373737]">
              <StarColorGradient className="size-6 md:size-10" />
              <p className="text-lg font-bold md:text-[28px]">Từ chuyên gia Hán Ngữ hàng đầu thế giới*</p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FFFBF0] to-[#FFF5E9] p-8 md:p-12 shadow-2xl border border-gold-primary/20 transition-all duration-500 hover:shadow-gold-hover group">
                <div className="relative z-10">
                  <h3 className="mb-4 text-center text-2xl font-black uppercase text-[#373737] md:text-[42px] tracking-tight group-hover:text-red-primary transition-colors">
                    GS. Bao-Zhang He
                  </h3>

                  <div className="mb-10 flex items-center justify-center gap-4">
                    <StarColorGradient className="size-8 md:size-12 flex-shrink-0 animate-pulse" />
                    <p
                      className="bg-gradient-to-r from-[#8A0101] to-[#C0262C] bg-clip-text text-lg font-black leading-tight text-transparent md:text-[28px]"
                    >
                      Nguyên Giám đốc Chương trình<br className="hidden md:block" /> tiếng Trung tại Đại học Harvard
                    </p>
                  </div>

                  <ul className="mb-12 space-y-4 md:space-y-6">
                    {achievements.map((item, idx) => (
                      <li key={idx} className="flex gap-4 text-justify text-base font-semibold leading-relaxed text-[#373737] md:text-xl border-l-4 border-red-primary pl-4 transition-all hover:pl-6">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col items-center">
                    <Link href="/chuyen-gia/gs-baozhang-he" className="px-10 py-4 text-xl shadow-xl hover:scale-105 transition-transform"> 
                      Xem hồ sơ chuyên gia 
                    </Link>
                  </div>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 size-40 bg-gold-primary/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-red-primary/10 transition-colors"></div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 flex items-center justify-center">
              <div className="relative w-full max-w-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-red-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Image
                  src={IMAGES.home.GS_BaoZhangHe}
                  alt="GS. Bao-Zhang He"
                  width={700}
                  height={900}
                  className="relative z-10 h-auto w-full object-contain drop-shadow-2xl grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                
                {/* Badge/Label */}
                <div className="absolute -bottom-6 -right-6 md:bottom-0 md:right-0 z-20 bg-white p-4 rounded-2xl shadow-2xl border-2 border-red-primary transform rotate-3 group-hover:rotate-0 transition-transform">
                  <p className="font-black text-red-primary text-sm md:text-lg">CHUYÊN GIA HARVARD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAdvisory;
