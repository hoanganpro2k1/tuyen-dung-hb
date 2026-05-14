'use client';

import React from 'react';
import Image from 'next/image';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { IMAGES } from '@/lib/constants/images';
import CommitmentBadge from '../ui/CommitmentBadge';

const qaData = [
  {
    id: 'item-1',
    question: '1. Học phí cho mỗi khóa học tại Học Bá là bao nhiêu?',
    answer:
      'Học phí các khóa học tại Học Bá dao động từ 3 – 15 triệu, tùy theo cấp độ. Để nhận tư vấn chi tiết và lộ trình phù hợp với mục tiêu cá nhân, hãy để lại thông tin, Học Bá sẽ hỗ trợ bạn 1:1.',
  },
  {
    id: 'item-2',
    question: '2. Lộ trình học tại Học Bá như thế nào?',
    answer:
      'Lộ trình ôn thi tại Học Bá được thiết kế cá nhân hóa, tập trung vào các kiến thức trọng tâm để học viên không lãng phí thời gian vào nội dung không cần thiết. Kết hợp cùng phương pháp học thông minh và tài liệu ôn luyện cập nhật theo chuẩn Tiếng Trung mới nhất, Học Bá giúp bạn tiếp thu nhanh, hiệu quả và tiết kiệm tối đa thời gian.',
  },
  {
    id: 'item-3',
    question: '3. Học Bá có cam kết chất lượng đầu ra không?',
    answer:
      'Có! Học Bá cam kết đầu ra rõ ràng cho từng khóa học. Nếu học viên tuân thủ đúng lộ trình học tập và hướng dẫn từ giáo viên nhưng không đạt kết quả như mong muốn, chúng tôi sẽ hỗ trợ học lại miễn phí hoặc có giải pháp bù đắp phù hợp.',
  },
  {
    id: 'item-4',
    question: '4. Người mới bắt đầu học Tiếng Trung cần tối thiểu bao lâu để giao tiếp cơ bản tiếng Trung?',
    answer:
      'Thời gian để một người mới bắt đầu có thể giao tiếp cơ bản bằng Tiếng Trung phụ thuộc vào lộ trình học và mức độ tập trung của từng học viên. Với phương pháp giảng dạy tại Học Bá, nếu học viên học đúng lộ trình và thực hành đều đặn, chỉ sau 2-3 tháng, bạn đã có thể nắm vững các mẫu câu giao tiếp thông dụng và tự tin trao đổi trong những tình huống hàng ngày.',
  },
];

const AdvisorQA = () => {
  return (
    <section
      id="advisor-qa"
      className="relative mx-auto max-w-[1493px] py-12 md:py-24 bg-gradient-to-b from-[#FFFBF700] via-[#FFF7EF] to-[#FFF9F900]"
    >
      <div className="relative z-10 mx-auto max-w-[1212px] px-4 lg:px-8">
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-6">
            <span className="text-7xl font-black text-red-primary md:text-[120px] drop-shadow-lg">?</span>
            <div>
              <h2 className="py-2 text-2xl font-black text-[#373737] md:text-[42px] tracking-tight">Giải Đáp 1:1</h2>
              <CommitmentBadge className="rounded-xl px-6 py-2 text-lg font-black md:text-[32px] md:py-3 shadow-xl">
                CÙNG CỐ VẤN HỌC TẬP
              </CommitmentBadge>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
          {/* Accordion Section */}
          <div className="w-full lg:w-[60%] space-y-4 md:space-y-6">
            {qaData.map((item, index) => (
              <details
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left outline-none md:px-8 md:py-6">
                  <h3 className="max-w-[90%] text-base font-black tracking-tight text-[#373737] md:text-[24px] leading-tight">
                    {item.question}
                  </h3>
                  <div className="relative flex h-8 w-8 items-center justify-center transition-transform duration-500 group-open:rotate-180">
                    <PlusIcon className="absolute size-6 text-red-primary group-open:opacity-0 transition-opacity" />
                    <MinusIcon className="absolute size-6 text-red-primary opacity-0 group-open:opacity-100 transition-opacity" />
                  </div>
                </summary>

                <div className="px-6 pb-8 pt-0 md:px-8 md:pb-10">
                  <div className="h-px w-full bg-gray-100 mb-6" />
                  <p className="whitespace-pre-line text-sm font-bold leading-relaxed text-[#504E4E] md:text-xl">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-[40%] flex justify-center items-center mt-12 lg:mt-0">
            {/* Mascot / Icon decoration */}
            <div className="absolute -top-16 right-10 z-20 md:-top-24 md:right-20 animate-bounce-slow">
              <Image
                src={IMAGES.schedule.camket_maybay}
                alt="Decoration"
                width={100}
                height={100}
                className="h-auto w-20 md:w-32 drop-shadow-2xl"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-red-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Image 
                src={IMAGES.home.shot2} 
                alt="Advisor QA" 
                width={600} 
                height={600} 
                className="relative z-10 h-auto w-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative side blurs */}
      <div className="absolute -left-20 top-1/2 size-80 -translate-y-1/2 rounded-full bg-red-primary/5 blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default AdvisorQA;
