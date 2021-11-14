import Link from 'next/link'

import styles from '../styles/Home.module.scss'

export default function ThankYou() {
    return (
        <>
          <main className={styles.main}>
            <div className={styles.thnWrap}>
                <h2 className={styles.thnHeader}>Благодарим за Ваше обращение! Мы скоро с Вами свяжемся.</h2>
                <Link href="/index.html"><p className={styles.thnLink}>Вернуться на главную</p></Link>
            </div>
            </main>
        </>
    )
}