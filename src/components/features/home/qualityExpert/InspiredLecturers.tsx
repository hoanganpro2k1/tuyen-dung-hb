'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/constants/images';
import Link from '../ui/Link';
import TeacherCarousel from '@/components/features/introduce/TeacherCarousel';
import { TLecturer } from '@/lib/types/lecturer';

// Mock data for lecturers since API is not yet available
const mockLecturers: TLecturer[] = [
  {
    id: '1',
    name: 'Cô Nguyễn Hà',
    slug: 'co-nguyen-ha',
    title: 'Thạc sĩ Ngôn ngữ học - ĐH Bắc Kinh',
    total_student: 150,
    tags: {
      qualification: ['HSK6'],
      scope: ['Luyện thi'],
    },
    program: [],
    teacherHighlights: [],
  },
  {
    id: '2',
    name: 'Thầy Trần Long',
    slug: 'thay-tran-long',
    title: 'Tiến sĩ Hán ngữ - ĐH Thanh Hoa',
    total_student: 200,
    tags: {
      qualification: ['HSK6'],
      scope: ['Giao tiếp'],
    },
    program: [],
    teacherHighlights: [],
  },
  {
    id: '3',
    name: 'Cô Mai Lan',
    slug: 'co-mai-lan',
    title: 'Giảng viên cấp cao - Học Bá',
    total_student: 120,
    tags: {
      qualification: ['HSK6'],
      scope: ['Dịch thuật'],
    },
    program: [],
    teacherHighlights: [],
  },
];

const InspiredLecturers = () => {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="relative mb-8 flex flex-col items-center justify-center md:mb-20">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <h2 className="flex items-center gap-2 text-2xl font-black uppercase text-[#373737] md:text-[36px] lg:text-[42px] leading-tight">
              150+ giảng viên <span className="text-red-primary">truyền cảm hứng</span>
            </h2>
            <div className="relative w-16 md:w-24 transform hover:rotate-12 transition-transform">
              <Image
                src={IMAGES.home.LearningBook}
                width={120}
                height={120}
                alt="Inspired Icon"
                className="h-auto w-full drop-shadow-lg"
              />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-red-primary to-gold-primary"></div>
        </div>
      </div>

      <div className="container mx-auto px-0 md:px-4">
        <div className="mb-16">
          <TeacherCarousel teachers={mockLecturers} />
        </div>
        
        <div className="flex justify-center mt-8">
          <Link 
            href="/doi-ngu-giang-vien" 
            className="px-12 py-5 text-xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform bg-gradient-to-r from-[#7D1900] to-red-primary text-white rounded-2xl"
          > 
            XEM ĐỘI NGŨ GIẢNG VIÊN 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InspiredLecturers;
