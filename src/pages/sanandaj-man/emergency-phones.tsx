import React from "react";
import { FaPhoneAlt, FaAmbulance, FaFireExtinguisher, FaShieldAlt, FaTint, FaBolt, FaGasPump, FaRoad, FaHandsHelping } from "react-icons/fa";
import { MdHealthAndSafety, MdLocalGasStation, MdBloodtype, MdLocalPostOffice, MdPublic, MdSupportAgent } from "react-icons/md";
import styles from "@/styles/emergency.module.css";

const phones = [
  { title: "پلیس", number: "110", icon: <FaShieldAlt /> },
  { title: "اورژانس", number: "115", icon: <FaAmbulance /> },
  { title: "آتش نشانی", number: "125", icon: <FaFireExtinguisher /> },
  { title: "هلال احمر", number: "112", icon: <FaHandsHelping /> },
  { title: "پلیس راه", number: "120", icon: <FaRoad /> },
  { title: "اتفاق برق", number: "121", icon: <FaBolt /> },
  { title: "آب و فاضلاب", number: "122", icon: <FaTint /> },
  { title: "گاز", number: "194", icon: <MdLocalGasStation /> },
  { title: "اطلاعات تلفن", number: "118", icon: <FaPhoneAlt /> },
  { title: "اطلاعات راه‌ها", number: "141", icon: <FaRoad /> },
  { title: "سامانه شهرداری", number: "137", icon: <MdSupportAgent /> },
  { title: "نظارت مردمی", number: "1888", icon: <FaPhoneAlt /> },
  { title: "تعزیرات", number: "135", icon: <MdPublic /> },
  { title: "حمایت مصرف‌کننده", number: "124", icon: <MdHealthAndSafety /> },
  { title: "محیط زیست", number: "1540", icon: <MdPublic /> },
  { title: "امداد خودرو ایران‌خودرو", number: "096440", icon: <FaRoad /> },
  { title: "امداد خودرو سایپا", number: "096550", icon: <FaRoad /> },
  { title: "پست", number: "193", icon: <MdLocalPostOffice /> },
  { title: "انتقال خون", number: "09623", icon: <MdBloodtype /> },
  { title: "بیمه سلامت", number: "1666", icon: <MdHealthAndSafety /> },
];

export default function EmergencyPhones() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>تلفن‌های اضطراری</h1>
      
      <div className={styles.grid}>
        {phones.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            
            <div className={styles.info}>
              <span className={styles.label}>{item.title}</span>
              <a href={`tel:${item.number}`} className={styles.number}>
                {item.number}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
