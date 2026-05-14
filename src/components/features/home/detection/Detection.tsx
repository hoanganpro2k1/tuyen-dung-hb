import { IMAGES } from "@/lib/constants/images";
import Image from "next/image";
import { DetectionSlider } from "./DetectionSlider";

const Detection = () => {
  const slides = [
    {
      id: "hsk",
      label: "Các vị trí tuyển dụng",
      description: `<strong class='font-black uppercase text-md text-red-primary'>Việc làm hấp dẫn - ổn định lâu dài</strong> <br/> Chúng tôi đang tuyển dụng nhiều vị trí làm việc tại môi trường chuyên nghiệp, năng động, phù hợp với lao động phổ thông và người mong muốn có thu nhập ổn định.
        <br/>Công việc rõ ràng, được hướng dẫn chi tiết không yêu cầu kinh nghiệm cao. Người lao động được đảm bảo mức lương cạnh tranh, chế độ đầy đủ và cơ hội tăng thu nhập theo năng lực. <br/>Đây là cơ hội để bạn bắt đầu một công việc ngay, phát triển kỹ năng và xây dựng cuộc sống ổn định lâu dài.`,
      image: IMAGES.introduce.tuyendung,
      href: "/khoa-hoc-hsk",
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
