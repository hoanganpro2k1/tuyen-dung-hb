import AdvisorQA from "@/components/features/home/AdvisorQA/AdvisorQA";
import HeroSection from "@/components/features/home/HeroSession";
import SimpleFormRegister from "@/components/features/home/SimpleFormRegister";
import DetectionSection from "@/components/features/home/detection/Detection";
import QualityExpert from "@/components/features/home/qualityExpert/QualityExpert";
import Roadmap from "@/components/features/home/roadmap/Roadmap";
import StudentSuccess from "@/components/features/home/studentSuccess/StudentSuccess";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <DetectionSection />
      <QualityExpert />
      <StudentSuccess />
      <Roadmap />
      <AdvisorQA />
      <SimpleFormRegister />
    </div>
  );
}
