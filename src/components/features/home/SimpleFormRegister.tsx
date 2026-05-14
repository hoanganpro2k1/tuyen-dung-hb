'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/constants/images';
import { toast } from 'sonner';

const SimpleFormRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    target: '',
    wishlist_courses: 'HSK 9 cấp ( HSK1- HSK6 )',
    note: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
      setFormData({
        name: '',
        phone: '',
        target: '',
        wishlist_courses: 'HSK 9 cấp ( HSK1- HSK6 )',
        note: '',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Có lỗi xảy ra, vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register-form" className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#7D1900] to-red-primary p-8 md:p-16 shadow-[0_20px_50px_rgba(185,14,10,0.3)]">
          {/* Decorative background elements */}
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 size-64 rounded-full bg-gold-primary/10 blur-3xl"></div>
          
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative z-10 text-white">
              <div className="mb-8 flex items-center gap-4">
                <Image 
                  src={IMAGES.home.LearningBook} 
                  alt="Book Icon" 
                  width={80} 
                  height={80} 
                  className="h-auto w-16 md:w-20 animate-bounce-slow" 
                />
                <h2 className="text-3xl font-black uppercase md:text-5xl lg:text-6xl tracking-tight leading-tight">
                  Đăng ký <span className="text-gold-primary">tư vấn</span> ngay
                </h2>
              </div>
              <p className="mb-10 text-lg font-medium leading-relaxed opacity-90 md:text-2xl">
                Bắt đầu hành trình chinh phục tiếng Trung cùng lộ trình cá nhân hóa và đội ngũ chuyên gia hàng đầu.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <span className="text-xl font-black text-gold-primary">1</span>
                  </div>
                  <p className="text-lg font-bold md:text-xl">Cam kết 100% đầu ra bằng văn bản</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <span className="text-xl font-black text-gold-primary">2</span>
                  </div>
                  <p className="text-lg font-bold md:text-xl">Học lại miễn phí nếu không đạt kết quả</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <span className="text-xl font-black text-gold-primary">3</span>
                  </div>
                  <p className="text-lg font-bold md:text-xl">Tiết kiệm 50% thời gian so với cách học cũ</p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-white/10 backdrop-blur-xl p-6 md:p-10 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white md:text-base">Họ và tên:</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Họ và tên"
                      className="h-14 w-full rounded-xl bg-white px-5 text-gray-800 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white md:text-base">Số điện thoại:</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Số điện thoại"
                      className="h-14 w-full rounded-xl bg-white px-5 text-gray-800 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white md:text-base">Khóa học quan tâm:</label>
                    <select
                      value={formData.wishlist_courses}
                      onChange={(e) => setFormData({ ...formData, wishlist_courses: e.target.value })}
                      className="h-14 w-full rounded-xl bg-white px-5 text-gray-800 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium appearance-none"
                    >
                      <option>HSK 9 cấp ( HSK1- HSK6 )</option>
                      <option>Tiếng Trung cho người đi làm</option>
                      <option>Khóa luyện thi TOCFL</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-white md:text-base">Mục tiêu học:</label>
                    <input
                      type="text"
                      value={formData.target}
                      onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                      placeholder="VD: Thi HSK4 trong 3 tháng"
                      className="h-14 w-full rounded-xl bg-white px-5 text-gray-800 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white md:text-base">Câu hỏi khác:</label>
                  <textarea
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Viết câu hỏi của bạn tại đây..."
                    className="h-32 w-full rounded-xl bg-white p-5 text-gray-800 placeholder:text-gray-400 outline-none focus:ring-4 focus:ring-gold-primary/30 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-16 md:h-20 rounded-2xl bg-gradient-to-r from-gold-primary to-yellow-400 text-red-primary text-xl md:text-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed group/btn"
                >
                  <span className="flex items-center justify-center gap-3">
                    {loading ? 'Đang gửi...' : 'Nhận tư vấn ngay'}
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
