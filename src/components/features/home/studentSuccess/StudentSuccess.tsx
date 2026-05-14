"use client";

import { IMAGES } from "@/lib/constants/images";
import SuccessHeader from "./SuccessHeader";
import { TestimonialSlider, type TestimonialItem } from "./TestimonialSlider";

const testimonials: TestimonialItem[] = [
  {
    name: "Nguyễn Thị Hoa",
    role: "Công nhân may",
    location: "Thanh Chương, Nghệ An",
    rating: 5,
    hskLevel: "TỔ 1",
    timeSpent: "Gắn bó 3 năm",
    content:
      "Làm việc ở đây môi trường rất chuyên nghiệp, lương thưởng luôn đúng hạn. Lúc mới vào tôi chưa biết may nhiều nhưng được các anh chị đi trước chỉ bảo tận tình. Giờ thu nhập ổn định, tôi có điều kiện lo cho con cái ăn học tốt hơn.",
    likes: 452,
    shares: 82,
    avatar: IMAGES.home.HoangTuAnh,
  },
  {
    name: "Trần Văn Nam",
    role: "Nhân viên kiểm hàng (QC)",
    location: "Đô Lương, Nghệ An",
    rating: 5,
    hskLevel: "KỸ THUẬT",
    timeSpent: "Gắn bó 2 năm",
    content:
      "Chế độ phúc lợi của công ty rất tốt, có đầy đủ bảo hiểm và thưởng lễ tết. Môi trường làm việc năng động, sạch sẽ. Tôi thích nhất là sự quan tâm của công đoàn đối với đời sống anh em công nhân, giúp mọi người luôn an tâm sản xuất.",
    likes: 215,
    shares: 45,
    avatar: IMAGES.home.TienVu,
  },
  {
    name: "Lê Thị Lan",
    role: "Công nhân hoàn thiện",
    location: "Nam Đàn, Nghệ An",
    rating: 5,
    hskLevel: "TỔ 5",
    timeSpent: "Gắn bó 5 năm",
    content:
      "Công ty An Hưng là nơi làm việc lý tưởng cho lao động địa phương. Không cần phải đi làm xa xứ, ngay tại quê nhà mình vẫn có mức thu nhập tốt. Lịch làm việc hợp lý giúp tôi có thời gian chăm sóc gia đình sau giờ làm.",
    likes: 367,
    shares: 56,
    avatar: IMAGES.home.LeThuong,
  },
  {
    name: "Phạm Minh Đức",
    role: "Tổ trưởng sản xuất",
    location: "Yên Thành, Nghệ An",
    rating: 5,
    hskLevel: "QUẢN LÝ",
    timeSpent: "Gắn bó 4 năm",
    content:
      "Tôi bắt đầu từ vị trí công nhân và sau 4 năm nỗ lực đã được đề bạt lên làm tổ trưởng. Công ty luôn tạo cơ hội thăng tiến cho những ai có năng lực và thái độ tốt. Rất tự hào khi là một phần của đại gia đình An Hưng.",
    likes: 189,
    shares: 32,
    avatar: IMAGES.home.KhanhLy,
  },
  {
    name: "Hoàng Thị Mai",
    role: "Nhân viên đóng gói",
    location: "Nghệ An",
    rating: 5,
    hskLevel: "KHO",
    timeSpent: "Gắn bó 1 năm",
    content:
      "Dù mới vào làm được 1 năm nhưng tôi cảm nhận được sự ấm áp và đoàn kết của mọi người. Công việc phù hợp với sức khỏe, thu nhập ổn định và đặc biệt là không bị áp lực tiêu cực. Rất đáng để gắn bó lâu dài.",
    likes: 124,
    shares: 18,
    avatar: IMAGES.home.VuHaiMy,
  },
];

const StudentSuccess = () => {
  return (
    <section
      id="student-success"
      className="overflow-hidden bg-white pt-0 pb-0 md:py-10"
    >
      <SuccessHeader />
      <div className="mt-12 md:mt-0">
        <div className="container mx-auto px-4 text-center mb-4">
          <h3 className="text-xl font-black uppercase text-primary md:text-4xl">
            Cảm nhận{" "}
            <span className="text-primary">người thật - việc thật</span>
          </h3>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gold-primary"></div>
        </div>
        <TestimonialSlider items={testimonials} />
      </div>
    </section>
  );
};

export default StudentSuccess;
