import Head from "next/head";
import { useState } from "react";
import { useFormik } from "formik";

import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import constructor from "./api/constructor";
import ContactModal from "../components/ContactModal/ContactModal";
import DownloadModal from "../components/DownloadModal/DownloadModal";
import MobileMenu from "../components/MobileMenu/MobileMenu";

export default function ResearchPage() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isDownloadPopupOpened, setIsDownloadPopupOpened] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const formik = useFormik({
    initialValues: {
      printType: "",
      materialType: "",
      headType: "",
      printSpeed: 0,
      colorModel: "",
      inkType: "",
      maxGabarity: "",
      material: "",
      comments: "",
      clientName: "",
      clientPhone: "",
      clientEmail: "",
    },

    onSubmit: (values) => {
      sendContantForm(values)
        .then(({ data }) => {
          if (data.ok) {
            createNotification(
              "Спасибо!",
              "success",
              "Благодарим за Ваше обращение! Мы скоро с Вами свяжемся."
            );
            // formik.resetForm();
          }
        })
        .catch(() => {
          createNotification(
            "Ошибка!",
            "error",
            "Что-то пошло не так. Пожалуйста, повторите попытку позже."
          );
        });
    },
  });

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
        {isDownloadPopupOpened && (
          <DownloadModal setIsDownloadPopupOpened={setIsDownloadPopupOpened} />
        )}
        {isMobileMenuOpened && (
          <MobileMenu setIsMobileMenuOpened={setIsMobileMenuOpened} />
        )}
        <Header setIsMobileMenuOpened={setIsMobileMenuOpened} />
        <section className={styles.contacts} id="contacts">
          <div className="container">
            <h2 className={styles.heading}>КОНСТРУКТОР ПРИНТЕРА</h2>
            <div className={styles.headingWrap}>
              <div className={styles.leftPart}>
                <p className={styles.spec}>
                  ПОСТРОЙТЕ ВМЕСТЕ С НАМИ ПРИНТЕР, КОТОРЫЙ РЕШАЕТ ИМЕННО ВАШИ
                  ЗАДАЧИ
                </p>
              </div>
              <div className={styles.rightPart}>
                <p>
                  С помощью данного конструктора вы можете самостоятельно
                  собрать принтер который подходит под ваши производственные
                  потребности
                </p>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.infoBlock}>
                <ul>
                  {constructor?.info1?.map((e, i) => (
                    <li key={`info1_${i}`}>
                      <p>
                        {e?.name}:{" "}
                        <span className={styles.infoSpan2}>{e?.value}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {constructor?.printType && (
                <div className={styles.infoBlock}>
                  <h4 className={styles.constructSubheading}>Тип печати</h4>
                  {constructor.printType.map((e, i) => (
                    <div key={`printType_${i}`} className={styles.radioWrap}>
                      <input
                        type="radio"
                        name="printType"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={e.value}
                        id={e.value}
                        className={styles.radio}
                      />
                      <label className={styles.radioLabel} htmlFor={e.value}>
                        {e.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {constructor?.materialType && (
                <div className={styles.infoBlock}>
                  <h4 className={styles.constructSubheading}>
                    Тип подачи материала
                  </h4>
                  {constructor.materialType.map((e, i) => (
                    <div key={`printType_${i}`} className={styles.radioWrap}>
                      <input
                        type="radio"
                        name="materialType"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={e.value}
                        id={e.value}
                        className={styles.radio}
                      />
                      <label className={styles.radioLabel} htmlFor={e.value}>
                        {e.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.infoBlock}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="maxGabarity" className={styles.textLabel}>
                    Максимальные габариты изделия
                  </label>
                  <input
                    type="text"
                    name="maxGabarity"
                    required
                    placeholder="Максимальные габариты изделия"
                    className={styles.textInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.maxGabarity}
                  />
                  {formik.errors.maxGabarity && formik.touched.maxGabarity ? (
                    <small className={styles.errors}>
                      {formik.errors.maxGabarity}
                    </small>
                  ) : (
                    <div className={styles.errorsPatch}></div>
                  )}
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="material" className={styles.textLabel}>
                    Материал для печати
                  </label>
                  <input
                    type="text"
                    name="material"
                    required
                    placeholder="Материал для печати"
                    className={styles.textInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.material}
                  />
                  {formik.errors.material && formik.touched.material ? (
                    <small className={styles.errors}>
                      {formik.errors.material}
                    </small>
                  ) : (
                    <div className={styles.errorsPatch}></div>
                  )}
                </div>
              </div>

              <div className={styles.infoBlock}>
                <h4 className={styles.constructSubheading}>Тип голов</h4>
                {constructor?.headType?.map((e, i) => (
                  <div key={`headType_${i}`} className={styles.radioWrap}>
                    <input
                      type="radio"
                      name="headType"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={e.value}
                      id={e.value}
                      className={styles.radio}
                    />
                    <label className={styles.radioLabel} htmlFor={e.value}>
                      {e.name}
                    </label>
                  </div>
                ))}
              </div>

              <div className={styles.infoBlock}>
                <h4 className={styles.constructSubheading}>Скорость печати</h4>

                <div className={styles.radioWrap}>
                  <div className={styles.rangeMainInfoWrapper}>
                    <p className={styles.rangeStart}>
                      {formik.values.printSpeed}
                    </p>
                  </div>
                  <input
                    type="range"
                    name="printSpeed"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.printSpeed}
                    min="1"
                    max={constructor?.printSpeedMax}
                    className={styles.rangeInput}
                  />
                  <div className={styles.rangeInfoWrapper}>
                    <p className={styles.rangeStart}>1</p>
                    <p className={styles.rangeEnd}>
                      {constructor?.printSpeedMax}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <h4 className={styles.constructSubheading}>Цветовая модель</h4>
                {constructor?.colorModel?.map((e, i) => (
                  <div key={`headType_${i}`} className={styles.radioWrap}>
                    <input
                      type="radio"
                      name="colorModel"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={e.value}
                      id={e.value}
                      className={styles.radio}
                    />
                    <label className={styles.radioLabel} htmlFor={e.value}>
                      {e.name}
                    </label>
                  </div>
                ))}
              </div>

              <div className={styles.infoBlock}>
                <ul>
                  {constructor?.info2?.map((e, i) => (
                    <li key={`info2_${i}`}>
                      <p>
                        {e?.name}:{" "}
                        <span className={styles.infoSpan2}>{e?.value}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <h4 className={styles.constructSubheading}>
                  Типы используемых чернил
                </h4>
                {constructor?.inkType?.map((e, i) => (
                  <div key={`inkType_${i}`} className={styles.radioWrap}>
                    <input
                      type="radio"
                      name="inkType"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={e.value}
                      id={e.value}
                      className={styles.radio}
                    />
                    <label className={styles.radioLabel} htmlFor={e.value}>
                      {e.name}
                    </label>
                  </div>
                ))}
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="comments" className={styles.textLabel}>
                    Комментарии
                  </label>
                  <input
                    type="text"
                    name="comments"
                    required
                    placeholder="Комментарий"
                    className={styles.textInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comments}
                  />
                  {formik.errors.comments && formik.touched.comments ? (
                    <small className={styles.errors}>
                      {formik.errors.comments}
                    </small>
                  ) : (
                    <div className={styles.errorsPatch}></div>
                  )}
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="clientName" className={styles.textLabel}>
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    required
                    placeholder="Введите Ваше имя"
                    className={styles.textInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.clientName}
                  />
                  {formik.errors.clientName && formik.touched.clientName ? (
                    <small className={styles.errors}>
                      {formik.errors.clientName}
                    </small>
                  ) : (
                    <div className={styles.errorsPatch}></div>
                  )}
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="clientEmail" className={styles.textLabel}>
                    Ваш e-mail
                  </label>
                  <input
                    type="email"
                    name="clientEmail"
                    required
                    placeholder="Введите Вашу почту"
                    className={styles.textInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.clientEmail}
                  />
                  {formik.errors.clientEmail && formik.touched.clientEmail ? (
                    <small className={styles.errors}>
                      {formik.errors.clientEmail}
                    </small>
                  ) : (
                    <div className={styles.errorsPatch}></div>
                  )}
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="clientPhone" className={styles.textLabel}>
                    Ваш телефон
                  </label>
                  <input
                    type="text"
                    name="clientPhone"
                    required
                    placeholder="Введите Ваш телефон"
                    className={styles.textInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.clientPhone}
                  />
                  {formik.errors.clientPhone && formik.touched.clientPhone ? (
                    <small className={styles.errors}>
                      {formik.errors.clientPhone}
                    </small>
                  ) : (
                    <div className={styles.errorsPatch}></div>
                  )}
                </div>
              </div>

              <div className={styles.infoBlock}>
                <button type="submit" className={styles.button}>
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer
          setIsDownloadPopupOpened={setIsDownloadPopupOpened}
          setIsPopupOpened={setIsPopupOpened}
        />
      </main>
    </>
  );
}
