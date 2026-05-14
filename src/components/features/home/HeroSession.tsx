import { IMAGES } from "@/lib/constants/images";
import Image from "next/image";

const heroData = [
  {
    number: "01",
    content: "Lộ trình học cá nhân hóa theo năng lực",
    link: "#roadmap-section",
  },
  {
    number: "02",
    content: "Mentor học tập đồng hành 1–1",
    link: "#mentor-content",
  },
  {
    number: "03",
    content: "Chương trình chuẩn HSK 3.0 & thực chiến",
    link: "#detection-section",
  },
];

export default function HeroSession() {
  return (
    <section
      id="hero"
      className="relative flex w-full items-center overflow-hidden pb-4 md:pb-[75px] md:pt-16 scroll-mt-[80px]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -left-[15%] top-9 h-[400px] w-[400px] rounded-full bg-[#E50500]/50 blur-[60px] max-lg:hidden"
        aria-hidden="true"
      ></div>

      <div className="container z-10 mx-auto w-full lg:px-6">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-0">
          <nav className="mt-7 flex w-full flex-col items-start px-4 text-left md:mt-0 lg:w-[52%]">
            <div className="mb-3 inline-flex max-h-[70px] items-center justify-between gap-6 rounded-xl bg-gradient-to-r from-[#7D1900] to-[#B90E0A] px-3 max-sm:w-full lg:mb-10">
              <p className="border-white/30 text-xs font-bold uppercase leading-tight text-white lg:text-base">
                Hệ thống giáo dục
                <br />
                Hán ngữ trực tuyến
              </p>
              <Image
                src={IMAGES.home.oneVn}
                alt="Học Bá - Trung tâm tiếng Trung số 1 Việt Nam"
                width={190}
                height={70}
                className="mb-2 object-cover max-sm:h-[52.5px] max-sm:w-[150px] sm:scale-[1.2]"
                priority
              />
            </div>

            <div className="mb-[18px] w-full space-y-4 md:w-auto lg:mb-12">
              <h1
                id="hero-heading"
                className="min-h-[80px] font-black !leading-[1.2] tracking-tight text-primary max-sm:text-center lg:min-h-[120px]"
              >
                <span className="inline-block text-[28px] underline lg:text-[48px]">
                  {" "}
                  Tuyển dụng{" "}
                </span>
                <br />
                <span className="text-3xl font-black uppercase lg:text-[60px]">
                  Việc làm thu nhập cao
                </span>
              </h1>

              <p className="mt-4 flex min-h-[56px] w-full items-center justify-center rounded-2xl border-[3px] border-[#F3C650] bg-white/50 px-6 py-3 shadow-gold backdrop-blur-sm md:w-fit md:justify-start lg:min-h-[68px]">
                <strong className="text-xl font-extrabold uppercase leading-tight text-primary sm:font-black lg:text-3xl">
                  Các vị trí tuyển dụng
                </strong>
              </p>
            </div>

            <nav
              className="relative w-full space-y-3 md:space-y-4 lg:max-w-[550px]"
              aria-label="Tính năng chính"
            >
              {heroData.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group relative flex min-h-[48px] items-center bg-[#F3C650]/20 transition-all hover:bg-gradient-to-r hover:from-[#F3C650] hover:to-primary"
                  aria-label={item.content}
                >
                  <div className="bg-primary/5 flex w-full items-center gap-2 px-3 py-2 backdrop-blur-[2px] transition-all group-hover:bg-transparent">
                    <div className="h-4 w-4 flex-shrink-0 transition-colors">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M14 8L2 15V1L14 8Z"
                          fill="#B90E0A"
                          className="transition-colors group-hover:fill-[#FFDA45]"
                        />
                      </svg>
                    </div>

                    <div
                      className="h-6 w-[2px] flex-shrink-0 bg-black transition-colors group-hover:bg-white"
                      aria-hidden="true"
                    />

                    <span className="flex-1 text-xs font-bold uppercase leading-tight text-primary transition-colors group-hover:text-white md:text-base lg:text-lg">
                      {item.content}
                    </span>

                    <span
                      className="flex-shrink-0 bg-gradient-to-l from-primary to-[#FFDE90] bg-clip-text text-3xl font-extrabold leading-none text-transparent opacity-50 transition-all group-hover:text-[#F3C650] group-hover:opacity-100 lg:text-5xl"
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                  </div>
                </a>
              ))}
              <div
                className="pointer-events-none absolute -bottom-11 left-1/2 z-0 h-[80px] w-[80px] -translate-x-1/2 rounded-full bg-[#E50500]/80 blur-[30px] max-lg:hidden"
                aria-hidden="true"
              ></div>
            </nav>
          </nav>

          <div className="right-0 min-h-[327px] w-full md:min-h-[515px] lg:absolute lg:w-[48%]">
            <div className="relative z-10 mx-auto h-auto w-full overflow-hidden lg:ml-auto lg:max-w-[1011px]">
              <Image
                src={IMAGES.home.heroClass}
                alt="Lớp học tiếng Trung trực tuyến tại Học Bá - Giáo viên chuyên nghiệp hướng dẫn học viên với chương trình HSK chuẩn quốc tế"
                width={1011}
                height={515}
                priority
                className="h-[327px] w-full object-cover object-left md:h-[515px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
