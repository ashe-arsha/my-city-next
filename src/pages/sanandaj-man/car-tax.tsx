import React, { useMemo, useState } from "react";
import SanandajSidebar from "@/components/layout/SanandajSidebar";
import styles from "@/styles/car-tax.module.css";

type PlaqueState = {
  part1: string;   // ۲ رقم اول
  letter: string;  // حرف وسط
  part2: string;   // ۳ رقم دوم
  city: string;    // کد شهر
};

const onlyDigits = (s: string) => s.replace(/[^\d]/g, "");

const PLATE_LETTERS = [
  "الف","ب","ج","د","س","ص","ط","ع","ق","ل",
  "م","ن","و","ه","ی","ژ","ت","ث","ز","ش",
  "ض","ظ","غ","ف","ک","گ"
];

export default function CarTaxPage() {
  const [plaque, setPlaque] = useState<PlaqueState>({
    part1: "",
    letter: "",
    part2: "",
    city: "",
  });

  const [vin, setVin] = useState("");
  const [popup, setPopup] = useState({ show: false, title: "", message: "", type: "info" as "info" | "error" });

  const handleReset = () => {
    setPlaque({ part1: "", letter: "", part2: "", city: "" });
    setVin("");
  };

  const handleSearch = () => {
    if (!plaque.part1 || !plaque.letter || !plaque.part2 || !plaque.city) {
      setPopup({ show: true, title: "خطای ورودی", message: " لطفاً تمام بخش‌های پلاک رو پر کن!", type: "error" });
      return;
    }
    setPopup({
      show: true,
      title: "در حال استعلام",
      message: `پلاک ${plaque.part1} ${plaque.letter} ${plaque.part2} ایران ${plaque.city} در حال بررسی است...`,
      type: "info"
    });
  };

  return (
    <div className={styles.carTaxContainer}>
      <SanandajSidebar />

 <main className={styles.mainContent}>
  <div className={styles.heroRow}>
    <div className={styles.searchCard}>

      {/* 👇 فقط اینو اضافه کردیم */}
      <div className={styles.innerContent}>

        <h2 className={styles.cardTitle}>جستجوی عوارض خودرو</h2>

        <div className={styles.inputGroup}>
          <label className={styles.fieldLabel}>پلاک خودرو</label>
          
          {/* --- پلاک واقعی ایرانی --- */}
          <div className={styles.realPlate}>
            <div className={styles.plateBlue}>
              <div className={styles.flagIcon}>
                <div className={styles.flagGreen}></div>
                <div className={styles.flagWhite}></div>
                <div className={styles.flagRed}></div>
              </div>
              <div className={styles.irText}>
                <span>I.R.</span>
                <span>IRAN</span>
              </div>
            </div>

            <div className={styles.plateMain}>
              <input
                className={styles.plateNum2}
                maxLength={2}
                placeholder="۱۲"
                value={plaque.part1}
                onChange={(e) => setPlaque(p => ({ ...p, part1: onlyDigits(e.target.value) }))}
              />
              
              <select
                className={styles.plateLetterSelect}
                value={plaque.letter}
                onChange={(e) => setPlaque(p => ({ ...p, letter: e.target.value }))}
              >
                <option value="">حرف</option>
                {PLATE_LETTERS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>

              <input
                className={styles.plateNum3}
                maxLength={3}
                placeholder="۳۴۵"
                value={plaque.part2}
                onChange={(e) => setPlaque(p => ({ ...p, part2: onlyDigits(e.target.value) }))}
              />
            </div>

            <div className={styles.plateDivider}></div>

            <div className={styles.plateCity}>
              <span className={styles.iranLabel}>ایران</span>
              <input
                className={styles.cityInput}
                maxLength={2}
                placeholder="۷۷"
                value={plaque.city}
                onChange={(e) => setPlaque(p => ({ ...p, city: onlyDigits(e.target.value) }))}
              />
            </div>
          </div>
        </div>

        <div className={styles.inputGroup} style={{ marginTop: '24px' }}>
          <label className={styles.fieldLabel}>شماره شناسایی خودرو (VIN)</label>
          <input
            className={styles.vinInput}
            placeholder="KMHDN45D97U123456"
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
          />
        </div>

        <div className={styles.btnRow}>
          <button className={styles.btnReset} onClick={handleReset}>ریست فرم</button>
          <button className={styles.btnSearch} onClick={handleSearch}>جستجوی عوارض</button>
        </div>

        <p className={styles.helperText}>
          نکته: برای استعلام دقیق‌تر، کد ۱۷ رقمی VIN را از روی کارت خودرو وارد نمایید.
        </p>

      </div>
      {/* 👆 تا اینجا */}

    </div>
  </div>
</main>

      {/* مودال اطلاع‌رسانی */}
      {popup.show && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={popup.type === "error" ? styles.modalHeaderError : styles.modalHeaderInfo}>
              {popup.title}
            </div>
            <div className={styles.modalBody}>{popup.message}</div>
            <button className={styles.modalButton} onClick={() => setPopup({ ...popup, show: false })}>متوجه شدم</button>
          </div>
        </div>
      )}
    </div>
  );
}
