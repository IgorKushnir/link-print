import Link from 'next/link';

import styles from './Header.module.scss';

export default function Header({setIsMobileMenuOpened}) {
  return (
    <nav className={styles.mainNav}>
          <div className={styles.navWrapper}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link href='#servicesList'>Услуги</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href='#rewards'>Награды</Link>
                </li>
                <li className={styles.navItem}>
                  <a href='https://webconstruct.pb.ua/front/create/all_credit_orders/active/?provider=40747052#step/1' target="_blamk" rel="nofollow noreferrer">Лизинг</a>
                </li>
              </ul>
              <Link href='/' className={styles.logoLink}>
                <img
                  className={styles.logoImg}
                  src='/img/png/logo.png'
                  alt='link print logo'
                />
              </Link>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link href='#inksList'>Чернила/Праймер</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href='#service'>Сервис</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href='#reviewsList'>Отзывы</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href='#contacts'>Контакты</Link>
                </li>
              </ul>
          </div>
          <div className={styles.burgerWrapper}>
            <button className={styles.burgerButton} onClick={() => setIsMobileMenuOpened(true)}>
              <img src="/img/png/burger.png" className={styles.burger}/>
              </button>
          </div>
    </nav>
  );
}
