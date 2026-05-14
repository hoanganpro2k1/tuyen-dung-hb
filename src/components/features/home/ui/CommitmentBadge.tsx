import { cn } from "@/lib/utils";
import React from "react";

interface CommitmentBadgeProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "h2" | "div";
}

const CommitmentBadge: React.FC<CommitmentBadgeProps> = ({
  children,
  className,
  as: Tag = "p",
}) => {
  return (
    <Tag
      className={cn(
        "flex items-center py-3 max-sm:w-full justify-center rounded-[8px] bg-gradient-to-r from-[#e43307] to-[#f54744] px-2 text-center text-[18px] font-black uppercase text-white sm:px-3 sm:py-4 sm:text-lg lg:text-[32px] shadow-lg",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default CommitmentBadge;
