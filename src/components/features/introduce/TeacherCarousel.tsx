'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EllipseDngv } from '@/components/common/icons';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { SearchX } from 'lucide-react';
import { TLecturer } from '@/lib/types/lecturer';
import { IMAGES } from '@/lib/constants/images';

interface TeacherCarouselProps {
  teachers: TLecturer[];
}

const TeacherCarousel = ({ teachers }: TeacherCarouselProps) => {
  if (!teachers || teachers.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center text-gray-500">
        Đang cập nhật danh sách giảng viên...
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Carousel
        className="relative"
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent className="-ml-2 mr-2 pb-14 md:-ml-5 md:pb-20">
          {teachers.map((teacher, index) => (
            <CarouselItem key={teacher.id || index} className="ml-2 mr-2 basis-[212px] pl-4 md:ml-5 md:mr-5 md:basis-[344px]">
              <div className="relative flex h-[288px] w-[212px] select-none flex-col items-center justify-start gap-6 rounded-[24px] bg-gradient-to-b from-[#F37B50] to-red-primary shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:h-[450px] md:w-[344px] md:justify-center md:gap-3 group">
                <div className="relative h-[182px] w-[212px] md:h-[286px] md:w-[286px]">
                  <EllipseDngv className="absolute left-1/2 top-3 z-0 size-[182px] -translate-x-1/2 md:top-0 md:size-[286px] opacity-80" />
                  
                  {/* Tag/Badge */}
                  <div className="absolute left-2 top-2 z-20 flex w-fit flex-col items-center rounded-lg border border-white/50 bg-gradient-to-br from-[#7D1900] to-red-primary px-3 py-1 shadow-lg md:left-0 md:top-0 md:rounded-2xl">
                    <span className="text-[10px] font-bold text-white md:text-sm uppercase tracking-wider">
                      {teacher.tags?.scope?.[0] || 'HSK'}
                    </span>
                    <span className="text-sm font-black leading-tight text-white md:text-[22px]">
                      {teacher.tags?.qualification?.[0] || '6'}
                    </span>
                    <div className="absolute -bottom-2 -left-1 size-3 rounded-full bg-gold-primary opacity-50 blur-sm" />
                  </div>

                  {/* Avatar */}
                  <div className="absolute left-1/2 top-[60%] z-10 w-[140px] -translate-x-1/2 -translate-y-1/2 md:w-[220px]">
                    <Image
                      src={teacher.optimizedAvatar || teacher.avatar_url?.file_path || IMAGES.home.TeacherGroup}
                      alt={teacher.name}
                      width={300}
                      height={400}
                      className="h-auto w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Name Card */}
                  <div className="absolute left-1/2 top-[130px] z-20 flex min-h-[70px] w-[186px] -translate-x-1/2 flex-col items-center justify-center rounded-2xl bg-white/95 backdrop-blur-sm p-2 shadow-xl md:top-[186px] md:min-h-[100px] md:w-[280px] md:p-4">
                    <h3 className="truncate text-center text-base font-black text-red-primary md:text-2xl w-full px-2">
                      {teacher.name}
                    </h3>
                    <p className="mt-1 text-center text-[10px] font-bold text-[#373737] md:text-base leading-tight">
                      {`${teacher.total_student ?? 99}+ Học viên đạt từ ${teacher.tags?.qualification?.[0] || 'HSK6'} trở lên`}
                    </p>
                  </div>
                </div>

                <div className="px-6 text-center text-[11px] font-medium text-white md:px-10 md:text-lg opacity-90 line-clamp-2 mt-4 md:mt-0">
                  {teacher.title}
                </div>

                {/* Search Action */}
                <div className="absolute -bottom-6 left-0 flex h-[50px] w-full justify-center">
                  <Link 
                    href={`/doi-ngu-giang-vien/${teacher.slug || ''}`} 
                    className="group/btn flex size-[50px] items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 hover:scale-110"
                  >
                    <div className="relative size-6 transition-transform duration-500 group-hover/btn:rotate-12">
                      <SearchX className="size-full text-red-primary" />
                    </div>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TeacherCarousel;
