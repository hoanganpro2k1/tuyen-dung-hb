'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AlignJustify, X, ChevronDown } from 'lucide-react';
import { IMAGES } from '@/lib/constants/images';
import { TitleMenu } from '@/lib/constants/enums';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: TitleMenu.INTRODUCE, href: '/gioi-thieu' },
  { name: TitleMenu.KHOA_HOC, href: '/khoa-hoc' },
  { name: TitleMenu.LICH_KHAI_GIANG, href: '/lich-khai-giang' },
  { name: TitleMenu.CAM_NANG, href: '/cam-nang' },
  { name: TitleMenu.LIEN_HE, href: '/lien-he' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] w-full transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-2 shadow-xl' 
          : 'bg-[#F7FAFC] py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 block transition-transform hover:scale-105">
            <Image
              src={IMAGES.logo}
              alt="Học Bá Education"
              width={120}
              height={60}
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-base font-black uppercase tracking-tight transition-colors hover:text-red-primary',
                    pathname === item.href ? 'text-red-primary' : 'text-[#373737]'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/dang-ky">
              <Button className="rounded-xl bg-red-primary px-8 py-6 text-base font-black uppercase tracking-widest text-white shadow-xl hover:bg-[#8A0000] hover:scale-105 transition-all">
                Đăng ký ngay
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-10 block lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="size-8 text-red-primary" />
            ) : (
              <AlignJustify className="size-8 text-[#373737]" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-0 bg-white transition-all duration-500 lg:hidden',
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10 px-8 pt-20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-2xl font-black uppercase tracking-widest transition-all',
                pathname === item.href ? 'text-red-primary scale-110' : 'text-[#373737]'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/dang-ky" onClick={() => setIsMenuOpen(false)} className="w-full">
            <Button className="w-full rounded-2xl bg-red-primary py-8 text-xl font-black uppercase tracking-widest text-white shadow-2xl">
              Đăng ký ngay
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
