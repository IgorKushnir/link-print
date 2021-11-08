import Link from 'next/link';

import styles from './MobileMenu.module.scss';

export default function MobileMenu({setIsMobileMenuOpened}) {

  function closeMenu () {
    setIsMobileMenuOpened(false)
  }
    return (
        <div className={styles.wrapper}>
            <button type="button" className={styles.closeButton} onClick={() => setIsMobileMenuOpened(false)}>
                <img className={styles.closeIcon} src="./img/png/cancel_white.png" />
            </button>
            <div className="container">
            <ul className={styles.navList}>
            <li className={styles.navItem}>
                  <Link href='/classes'>Каталог</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href='/research'>Разработка</Link>
                </li>
                <li className={styles.navItem}>
                  <a onClick={closeMenu} href='https://webconstruct.pb.ua/front/create/all_credit_orders/active/?provider=40747052#step/1' target="_blamk" rel="nofollow noreferrer">Лизинг</a>
                </li>
                <li className={styles.navItem}>
                  <Link href='/about'>О компании</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href='/service'>Сервис</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href='/contacts'>Контакты</Link>
                </li>
              </ul>
            </div>
        </div>
    )
}