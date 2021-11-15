import Link from "next/link";

import styles from "./Contacts.module.scss";
import contacts from "../../pages/api/contacts";

export default function Contacts() {
  return (
    <section className={styles.contacts} id="contacts">
      <div className="container">
        <h2 className={styles.heading}>Наши контакты:</h2>
        <h3 className={styles.subheading}>Офис в Киеве</h3>
        <ul className={styles.list}>
          {contacts.map((contact, i) => (
            <li key={`contact_${i}`} className={styles.item}>
              <table className={styles.table}>
                <tbody>
                  <tr className={styles.tableRow}>
                    <td className={styles.leftColumn}>
                      <span className={styles.span}>Адрес:</span>
                    </td>
                    <td>
                      <p className={styles.text}>{contact.address}</p>
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <td className={styles.leftColumn}>
                      <span className={styles.span}>Имя:</span>
                    </td>
                    <td>
                      <p className={styles.text}>{contact.name}</p>
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <td className={styles.leftColumn}>
                      <span className={styles.span}>Телефон:</span>
                    </td>
                    <td>
                      <a href={`tel:${contact.phone1}`} className={styles.text}>
                        {contact.phone1}
                      </a>
                      <a href={`tel:${contact.phone2}`} className={styles.text}>
                        {contact.phone2}
                      </a>
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <td className={styles.leftColumn}>
                      <span className={styles.span}>E-mail:</span>
                    </td>
                    <td>
                      <p className={styles.text}>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
        <div className={styles.linkWrapper}>
          <Link href="/privacy-policy.html">
            <p className={styles.link}>Политика конфиденциальности</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
