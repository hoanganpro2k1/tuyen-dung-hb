"use client";

import { IMAGES } from "@/lib/constants/images";
import Image from "next/image";
import CommitmentBadge from "../ui/CommitmentBadge";

const commitments = [
  {
    id: "01",
    title: "Thu nhập hấp dẫn & Thưởng năng suất",
    description:
      "Mức lương cạnh tranh đi kèm các khoản phụ cấp chuyên cần, thưởng KPI hàng tháng và lương tháng 13 đảm bảo đời sống ổn định cho nhân viên.",
  },
  {
    id: "02",
    title: "Chế độ phúc lợi & Bảo hiểm đầy đủ",
    description:
      "Tham gia đầy đủ BHXH, BHYT, BHTN ngay sau khi ký hợp đồng chính thức. Chế độ nghỉ lễ, Tết và khám sức khỏe định kỳ theo quy định pháp luật.",
  },
  {
    id: "03",
    title: "Môi trường chuyên nghiệp - Hỗ trợ tận tâm",
    description: (
      <ul className="list-disc pl-5 space-y-1 font-bold text-sm md:space-y-2">
        <li>Được đào tạo bài bản từ đầu, không yêu cầu kinh nghiệm.</li>
        <li>Môi trường làm việc năng động, đồng nghiệp hỗ trợ nhiệt tình.</li>
        <li>
          Cơ hội thăng tiến lên các vị trí quản lý cho nhân viên có năng lực và
          gắn bó lâu dài.
        </li>
      </ul>
    ),
  },
];

const CoreQuality = () => {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-10">
      <div className="absolute -right-9 bottom-20 h-56 w-56 rounded-full bg-gradient-to-br from-gold-primary/30 to-white blur-[40px] max-sm:hidden"></div>
      <div className="container relative mx-auto px-4 lg:px-10">
        <div className="relative before:absolute before:-top-3 before:bottom-0 before:left-0 before:z-0 before:w-full before:rounded-[24px] before:bg-gradient-to-b before:from-[#FFEFEF] before:to-[#FFFFFF] before:content-[''] before:sm:-top-9">
          <div className="relative z-10 flex flex-col items-center sm:mb-12 pt-8 sm:pt-12">
            <div className="relative w-full mb-4 flex items-center justify-center gap-4 sm:gap-6">
              <Image
                src={IMAGES.home.iconShot2}
                alt="Target Icon"
                width={124}
                height={124}
                className="h-auto w-14 rotate-[270deg] md:w-28 drop-shadow-xl"
              />
              <div className="flex flex-col items-start gap-1 sm:gap-3">
                <h2 className="bg-gradient-to-r from-[#7D1900] to-[#B90E0A] bg-clip-text py-1 text-xl font-black uppercase leading-tight text-transparent sm:py-3 md:text-[24px] lg:text-[42px]">
                  Chế độ phúc lợi hấp dẫn
                </h2>
                <CommitmentBadge> Đi làm ngay - lương về tay</CommitmentBadge>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-4 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative flex justify-center px-4 lg:px-0">
              <div className="relative w-full">
                <Image
                  src={IMAGES.home.vieclam}
                  alt="Teacher Excellence"
                  width={800}
                  height={600}
                  className="h-auto rounded-2xl w-full object-contain drop-shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 max-sm:px-0 px-4 md:px-0 mt-8 lg:mt-0">
              {commitments.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col overflow-hidden rounded-[11px] bg-gradient-to-r from-[#7D1900] to-[#B90E0A] text-white transition-all duration-300 hover:translate-x-3 sm:rounded-[20px] shadow-xl group"
                >
                  <div className="p-4 md:p-6">
                    <div className="flex items-start sm:gap-6">
                      <div className="flex flex-col items-center">
                        <Image
                          src={IMAGES.home.QuoteIcon}
                          alt="Quote Icon"
                          width={40}
                          height={40}
                          className="mb-3 h-auto max-sm:max-w-[70%] transform group-hover:scale-110 transition-transform"
                        />
                        <span className="bg-gradient-to-r from-gold-primary to-[#FFF] bg-clip-text text-3xl font-black leading-none text-transparent md:text-[50px]">
                          {item.id}
                        </span>
                      </div>
                      <div className="flex-1 ml-4">
                        <h3 className="mb-2 text-sm font-black uppercase leading-tight text-[#FFDA45] md:text-[24px]">
                          {item.title}
                        </h3>
                        <div className="text-xs font-bold leading-relaxed text-gray-100 md:text-base">
                          {typeof item.description === "string" ? (
                            <p>{item.description}</p>
                          ) : (
                            item.description
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreQuality;
