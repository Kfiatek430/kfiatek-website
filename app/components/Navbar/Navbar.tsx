"use client"
import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
      <nav className={`flex justify-between items-center p-5 text-xl mx-10 md:mx-5 fixed w-full bg-[var(--background)] z-10`}>
          <h2 className="w-fit text-slate-50">Kfiatek<span className="text-[var(--green)]">430</span></h2>

          <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <li><a href="#" className={styles.link}>Blog</a></li>
            <li><a href="#" className={styles.link}>Gallery</a></li>
            <li><a href="#" className={styles.link}>Counters</a></li>
            <li><a href="#" className={styles.link}>Codeshare</a></li>
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
