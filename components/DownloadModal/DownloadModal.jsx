import { useFormik } from "formik";

import { createNotification } from "../Notifications/notifications"
import { sendContantForm } from "../../pages/api/externalAPI";
import styles from './DownloadModal.module.scss';

export default function DownloadModal ({setIsDownloadPopupOpened}) {

    const formik = useFormik({
        initialValues: {
            purpose: "Download catalog",
          name: "",
          phone: "",
          email: "",
          confirm: true,
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
                formik.resetForm();
                setIsDownloadPopupOpened(false)
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
        <div className={styles.backdrop}>
            <div className={styles.container}>
                <button type="button" className={styles.closeButton} onClick={() => setIsDownloadPopupOpened(false)}>
                    <img className={styles.closeIcon} src="/img/png/Cancel.png" />
                </button>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Скачать каталог</h3>
                    <p className={styles.description}>Заполните форму ниже и мы отправим на Вашу почту полный каталог принтеров LinkPrint</p>
                    <form onSubmit={formik.handleSubmit}>
                    <div className={styles.infoBlock}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="name"
              required
              placeholder="Введите Ваше имя"
              className={styles.textInput}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <small className={styles.errors}>
                {formik.errors.name}
              </small>
            ) : (
              <div className={styles.errorsPatch}></div>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <input
              type="email"
              name="email"
              required
              placeholder="Введите Вашу почту"
              className={styles.textInput}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <small className={styles.errors}>
                {formik.errors.email}
              </small>
            ) : (
              <div className={styles.errorsPatch}></div>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="phone"
              required
              placeholder="Введите Ваш телефон"
              className={styles.textInput}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <small className={styles.errors}>
                {formik.errors.phone}
              </small>
            ) : (
              <div className={styles.errorsPatch}></div>
            )}

<div className={styles.checkboxLabel}>
              <label>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="confirm"
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirm}
                />
                <p>Нажимая кнопку "Отправить" вы соглашаетесь с политикой конфиденциальности</p>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.inputWrapper}>
        <button type="submit" className={styles.button}>Отправить</button>
        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}