"use client"
import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`flex justify-between items-center p-5 text-xl ${styles.margin}`}>
      <h2 className="w-fit">Kfiatek<span style={{ color: "var(--secondary)" }}>430</span></h2>

      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Counters</a></li>
      </ul>

      <div
            tabIndex={0}
            role="button"
            className={`btn btn-ghost btn-circle relative justify-center items-center w-14 h-14 ${styles.button}`}
            onClick={toggleMenu}
        >
            <div
              className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            />
        </div>
    </nav>
  );
};

export default Navbar;
