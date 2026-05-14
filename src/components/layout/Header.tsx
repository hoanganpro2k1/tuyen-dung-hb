"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Giới thiệu", href: "#about-section" },
  { name: "Việc làm", href: "#detection-section" },
  { name: "Phúc lợi", href: "#quality-expert" },
  { name: "Cảm nhận", href: "#student-success" },
  { name: "Hỏi đáp", href: "#advisor-qa" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white border-b border-gray-50 py-4 shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative text-lg uppercase text-primary font-black z-10 block transition-transform hover:scale-105"
          >
            Logo
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm font-black uppercase tracking-tight transition-all duration-300 hover:text-red-primary group md:text-base",
                    pathname === item.href
                      ? "text-red-primary"
                      : "text-[#373737]",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-red-primary transition-all duration-300 group-hover:w-full",
                      pathname === item.href ? "w-full" : "w-0",
                    )}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="#register-form">
              <Button className="rounded-xl bg-red-primary px-8 py-6 text-base font-black uppercase tracking-widest text-white shadow-xl hover:bg-[#8A0000] hover:scale-105 transition-all">
                Ứng tuyển ngay
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-10 block mr-4 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="max-sm:size-5 size-8 text-red-primary" />
            ) : (
              <AlignJustify className="max-sm:size-5 size-8 text-[#373737]" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm transition-all duration-500 lg:hidden",
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <Link
              href="/"
              className="text-xl uppercase text-primary font-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Logo
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="size-7 text-red-primary" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col gap-2 p-6 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "py-2 text-lg font-normal tracking-wider transition-all border-b border-gray-50 last:border-0",
                  pathname === item.href
                    ? "text-red-primary"
                    : "text-[#373737]",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Action */}
          <div className="mt-auto p-6 border-t border-gray-50">
            <Link
              href="#register-form"
              onClick={() => setIsMenuOpen(false)}
              className="w-full"
            >
              <Button className="w-full rounded-xl bg-red-primary py-7 text-lg font-black uppercase tracking-widest text-white shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                Ứng tuyển ngay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
