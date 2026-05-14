import { Home } from "lucide-react";

const AboutSection = () => {
  return (
    <div
      id="about-section"
      className="rounded-t-lg p-4 bg-gradient-to-b from-[#FFEFEF] to-[#FFFFFF00] lg:rounded-tl-xl lg:pl-10 xl:-mr-[calc((100vw-1380px)/2)] xl:pr-[calc((100vw-1380px)/2)]"
    >
      <div className="flex items-center gap-2">
        <Home className="size-5" />
        <span className="text-xl font-bold text-black">Giới thiệu</span>
      </div>
      <div className="flex flex-col mt-3 gap-3">
        <h2 className="bg-gradient-to-r from-[#7D1900] to-[#B90E0A] bg-clip-text text-[18px] font-black uppercase leading-tight text-transparent md:text-[42px]">
          Công ty CP May An Hưng
        </h2>
        <div>
          <p className="text-base text-justify font-normal text-[#051A34]">
            Với nhiều năm kinh nghiệm trong lĩnh vực sản xuất và xuất khẩu sang
            các thị trường lớn như Mỹ và Châu Âu, công ty không ngừng khẳng định
            vị thế bằng việc tạo ra cơ hội việc làm ổn định cho hàng nghìn lao
            động tại Nghệ An và các khu vực lân cận. Môi trường làm việc hiện
            đại, thu nhập cạnh tranh cùng chính sách phúc lợi rõ ràng giúp người
            lao động yên tâm gắn bó lâu dài, đồng thời cân bằng giữa công việc
            và cuộc sống, dành nhiều thời gian cho gia đình và những người thân
            yêu.
          </p>
        </div>
      </div>
      <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl shadow-2xl lg:mt-12">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/k3TYv1L52Ik"
          title="Giới thiệu Công ty CP May An Hưng"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutSection;
