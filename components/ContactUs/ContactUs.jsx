import { useFormik } from 'formik';
import * as Yup from 'yup';
import { store } from 'react-notifications-component';

import styles from './ContactUs.module.scss';
import {sendContantForm} from '../../pages/api/externalAPI';

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Имя слишком короткое')
    .max(50, 'Имя слишком длинное').required('Обязательное поле'),
    phone: Yup.string().min(5, 'Телефон слишком короткий')
    .max(16, 'Телефон слишком длинный').required('Обязательное поле'),
    question: Yup.string()
})

export default function ContactUs () {

    const createNotification = (title, type, text) => {
        
        store.addNotification({
            title: title,
            message: text,
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
          });
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            question: ''
        },
        validationSchema: ContactSchema,
        onSubmit: values => {
            sendContantForm(values)
            .then(({data}) => {
                if(data.ok) {
                    createNotification('Спасибо!' ,'success', 'Благодарим за Ваше обращение! Мы скоро с Вами свяжемся.')
                    formik.resetForm();
            }})
            .catch(
                () => {createNotification('Ошибка!' ,'error', 'Что-то пошло не так. Пожалуйста, повторите попытку позже.');
                formik.resetForm();}
            );
        }
    })

    return (
        <section className={styles.mainWrapper}>
             <div className="container">
                 <h2 className={styles.title}>Оставьте заявку</h2>
                 <p className={styles.subtitle}>и мы с Вами свяжемся</p>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="name" className={styles.label}>Ваше имя</label>
                        <input id="name" name="name" type="text" placeholder="Имя" className={styles.input} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                        {formik.errors.name && formik.touched.name ? (
                            <small className={styles.errors}>{formik.errors.name}</small>
                        ) : <div className={styles.errorsPatch}></div>}
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="phone" className={styles.label}>Ваш телефон</label>
                        <input id="phone" name="phone" type="text" placeholder="Телефон" className={styles.input} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                        {formik.errors.phone && formik.touched.phone ? (
                            <small className={styles.errors}>{formik.errors.phone}</small>
                        ) : <div className={styles.errorsPatch}></div>}
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="name" className={styles.label}>Ваш вопрос</label>
                        <input id="question" name="question" type="text" placeholder="Вопрос" className={styles.input} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.question} />
                        {formik.errors.question && formik.touched.question ? (
                            <small className={styles.errors}>{formik.errors.question}</small>
                        ) : <div className={styles.errorsPatch}></div>}
                    </div>
                    <div>
                        <button type="submit" className={styles.button}>Отправить</button>
                        <div className={styles.errorsPatch}></div>
                    </div>
                </form>
             </div>
        </section>
    )
}