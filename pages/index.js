import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Header from '../components/Header/Header'
import Baner from '../components/Baner/Baner'
import ProductsList from '../components/ProductsList/ProductsList'
import Service from '../components/Service/Service'
import InksList from '../components/InksList/InksList'
import ServicesList from '../components/ServicesList/ServicesList'
import SamplesList from '../components/SamplesList/SamplesList'
import ContactUs from '../components/ContactUs/ContactUs'
import ReviewsList from '../components/ReviewsList/ReviewsList'
import Rewards from '../components/Rewards/Rewards'
import Characteristics from '../components/Characteristics/Characteristics'
import Contacts from '../components/Contacts/Contacts'

export default function Home() {
  return (
    <>
      <Head>
        <title>УФ принтера Link Print</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Продажа UV оборудования. Пробный принт. Заказать пробную печать на принтере" />
        <meta name="keywords" content="Link Print Украина, линк принт Украина, Linkprint, link print, Продажа UV оборудования, Пробный принт, купить уф принтер, купить uv принтер, уф печать, uv печать, uvпечать, уф гибридный принтер, Уф принтер Планшетный" />
        <meta property="og:url" content="https://www.linkprint-uk.com/" />
        <meta property="og:title" content="УФ принтера" />
        <meta property="og:description" content="Продажа UV оборудования. Пробный принт. Заказать пробную печать на принтере" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <link rel="canonical" href="https://www.linkprint-uk.com/" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Baner />
        {/* <ProductsList /> */}
        {/* <Service /> */}
        {/* <InksList /> */}
        {/* <ServicesList /> */}
        {/* <SamplesList /> */}
        {/* <ContactUs /> */}
        {/* <ReviewsList /> */}
        {/* <Rewards /> */}
        {/* <Characteristics /> */}
        {/* <Contacts /> */}
      </main>
    </>
  )
}
