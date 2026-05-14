"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IMAGES } from "@/lib/constants/images";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const SimpleFormRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    experience: "",
    position: "Công nhân may",
    note: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "Ứng tuyển thành công! Bộ phận nhân sự sẽ liên hệ với bạn sớm nhất.",
      );
      setFormData({
        name: "",
        phone: "",
        experience: "",
        position: "Công nhân may",
        note: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register-form"
      className="relative md:py-0 bg-white overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="relative mx-auto w-full overflow-hidden bg-gradient-to-l from-[#B90E0A] to-[#7D1900] px-4 py-4 md:p-16 shadow-[0_20px_50px_rgba(185,14,10,0.3)]">
          {/* Decorative background elements */}
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 size-64 rounded-full bg-gold-primary/10 blur-3xl"></div>

          <div className="grid grid-cols-1 items-center gap-4 lg:gap-10">
            <div className="relative z-10 text-white">
              <div className="mb-4 flex items-center gap-4">
                <Image
                  src={IMAGES.home.LearningBook}
                  alt="Book Icon"
                  width={80}
                  height={80}
                  className="h-auto w-16 md:w-20 animate-bounce-slow"
                />
                <h2 className="text-xl font-black uppercase md:text-5xl lg:text-6xl tracking-tight leading-tight">
                  Việc tốt - Thu nhập cao
                </h2>
              </div>
            </div>

            <div className="relative z-10 w-full max-w-full lg:max-w-3xl m-auto">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-3xl bg-white/10 backdrop-blur-xl p-6 md:p-10 border border-white/20 shadow-2xl"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white md:text-base">
                      Họ và tên:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Họ và tên"
                      className="h-14 w-full rounded-xl bg-white px-5 text-gray-800 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white md:text-base">
                      Số điện thoại:
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Số điện thoại"
                      className="h-14 w-full rounded-xl bg-white px-5 text-gray-800 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white md:text-base">
                      Vị trí quan tâm:
                    </label>
                    <Select
                      value={formData.position}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          position: value ?? "",
                        })
                      }
                    >
                      <SelectTrigger className="h-14 w-full rounded-xl bg-white px-5 text-gray-800 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium border-none shadow-none">
                        <SelectValue placeholder="Chọn vị trí" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="Công nhân may">
                          Công nhân may
                        </SelectItem>
                        <SelectItem value="Nhân viên kiểm hàng (QC)">
                          Nhân viên kiểm hàng (QC)
                        </SelectItem>
                        <SelectItem value="Nhân viên đóng gói">
                          Nhân viên đóng gói
                        </SelectItem>
                        <SelectItem value="Các vị trí khác">
                          Các vị trí khác
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white md:text-base">
                      Kinh nghiệm làm việc:
                    </label>
                    <input
                      type="text"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      placeholder="VD: Đã làm may 1 năm hoặc Chưa có kinh nghiệm"
                      className="h-14 w-full rounded-xl bg-white px-5 text-gray-800 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white md:text-base">
                    Câu hỏi khác:
                  </label>
                  <textarea
                    value={formData.note}
                    onChange={(e) =>
                      setFormData({ ...formData, note: e.target.value })
                    }
                    placeholder="Viết câu hỏi của bạn tại đây..."
                    className="h-32 w-full rounded-xl bg-white p-5 text-gray-800 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-16 md:h-20 rounded-2xl bg-gradient-to-r from-gold-primary to-yellow-400 text-primary text-xl md:text-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed group/btn"
                >
                  <span className="flex items-center justify-center gap-3">
                    {loading ? "Đang gửi..." : "Ứng tuyển ngay"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleFormRegister;
