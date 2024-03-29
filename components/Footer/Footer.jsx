import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer({ setIsDownloadPopupOpened, setIsPopupOpened }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.infoWrapper}>
          <div className={styles.menuWrapper}>
            <h2 className={styles.heading}>Меню</h2>
            <ul>
              <li className={styles.listItem}>
                <Link href="/index.html">Главная</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/classes.html">Каталог</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/research.html">Разработка</Link>
              </li>
              <li className={styles.listItem}>
                <a
                  href="https://webconstruct.pb.ua/front/create/all_credit_orders/active/?provider=40747052#step/1"
                  target="_blamk"
                  rel="nofollow noreferrer"
                >
                  Лизинг
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.classesWrapper}>
            <h2 className={styles.heading}>Принтеры</h2>
            <ul>
              <li className={styles.listItem}>
                <Link href="/classes/hybrid.html">Гибридные</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/classes/table.html">Планшетные</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/classes/cylindric.html">Цилиндрические</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/classes/panels.html">Для печати на панелях</Link>
              </li>
            </ul>
          </div>
          <div className={styles.companyWrapper}>
            <h2 className={styles.heading}>О компании</h2>
            <ul>
              <li className={styles.listItem}>
                <Link href="/about.html">О нас</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/service.html">Сервис</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/contacts.html">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <Link href="/" className={styles.logoLink}>
            <img
              className={styles.logoImg}
              src="/img/png/logo.png"
              alt="link print logo"
            />
          </Link>
          <button
            onClick={() => setIsDownloadPopupOpened(true)}
            className={styles.downloadButton}
          >
            Скачать каталог
          </button>
          <button
            onClick={() => setIsPopupOpened(true)}
            className={styles.infoButton}
          >
            Получить консультацию
          </button>
          <div className={styles.phoneWrapper}>
            <a href="tel:+380 99 188 16 89" className={styles.phone}>
              +380 99 188 16 89
            </a>
            <p className={styles.name}>Елена</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
