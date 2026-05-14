"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { SearchX } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Link from "../ui/Link";

interface SlideData {
  id: string;
  label: string;
  description: string;
  image: string | StaticImageData;
  href: string;
}

interface DetectionSliderProps {
  slides: SlideData[];
}

export const DetectionSlider: React.FC<DetectionSliderProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    duration: 30,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <div className="container relative z-10 mx-auto px-4">
      <div className="mb-8 flex flex-row items-center justify-center gap-3 text-white">
        <SearchX className="h-6 w-6 md:h-8 md:w-8 text-gold-primary" />
        <h2 className="text-xl font-bold tracking-wide md:text-[36px] text-center">
          Khám phá các vị trí
        </h2>
      </div>

      <div className="mb-12 flex items-center justify-center gap-4">
        {slides.map((slide, index) => {
          const isActive = selectedIndex === index;

          return (
            <button
              key={slide.id}
              onClick={() => scrollTo(index)}
              className={cn(
                "relative flex items-center justify-center rounded-[18px] px-6 md:px-12 text-sm md:text-[26px] font-black transition-all h-10 md:h-12",
                "border-[1.6px] bg-white text-red-primary border-red-primary/20 shadow-md",
                isActive &&
                  "active border-[2.5px] bg-gradient-to-r from-gold-primary to-red-primary text-white opacity-100 md:h-16 lg:px-24 scale-110 md:scale-100",
              )}
            >
              <h3 className="relative z-10 text-lg uppercase">{slide.label}</h3>
              {isActive && (
                <div
                  className={cn(
                    "absolute -bottom-[1px] left-1/2 z-0 -translate-x-1/2 translate-y-full transition-all duration-300",
                  )}
                  style={{
                    width: "25px",
                    height: "30px",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 35 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full drop-shadow-sm"
                  >
                    <path
                      d="M17.5 41L0.612497 0.5L34.3875 0.5L17.5 41Z"
                      fill="#B90E0A"
                      fillOpacity={1}
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto max-w-5xl">
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-red-primary shadow-xl transition-all hover:bg-red-primary hover:text-white active:scale-95 md:flex"
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white text-red-primary shadow-xl transition-all hover:bg-red-primary hover:text-white active:scale-95 md:flex"
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div
          className="mx-auto shadow-2xl overflow-hidden rounded-[2rem] bg-white border border-gold-primary/10"
          ref={emblaRef}
        >
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
                <div
                  className={cn(
                    "group flex flex-col md:flex-row items-center p-4 md:p-10 lg:p-16 transition-all duration-500",
                    selectedIndex === index
                      ? "opacity-100"
                      : "opacity-0 md:opacity-0",
                  )}
                >
                  <div className="relative mb-8 md:mb-0 md:mr-12 lg:mr-20 flex-shrink-0">
                    <div className="relative h-64 w-64 rounded-full md:h-80 md:w-80 lg:h-[336px] lg:w-[346px] transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={slide.image}
                        alt={slide.label}
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 768px) 256px, 346px"
                      />
                      <div className="absolute inset-0 bg-red-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
                    <p
                      className="mb-8 text-base md:text-[20px] text-justify font-medium leading-relaxed text-[#373737]"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    />
                    <Link
                      href={slide.href}
                      className="px-10 py-4 font-bold shadow-gold/30"
                    >
                      XEM CHI TIẾT KHOÁ HỌC
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
