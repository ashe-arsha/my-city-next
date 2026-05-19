"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, Wallet, Plus, Minus } from "lucide-react";
import styles from "@/styles/wallet.module.css";
import SanandajSidebar from "@/components/layout/SanandajSidebar"; // سایدبار آماده تو

// مدل داده‌ای تراکنش
interface Transaction {
  id: number;
  type: "deposit" | "withdraw";
  amount: string;
  date: string;
  description: string;
}

export default function WalletPage() {
  const [balance, setBalance] = useState(25000);
  const [transactions] = useState<Transaction[]>([
    { id: 1, type: "deposit", amount: "50,000", date: "۱۴۰۳/۰۲/۲۰", description: "شارژ کیف پول" },
    { id: 2, type: "withdraw", amount: "25,000", date: "۱۴۰۳/۰۲/۱۵", description: "پرداخت هزینه آگهی" },
  ]);

  return (
    <div 
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        direction: "rtl",
      }}
    >
      {/* سایدبار ثابت کنار صفحه */}
      <SanandajSidebar />

      {/* محتوای اصلی کیف پول */}
      <main style={{ flex: 1, padding: "24px" }}>
        <div className={styles.container}>
          <h2 className={styles.title}>کیف پول من</h2>

          {/* کارت موجودی */}
          <div className={styles.balanceCard}>
            <div className={styles.balanceInfo}>
              <span>موجودی فعلی</span>
              <h3>{balance.toLocaleString()} تومان</h3>
            </div>
            <Wallet size={40} className={styles.walletIcon} />
          </div>

          {/* دکمه‌های عملیاتی */}
          <div className={styles.actions}>
            <button className={styles.btnDeposit}>
              <Plus size={20} /> شارژ حساب
            </button>
            <button className={styles.btnWithdraw}>
              <Minus size={20} /> برداشت وجه
            </button>
          </div>

          {/* تاریخچه تراکنش‌ها */}
          <div className={styles.transactions}>
            <h4>تاریخچه تراکنش‌ها</h4>

            {transactions.map((tx) => (
              <div key={tx.id} className={styles.txItem}>
                <div
                  className={styles.txIcon}
                  style={{ background: tx.type === "deposit" ? "#dcfce7" : "#fee2e2" }}
                >
                  {tx.type === "deposit" ? (
                    <ArrowDownLeft color="#16a34a" />
                  ) : (
                    <ArrowUpRight color="#dc2626" />
                  )}
                </div>

                <div className={styles.txDetails}>
                  <p>{tx.description}</p>
                  <span>{tx.date}</span>
                </div>

                <div
                  className={styles.txAmount}
                  style={{ color: tx.type === "deposit" ? "#16a34a" : "#dc2626" }}
                >
                  {tx.type === "deposit" ? "+" : "-"} {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
