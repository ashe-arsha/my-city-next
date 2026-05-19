import { useState } from "react";
import {
  Inbox,
  Hourglass,
  CheckCircle2,
  Package,
  Building2,
  ArrowRight,
  SendHorizontal
} from "lucide-react";

import SanandajSidebar from "@/components/layout/SanandajSidebar";
import styles from "@/styles/support.module.css";

export default function SupportPage() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");

  /* ✅ state های جدید */

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [activeTab, setActiveTab] = useState(0);

  const [ticketCounts, setTicketCounts] = useState({
    open: 0,
    pending: 0,
    answered: 0,
    closed: 0
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    { title: "پشتیبانی فنی", icon: <Building2 size={32} /> },
    { title: " فناوری اطلاعات (فاوا) ", icon: <Building2 size={32} /> },
    { title: "شهرداری مرکزی", icon: <Building2 size={32} /> },
    { title: "مشاوره سازمانی", icon: <Building2 size={32} /> }
  ];

  const tabs = [
    { key: "open", title: "تیکت‌های باز", icon: Inbox },
    { key: "pending", title: "در حال بررسی", icon: Hourglass },
    { key: "answered", title: "پاسخ داده شده", icon: CheckCircle2 },
    { key: "closed", title: "بسته شده", icon: Package }
  ];

  /* ✅ ارسال تیکت */

  const handleSubmit = () => {
    if (!subject || !message) {
      alert("لطفا موضوع و پیام را وارد کنید");
      return;
    }

    setTicketCounts((prev) => ({
      ...prev,
      pending: prev.pending + 1
    }));

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
      setActiveTab(1);
      setSubject("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className={styles.layout}>
      <SanandajSidebar />

      <div className={styles.content}>

        {/* ✅ پاپ آپ موفق */}

        {showSuccess && (
          <div className={styles.successPopup}>
            <CheckCircle2 size={26} />
            تیکت با موفقیت ارسال شد
          </div>
        )}

        {/* STEP 1 : DASHBOARD */}
        {step === 1 && (
          <>
            <h1 className={styles.pageTitle}>تیکت‌های من</h1>

            <div className={styles.tabs}>
              {tabs.map((tab, i) => {
                const Icon = tab.icon;

                return (
                  <div
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`${styles.tabItem} ${
                      activeTab === i ? styles.tabActive : ""
                    }`}
                  >
                    <div className={styles.iconWrapper}>
                      <Icon size={54} color="#6b7280" />

                      <span className={styles.badge}>
                        {ticketCounts[tab.key]}
                      </span>
                    </div>

                    <span className={styles.tabLabel}>{tab.title}</span>
                  </div>
                );
              })}
            </div>

            <div className={styles.emptyBox}>
              <div className={styles.emptyCircle}>
                <CheckCircle2 size={48} />
              </div>

              <h3>همه چی آرومه</h3>
              <p>در حال حاضر هیچ تیکت فعالی ندارید</p>

              <button
                className={styles.primaryBtn}
                onClick={() => setStep(2)}
              >
                نوشتن تیکت +
              </button>
            </div>
          </>
        )}

        {/* STEP 2 : CATEGORY */}
        {step === 2 && (
          <>
            <h1 className={styles.pageTitle}>ثبت تیکت جدید</h1>

            <div className={styles.categoryGrid}>
              {categories.map((item) => (
                <div
                  key={item.title}
                  className={styles.categoryCard}
                  onClick={() => {
                    setCategory(item.title);
                    setStep(3);
                  }}
                >
                  <div className={styles.categoryIcon}>{item.icon}</div>
                  <div>{item.title}</div>
                </div>
              ))}
            </div>

            <button className={styles.secondaryBtn} onClick={() => setStep(1)}>
              بازگشت
            </button>
          </>
        )}

        {/* STEP 3 : FORM */}
        {step === 3 && (
          <>
            <h1 className={styles.pageTitle}>ثبت تیکت</h1>

            <div className={styles.ticketForm}>

              <div className={styles.formGroup}>
                <label>واحد</label>
                <input value={category} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>موضوع</label>
                <input
                  placeholder="موضوع پیام"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label>پیام</label>
                <textarea
                  rows="6"
                  placeholder="متن پیام..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className={styles.formActions}>
                <button
                  className={styles.secondaryBtn}
                  onClick={() => setStep(2)}
                >
                  <ArrowRight size={18} style={{ marginRight: 6 }} />
                  بازگشت
                </button>

                <button
                  className={styles.primaryBtn}
                  onClick={handleSubmit}
                >
                  <SendHorizontal size={15} style={{ marginLeft: 6 }} />
                  ارسال
                </button>
              </div>

            </div>
          </>
        )}

      </div>
    </div>
  );
}
