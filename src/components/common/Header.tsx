'use client';
import Link from 'next/link';
import Hamburger from './Hamburger';
import { useState } from 'react';
import styles from './header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      {isOpen && (
        <div className={styles['header__menu']}>
          <Link onClick={() => setIsOpen(false)} href="/">
            <h2>Home</h2>
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/about">
            <h2>About</h2>
          </Link>
        </div>
      )}
      <div className={styles['header__hamburger']}>
        <Hamburger isOpen={isOpen} onClick={toggleMenu}></Hamburger>
      </div>
    </header>
  );
}
