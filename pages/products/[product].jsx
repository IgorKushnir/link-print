import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import YouTube from "react-youtube";
import ReactNotification from 'react-notifications-component';

import products from "../api/products";
import Header from "../../components/Header/Header";
import TabPanel from "../../components/TabPanel/TabPanel";
import GetBonus from "../../components/GetBonus/GetBonus";
import PickPromo from "../../components/PickPromo/PickPromo";
import Footer from "../../components/Footer/Footer";
import styles from "./product.module.scss";
import ProductConstructor from "../../components/ProductConstructor/ProductConstructor";
import ContactModal from "../../components/ContactModal/ContactModal";
import DownloadModal from '../../components/DownloadModal/DownloadModal';
import MobileMenu from '../../components/MobileMenu/MobileMenu'

const useStyles = makeStyles((theme) => ({
  tabs: {
    background: "transparent",
    color: "#000",
    width: "100%",
  },
  tab: {
    maxWidth: "100%",
    flexGrow: "1",
  },
}));

function onReady(event) {
  event.target.pauseVideo();
}

export default function ProductPage() {
  const router = useRouter();

  const [currentProduct, setCurrentProduct] = useState(null);
  const [value, setValue] = useState(0);
  const [opts, setOpts] = useState(null);
  const [isPopupOpened, setIsPopupOpened] = useState(false)
  const [isDownloadPopupOpened, setIsDownloadPopupOpened] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const classes = useStyles();
  const container = useRef(null);


  useEffect(() => {
    setCurrentProduct(
      products.find(
        (pr) => pr.linkVideo.toLocaleLowerCase() === router.query.product
      )
    );
  }, [router.query.product]);

  useEffect(() => {
    const windowWidth = container?.clientWidth;

    const width = "750 vw";
    const height = "450 vw";

    setOpts({
      height,
      width,
      playerVars: {
        autoplay: 1,
      },
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <ReactNotification />
    {isPopupOpened && <ContactModal setIsPopupOpened={setIsPopupOpened} />}
    {isDownloadPopupOpened && <DownloadModal setIsDownloadPopupOpened={setIsDownloadPopupOpened}/>}
        {isMobileMenuOpened && <MobileMenu setIsMobileMenuOpened={setIsMobileMenuOpened}/>}
      <Header setIsMobileMenuOpened={setIsMobileMenuOpened} />
      {currentProduct && Object.values(currentProduct).length > 0 && (
        <main className={styles.main}>
          <div ref={container} className="container">
            <div className={styles.infoWrapper}>
              <div className={styles.headingWrapper}>
                <h1 className={styles.title}>{currentProduct.fullTitle}</h1>
                <p>{currentProduct.description}</p>
              </div>
              <div className={styles.buttonWrapper}>
                <button className={styles.buttonMain} type="button" onClick={() => setIsPopupOpened(true)}>
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>

          <div className="container">
            <Tabs
              className={classes.tabs}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              variant="scrollable"
  scrollButtons="auto"
              textColor="primary"
              aria-label="simple tabs example"
            >
              <Tab className={classes.tab} label="Обзор" />
              {currentProduct?.characteristics && (
                <Tab className={classes.tab} label="Характеристики" />
              )}
              {currentProduct?.construct && (
                <Tab className={classes.tab} label="Конфигуратор" />
              )}
            </Tabs>
          </div>
          <TabPanel value={value} index={0}>
            <div className="container">
              <img className={styles.mainImg} src={currentProduct?.bigImg} />
              {currentProduct?.info1 && (
                <h3 className={styles.infoTitle}>{currentProduct?.info1}</h3>
              )}
              {currentProduct?.subinfo1 && (
                <p className={styles.infoSubtitle}>
                  {currentProduct?.subinfo1}
                </p>
              )}
              {currentProduct?.infoList?.length && (
                <ul className={styles.infoList}>
                  {currentProduct?.infoList?.map((item, i) => (
                    <li key={`infoList_${i}`} className={styles.infoItem}>
                      <div className={styles.countWrap}>
                        <p className={styles.count}>0{i + 1}</p>
                      </div>
                      <h4 className={styles.infoItemTitle}>{item?.title}</h4>
                      <ul>
                        {item?.desc?.map((d, idx) => (
                          <li className={styles.descItem} key={`desc_${idx}`}>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
              {currentProduct?.technologies?.length > 0 && (
                <>
                  <h3 className={styles.infoTitle}>Технологии</h3>
                  <ul>
                    {currentProduct?.technologies?.map((tech, i) => (
                      <li key={`tech_${i}`} className={styles.techItem}>
                        <div><img src={tech.img} className={styles.techImg} /></div>
                        <div>
                          <h4 className={styles.techTitle}>{tech.title}</h4>
                          <p>{tech.info}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <GetBonus setIsPopupOpened={setIsPopupOpened} />

            {currentProduct?.videos?.length > 0 && (
              <div className="container">
                <h3 className={styles.videoTitle}>Видео работы принтера</h3>
                <ul>
                  {currentProduct?.videos?.map((video, i) => (
                    <li key={`video_${i}`} className={styles.videoItem}>
                      <YouTube videoId={video} opts={opts} onReady={onReady} className={styles.video} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <PickPromo setIsPopupOpened={setIsPopupOpened} />
          </TabPanel>
{currentProduct?.characteristics &&          <TabPanel value={value} index={1}>
            <div className="container">
              <div className={styles.infoBlock}>
                <p>
                  <span className={styles.infoSpan}>Технология печати</span>
                  {currentProduct?.characteristics?.printTechnology}
                </p>
                <p>
                  <span className={styles.infoSpan}>Система УФ сушки</span>
                  {currentProduct?.characteristics.dry}
                </p>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoSpan}>Основные характеристики</span>
                <ul className={styles.characteristicsList}>
                  {currentProduct?.characteristics?.main?.map((e, i) => (
                    <li
                      className={styles.characteristicsItem}
                      key={`main_${i}`}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoSpan}>Материал</span>
                <ul className={styles.characteristicsList}>
                  {currentProduct?.characteristics?.material?.map((e, i) => (
                    <li
                      className={styles.characteristicsItem}
                      key={`main_${i}`}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoSpan}>Печатающие головки</span>
                <ul className={styles.characteristicsList}>
                  {currentProduct?.characteristics?.printHeads?.map((e, i) => (
                    <li
                      className={styles.characteristicsItem}
                      key={`main_${i}`}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoSpan}>Производительность</span>
                <ul className={styles.characteristicsList}>
                  {currentProduct?.characteristics?.kpd?.map((e, i) => (
                    <li
                      className={styles.characteristicsItem}
                      key={`main_${i}`}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoSpan}>Печать</span>
                <ul className={styles.characteristicsList}>
                  {currentProduct?.characteristics?.print?.map((e, i) => (
                    <li
                      className={styles.characteristicsItem}
                      key={`main_${i}`}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoSpan}>Програмное обеспечение</span>
                <ul className={styles.characteristicsList}>
                  {currentProduct?.characteristics?.po?.map((e, i) => (
                    <li
                      className={styles.characteristicsItem}
                      key={`main_${i}`}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoSpan}>
                  Электропитание, мощность
                </span>
                <ul className={styles.characteristicsList}>
                  {currentProduct?.characteristics?.supply?.map((e, i) => (
                    <li
                      className={styles.characteristicsItem}
                      key={`main_${i}`}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoSpan}>Условия работы</span>
                <ul className={styles.characteristicsList}>
                  {currentProduct?.characteristics?.terms?.map((e, i) => (
                    <li
                      className={styles.characteristicsItem}
                      key={`main_${i}`}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabPanel>}
{currentProduct?.construct &&          <TabPanel value={value} index={2}>
            <div className="container">
              <h3 className={styles.constructHeading}>
                Выберитеконфигурацию принтера, который подходит именно Вам
              </h3>
              <p className={styles.constructName}>
                {currentProduct?.construct?.name}
              </p>
                    <ProductConstructor currentProduct={currentProduct} />
            </div>
          </TabPanel>}
          <Footer setIsDownloadPopupOpened={setIsDownloadPopupOpened} setIsPopupOpened={setIsPopupOpened} />
        </main>
      )}
    </>
  );
}
