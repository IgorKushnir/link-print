import Link from "next/link";

import styles from "./Header.module.scss";

export default function Header({ setIsMobileMenuOpened }) {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/classes.html">Каталог</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/research.html">Разработка</Link>
          </li>
          <li className={styles.navItem}>
            <a
              href="https://webconstruct.pb.ua/front/create/all_credit_orders/active/?provider=40747052#step/1"
              target="_blamk"
              rel="nofollow noreferrer"
            >
              Лизинг
            </a>
          </li>
        </ul>
        <Link href="/index.html" className={styles.logoLink}>
          <img
            className={styles.logoImg}
            src="/img/png/logo.png"
            alt="link print logo"
          />
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/about.html">О компании</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/service.html">Сервис</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contacts.html">Контакты</Link>
          </li>
        </ul>
      </div>
      <div className={styles.telWrapper}>
        <a href="tel:+380 99 188 16 89">+380 99 188 16 89</a>
      </div>
      <div className={styles.burgerWrapper}>
        <button
          className={styles.burgerButton}
          onClick={() => setIsMobileMenuOpened(true)}
        >
          <img src="/img/png/burger.png" className={styles.burger} />
        </button>
      </div>
    </nav>
  );
}
