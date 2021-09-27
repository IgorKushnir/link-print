import Head from 'next/head'
import {useState} from 'react'
import ReactNotification from 'react-notifications-component'

import styles from '../styles/Home.module.scss'

import Header from '../components/Header/Header'
import Service from '../components/Service/Service';
import GetConsult from '../components/GetConsult/GetConsult';
import Footer from '../components/Footer/Footer';
import ContactModal from '../components/ContactModal/ContactModal';

export default function ServicePage() {
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

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
          {isPopupOpened && <ContactModal setIsPopupOpened={setIsPopupOpened}/>}
            {isMobileMenuOpened && <MobileMenu setIsMobileMenuOpened={setIsMobileMenuOpened}/>}
            <Header setIsMobileMenuOpened={setIsMobileMenuOpened}/>
            <Service />
        <GetConsult setIsPopupOpened={setIsPopupOpened}/>
        <Footer />
            </main>
        </>
    )
}