import { useFormik } from "formik";
import { useRouter } from 'next/router'

import { createNotification } from "../Notifications/notifications";
import { sendContantForm } from "../../pages/api/externalAPI";
import styles from "./SurveyModal.module.scss";
import constructor from "../../pages/api/constructor";

export default function SurveyModal({ setIsSurveyPopupOpened }) {
  const router = useRouter()

    const formik = useFormik({
        initialValues: {
          printType: "",
          materialType: "",
          printSpeed: 0,
          maxGabarity: "",
          minGabarity: "",
          material: "",
          headType: "",
          colorModel: "",
          inkType: "",
          comments: "",
          clientName: "",
          clientPhone: "",
          clientEmail: "",
        },

    onSubmit: (values) => {
      sendContantForm(values)
        .then(({ data }) => {
          if (data.ok) {
            formik.resetForm();
            setIsPopupOpened(false);
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
      setIsSurveyPopupOpened(false)
    }
  }

  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setIsSurveyPopupOpened(false)}
        >
          <img className={styles.closeIcon} src="/img/png/Cancel.png" />
        </button>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
            ПОЛУЧИТЬ СТАРТОВЫЙ КОМПЛЕКТ КРАСКИ БЕСПЛАТНО
          </h3>
          <p className={styles.description}>
            Ответьте на 10 вопросов и соберите свою модификацию принтера,
            которая решит задачи вашего производства получите стартовый комплект
            краски бесплатно
          </p>
          <form onSubmit={formik.handleSubmit}>
              <div className={styles.infoBlock}>
                <ul>
                  {constructor?.info1?.map((e, i) => (
                    <li key={`info1_${i}`}>
                      <p>
                        {e?.name}:{" "}
                        {e?.value}
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
                  <label htmlFor="minGabarity" className={styles.textLabel}>
                    Минимальные габариты изделия
                  </label>
                  <input
                    type="text"
                    name="minGabarity"
                    placeholder="Минимальные габариты изделия"
                    className={styles.textInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.minGabarity}
                  />
                  {formik.errors.minGabarity && formik.touched.minGabarity ? (
                    <small className={styles.errors}>
                      {formik.errors.minGabarity}
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
      </div>
    </div>
  );
}
