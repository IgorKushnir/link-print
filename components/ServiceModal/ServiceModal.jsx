import { useFormik } from "formik";
import { useRouter } from 'next/router'

import { createNotification } from "../Notifications/notifications"
import { sendContantForm } from "../../pages/api/externalAPI";
import styles from './ServiceModal.module.scss';

export default function ServiceModal ({setIsServicePopupOpened}) {
  const router = useRouter()

    const formik = useFormik({
        initialValues: {
          name: "",
          company: "",
          phone: "",
          email: "",
          confirm: true,
        },

        onSubmit: (values) => {
          sendContantForm(values)
            .then(({ data }) => {
              if (data.ok) {
                formik.resetForm();
                setIsServicePopupOpened(false)
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
          setIsServicePopupOpened(false)
        }
      }

    return (
        <div className={styles.backdrop} onClick={closeModal}>
            <div className={styles.container}>
                <button type="button" className={styles.closeButton} onClick={() => setIsServicePopupOpened(false)}>
                    <img className={styles.closeIcon} src="/img/png/Cancel.png" />
                </button>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Заявка в сервисный центр</h3>
                    <p className={styles.description}>Группа сервисных инженеров всегда онлайн в любом из удобных мессенджеров</p>
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
              name="company"
              required
              placeholder="Название компании"
              className={styles.textInput}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.company}
            />
            {formik.errors.company && formik.touched.company ? (
              <small className={styles.errors}>
                {formik.errors.company}
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