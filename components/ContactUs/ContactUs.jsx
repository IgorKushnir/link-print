import { useFormik } from 'formik';

import styles from './ContactUs.module.scss';

export default function ContactUs () {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            question: ''
        },
        onSubmit: values => {console.log(values)}
    })

    return (
        <section className={styles.mainWrapper}>
             <div className="container">
                 <h2 className={styles.title}>Оставьте заявку</h2>
                 <span className={styles.subtitle}>и мы с Вами свяжемся</span>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name" className={styles.label}>Ваше имя</label>
                    <input id="name" name="name" type="text" placeholder="Имя" className={styles.input} onChange={formik.handleChange} value={formik.values.name} />
                    <label htmlFor="phone" className={styles.label}>Ваш телефон</label>
                    <input id="phone" name="phone" type="text" placeholder="Телефон" className={styles.input} onChange={formik.handleChange} value={formik.values.phone} />
                    <label htmlFor="name" className={styles.label}>Ваш вопрос</label>
                    <textarea id="question" name="question" type="text" placeholder="Вопрос" className={styles.textarea} onChange={formik.handleChange} value={formik.values.question} />
                    <button type="submit" className={styles.button}>Отправить</button>
                </form>
             </div>
        </section>
    )
}