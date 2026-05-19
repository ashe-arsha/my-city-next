import React from "react";
import { Menu, X } from "lucide-react";
import styles from "@/styles/HamburgerMenu.module.css";  // وارد کردن استایل

const HamburgerMenu = ({ onToggle, isOpen }: { onToggle: () => void; isOpen: boolean }) => {
  return (
    <button className={styles.hamburgerBtn} onClick={onToggle}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default HamburgerMenu;