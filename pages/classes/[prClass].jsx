import { useState } from 'react'
import {useRouter} from 'next/router'

import Header from '../../components/Header/Header'
import ProductsList from '../../components/ProductsList/ProductsList'
import prClasses from '../api/classes'
import GetBonus from '../../components/GetBonus/GetBonus'
import ContactModal from '../../components/ContactModal/ContactModal';
import DownloadModal from '../../components/DownloadModal/DownloadModal';
import MobileMenu from '../../components/MobileMenu/MobileMenu'
import Footer from '../../components/Footer/Footer';
import styles from './prClass.module.scss'

export async function getStaticProps(context) {
    const currentClass = prClasses[context.params.prClass];
    return {
      props: {currentClass},
    }
  }

export async function getStaticPaths() {
    return {
      paths: [
        { params: {prClass: 'hybrid'} },
        { params: {prClass: 'table'} },
        { params: {prClass: 'panels'} },
        { params: {prClass: 'cylindric'} },
      ],
      fallback: false
    };
  }

export default function PrClassPage ({currentClass}) {
    const router = useRouter()
    const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isDownloadPopupOpened, setIsDownloadPopupOpened] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    return (
        <>
        <Header setIsMobileMenuOpened={setIsMobileMenuOpened} />
        {isPopupOpened && <ContactModal setIsPopupOpened={setIsPopupOpened}/>}
        {isDownloadPopupOpened && <DownloadModal setIsDownloadPopupOpened={setIsDownloadPopupOpened}/>}
        {isMobileMenuOpened && <MobileMenu setIsMobileMenuOpened={setIsMobileMenuOpened}/>}
            {currentClass && <main className={styles.main}>
                <div className="container">
                    <h1 className={styles.title}>{currentClass.title}</h1>
                    <div className={styles.infoWrapper}>
                        <div className={styles.infoInnerWrapper}>
                            <p className={styles.subTitle}>{currentClass.subtitle}</p>
                            <button className={styles.button} onClick={() => setIsPopupOpened(true)}>Получить консультацию</button>
                        </div>
                        <p className={styles.info}>{currentClass.info}</p>
                    </div>
                    <ProductsList products={currentClass.printers} setIsPopupOpened={setIsPopupOpened} />
                    </div>
                    <GetBonus setIsPopupOpened={setIsPopupOpened} />
                    <Footer setIsDownloadPopupOpened={setIsDownloadPopupOpened} setIsPopupOpened={setIsPopupOpened} />
            </main>}
        </>
    )
}