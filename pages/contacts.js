import Head from 'next/head'
import {useState} from 'react'
import ReactNotification from 'react-notifications-component'

import styles from '../styles/Home.module.scss'

import Header from '../components/Header/Header'
import Contacts from '../components/Contacts/Contacts';
import GetBonus from '../components/GetBonus/GetBonus';
import Footer from '../components/Footer/Footer';
import ContactModal from '../components/ContactModal/ContactModal';
import DownloadModal from '../components/DownloadModal/DownloadModal';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import SurveyModal from '../components/SurveyModal/SurveyModal';

export default function ContactsPage() {
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [isSurveyPopupOpened, setIsSurveyPopupOpened] = useState(false);
    const [isDownloadPopupOpened, setIsDownloadPopupOpened] = useState(false);
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    return (
        <>
          <Head>
            <title>Контакты Link Print</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Компания Link Print. Способы связи с нашей компанией." />
            <meta name="keywords" content="Link Print Украина, линк принт Украина, Linkprint, link print, Продажа UV оборудования, Пробный принт, купить уф принтер, купить uv принтер, уф печать, uv печать, uvпечать, уф гибридный принтер, Уф принтер Планшетный" />
            <meta property="og:url" content="https://www.linkprint.com.ua/" />
            <meta property="og:title" content="Контакты Link Print" />
            <meta property="og:description" content="Компания Link Print. Способы связи с нашей компанией." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="" />
            <link rel="canonical" href="https://www.linkprint.com.ua/" />
          </Head>
    
          <main className={styles.main}>
          {isPopupOpened && <ContactModal setIsPopupOpened={setIsPopupOpened}/>}
          {isSurveyPopupOpened && <SurveyModal setIsSurveyPopupOpened={setIsSurveyPopupOpened}/>}
          {isDownloadPopupOpened && <DownloadModal setIsDownloadPopupOpened={setIsDownloadPopupOpened}/>}
            {isMobileMenuOpened && <MobileMenu setIsMobileMenuOpened={setIsMobileMenuOpened}/>}
            <Header setIsMobileMenuOpened={setIsMobileMenuOpened}/>
            <Contacts />
        <GetBonus setIsSurveyPopupOpened={setIsSurveyPopupOpened}/>
        <Footer setIsDownloadPopupOpened={setIsDownloadPopupOpened} setIsPopupOpened={setIsPopupOpened} />
            </main>
        </>
    )
}