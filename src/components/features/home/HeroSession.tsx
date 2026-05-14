import { IMAGES } from "@/lib/constants/images";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const heroData = [
  {
    number: "01",
    content: "Lao động phổ thông",
    link: "#detection-section",
  },
  {
    number: "02",
    content: "Nhân viên văn phòng",
    link: "#detection-section",
  },
  {
    number: "03",
    content: "Các vị trí khác",
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
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch">
          <div className="mt-7 flex w-full flex-col items-start px-4 text-left md:mt-0 lg:w-1/2">
            <div
              className={`${greatVibes.className} text-white max-sm:text-3xl text-4xl px-10 max-sm:py-2 py-4 mb-3 flex flex-row max-sm:flex-col items-center justify-between rounded-xl bg-gradient-to-r from-[#7D1900] to-[#B90E0A] max-sm:w-full lg:mb-10`}
            >
              <p className="w-full ">Việc làm ổn định</p>
              <span className="mx-2 max-sm:hidden">-</span>
              <p className="max-sm:text-right text-nowrap justify-end flex w-full">
                Thu nhập bền vững
              </p>
            </div>

            <div className="mb-[18px] w-full space-y-4 md:w-auto lg:mb-12">
              <h1
                id="hero-heading"
                className="min-h-[90px] font-black !leading-[1.2] tracking-tight text-primary max-sm:text-center lg:min-h-[140px]"
              >
                <span className="inline-block text-[36px] underline lg:text-[56px]">
                  {" "}
                  Tuyển dụng{" "}
                </span>
                <br />
                <span className="text-3xl text-nowrap font-black uppercase lg:text-[60px]">
                  Việc làm thu nhập cao
                </span>
              </h1>

              <p className="mt-4 flex min-h-[56px] w-full items-center justify-center rounded-2xl border-[3px] border-[#F3C650] bg-white/80 px-6 py-3 shadow-gold backdrop-blur-md md:w-fit md:justify-start lg:min-h-[68px]">
                <strong className="text-2xl font-extrabold uppercase leading-tight text-primary sm:font-black lg:text-3xl">
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

                    <span className="flex-1 text-lg font-bold uppercase leading-tight text-primary transition-colors group-hover:text-white md:text-base lg:text-lg">
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
          </div>

          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <div className="relative z-10 max-sm:mx-4 h-full w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(185,14,10,0.15)]">
              <Image
                src={IMAGES.home.heroGarment}
                alt="Môi trường làm việc hiện đại, chuyên nghiệp tại Công ty CP May An Hưng - Dây chuyền sản xuất tiên tiến với đội ngũ công nhân tay nghề cao"
                width={1011}
                height={515}
                priority
                className="h-[327px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[515px] lg:h-full"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 md:bottom-8 md:left-8">
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
                  <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-green-500"></span>
                  <span className="text-xs font-bold text-gray-800 md:text-sm">
                    1000+ Nhân viên
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-md">
                  <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-blue-500"></span>
                  <span className="text-xs font-bold text-gray-800 md:text-sm">
                    Chuyên nghiệp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
