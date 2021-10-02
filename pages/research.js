import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/Home.module.scss";

import research from './api/research'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactModal from "../components/ContactModal/ContactModal";
import DownloadModal from '../components/DownloadModal/DownloadModal';

export default function ResearchPage() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isDownloadPopupOpened, setIsDownloadPopupOpened] = useState(false);

  return (
    <>
      <Head>
        <title>УФ принтера Link Print</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Продажа UV оборудования. Пробный принт. Заказать пробную печать на принтере"
        />
        <meta
          name="keywords"
          content="Link Print Украина, линк принт Украина, Linkprint, link print, Продажа UV оборудования, Пробный принт, купить уф принтер, купить uv принтер, уф печать, uv печать, uvпечать, уф гибридный принтер, Уф принтер Планшетный"
        />
        <meta property="og:url" content="https://www.linkprint.com.ua/" />
        <meta property="og:title" content="УФ принтера" />
        <meta
          property="og:description"
          content="Продажа UV оборудования. Пробный принт. Заказать пробную печать на принтере"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <link rel="canonical" href="https://www.linkprint.com.ua/" />
      </Head>

      <main className={styles.main}>
      {isPopupOpened && <ContactModal setIsPopupOpened={setIsPopupOpened} />}
      {isDownloadPopupOpened && <DownloadModal setIsDownloadPopupOpened={setIsDownloadPopupOpened}/>}
        {isMobileMenuOpened && (
          <MobileMenu setIsMobileMenuOpened={setIsMobileMenuOpened} />
        )}
        <Header setIsMobileMenuOpened={setIsMobileMenuOpened} />
        <section className={styles.contacts} id="contacts">
          <div className="container">
            <h2 className={styles.heading}>ПРОЕКТИРОВАНИЕ И ПРОИЗВОДСТВО</h2>
            <div className={styles.headingWrap}>
              <div className={styles.leftPart}>
                <p className={styles.spec}>СПЕЦИАЛЬНОГО ПЕЧАТНОГО ОБОРУДОВАНИЯ</p>
                <div className={styles.buttonsTopWrapper}>
                  <Link href="/constructor"><button className={styles.buttonBig}>Перейти в конструктор</button></Link>
                  <button className={styles.buttonBig} onClick={() => setIsPopupOpened(true)}>Получить консультацию</button>
                </div>
              </div>
              <div className={styles.rightPart}>
                <p>Команда LINKPRINT обладает двадцатилетним опытом в области механики, электроники и программирования. Мы готовы решить любые вопросы, связанные с печатными принтерами.</p>
              </div>
            </div>

                <>
                  <h3 className={styles.infoTitle}>Технологии</h3>
                  <ul>
                    {research?.map((tech, i) => (
                      <li key={`tech_${i}`} className={styles.techItem}>
                        <img src={tech.img} className={styles.techImg} />
                        <div>
                          <h4 className={styles.techTitle}>{tech.title}</h4>
                          <p>{tech.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              
                <div className={styles.individualWrapper}>
            <div className={styles.textWrapper}>
              <h3 className={styles.individualHeading}>Собрать свой принтер</h3>
              <p className={styles.textWhite}>С помощью данного конструктора вы можете самостоятельно собрать принтер который подходит под ваши производственные потребности.</p>
              </div>
              <div className={styles.buttonsWrapper}>
                <Link href="/constructor"><button className={styles.whiteButton}>Собрать принтер</button></Link>
                <button onClick={() => setIsPopupOpened(true)} className={styles.transparentButton}>Консультация</button>
              </div>
        </div>

          </div>
        </section>
        <Footer setIsDownloadPopupOpened={setIsDownloadPopupOpened} setIsPopupOpened={setIsPopupOpened} />
      </main>
    </>
  );
}
