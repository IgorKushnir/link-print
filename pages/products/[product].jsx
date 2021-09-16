import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import YouTube from 'react-youtube';

import products from "../api/products";
import Header from "../../components/Header/Header";
import TabPanel from '../../components/TabPanel/TabPanel'
import GetBonus from '../../components/GetBonus/GetBonus';
import PickPromo from '../../components/PickPromo/PickPromo'
import Footer from '../../components/Footer/Footer';
import styles from "./product.module.scss";

const useStyles = makeStyles((theme) => ({
    tabs: {
      background: 'transparent',
      color: '#000',
      width: '100%'
    },
    tab: {
        maxWidth: '100%',
        flexGrow: '1'
    }
  }));


    function onReady(event) {
        event.target.pauseVideo();
      }

export default function ProductPage() {
  const router = useRouter();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const [opts, setOpts] = useState(null);
  const container = useRef(null)

  useEffect(() => {
    setCurrentProduct(
      products.find(
        (pr) => pr.linkVideo.toLocaleLowerCase() === router.query.product
      )
    );
  }, [router.query.product]);


  useEffect(() => {
    const windowWidth = container?.clientWidth;

    const width = '750 vw';
    const height = '450 vw';

    setOpts({
      height,
      width,
      playerVars: {
        autoplay: 1
      },
    })
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Header />
      {currentProduct && Object.values(currentProduct).length > 0 && (
        <main className={styles.main}>
          <div ref={container} className="container">
            <div className={styles.infoWrapper}>
              <div className={styles.headingWrapper}>
                <h1 className={styles.title}>{currentProduct.fullTitle}</h1>
                <p>{currentProduct.description}</p>
              </div>
              <div className={styles.buttonWrapper}>
                <button className={styles.button} type="button">
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
                textColor="primary"
                aria-label="simple tabs example"
              >
                <Tab className={classes.tab} label="Обзор" />
                <Tab className={classes.tab} label="Характеристики" />
                <Tab className={classes.tab} label="Конфигуратор" />
              </Tabs>
            </div>
            <TabPanel value={value} index={0}>
            <div className="container">
              <img className={styles.mainImg} src={currentProduct.bigImg} />
              {currentProduct.info1 && <h3 className={styles.infoTitle}>{currentProduct.info1}</h3>}
              {currentProduct.subinfo1 && <p className={styles.infoSubtitle}>{currentProduct.subinfo1}</p>}
              {currentProduct?.infoList?.length && <ul className={styles.infoList}>
                  {currentProduct?.infoList?.map((item, i) => 
                  <li key={`infoList_${i}`} className={styles.infoItem}>
                    <div className={styles.countWrap}><p className={styles.count}>0{i}</p></div>
                    <h4 className={styles.infoItemTitle}>{item.title}</h4>
                    <ul>
                        {item.desc.map((d, idx) =>
                        <li className={styles.descItem} key={`desc_${idx}`}>{d}</li>)
                        }
                    </ul>
                  </li>)}
              </ul>}
              {currentProduct?.technologies?.length > 0 && <><h3 className={styles.infoTitle}>Технологии</h3>
              <ul>
                  {currentProduct?.technologies?.map((tech, i) => (<li key={`tech_${i}`} className={styles.techItem}>
                        <img src={tech.img} className={styles.techImg} />
                        <div>
                            <h4 className={styles.techTitle}>{tech.title}</h4>
                            <p>{tech.info}</p>
                        </div>
                      </li>))}
              </ul></>}
              </div>
              <GetBonus />

              {currentProduct?.videos?.length > 0 && <div className="container">
              <h3 className={styles.videoTitle}>Видео работы принтера</h3>
              <ul>
                  {currentProduct?.videos?.map (video => <li className={styles.videoItem}>
                      <YouTube
                    videoId={video}
                    opts={opts}
                    onReady={onReady}
                  /></li>)}
              </ul>
                </div>}
                <PickPromo />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div className="container">
              Item Two
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <div className="container">
              Item Three
              </div>
            </TabPanel>
            <Footer />
        </main>
      )}
    </>
  );
}
