import Link from 'next/link';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.infoWrapper}>
          <div className={styles.menuWrapper}>
            <h2 className={styles.heading}>Меню</h2>
            <ul>
              <li className={styles.listItem}>
                <Link href='/'>Главная</Link>
              </li>
              <li className={styles.listItem}>
                <Link href='/'>Каталог</Link>
              </li>
              <li className={styles.listItem}>
                <Link href='/'>Разработка</Link>
              </li>
              <li className={styles.listItem}>
                <Link href='/'>Кейсы</Link>
              </li>
              <li className={styles.listItem}>
                <Link href='/'>Контакты</Link>
              </li>
            </ul>
          </div>
          <div className={styles.classesWrapper}>
            <h2 className={styles.heading}>Принтеры</h2>
            <ul>
              <li className={styles.listItem}>
                <Link href='/classes/hybrid'>Гибридные</Link>
              </li>
              <li className={styles.listItem}>
                <Link href='/classes/table'>Планшетные</Link>
              </li>
              <li className={styles.listItem}>
                <Link href='/classes/cylindric'>Цилиндрические</Link>
              </li>
              <li className={styles.listItem}>
                <Link href='/classes/panels'>Для печати на панелях</Link>
              </li>
            </ul>
          </div>
          <div className={styles.companyWrapper}>
            <h2 className={styles.heading}>О компании</h2>
            <ul>
              <li className={styles.listItem}>
                <Link href=''>О нас</Link>
              </li>
              <li className={styles.listItem}>
                <Link href=''>Сервис</Link>
              </li>
              <li className={styles.listItem}>
                <Link href=''>Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
        <Link href='/' className={styles.logoLink}>
                <img
                  className={styles.logoImg}
                  src='/img/png/logo.png'
                  alt='link print logo'
                />
              </Link>
              <button className={styles.downloadButton}>Скачать каталог</button>
              <button className={styles.infoButton}>Получить консультацию</button>
              <div className={styles.phoneWrapper}>
                  <p className={styles.phone}>+380 99 188 16 89</p>
                  <p className={styles.name}>Елена</p>
              </div>
        </div>
      </div>
    </footer>
  );
}
