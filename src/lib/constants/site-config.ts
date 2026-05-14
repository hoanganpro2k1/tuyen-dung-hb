const footerLogo = "/images/footer.svg";
const favIcon = "/images/site-logo.png";
const siteLogo = "/images/site-logo.png";
import { IMAGES } from "@/lib/constants/images";

export const SITE_SETTINGS = {
  default_country: "Viet Nam",
  social_login_github_status: "0",
  default_currency: null,
  site_email: "tuyendung@mayanhung.com.vn",
  site_phone: "+84 238 3861 786",

  // SEO & Meta
  meta_title:
    "Tuyển dụng Công ty CP May An Hưng - Cơ hội việc làm ổn định, thu nhập cao",
  meta_description:
    "Công ty CP May An Hưng tuyển dụng hàng nghìn lao động phổ thông và nhân viên văn phòng. Môi trường chuyên nghiệp, phúc lợi tốt, đi làm ngay.",
  meta_keywords: [
    "Tuyển dụng May An Hưng",
    "Việc làm Nghệ An",
    "Công ty CP May An Hưng",
    "Tuyển dụng công nhân may",
  ],
  site_url:
    process.env.NEXT_PUBLIC_CLIENT_URL ||
    "https://tuyen-dung-anhung.ah-startup.asia",

  // Analytics
  google_analytics_tracking_id: "G-YJJT3GGKZL",

  // Branding
  site_name: "May An Hưng Recruitment",
  site_legal_name: "Công ty Cổ phần May An Hưng",
  site_alternate_name: "An Hưng Garment",
  site_logo: siteLogo,
  site_logo_meta: IMAGES.logoMeta,
  site_footer_logo: footerLogo,
  site_fav_icon: favIcon,
  site_copy_right_text: "Bản quyền thuộc về Công ty CP May An Hưng",

  // Business Info
  price_range: "$$", // $ (rẻ), $$ (trung bình), $$$ (cao), $$$$ (rất cao)

  // Social Media
  // Social Media
  social_facebook_education: "https://tuyen-dung-anhung.ah-startup.asia",
  social_facebook_hocbahsk: "https://tuyen-dung-anhung.ah-startup.asia",
  social_instagram: "https://tuyen-dung-anhung.ah-startup.asia",
  social_zalo: "https://zalo.me/0983439381",

  // Address
  address_street: "Khối 1, Thị trấn Tân Kỳ",
  address_locality: "Huyện Tân Kỳ, Tỉnh Nghệ An",
  address_postal_code: "43000",
  address_country: "VN",

  // Geo Coordinates
  geo_latitude: 19.0116,
  geo_longitude: 105.2533,
} as const;
