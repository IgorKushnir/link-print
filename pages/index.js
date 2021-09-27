import Head from 'next/head'
import {useState} from 'react'
import ReactNotification from 'react-notifications-component'

import styles from '../styles/Home.module.scss'

import Header from '../components/Header/Header'
import Baner from '../components/Baner/Baner'
import ProductsList from '../components/ProductsList/ProductsList'
import products from './api/products';
import ReviewsList from '../components/ReviewsList/ReviewsList'
import Rewards from '../components/Rewards/Rewards'
import Contacts from '../components/Contacts/Contacts'
import MobileMenu from '../components/MobileMenu/MobileMenu';
import PrinterClasses from '../components/PrinterClasses/PrinterClasses';
import GetBonus from '../components/GetBonus/GetBonus';
import GetConsult from '../components/GetConsult/GetConsult';
import ContactModal from '../components/ContactModal/ContactModal';
import DownloadModal from '../components/DownloadModal/DownloadModal';
import Benefits from '../components/Benefits/Benefits';
import Footer from '../components/Footer/Footer';
// import Service from '../components/Service/Service'
// import InksList from '../components/InksList/InksList'
// import ServicesList from '../components/ServicesList/ServicesList'
// import SamplesList from '../components/SamplesList/SamplesList'
// import ContactUs from '../components/ContactUs/ContactUs'
// import Characteristics from '../components/Characteristics/Characteristics'
// import ProductPopup from '../components/ProductPopup/ProductPopup';

export default function Home() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isDownloadPopupOpened, setIsDownloadPopupOpened] = useState(false);
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
      <ReactNotification />
        {isPopupOpened && <ContactModal setIsPopupOpened={setIsPopupOpened}/>}
        {isDownloadPopupOpened && <DownloadModal setIsDownloadPopupOpened={setIsDownloadPopupOpened}/>}
        {isMobileMenuOpened && <MobileMenu setIsMobileMenuOpened={setIsMobileMenuOpened}/>}
        <Header setIsMobileMenuOpened={setIsMobileMenuOpened}/>
        <Baner setIsPopupOpened={setIsPopupOpened} setIsDownloadPopupOpened={setIsDownloadPopupOpened} />
        <ProductsList products={products} setIsPopupOpened={setIsPopupOpened}/>
        <PrinterClasses setIsPopupOpened={setIsPopupOpened} />
        <GetBonus setIsPopupOpened={setIsPopupOpened}/>
        <Benefits />
        {/* <Service /> */}
        {/* <InksList setIsPopupOpened={setIsPopupOpened} setPopupProduct={setPopupProduct}/> */}
        {/* <ServicesList /> */}
        {/* <SamplesList /> */}
        {/* <ContactUs /> */}
        <ReviewsList />
        <GetConsult setIsPopupOpened={setIsPopupOpened} />
        <Rewards />
        {/* <Characteristics /> */}
        <Contacts />
        <Footer />
      </main>
    </>
  )
}
