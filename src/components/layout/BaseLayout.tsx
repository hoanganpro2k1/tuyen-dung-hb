"use client";

import { Toaster } from "@/components/ui/sonner";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-gilroy antialiased">
      <Header />
      <main className="flex-1 pt-14 lg:pt-28">{children}</main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default BaseLayout;
