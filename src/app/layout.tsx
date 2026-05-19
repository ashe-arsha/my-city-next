import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سنندج من | پرتال خدمات شهری",
  description: "نسخه بازطراحی‌شده پرتال خدمات شهری سنندج",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}