"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  LayoutGrid,
  Shield,
  LogOut,
  ChevronDown,
  Wallet,
  Headphones,
  Scroll
} from "lucide-react";
import styles from "@/styles/sanandajMan.module.css";

function isActive(pathname: string, href?: string) {
  if (!href) return false;
  return pathname === href || pathname.startsWith(href + "/");
}

interface SubItemProps {
  href: string;
  title: string;
  active: boolean;
}

function SubItem({ href, title, active }: SubItemProps) {
  return (
    <Link
      href={href}
      className={`${styles.subItem} ${active ? styles.subItemActive : ""}`}
    >
      {title}
    </Link>
  );
}

export default function SanandajSidebar() {
  const router = useRouter();
  const realPathname = usePathname();


  let pathname = "/";
  // @ts-ignore
if (typeof window !== "undefined" && realPathname)
  pathname = realPathname;


  const [servicesOpen, setServicesOpen] = useState(true);
  const servicesMaxH = useMemo(() => 160, []);
  const [openLogout, setOpenLogout] = useState(false);

  const handleConfirmLogout = () => {
    setOpenLogout(false);
    localStorage.removeItem("sanandajUser");

    // @ts-ignore
    if (router && typeof router.replace === "function") router.replace("/");
    else window.location.href = "/";
  };

  return (
    <>
      {/* --- سایدبار اصلی --- */}
      <aside className={styles.sidebar}>
        <div>
          <div className={styles.brandWrap}>
            <div className={styles.logo2}>
              <Image
                src="/images/LOGO_Type.png"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
          </div>

          <nav className={styles.nav}>
  {/* صفحه اصلی */}
  <Link
    href="/sanandaj-man"
    className={`${styles.navItem} ${
      isActive(pathname, "/sanandaj-man") ? styles.navItemActive : ""
    }`}
  >
    <div className={styles.navLeft}>
      <Home size={18} />
      <span>صفحه اصلی</span>
    </div>
  </Link>

  {/* خدمات پرکاربرد - تبدیل به آیتم مستقل */}
  <Link
    href="/sanandaj-man"
    className={`${styles.navItem} ${
      isActive(pathname, "/sanandaj-man/services")
        ? styles.navItemActive
        : ""
    }`}
  >
    <div className={styles.navLeft}>
      <LayoutGrid size={18} />
      <span> خدمات سنندج من </span>
    </div>
  </Link>

  {/* قوانین و مقررات */}
  <Link
    href="/sanandaj-man/rules"
    className={`${styles.navItem} ${
      isActive(pathname, "/sanandaj-man/rules")
        ? styles.navItemActive
        : ""
    }`}
  >
    <div className={styles.navLeft}>
      <Scroll size={18} />
      <span>قوانین و مقررات</span>
    </div>
  </Link>

  {/* پشتیبانی */}
  <Link
    href="/sanandaj-man/support"
    className={`${styles.navItem} ${
      isActive(pathname, "/sanandaj-man/support")
        ? styles.navItemActive
        : ""
    }`}
  >
    <div className={styles.navLeft}>
      <Headphones size={18} />
      <span>تیکت پشتیبانی</span>
    </div>
  </Link>
</nav>

        </div>

        {/* --- پایین سایدبار: کیف پول + حساب کاربری + خروج --- */}
        <div className={styles.sidebarBottom}>
          <Link href="/sanandaj-man/wallet" className={styles.walletBox}>
            <span className={styles.walletLabel}>موجودی کیف پول</span>
            <span className={styles.walletValue}>
              <Wallet size={16} />
              ۲۵,۰۰۰
            </span>
          </Link>

          <div className={styles.sectionDivider} />

          <Link
            href="/sanandaj-man/security"
            className={`${styles.navItem} ${
              isActive(pathname, "/sanandaj-man/security")
                ? styles.navItemActive
                : ""
            }`}
          >
            <div className={styles.navLeft}>
              <Shield size={18} />
              <span>حساب کاربری و امنیت</span>
            </div>
          </Link>

          <button
            type="button"
            className={styles.logoutBtn}
            onClick={() => setOpenLogout(true)}
          >
            <div className={styles.navLeft}>
              <LogOut size={18} />
              <span>خروج از حساب</span>
            </div>
          </button>
        </div>
      </aside>

      {/* --- نوار پایینی موبایل --- */}
      <nav className={styles.bottomNav}>
        <Link
          href="/sanandaj-man/wallet"
          className={`${styles.bottomNavItem} ${
            isActive(pathname, "/sanandaj-man/wallet")
              ? styles.bottomNavItemActive
              : ""
          }`}
        >
          <span className={styles.iconCircle}>
            <Wallet size={22} />
          </span>
          <span> 25,000 </span>
        </Link>

        <Link
          href="/sanandaj-man/services"
          className={`${styles.bottomNavItem} ${
            isActive(pathname, "/sanandaj-man/services")
              ? styles.bottomNavItemActive
              : ""
          }`}
        >
          <span className={styles.iconCircle}>
            <LayoutGrid size={22} />
          </span>
          <span>خدمات</span>
        </Link>

        <Link
          href="/sanandaj-man"
          className={`${styles.bottomNavItem} ${
            isActive(pathname, "/sanandaj-man")
              ? styles.bottomNavItemActive
              : ""
          }`}
        >
          <span className={styles.iconCircle}>
            <Home size={22} />
          </span>
          <span>خانه</span>
        </Link>

        <Link
          href="/sanandaj-man/support"
          className={`${styles.bottomNavItem} ${
            isActive(pathname, "/sanandaj-man/support")
              ? styles.bottomNavItemActive
              : ""
          }`}
        >
          <span className={styles.iconCircle}>
            <Headphones size={22} />
          </span>
          <span>پشتیبانی</span>
        </Link>

        <Link
          href="/sanandaj-man/security"
          className={`${styles.bottomNavItem} ${
            isActive(pathname, "/sanandaj-man/security")
              ? styles.bottomNavItemActive
              : ""
          }`}
        >
          <span className={styles.iconCircle}>
            <Shield size={22} />
          </span>
          <span>پروفایل</span>
        </Link>
      </nav>

      {openLogout && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          dir="rtl"
        >
          <div
            onClick={() => setOpenLogout(false)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,.4)",
              backdropFilter: "blur(6px)",
            }}
          />
          <div
            style={{
              position: "relative",
              width: 360,
              maxWidth: "92vw",
              background: "#fff",
              borderRadius: 18,
              padding: 18,
              border: "1px solid #e2e8f0",
              boxShadow: "0 22px 50px rgba(0,0,0,.22)",
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 15, marginBottom: 8 }}>
              خروج از حساب
            </div>
            <div style={{ fontSize: 13, color: "#334155", marginBottom: 16 }}>
              آیا مطمئنید می‌خواهید از حساب خارج شوید؟
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 10,
              }}
            >
              <button
                onClick={() => setOpenLogout(false)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 12,
                  border: "1px solid #cbd5e1",
                  background: "#fff",
                  cursor: "pointer",
                  fontWeight: 800,
                  fontSize: 13,
                }}
              >
                خیر
              </button>
              <button
                onClick={handleConfirmLogout}
                style={{
                  padding: "10px 16px",
                  borderRadius: 12,
                  border: "none",
                  background: "#dc2626",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 900,
                  fontSize: 13,
                }}
              >
                بله، خروج
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
