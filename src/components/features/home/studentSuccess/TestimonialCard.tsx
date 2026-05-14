"use client";

import { HeartIcon, LikeIcon, ShareIcon } from "@/components/common/icons";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

interface TestimonialCardProps {
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
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  location,
  rating,
  hskLevel,
  timeSpent,
  content,
  likes,
  shares,
  avatar,
  index = 0,
}) => {
  return (
    <div className="relative flex h-full select-none flex-col rounded-[32px] border-2 border-[#FFDFDF] bg-white p-6 shadow-xl transition-all duration-500 hover:shadow-2xl md:p-10 group">
      <div className="mb-8 flex items-start justify-between">
        <div className="flex items-center gap-5">
          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-4 border-gold-primary shadow-lg md:h-24 md:w-24 group-hover:scale-105 transition-transform duration-500">
            <img
              width={150}
              height={150}
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-black uppercase leading-tight text-primary md:text-[32px]">
              {name}
            </h3>
            <p className="my-1 text-sm font-bold text-[#373737] md:text-[22px] opacity-80">
              {role}, {location}
            </p>
            <div className="mt-2 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={cn(
                    i < rating
                      ? "fill-gold-primary text-gold-primary"
                      : "text-gray-200",
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex h-[50px] w-[90px] flex-shrink-0 flex-col items-center justify-center rounded-3xl bg-[#017D31] text-white shadow-2xl md:h-[90px] md:w-[160px] transform rotate-3 group-hover:rotate-0 transition-transform">
          <span className="text-[18px] font-black uppercase md:text-[34px] md:leading-none">
            {hskLevel}
          </span>
          <span className="text-[10px] font-bold md:text-base opacity-90">
            {timeSpent}
          </span>
        </div>
      </div>

      <div className="flex-grow">
        <p className="mb-10 text-justify text-base font-medium italic leading-relaxed text-[#504E4E] md:text-xl border-l-4 border-red-primary/20 pl-6">
          {`"${content}"`}
        </p>
      </div>

      <div className="flex items-center gap-8 border-t border-gray-100 pt-8 mt-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            {index % 2 === 0 ? (
              <div className="flex items-center -space-x-2">
                <HeartIcon className="size-8 drop-shadow-md hover:scale-110 transition-transform cursor-pointer" />
                <LikeIcon className="size-8 drop-shadow-md hover:scale-110 transition-transform cursor-pointer" />
              </div>
            ) : (
              <div className="flex items-center -space-x-2">
                <LikeIcon className="size-8 drop-shadow-md hover:scale-110 transition-transform cursor-pointer" />
                <HeartIcon className="size-8 drop-shadow-md hover:scale-110 transition-transform cursor-pointer" />
              </div>
            )}
            <span className="text-sm font-black text-[#373737] md:text-lg">
              {likes.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-4 group/share cursor-pointer">
            <ShareIcon className="size-7 opacity-80 group-hover/share:opacity-100 group-hover/share:scale-110 transition-all" />
            <span className="text-sm font-black text-[#373737] md:text-lg">
              {shares.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
