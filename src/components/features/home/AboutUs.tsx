import { HomeIcon } from "@/components/common/icons";
import { IMAGES } from "@/lib/constants/images";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="bg-[#fdf8f8] py-10 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={IMAGES.HOME.ABOUT_US_THUMB}
                alt="About Us"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-primary/20 rounded-full blur-2xl z-0 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-red-primary/10 rounded-full blur-3xl z-0 animate-pulse"></div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md self-start border border-gold-primary/20">
              <HomeIcon className="size-4 md:size-6 text-red-primary" />
              <span className="text-sm md:text-base font-semibold text-red-primary uppercase tracking-wider">
                Về chúng tôi
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-red-dark leading-tight">
              Hệ thống giáo dục <br className="hidden md:block" />
              <span className="text-red-primary">An Hưng</span> - Ươm mầm tài
              năng
            </h2>

            <div className="flex flex-col gap-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Hệ thống giáo dục An Hưng là đơn vị tiên phong trong việc áp
                dụng các phương pháp giảng dạy hiện đại, giúp học sinh không chỉ
                nắm vững kiến thức mà còn phát triển tư duy sáng tạo và kỹ năng
                giải quyết vấn đề.
              </p>
              <p>
                Với đội ngũ giáo viên tâm huyết, giàu kinh nghiệm và cơ sở vật
                chất hiện đại, chúng tôi cam kết mang đến môi trường học tập tốt
                nhất, khơi dậy niềm đam mê học hỏi trong mỗi học sinh.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mt-4">
              <div className="flex flex-col gap-2 p-4 bg-white rounded-xl shadow-sm border-l-4 border-gold-primary">
                <span className="text-2xl md:text-3xl font-bold text-red-primary">
                  10+
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500 uppercase">
                  Năm kinh nghiệm
                </span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-white rounded-xl shadow-sm border-l-4 border-gold-primary">
                <span className="text-2xl md:text-3xl font-bold text-red-primary">
                  5000+
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500 uppercase">
                  Học sinh thành công
                </span>
              </div>
            </div>

            <button className="mt-4 px-8 py-4 bg-red-primary text-white font-bold rounded-xl shadow-lg hover:bg-red-dark transition-all duration-300 transform hover:-translate-y-1 self-start group flex items-center gap-2">
              Tìm hiểu thêm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
