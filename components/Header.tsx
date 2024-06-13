"use client";
import styles from "@/public/styles/header.module.css";
import { useState } from "react";

export default function Header() {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <>
      {navMobile && (
        <div className={styles.menuMobile}>
          <button onClick={() => setNavMobile((prev) => !prev)}>close</button>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
      <header className={styles.header}>
        <div>
          <h1>Nexus</h1>
        </div>
        <nav>
          <button onClick={() => setNavMobile((prev) => !prev)}>open</button>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
