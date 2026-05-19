import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import SanandajSidebar from "@/components/layout/SanandajSidebar";
import styles from "@/styles/sanandajMan.module.css";
import {
  Search,
  Newspaper,
  FileText,
  Layers,
  Users,
  MapPin,
  PhoneCall,
  Info,
  CreditCard,
  Car,
  ClipboardList,
  Ticket,
  Trees,
  Trash2,
  CircleHelp,
  FileSearch,
  CarFront,
  Receipt,
  FileWarning,
  Landmark,
  Building2,
  AlertTriangle,
  Map,
  ParkingCircle,
  ScrollText,
  UserCircle2,
  ChevronDown,
  CarTaxiFront,
  IdCard,
  HeartPulse,
  Heart,
  IdCardLanyard,
  MapPinHouse,
  Banknote,
  AlignVerticalDistributeEnd,
  TreeDeciduous,
} from "lucide-react";

type Tone = "blue" | "yellow" | "gray";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tone: Tone;
  href: string; // مسیر صفحه مربوطه
};

type Section = {
  key: string;
  title: string;
  services: Service[];
};

function IconBox({
  tone,
  children,
}: {
  tone: Tone;
  children: React.ReactNode;
}) {
  const toneClass =
    tone === "yellow"
      ? styles.toneYellow
      : tone === "gray"
      ? styles.toneGray
      : styles.toneBlue;

  return <div className={`${styles.iconBox} ${toneClass}`}>{children}</div>;
}

function ServiceCard({
  item,
  onClick,
}: {
  item: Service;
  onClick: (href: string) => void;
}) {
  return (
    <button
      type="button"
      className={styles.card}
      aria-label={item.title}
      onClick={() => onClick(item.href)}
    >
      <div className={styles.cardInner}>
        <IconBox tone={item.tone}>{item.icon}</IconBox>

        <div style={{ minWidth: 0 }}>
          <div className={styles.cardTitle}>{item.title}</div>
          <div className={styles.cardSub}>{item.subtitle}</div>
        </div>
      </div>
    </button>
  );
}

function SectionBlock({
  title,
  services,
  rightAction,
  onCardClick,
}: {
  title: string;
  services: Service[];
  rightAction?: React.ReactNode;
  onCardClick: (href: string) => void;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <div className={styles.sectionTitle}>{title}</div>
        {rightAction ? rightAction : <span />}
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <ServiceCard key={s.id} item={s} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}

function toSoon(slug: string) {
  // ✅ فعلاً همه خدمات به یک صفحه "به‌زودی" می‌روند تا 404 نشه
  return `/sanandaj-man/soon?service=${encodeURIComponent(slug)}`;
}

export default function SanandajManDashboard() {
  const router = useRouter();

  const [q, setQ] = useState("");
  const [userName, setUserName] = useState("نام و نام خانوادگی");
  const [isProfileOpen, setIsProfileOpen] = useState(false);   // ← State جدید برای پروفایل
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    // ✅ اگر بعداً لاگین واقعی داشتی، اینجا از localStorage بخون
  }, []);

  const onCardClick = (href: string) => {
    router.push(href);
  };

  const SECTIONS: Section[] = useMemo(
    () => [
      {
        key: "popular",
        title: "خدمات پرکاربرد",
        services: [
          {
            id: "popular_insurance",
            title: "استعلام بیمه تأمین اجتماعی",
            subtitle: "خدمات عمومی",
            icon: <HeartPulse size={18} />,
            tone: "gray",
            href: toSoon("insurance"),
          },
          {
            id: "popular_violation_detail",
            title: "استعلام خلافی با جزئیات",
            subtitle: "خدمات راهور",
            icon: <FileText size={18} />,
            tone: "gray",
            href: toSoon("violation-detail"),
          },
          {
            id: "popular_taxi_leave",
            title: "مرخصی تاکسی",
            subtitle: "درخواست مجوز تاکسیرانی",
            icon: <CarTaxiFront size={18} />,
            tone: "yellow",
            href: toSoon("taxi-leave"),
          },
          {
            id: "popular_negative_points",
            title: "استعلام نمره منفی گواهینامه",
            subtitle: "خدمات راهور",
            icon: <IdCard size={18} />,
            tone: "blue",
            href: toSoon("negative-points"),
          },
          {
            id: "popular_137",
            title: "سامانه 137",
            subtitle: "ثبت و پیگیری درخواست‌ها",
            icon: <Info size={18} />,
            tone: "blue",
            href: toSoon("137"),
          },
          {
            id: "popular_car_toll",
            title: "استعلام عوارض خودرو",
            subtitle: "خدمات خودرو",
            icon: <CarFront size={18} />,
            tone: "gray",
            href: "/sanandaj-man/car-tax",
          },
          {
            id: "popular_lost_items",
            title: "اشیاء گمشده",
            subtitle: "ثبت و پیگیری",
            icon: <FileSearch size={18} />,
            tone: "yellow",
            href: "/sanandaj-man/lost-and-found",
          },
        ],
      },

      {
        key: "general",
        title: "خدمات عمومی",
        services: [
          {
            id: "general_insurance",
            title: "بیمه تأمین اجتماعی",
            subtitle: "خدمات عمومی",
            icon: <Heart size={18} />,
            tone: "blue",
            href: toSoon("general-insurance"),
          },
          {
            id: "general_passport_status",
            title: "استعلام وضعیت گذرنامه",
            subtitle: "خدمات عمومی",
            icon: <ScrollText size={18} />,
            tone: "blue",
            href: toSoon("passport-status"),
          },
          {
            id: "general_license_status",
            title: "استعلام وضعیت گواهینامه",
            subtitle: "خدمات عمومی",
            icon: <IdCard size={18} />,
            tone: "blue",
            href: toSoon("license-status"),
          },
          {
            id: "general_negative_points",
            title: "استعلام نمره منفی گواهینامه",
            subtitle: "خدمات عمومی",
            icon: <IdCard size={18} />,
            tone: "gray",
            href: toSoon("general-negative-points"),
          },
          {
            id: "general_registry",
            title: "سامانه ثبت احوال",
            subtitle: "استعلام‌های عمومی",
            icon: <IdCardLanyard size={18} />,
            tone: "gray",
            href: toSoon("civil-registry"),
          },
          {
            id: "general_postal",
            title: "دریافت آدرس با کدپستی",
            subtitle: "خدمات عمومی",
            icon: <MapPinHouse size={16} />,
            tone: "blue",
            href: toSoon("postal-code"),
          },
          {
            id: "general_help",
            title: "سامانه ثنا ( قوه قضایه)",
            subtitle: "خدمات عمومی",
            icon: <Landmark size={18} />,
            tone: "gray",
            href: toSoon("faq"),
          },
        ],
      },

      {
        key: "city",
        title: "خدمات شهری",
        services: [
          {
            id: "city_emergency",
            title: "تلفن‌های اضطراری",
            subtitle: "خدمات شهری",
            icon: <AlertTriangle size={18} />,
            tone: "gray",
            href: "/sanandaj-man/emergency-phones",
          },
          {
            id: "city_parking_fee",
            title: "کرایه حمل و نقل",
            subtitle: "خدمات شهری",
            icon: <Banknote size={16} />,
            tone: "gray",
            href: toSoon("parking-fee"),
          },
          {
            id: "city_location_guide",
            title: " جستجوی متوفی (آرامستان)",
            subtitle: "خدمات شهری",
            icon: <AlignVerticalDistributeEnd size={16} />,
            tone: "blue",
            href: "/sanandaj-man/deceased-search",
          },
          {
            id: "city_137",
            title: "سامانه 137",
            subtitle: "خدمات شهری",
            icon: <Info size={18} />,
            tone: "blue",
            href: toSoon("city-137"),
          },
          {
            id: "city_map",
            title: " طرح پویش سنه سبز ",
            subtitle: "خدمات شهری",
            icon: <Trees size={18} />,
            tone: "blue",
            href: toSoon("city-map"),
          },
          {
            id: "city_traffic_plan",
            title: "نهال رایگان",
            subtitle: "خدمات شهری",
            icon: <TreeDeciduous size={18} />,
            tone: "gray",
            href: toSoon("traffic-plan"),
          },
          {
            id: "city_waste_sort",
            title: "تفکیک زباله از مبدا",
            subtitle: "خدمات شهری",
            icon: <Trash2 size={18} />,
            tone: "gray",
            href: toSoon("waste-separation"),
          },
          {
            id: "city_renovation_tax",
            title: "عوارض نوسازی",
            subtitle: "پرداخت و مشاهده سوابق",
            icon: <CreditCard size={18} />,
            tone: "gray",
            href: toSoon("renovation-tax"),
          },
          {
            id: "city_contact_mayor",
            title: "ارتباط با شهردار",
            subtitle: "ثبت پیام و پیگیری",
            icon: <PhoneCall size={18} />,
            tone: "blue",
            href: toSoon("contact-mayor"),
          },
        ],
      },

      {
        key: "car",
        title: "خدمات خودرو",
        services: [
          {
            id: "car_violation",
            title: "استعلام خلافی خودرو",
            subtitle: "خدمات خودرو",
            icon: <FileWarning size={18} />,
            tone: "gray",
            href: toSoon("car-violation"),
          },
          {
            id: "car_violation_detail",
            title: "استعلام خلافی با جزئیات",
            subtitle: "خدمات خودرو",
            icon: <FileText size={18} />,
            tone: "gray",
            href: toSoon("car-violation-detail"),
          },
          {
            id: "car_plate_history",
            title: "استعلام تاریخچه پلاک",
            subtitle: "خدمات خودرو",
            icon: <ClipboardList size={18} />,
            tone: "gray",
            href: toSoon("plate-history"),
          },
          {
            id: "car_toll",
            title: "استعلام عوارض خودرو",
            subtitle: "خدمات خودرو",
            icon: <CarFront size={18} />,
            tone: "gray",
            href: toSoon("car-toll-2"),
          },
          {
            id: "car_parking",
            title: "پارک حاشیه‌ای (به زودی)",
            subtitle: "خدمات خودرو",
            icon: <ParkingCircle size={18} />,
            tone: "gray",
            href: toSoon("street-parking"),
          },
        ],
      },

      {
        key: "taxi",
        title: "خدمات تاکسیرانی",
        services: [
          {
            id: "taxi_complaints",
            title: "ثبت و پیگیری شکایات",
            subtitle: "خدمات تاکسیرانی",
            icon: <Newspaper size={18} />,
            tone: "yellow",
            href: toSoon("taxi-complaints"),
          },
          {
            id: "taxi_yellow_sheet",
            title: "درخواست برگه تردد",
            subtitle: "خدمات تاکسیرانی",
            icon: <Layers size={18} />,
            tone: "yellow",
            href: toSoon("taxi-yellow-sheet"),
          },
          {
            id: "taxi_lost_items",
            title: "اشیاء گمشده",
            subtitle: "خدمات تاکسیرانی",
            icon: <FileSearch size={18} />,
            tone: "yellow",
            href: "/sanandaj-man/lost-and-found",
          },
          {
            id: "taxi_leave",
            title: "مرخصی تاکسی",
            subtitle: "خدمات تاکسیرانی",
            icon: <CarTaxiFront size={18} />,
            tone: "yellow",
            href: toSoon("taxi-leave-2"),
          },
        ],
      },
    ],
    []
  );

  const filteredSections = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return SECTIONS;

    return SECTIONS.map((sec) => {
      const services = sec.services.filter((s) =>
        (s.title + " " + s.subtitle).toLowerCase().includes(query)
      );
      return { ...sec, services };
    }).filter((sec) => sec.services.length > 0);
  }, [q, SECTIONS]);

  return (
    <div className={styles.page}>
      <SanandajSidebar />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* ✅ Topbar: پروفایل کنار سرچ */}
          <div className={styles.topbar}>
            {/* سرچ */}
            <div className={styles.searchBox}>
              <Search size={18} className={styles.searchIcon} />
              <input
                className={styles.searchInput}
                placeholder="جستجوی خدمات..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>

            {/* پروفایل */}
            <div className={styles.profileWrapper}>
              <button 
                type="button" 
                className={styles.profile}
                onClick={() => setIsProfileOpen(true)}
              >
                <UserCircle2 size={18} className={styles.profileIcon} />
                <span className={styles.profileName}>{userName}</span>
              </button>
            </div>
          </div>

          {/* ✅ بخش‌ها */}
          {filteredSections.map((sec, idx) => (
            <div key={sec.key} className={idx === 0 ? "" : styles.mt24}>
              <SectionBlock
                title={sec.title}
                services={sec.services}
                onCardClick={onCardClick}
                rightAction={
                  sec.key === "popular" ? (
                    <button
                      type="button"
                      className={styles.sectionAction}
                      onClick={() => router.push(toSoon("all-popular"))}
                    >
                    </button>
                  ) : undefined
                }
              />
            </div>
          ))}
        </div>
      </main>

      {/* ====================== Modal پروفایل ====================== */}
      {isProfileOpen && (
        <div 
          className={styles.profileModalOverlay} 
          onClick={() => setIsProfileOpen(false)}
        >
          <div 
            className={styles.profileModal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.profileModalContent}>
              
              {/* عکس پروفایل */}
              <div className={styles.profileAvatarContainer}>
                <div className={styles.profileAvatar}>
                  <UserCircle2 size={110} strokeWidth={1.5} />
                </div>
              </div>

              {/* اطلاعات کاربر */}
              <div className={styles.profileInfo}>
                <h2 className={styles.profileFullName}>{userName}</h2>
                
                <div className={styles.profileDetails}>
                  <div className={styles.profileRow}>
                    <span className={styles.label}>کد ملی</span>
                    <span className={styles.value}>۱۲۳۴۵۶۷۸۹۰</span>
                  </div>
                  <div className={styles.profileRow}>
                    <span className={styles.label}>نام پدر</span>
                    <span className={styles.value}>نام پدر</span>
                  </div>
                  <div className={styles.profileRow}>
                    <span className={styles.label}>شماره همراه</span>
                    <span className={styles.value}>۰۹۱۲۳۴۵۶۷۸۹</span>
                  </div>
                  <div className={styles.profileRow}>
                    <span className={styles.label}>تاریخ تولد</span>
                    <span className={styles.value}>1377/3/24</span>
                  </div>
                  <div className={styles.profileRow}>
                    <span className={styles.label}> جنسیت</span>
                    <span className={styles.value}>مرد</span>
                  </div>
                </div>
              </div>

              {/* دکمه بستن */}
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setIsProfileOpen(false)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}