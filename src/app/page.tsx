import { ScrollAnimation } from "@/components/common/ScrollAnimation";
import AdvisorQA from "@/components/features/home/AdvisorQA/AdvisorQA";
import HeroSection from "@/components/features/home/HeroSession";
import SimpleFormRegister from "@/components/features/home/SimpleFormRegister";
import AboutSection from "@/components/features/home/about-section";
import DetectionSection from "@/components/features/home/detection/Detection";
import QualityExpert from "@/components/features/home/qualityExpert/QualityExpert";
import StudentSuccess from "@/components/features/home/studentSuccess/StudentSuccess";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <ScrollAnimation variant="fade">
        <AboutSection />
      </ScrollAnimation>

      <ScrollAnimation variant="slideUp">
        <DetectionSection />
      </ScrollAnimation>

      <ScrollAnimation variant="slideUp">
        <QualityExpert />
      </ScrollAnimation>

      <ScrollAnimation variant="slideUp">
        <StudentSuccess />
      </ScrollAnimation>

      <ScrollAnimation variant="slideUp">
        <AdvisorQA />
      </ScrollAnimation>

      <ScrollAnimation variant="scale">
        <SimpleFormRegister />
      </ScrollAnimation>
    </div>
  );
}
