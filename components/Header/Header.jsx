import {Link} from 'next/Link';

import styles from './Header.module.scss';

export default function Header() {
    return(
        <nav className={styles.mainNav}>
            <a className={styles.logoLink}>
                <img className={styles.logoImg} src="./img/png/logo.png" alt="link print logo" />
            </a>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link>Услуги</Link></li>
                <li className={styles.navItem}><Link>Награды</Link></li>
                <li className={styles.navItem}><Link>Лизинг</Link></li>
                <li className={styles.navItem}><Link>Чернила/Праймер</Link></li>
                <li className={styles.navItem}><Link>Сервис</Link></li>
                <li className={styles.navItem}><Link>Отзывы</Link></li>
                <li className={styles.navItem}><Link>Контакты</Link></li>
            </ul>
        </nav>
    )
}