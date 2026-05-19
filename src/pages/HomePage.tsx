import {
  AlertCircle,
  Car,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileSearch,
  Leaf,
  MapPinned,
  PhoneCall,
  ShieldCheck,
  Trash2,
  TreePine,
  Building2,
  Landmark,
  Siren,
  MapPin,
  User,
  Phone,
  Download,
  Map,
  Users,
  FileCheck2,
  CarFront,
  BadgeHelp,
  Receipt,
  SearchCheck,
  CarTaxiFront,
  IdCard,
  HeartPulse,
  Newspaper,
  UserCircle2,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import type { QuickActionItem, ServiceItem, StatusItem } from "@/types";
import { toPersianDigits } from "@/utils/format";
import Link from "next/link";

const services: ServiceItem[] = [
  {
    id: 1,
    title: "نقشه و پوشش خدمات",
    description: "مشاهده محدوده‌ها و دسترسی خدمات شهری روی نقشه",
    icon: MapPinned,
    color: "soft",
  },
  {
    id: 2,
    title: "خدمات خودرو",
    description: "عوارض خودرو، طرح ترافیک، پارک و معاینه فنی",
    icon: Car,
    color: "primary",
  },
  {
    id: 3,
    title: "خدمات شهری",
    description: "آبیاری، پسماند، آرامستان، درخواست‌های محلی",
    icon: Building2,
    color: "navy",
  },
  {
    id: 4,
    title: "پیگیری درخواست‌ها",
    description: "مشاهده و رهگیری وضعیت درخواست‌های ثبت شده",
    icon: FileSearch,
    color: "light",
  },
];

const popularServices = [
  {
    id: 1,
    title: "استعلام نمره منفی گواهینامه",
    subtitle: "خدمات راهور و گواهینامه",
    icon: <IdCard size={20} />,
    tone: "blue",
  },
  {
    id: 2,
    title: "مرخصی تاکسی",
    subtitle: "درخواست مجوز تاکسیرانی",
    icon: <CarTaxiFront size={20} />,
    tone: "yellow",
  },
  {
    id: 3,
    title: "استعلام عوارض خودرو",
    subtitle: "عوارض و خدمات خودرو",
    icon: <Receipt size={20} />,
    tone: "gray",
  },
  {
    id: 4,
    title: "سامانه ۱۳۷",
    subtitle: "ثبت و پیگیری درخواست",
    icon: <ClipboardList size={20} />,
    tone: "navy",
  },
  {
    id: 5,
    title: "استعلام تخلفات ساختمانی",
    subtitle: "خدمات شهرسازی",
    icon: <Building2 size={20} />,
    tone: "blue",
  },
  {
    id: 6,
    title: "اشیای گمشده",
    subtitle: "پیگیری و ثبت مورد",
    icon: <SearchCheck size={20} />,
    tone: "yellow",
  },
  {
    id: 7,
    title: "استعلام بیمه تأمین اجتماعی",
    subtitle: "خدمات عمومی",
    icon: <HeartPulse size={20} />,
    tone: "gray",
  },
  {
    id: 8,
    title: "استعلام خلافی با جزئیات",
    subtitle: "خدمات راهور",
    icon: <BadgeHelp size={20} />,
    tone: "navy",
  },
];

const statuses: StatusItem[] = [
  {
    id: 1,
    title: "در حال بررسی",
    count: 12,
    type: "pending",
    icon: Clock3,
  },
  {
    id: 2,
    title: "تکمیل مدارک",
    count: 4,
    type: "docs",
    icon: AlertCircle,
  },
  {
    id: 3,
    title: "تکمیل شده",
    count: 28,
    type: "done",
    icon: CheckCircle2,
  },
];

function HomePage() {
  return (
    <div className="app-shell" dir="rtl">
      <Header />

      <main className="container main-content">
        {/* Hero */}
        <section className="hero">
          <div className="hero-main">


<div className="hero-video">
  <video autoPlay muted loop playsInline>
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>
</div>


  <div className="hero-content">
    <div className="hero-badge">
      <ShieldCheck size={14} />
      <span>درگاه یکپارچه خدمات شهری سنندج</span>
    </div>

    <h2>
      تجربه‌ای مدرن، سریع و ساده
      <br />
      برای خدمات شهروندی
    </h2>

    <p>
      ثبت و پیگیری درخواست‌ها، پرداخت عوارض، استفاده از خدمات شهری و
      دسترسی به سرویس‌های پرکاربرد در یک صفحه یکپارچه.
    </p>

<div className="hero-actions">
  <Link href="/download">
    <button className="btn btn-white">
      <Download size={16} />
      دانلود اپلیکیشن
    </button>
  </Link>
  <button className="btn btn-outline">مشاهده نقشه شهر</button>
</div>
  </div>

  <div className="hero-stats">
    <div className="stat-box">
      <span>درخواست فعال</span>
      <strong>{toPersianDigits(16)}</strong>
    </div>
    <div className="stat-box">
      <span>خدمات امروز</span>
      <strong>{toPersianDigits(42)}</strong>
    </div>
    <div className="stat-box">
      <span>اعلان جدید</span>
      <strong>{toPersianDigits(3)}</strong>
    </div>
  </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="panel">
          <div className="panel popular-services-panel">
<SectionTitle
  title="خدمات پرکاربرد"
  actionText="مشاهده همه"
  actionLink="/sanandaj-man"
/>
  <div className="popular-marquee">
    <div className="popular-marquee__track">
      {/* بار اول */}
      {popularServices.map((item) => (
        <button key={`a-${item.id}`} className={`popular-card tone-${item.tone}`}>
          <div className="popular-card__text">
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
          <div className="popular-card__icon">{item.icon}</div>
        </button>
      ))}

      {/* تکرار برای لوپ بی‌نهایت */}
      {popularServices.map((item) => (
        <button key={`b-${item.id}`} className={`popular-card tone-${item.tone}`}>
          <div className="popular-card__text">
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
          <div className="popular-card__icon">{item.icon}</div>
        </button>
      ))}
    </div>
  </div>
</div>
        </section>

        {/* Services + Sidebar */}
        <section className="content-grid">
<div className="panel city-highlight-panel">
  <SectionTitle title="خدمات اصلی" actionText="دسته‌بندی خدمات" />

  <div className="city-highlight-grid">
    {/* باکس تفکیک زباله */}
    <div className="waste-card">
      <div className="waste-card__content">
        <h3>تفکیک زباله از مبدا</h3>

        {/* اگر عکس/ایلوستریشن داری */}
        <div className="waste-card__image">
          <img src="/images/trash.png" alt="تفکیک زباله" />
        </div>

        <div className="waste-card__actions">
          <button className="btn btn-primary">درخواست</button>
          <button className="btn btn-outline-dark">پیگیری</button>
        </div>
      </div>
    </div>

    {/* باکس آمار شهر سنندج */}
<div className="city-stats-card">
  <div className="city-stats-card__header">
    <h3>اطلاعات شهر سنندج</h3>
  </div>

  <div className="city-stats-items">
    
    {/* آیتم ۱: جمعیت */}
    <div className="city-stat-item">
      <div className="city-stat-item__icon">
        <Users size={20} />
      </div>
      <div className="city-stat-item__text">
        <span>جمعیت شهر سنندج</span>
        <strong>{toPersianDigits("۵۰۴۰۳۲")}</strong>
      </div>
    </div>

    {/* آیتم ۲: مساحت */}
    <div className="city-stat-item">
      <div className="city-stat-item__icon">
        <Map size={20} />
      </div>
      <div className="city-stat-item__text">
        <span>مساحت شهر سنندج</span>
        <strong>{toPersianDigits("۴۰۹۵")} هکتار</strong>
      </div>
    </div>

    {/* آیتم جدید: کاربران سامانه */}
    <div className="city-stat-item">
      <div className="city-stat-item__icon">
        <UserCircle2 size={20} />   {/* یا Users اگر ترجیح می‌دی */}
      </div>
      <div className="city-stat-item__text">
        <span>کاربران سامانه</span>
        <strong>{toPersianDigits("۱۲۸۴۷")}</strong>
      </div>
    </div>

  </div>
</div>
  </div>
</div>

<div className="service-buttons-wrap">
  <div className="service-buttons">
    <button className="service-btn service-btn--card">
      <span className="service-btn__icon">
        <User size={20} />
      </span>
      <span className="service-btn__text">ملاقات عمومی</span>
    </button>

    <button className="service-btn service-btn--card">
      <span className="service-btn__icon">
        <Phone size={20} />
      </span>
      <span className="service-btn__text">ارتباط با شهردار</span>
    </button>
  </div>

  <div className="service-map-row">
    <button className="service-btn service-btn--map">
      <span className="service-btn__icon">
        <MapPin size={20} />
      </span>
      <span className="service-btn__text">نقشه شهر سنندج</span>
      <span className="service-btn__arrow">←</span>
    </button>
  </div>
</div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;