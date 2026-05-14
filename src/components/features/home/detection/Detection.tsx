import { IMAGES } from "@/lib/constants/images";
import Image from "next/image";
import { DetectionSlider } from "./DetectionSlider";

const Detection = () => {
  const slides = [
    {
      id: "hsk",
      label: "Học Bá HSK 3.0",
      description:
        "<strong class='font-black uppercase text-red-primary'>Khóa Học Bá HSK 3.0</strong> là sản phẩm luyện thi HSK 3.0 Theo Format <strong>HSK 3.0</strong> - dẫn đầu về hiệu quả ứng dụng và đầu ra thực tế – giúp người học sử dụng tiếng Trung vững vàng để thi đỗ thật và phát triển sự nghiệp bằng ngôn ngữ này, dành cho người cần chứng chỉ để du học, xin việc và phát triển sự nghiệp bằng ngôn ngữ này ",
      image: IMAGES.introduce.hocbahsk,
      href: "/khoa-hoc-hsk",
    },
    {
      id: "chinese",
      label: "Học Bá Chinese",
      description:
        "<strong class='font-black uppercase text-red-primary'> Học Bá Chinese - Khóa Tiếng Trung cho người đi làm </strong> được thiết kế dành riêng cho người bận rộn, với mục tiêu cốt lõi: dùng được tiếng Trung ngay trong công việc hằng ngày. <br /> Lộ trình được tối ưu cho người đi làm: bài học ngắn – rõ ràng – thực dụng, bài tập tinh gọn nhưng hiệu quả, đảm bảo học viên tiến bộ thật và sử dụng được thật trong môi trường công việc.",
      image: IMAGES.introduce.hocbachinese,
      href: "/tieng-trung-cho-nguoi-di-lam",
    },
  ];

  return (
    <section
      id="detection-section"
      className="relative overflow-hidden pb-[52px] pt-7 md:pb-28 md:pt-16 bg-[#fff8f6]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.home.detectionBg}
          alt="Detection Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <DetectionSlider slides={slides} />
    </section>
  );
};

export default Detection;
