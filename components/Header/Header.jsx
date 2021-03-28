import Link from 'next/link';

import styles from './Header.module.scss';

export default function Header() {
    return (
        <nav className={styles.mainNav}>
            <Link href="#" className={styles.logoLink}>
                <img className={styles.logoImg} src="./img/png/logo.png" alt="link print logo" />
            </Link>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="#">Услуги</Link></li>
                <li className={styles.navItem}><Link href="#">Награды</Link></li>
                <li className={styles.navItem}><Link href="#">Лизинг</Link></li>
                <li className={styles.navItem}><Link href="#">Чернила/Праймер</Link></li>
                <li className={styles.navItem}><Link href="#">Сервис</Link></li>
                <li className={styles.navItem}><Link href="#">Отзывы</Link></li>
                <li className={styles.navItem}><Link href="#">Контакты</Link></li>
            </ul>
        </nav>
    )
}