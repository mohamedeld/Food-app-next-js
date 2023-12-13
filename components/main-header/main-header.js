import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/logo.png";
import styles from "./main-header.module.css";
import NavLink from "./nav-link";
export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImage} alt="logo" priority />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
