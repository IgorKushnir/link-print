import { useFormik } from "formik";
import { useRouter } from 'next/router'

import { createNotification } from "../Notifications/notifications"
import { sendContantForm } from "../../pages/api/externalAPI";
import styles from "./productConstructor.module.scss";

export default function ProductConstructor ({currentProduct}) {
  const router = useRouter()

    const formik = useFormik({
        initialValues: {
          name: currentProduct?.construct?.name
            ? currentProduct.construct.name
            : "",
          printWidth: "",
          headType: "",
          headsQuantity: 3,
          ionizatorNaKaretke: false,
          podkatniyStol: false,
          podmotkaRulonov: false,
          ONYXPosterShop: false,
          CalderaCOPYRIP: false,
          autoHeadCleaning: false,
          workstation: false,
          DUOtable: false,
          clientName: "",
          clientPhone: "",
          clientEmail: "",
        },
        onSubmit: (values) => {

          sendContantForm(values)
            .then(({ data }) => {
              if (data.ok) {
                router.push('/thank-you.html')
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
        <form onSubmit={formik.handleSubmit}>
        <div className={styles.infoBlock}>
          <ul>
            {currentProduct?.construct?.info1?.map((e, i) => (
              <li key={`info1_${i}`}>
                <p >
                  {e?.name}:{" "}
                  <span className={styles.infoSpan2}>{e?.value}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        {currentProduct?.construct?.printWidth && <div className={styles.infoBlock}>
          <h4 className={styles.constructSubheading}>Ширина печати</h4>
          {currentProduct.construct.printWidth.map((e, i) => (
            <div key={`printWidth_${i}`} className={styles.radioWrap}>
              <input
                type="radio"
                name="printWidth"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={e.value}
                id={e.value}
                className={styles.radio}
              />
              <label className={styles.radioLabel} htmlFor={e.value}>{e.name}</label>
            </div>
          ))}
        </div>}
        <div className={styles.infoBlock}>
          <h4 className={styles.constructSubheading}>Тип голов</h4>
          {currentProduct?.construct?.headType?.map((e, i) => (
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
              <label className={styles.radioLabel} htmlFor={e.value}>{e.name}</label>
            </div>
          ))}
        </div>
        <div className={styles.infoBlock}>
          <h4 className={styles.constructSubheading}>
            Количество печатных голов
          </h4>

          <div className={styles.radioWrap}>
          <div className={styles.rangeMainInfoWrapper}>
                  <p className={styles.rangeStart}>{formik.values.headsQuantity}</p>
                </div>
            <input
              type="range"
              name="headsQuantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.headsQuantity}
              min="1"
              max={currentProduct?.construct?.headsQuantityMax}
              className={styles.rangeInput}
            />
              <div className={styles.rangeInfoWrapper}>
                  <p className={styles.rangeStart}>1</p>
                <p className={styles.rangeEnd}>{currentProduct?.construct?.headsQuantityMax}</p>  
                </div>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <ul>
            {currentProduct?.construct?.info2?.map((e, i) => (
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
          {currentProduct?.construct?.features?.map((e, i) => (
            <div className={styles.checkboxLabel}>
              <label>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name={e.value}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values[e.value]}
                />
                <p>{e.name}</p>
              </label>
            </div>
          ))}
        </div>
        <div className={styles.infoBlock}>
        <h4 className={styles.constructSubheading}>RIP</h4>
          <div className={styles.ripWrapper}>
            {currentProduct?.construct?.rip?.map((e, i) => (
              <div className={styles.labelRip}>
                <label>
                  <input
                    className={styles.checkboxRip}
                    type="checkbox"
                    name={e.value}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values[e.value]}
                  />
                  {e.name}
                  <img className={styles.ripImg} src={e.img} />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.infoBlock}>
          <ul>
            {currentProduct?.construct?.info3?.map((e, i) => (
              <li key={`info3_${i}`}>
                <p>
                  {e?.name}:{" "}
                  <span className={styles.infoSpan2}>{e?.value}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.inputWrapper}>
          <label htmlFor="clientName" className={styles.textLabel}>Ваше имя</label>
            <input
              type="text"
              name="clientName"
              required
              placeholder="Введите Ваше имя"
              className={styles.textInput}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.clientName}
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
          <label htmlFor="clientEmail" className={styles.textLabel}>Ваш e-mail</label>
            <input
              type="email"
              name="clientEmail"
              required
              placeholder="Введите Вашу почту"
              className={styles.textInput}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.clientEmail}
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
          <label htmlFor="clientPhone" className={styles.textLabel}>Ваш телефон</label>
            <input
              type="text"
              name="clientPhone"
              required
              placeholder="Введите Ваш телефон"
              className={styles.textInput}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.clientPhone}
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
        <button type="submit" className={styles.button}>Отправить</button>
        </div>
      </form>
      )

}