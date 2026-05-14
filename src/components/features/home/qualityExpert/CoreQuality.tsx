'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/constants/images';
import CommitmentBadge from '../ui/CommitmentBadge';

const commitments = [
  {
    id: '01',
    title: 'Cam kết đầu ra rõ ràng, không đạt học lại miễn phí',
    description:
      'Học viên không đạt chuẩn đầu ra được học lại và Mentor hỗ trợ miễn phí, chỉ cần tuân thủ đúng lộ trình đã thống nhất.',
  },
  {
    id: '02',
    title: 'Lộ trình cá nhân hoá - Học đủ - Đúng cấp độ',
    description:
      'Mỗi học viên đều được thi đánh giá đầu vào với giảng viên & xây dựng lộ trình cá nhân hóa theo mục tiêu thi cử & nhu cầu giao tiếp.',
  },
  {
    id: '03',
    title: 'Chăm sóc học viên tận tâm - Lịch học linh hoạt',
    description: (
      <ul className="list-disc pl-5 space-y-1 font-bold text-sm md:space-y-2">
        <li>Lịch học linh hoạt, phù hợp nhiều khung giờ.</li>
        <li>Học viên có thể đổi giáo viên – đổi lớp – đổi giờ học nếu cảm thấy chưa phù hợp.</li>
        <li>Có hệ thống lớp bổ trợ (HSK, giao tiếp chuyên sâu, viết luận, phát âm...) dành cho học viên muốn nâng cao kỹ năng.</li>
      </ul>
    ),
  },
];

const CoreQuality = () => {
  return (
    <section className="relative bg-white py-12 md:py-24">
      <div
        className="absolute -right-9 bottom-20 h-56 w-56 rounded-full bg-gradient-to-br from-gold-primary/30 to-white blur-[40px] max-sm:hidden"
      ></div>
      <div
        className="container relative mx-auto before:absolute before:-top-3 before:bottom-0 before:left-0 before:z-0 before:w-full before:rounded-[24px] before:bg-gradient-to-b before:from-[#FFEFEF] before:to-[#FFFFFF] before:content-[''] before:sm:-top-9 before:xl:w-[90%]"
      >
        <div className="relative flex flex-col items-center sm:mb-12">
          <div className="relative mb-4 flex items-center justify-center sm:gap-4">
            <Image
              src={IMAGES.home.iconShot2}
              alt="Target Icon"
              width={124}
              height={124}
              className="h-auto w-14 rotate-[270deg] md:w-28 drop-shadow-xl"
            />
            <div className="flex flex-col items-center gap-0 sm:gap-3">
              <h2
                className="bg-gradient-to-r from-[#7D1900] to-red-primary bg-clip-text py-1 text-[18px] font-black uppercase leading-tight text-transparent sm:py-3 md:text-[24px] lg:text-[42px]"
              >
                Lấy chất lượng làm giá trị cốt lõi
              </h2>
              <CommitmentBadge> Cam kết 100% đầu ra - Lộ trình cá nhân hóa </CommitmentBadge>
            </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center lg:grid-cols-[55%_45%] xl:gap-4 mt-8 md:mt-0">
          <div className="relative flex">
            <div className="relative w-full">
              <Image
                src={IMAGES.home.TeacherGroup}
                alt="Teacher Excellence"
                width={800}
                height={600}
                className="h-auto w-full object-contain drop-shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 px-4 md:px-0 mt-8 lg:mt-0">
            {commitments.map((item) => (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden rounded-[11px] bg-gradient-to-r from-[#7D1900] to-red-primary text-white transition-all duration-300 hover:translate-x-3 sm:rounded-[20px] shadow-xl group"
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-start sm:gap-6">
                    <div className="flex flex-col items-center">
                      <Image 
                        src={IMAGES.home.QuoteIcon} 
                        alt="Quote Icon" 
                        width={40} 
                        height={40} 
                        className="mb-3 max-sm:max-w-[70%] transform group-hover:scale-110 transition-transform" 
                      />
                      <span className="bg-gradient-to-r from-gold-primary to-[#FFF] bg-clip-text text-3xl font-black leading-none text-transparent md:text-[50px]">
                        {item.id}
                      </span>
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="mb-2 text-sm font-black uppercase leading-tight text-gold-primary md:text-[24px]">
                        {item.title}
                      </h3>
                      <div className="text-xs font-bold leading-relaxed text-gray-100 md:text-base">
                        {typeof item.description === 'string' ? <p>{item.description}</p> : item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreQuality;
