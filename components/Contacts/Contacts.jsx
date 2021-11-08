import Link from 'next/link';

import styles from './Contacts.module.scss';
import contacts from '../../pages/api/contacts';

export default function Contacts() {
  return (
    <section className={styles.contacts} id="contacts">
      <div className='container'>
        <h2 className={styles.heading}>Наши контакты:</h2>
        <h3 className={styles.subheading}>Офис в Киеве</h3>
        <ul className={styles.list}>
          {contacts.map((contact, i) => (
            <li key={`contact_${i}`} className={styles.item}>
              <p className={styles.text}><span>Имя:</span> {contact.name}</p>
              <p className={styles.text}><span>Телефон:</span> {contact.phone}</p>
              <p className={styles.text}><span>E-mail:</span> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </li>
          ))}
        </ul>
        <div className={styles.linkWrapper}>
          <Link href='/privacy-policy'>
            <p className={styles.link}>Политика конфиденциальности</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
