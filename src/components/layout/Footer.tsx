"use client";

import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YtbIcon,
} from "@/components/common/icons";
import { CONTACTS } from "@/lib/constants/content";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 max-sm:pb-10 overflow-hidden bg-[#820000] text-white">
      <div className="container mx-auto px-4 py-6 md:py-10 lg:px-8">
        {/* Top Section */}
        <div className="mb-8 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <Link
            href="/"
            className="text-4xl uppercase font-black transition-transform hover:scale-105"
          >
            Logo
          </Link>
          <div className="hidden h-16 w-1.5 bg-white/20 md:block"></div>
          <p className="max-w-2xl text-lg font-black uppercase leading-tight md:text-2xl">
            Công ty CP May An Hưng - Kiến tạo cơ hội, Nâng tầm cuộc sống
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="mb-8 text-2xl font-black uppercase tracking-tight text-gold-primary">
              Thông tin liên hệ
            </h3>

            <div className="group mb-8 overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl transition-all hover:border-gold-primary/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.636603099!2d105.32!3d18.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ3JzAwLjAiTiAxMDXCsDE5JzEyLjAiRQ!5e0!3m2!1svi!2s!4v1715070000000!5m2!1svi!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps"
                className="grayscale transition-all duration-700 group-hover:grayscale-0"
              ></iframe>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 shrink-0">
                  <MapPin className="size-6 text-gold-primary" />
                </div>
                <p className="text-lg font-bold leading-relaxed">
                  {CONTACTS.address.label}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 shrink-0">
                  <Mail className="size-6 text-gold-primary" />
                </div>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="text-lg font-bold hover:text-gold-primary transition-colors"
                >
                  {CONTACTS.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 shrink-0">
                  <Phone className="size-6 text-gold-primary" />
                </div>
                <a
                  href={`tel:${CONTACTS.hotline}`}
                  className="text-lg font-bold hover:text-gold-primary transition-colors"
                >
                  {CONTACTS.hotline}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-8 text-2xl font-black uppercase tracking-tight text-gold-primary">
              Về An Hưng
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#about-section"
                  className="flex items-center gap-2 text-lg font-bold hover:text-gold-primary transition-all hover:translate-x-2"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="#quality-expert"
                  className="flex items-center gap-2 text-lg font-bold hover:text-gold-primary transition-all hover:translate-x-2"
                >
                  Chế độ phúc lợi
                </Link>
              </li>
              <li>
                <Link
                  href="#detection-section"
                  className="flex items-center gap-2 text-lg font-bold hover:text-gold-primary transition-all hover:translate-x-2"
                >
                  Vị trí tuyển dụng
                </Link>
              </li>
              <li>
                <Link
                  href="#register-form"
                  className="flex items-center gap-2 text-lg font-bold hover:text-gold-primary transition-all hover:translate-x-2"
                >
                  Đăng ký ứng tuyển
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-12">
            <div>
              <h3 className="mb-8 text-2xl font-black uppercase tracking-tight text-gold-primary">
                Kết nối với chúng tôi
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={CONTACTS.facebookHskUrl}
                  target="_blank"
                  className="flex size-14 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(24,119,242,0.4)]"
                >
                  <FacebookIcon className="size-8" />
                </a>
                <a
                  href={CONTACTS.tiktokUrl}
                  target="_blank"
                  className="flex size-14 items-center justify-center rounded-2xl bg-black text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                >
                  <TiktokIcon className="size-8" />
                </a>
                <a
                  href={CONTACTS.igUrl}
                  target="_blank"
                  className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FF3DA1] to-[#FF7A00] text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,61,161,0.4)]"
                >
                  <InstagramIcon className="size-8" />
                </a>
                <a
                  href={CONTACTS.ytbkUrl}
                  target="_blank"
                  className="flex size-14 items-center justify-center rounded-2xl bg-[#EC3323] text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(236,51,35,0.4)]"
                >
                  <YtbIcon className="size-8" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-black uppercase tracking-tight text-gold-primary">
                Thông tin pháp lý
              </h3>
              <div className="space-y-2 text-lg font-bold opacity-80">
                <p>CÔNG TY CỔ PHẦN MAY AN HƯNG</p>
                <p>Mã số thuế: 00000000000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-lg font-bold opacity-60">
          <p>
            © {new Date().getFullYear()} Công ty CP May An Hưng. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Decorative side blurs */}
      <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-gold-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute -right-40 top-0 size-96 rounded-full bg-white/5 blur-[120px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
