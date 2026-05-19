import React from "react";
import { useRouter } from "next/router";
import { Home, ArrowLeft, Search } from "lucide-react";
import styles from "@/styles/sanandajMan.module.css";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        
        <div className={styles.errorCode}>
          <span>4</span>
          <span className={styles.zero}>0</span>
          <span>4</span>
        </div>

        <h1 className={styles.notFoundTitle}>  !صفحه مورد نظر یافت نشد  </h1>
        
        <p className={styles.notFoundDescription}>
          متأسفانه صفحه‌ای که به دنبال آن بودید وجود ندارد یا حذف شده است
        </p>

        <div className={styles.notFoundActions}>
          <button
            onClick={() => router.push("/sanandaj-man")}
            className={styles.primaryButton}
          >
            <Home size={20} />
            بازگشت به صفحه اصلی
          </button>

          <button
            onClick={() => router.back()}
            className={styles.secondaryButton}
          >
            <ArrowLeft size={20} />
            بازگشت به صفحه قبلی
          </button>
        </div>

        <p className={styles.suggestion}>
          یا می‌توانید از نوار جستجو در صفحه اصلی استفاده کنید
        </p>
      </div>
    </div>
  );
}