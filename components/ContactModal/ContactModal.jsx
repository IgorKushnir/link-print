import { useFormik } from "formik";

import { createNotification } from "../Notifications/notifications"
import { sendContantForm } from "../../pages/api/externalAPI";
import styles from './ContactModal.module.scss';

export default function ContactModal ({setIsPopupOpened}) {

    const formik = useFormik({
        initialValues: {
          name: "",
          branch: "",
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
                setIsPopupOpened(false)
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

      const closeModal = (e) => {
        if (e.target === e.currentTarget) {
          setIsPopupOpened(false)
        }
      }

    return (
        <div className={styles.backdrop} onClick={closeModal}>
            <div className={styles.container}>
                <button type="button" className={styles.closeButton} onClick={() => setIsPopupOpened(false)}>
                    <img className={styles.closeIcon} src="/img/png/Cancel.png" />
                </button>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Получить консультацию</h3>
                    <p className={styles.description}>Заполните форму ниже и мы свяжемся с вами для уточнения всех деталей</p>
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
              type="text"
              name="branch"
              required
              placeholder="Ваша сфера деятельности"
              className={styles.textInput}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.branch}
            />
            {formik.errors.branch && formik.touched.branch ? (
              <small className={styles.errors}>
                {formik.errors.branch}
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
          </div>
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
        <div className={styles.inputWrapper}>
        <button type="submit" className={styles.button}>Отправить</button>
        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}