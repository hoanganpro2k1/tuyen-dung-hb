'use client';

import React from 'react';
import { IMAGES } from '@/lib/constants/images';
import SuccessHeader from './SuccessHeader';
import EvidenceGallery from './EvidenceGallery';
import { TestimonialSlider, type TestimonialItem } from './TestimonialSlider';

const testimonials: TestimonialItem[] = [
  {
    name: 'Hoàng Tú Anh',
    role: 'Nhân viên văn phòng',
    location: 'TP HCM',
    rating: 5,
    hskLevel: 'HSK 4',
    timeSpent: 'Sau 9 tháng',
    content:
      'Review qua 2 khoá H2-3 rồi lên H4 nha. Mình dân tiếng Anh qua học tiếng Trung. Lúc đầu mấy bạn tư vấn bên Học Bá này mình thấy oke, hỏi han đầy đủ rõ ràng mục tiêu học học rõ ràng... Mình cũng có thử qua 1 số hệ thống LMS khác của tiếng Anh thì bên này làm rất oke, giống form của nước ngoài. Học ở đây rất hiệu quả!',
    likes: 348,
    shares: 67,
    avatar: IMAGES.home.HoangTuAnh.src,
  },
  {
    name: 'Lê Thương',
    role: 'Học sinh lớp 12',
    location: 'Hà Nội',
    rating: 5,
    hskLevel: 'HSK 3',
    timeSpent: 'Từ mất gốc',
    content:
      'Mình đang học lớp HSK3 cô Tâm học vui lắm ạ, nhma cnhan học Tiếng Trung siêu khó nha xdinh là áp lực nếu lười :))) còn mình học thì có mentor nhắc bài với chấm chữa bt siêu kĩ nên học thấy tiến bộ đều rõ nha. Học phí k rẻ cũng k đắt mà so với thị trg là xứng đáng, highly rcm nhaaaa bác ơi',
    likes: 128,
    shares: 23,
    avatar: IMAGES.home.LeThuong.src,
  },
  {
    name: 'Tiến Vũ',
    role: 'Nhân viên IT ',
    location: 'Đà Nẵng',
    rating: 5,
    hskLevel: 'HSK 6',
    timeSpent: 'Sau 7+ tháng',
    content:
      'Mình đã đi làm nên quỹ thời gian hạn chế. Tình cờ biết đến Học Bá có lớp online 100% thời gian linh động nên đăng ký học luôn. Mình học H6 trong thời gian cam kết 6 tháng của trung tâm cùng với ctrinh H6 học 100% với giáo viên bản xứ. Giảng viên bản xứ cực kỳ nhiệt tình, theo sát từng buổi, giúp mình tiến bộ rõ rệt Kết quả là mình đỗ HSK6 đợt thi tháng 9 / 2025. Rất cảm ơn trung tâm và cô Junchi đã support hết mình.',
    likes: 298,
    shares: 68,
    avatar: IMAGES.home.TienVu.src,
  },
  {
    name: 'Khánh Ly',
    role: '26 tuổi',
    location: 'Đà Nẵng',
    rating: 5,
    hskLevel: 'HSK 4',
    timeSpent: 'Từ mất gốc',
    content:
      'Bên này thì công tâm mà nói ko rẻ nha. Nhưng học thì đc care khá là sát. GV cũng cũng nha, học tới đâu mà phần nào k hiểu cũng hỏi lại học viên luôn để giảng lại. Đã học và tự tin lấy H4 nên rcm mấy bạn muốn học đạt hiệu quả tốt. Tuy nhiên sẽ bị nản thời gian đầu vì nhiều task bài tập lắm mn ạ, cố vượt qua thì mới quen được nhịp độ lớp ý.',
    likes: 98,
    shares: 12,
    avatar: IMAGES.home.KhanhLy.src,
  },
  {
    name: 'Vũ Hải My',
    role: 'Sinh viên',
    location: 'Hà Nội',
    rating: 5,
    hskLevel: 'HSK 3',
    timeSpent: 'Sau 6+ tháng',
    content:
      'Lúc đầu tìm hiểu thì thấy đắt hơn bên khác, cơ mà thấy LMS thấy lạ lạ, nên đăng kí thử đến h3 thui, mà học được với gv cute cũng khá okee. mình vừa học xong H3 trộm vía qua test, vừa gia hạn H4 á, mà sắp tết rồi bận quá nên là đk trước để sau sắp xếp đc lại học tiếp. không biết lên h4 khó hơn không nhưng h3 thấy ổn',
    likes: 68,
    shares: 3,
    avatar: IMAGES.home.VuHaiMy.src,
  },
];

const StudentSuccess = () => {
  return (
    <section id="student-success" className="overflow-hidden bg-white py-10 md:py-20">
      <SuccessHeader />
      <EvidenceGallery />
      <div className="mt-12 md:mt-24">
        <div className="container mx-auto px-4 text-center mb-8">
          <h3 className="text-2xl font-black uppercase text-[#373737] md:text-4xl">
            Cảm nhận từ <span className="text-red-primary">người thật - việc thật</span>
          </h3>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gold-primary"></div>
        </div>
        <TestimonialSlider items={testimonials} />
      </div>
    </section>
  );
};

export default StudentSuccess;
