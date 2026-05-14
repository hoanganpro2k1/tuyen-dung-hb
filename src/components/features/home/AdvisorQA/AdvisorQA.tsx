"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import CommitmentBadge from "../ui/CommitmentBadge";

const qaData = [
  {
    id: "item-1",
    question: "1. Cần chuẩn bị những gì khi đến ứng tuyển?",
    answer:
      "Bạn chỉ cần mang theo Căn cước công dân và các bằng cấp liên quan (nếu có). Đội ngũ nhân sự sẽ hướng dẫn bạn hoàn thiện hồ sơ chi tiết sau khi phỏng vấn đạt yêu cầu.",
  },
  {
    id: "item-2",
    question: "2. Chưa có kinh nghiệm có được nhận vào làm không?",
    answer:
      "Hoàn toàn được! Công ty luôn chào đón lao động phổ thông chưa có tay nghề. Bạn sẽ được đào tạo bài bản từ đầu, có lương trong quá trình học việc và cam kết có việc làm ổn định ngay sau đào tạo.",
  },
  {
    id: "item-3",
    question: "3. Chế độ lương và bảo hiểm của công ty như thế nào?",
    answer:
      "Công ty cam kết mức lương cạnh tranh, trả đúng hạn vào ngày 10 hàng tháng. 100% nhân viên được đóng BHXH, BHYT đầy đủ và hưởng các chế độ thưởng lễ, Tết, chuyên cần cực kỳ hấp dẫn.",
  },
  {
    id: "item-4",
    question: "4. Công ty có hỗ trợ chỗ ở cho nhân viên ở xa không?",
    answer:
      "Công ty có chính sách hỗ trợ tìm kiếm nhà trọ hoặc hỗ trợ chi phí đi lại cho nhân viên ở xa. Chúng tôi luôn nỗ lực tạo điều kiện tốt nhất để người lao động an tâm làm việc và gắn bó lâu dài.",
  },
];

const AdvisorQA = () => {
  return (
    <section
      id="advisor-qa"
      className="relative mx-auto max-w-[1493px] py-6 md:py-0 bg-gradient-to-b from-[#FFFBF700] via-[#FFF7EF] to-[#FFF9F900]"
    >
      <div className="relative z-10 mx-auto max-w-[1212px] px-4 lg:px-8 lg:pb-10">
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-6">
            <span className="text-7xl font-black text-primary md:text-[120px] drop-shadow-lg">
              ?
            </span>
            <div>
              <h2 className="py-2 text-2xl font-black text-[#373737] md:text-[42px] tracking-tight">
                Giải Đáp Thắc Mắc
              </h2>
              <CommitmentBadge className="rounded-xl px-4 py-2 text-lg font-black md:text-[32px] md:py-3 shadow-xl">
                DÀNH CHO NGƯỜI LAO ĐỘNG
              </CommitmentBadge>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
          {/* Accordion Section */}
          <div className="w-full lg:w-[60%] mx-auto space-y-4 md:space-y-6">
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
                    <PlusIcon className="absolute size-6 text-primary group-open:opacity-0 transition-opacity" />
                    <MinusIcon className="absolute size-6 text-primary opacity-0 group-open:opacity-100 transition-opacity" />
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
        </div>
      </div>

      {/* Decorative side blurs */}
      <div className="absolute -left-20 top-1/2 size-80 -translate-y-1/2 rounded-full bg-red-primary/5 blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default AdvisorQA;
