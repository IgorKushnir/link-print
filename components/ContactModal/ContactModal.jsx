import { useFormik } from "formik";
import { useRouter } from 'next/router'

import { createNotification } from "../Notifications/notifications"
import { sendContantForm } from "../../pages/api/externalAPI";
import styles from './ContactModal.module.scss';

export default function ContactModal ({setIsPopupOpened}) {

  const router = useRouter()

    const formik = useFormik({
        initialValues: {
          name: "",
          branch: "",
          confirm: true,
        },

        onSubmit: (values) => {
          sendContantForm(values)
            .then(({ data }) => {
              if (data.ok) {
                setIsPopupOpened(false)
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