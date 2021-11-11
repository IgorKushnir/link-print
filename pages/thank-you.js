import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'

export default function ThankYou() {
    return (
        <>
          <Head>
            <title>УФ принтера Link Print</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Продажа UV оборудования. Пробный принт. Заказать пробную печать на принтере" />
            <meta name="keywords" content="Link Print Украина, линк принт Украина, Linkprint, link print, Продажа UV оборудования, Пробный принт, купить уф принтер, купить uv принтер, уф печать, uv печать, uvпечать, уф гибридный принтер, Уф принтер Планшетный" />
            <meta property="og:url" content="https://www.linkprint.com.ua/" />
            <meta property="og:title" content="УФ принтера" />
            <meta property="og:description" content="Продажа UV оборудования. Пробный принт. Заказать пробную печать на принтере" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="" />
            <link rel="canonical" href="https://www.linkprint.com.ua/" />
          </Head>
    
          <main className={styles.main}>
            <div className={styles.thnWrap}>
                <h2 className={styles.thnHeader}>Благодарим за Ваше обращение! Мы скоро с Вами свяжемся.</h2>
                <Link href="/index.html"><p className={styles.thnLink}>Вернуться на главную</p></Link>
            </div>
            </main>
        </>
    )
}