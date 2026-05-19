"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import mainPic from "@/assets/images/mainPic.webp";
import {
  Gift,
  Wallet,
  MessageCircle,
  Download,
  Smartphone
} from "lucide-react";
import "../styles/downloadPage.css";


export default function DownloadPage() {
  /* ------------------ Highlight Data ------------------ */
  const features = [
    {
      id: 1,
      title: "پرداخت هوشمند",
      desc: "انجام تمام پرداخت‌های شهری بدون مراجعه حضوری",
      image: "/images/payment.png",
    },
    {
      id: 2,
      title: "درخواست آنلاین",
      desc: "ثبت درخواست و پیگیری وضعیت در لحظه",
      image: "/images/request.png",
    },
    {
      id: 3,
      title: "اطلاع‌رسانی سریع",
      desc: "دریافت اعلان‌ها و پیام‌های مهم شهری",
      image: "/images/notification.png",
    },
  ];

  const [activeId, setActiveId] = useState(2);

  const activeFeature =
    features.find((f) => f.id === activeId) || features[0];

  /* ------------------ Page ------------------ */
  return (
    <>
      <Header />

      <div className="back-home">
  <Link href="/">
    <button className="btn green-outline">
      بازگشت به صفحه اصلی
    </button>
  </Link>
</div>
    <div className="page" dir="rtl">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>اپلیکیشن سنندج من</h1>
          <p>
            مدیریت خدمات شهری، پرداخت عوارض، ثبت درخواست و پیگیری آنلاین
            در بستری سریع، امن و یکپارچه.
          </p>

          <div className="hero-buttons">
            <button className="btn green">
              <Download size={18} />
              دانلود نخسه وب
            </button>

            <button className="btn green-outline">
              <Smartphone size={18} />
               دانلود نسخه اندروید  
            </button>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src=""
            alt="اپلیکیشن سنندج من"
            width={400}
            height={300}
            priority
          />
        </div>
      </section>

      {/* ================= FEATURE CARDS ================= */}
      <section className="feature-cards">
        <div className="card pink">
          <MessageCircle size={40} />
          <h3>ارتباط سریع</h3>
          <p>ثبت و پیگیری درخواست‌ها در کوتاه‌ترین زمان</p>
        </div>

        <div className="card blue">
          <Wallet size={40} />
          <h3>پرداخت آنلاین</h3>
          <p>پرداخت عوارض و قبوض به صورت امن</p>
        </div>

        <div className="card purple">
          <Gift size={40} />
          <h3>خدمات ویژه</h3>
          <p>دسترسی به امکانات اختصاصی شهروندان</p>
        </div>
      </section>

      {/* ================= HIGHLIGHT SECTION ================= */}
      <section className="highlight">
        {/* IMAGE */}
        <div className="highlight-image">
          <Image
            key={activeFeature.image}
            src={activeFeature.image}
            alt={activeFeature.title}
            width={500}
            height={400}
            className="feature-img"
          />
        </div>

        {/* CONTENT */}
        <div className="highlight-content">
          <h2>با امکانات ویژه آشنا شوید</h2>

          {features.map((item) => (
            <div
              key={item.id}
              className={`highlight-item ${
                activeId === item.id ? "active" : ""
              }`}
              onClick={() => setActiveId(item.id)}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
          <Footer />
    </>
  );
}