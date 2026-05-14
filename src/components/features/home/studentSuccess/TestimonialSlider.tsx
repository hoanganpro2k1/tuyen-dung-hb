"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export type TestimonialItem = {
  name: string;
  role: string;
  location: string;
  rating: number;
  hskLevel: string;
  timeSpent: string;
  content: string;
  likes: number;
  shares: number;
  avatar: string;
};

interface TestimonialSliderProps {
  items: TestimonialItem[];
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  items,
}) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      breakpoints: {
        "(min-width: 1024px)": { slidesToScroll: 2 },
      },
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <div className="mx-auto overflow-hidden pb-10 pt-6 sm:pb-10 sm:pt-10 xl:max-w-[1232px] 3xl:max-w-[1440px]">
      <div className="px-4" ref={emblaRef}>
        <div className="flex gap-8 md:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_95%] md:flex-[0_0_85%] lg:flex-[0_0_65%]"
            >
              <TestimonialCard {...item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
