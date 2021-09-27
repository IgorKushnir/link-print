import Link from "next/link";
import styles from './PrinterClasses.module.scss';
import printerClasses from '../../pages/api/printerClasses';
import PrinterClassesItem from '../PrinterClassesItem/PrinterClassesItem';

export default function PrinterClasses({setIsPopupOpened}) {
  return (
    <section>
      <div className='container'>
        <div className={styles.titleWrapper}>
          <h2 className={styles.titleTop}>Оборудование</h2>
          <h2 className={styles.titleBottom}>для всех задач</h2>
        </div>
        <ul className={styles.classesList}>
          {printerClasses.map(cl => (
            <PrinterClassesItem
              key={cl.id}
              title={cl.title}
              print={cl.print}
              branches={cl.branches}
              link={cl.link}
              img={cl.img}
            />
          ))}
        </ul>
        <div className={styles.individualWrapper}>
            <div className={styles.textWrapper}>
              <h3 className={styles.individualHeading}>Собрать свой принтер</h3>
              <p className={styles.text}>С помощью данного конструктора вы можете самостоятельно собрать принтер который подходит под ваши производственные потребности.</p>
              </div>
              <div className={styles.buttonsWrapper}>
                <Link href="/constructor"><button className={styles.whiteButton}>Собрать принтер</button></Link>
                <button onClick={() => setIsPopupOpened(true)} className={styles.transparentButton}>Консультация</button>
              </div>
        </div>
      </div>
    </section>
  );
}
