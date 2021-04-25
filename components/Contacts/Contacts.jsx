import Link from 'next/link';

import styles from './Contacts.module.scss';
import contacts from '../../pages/api/contacts';

export default function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className='container'>
        <h2 className={styles.heading}>Наши контакты</h2>
        <ul className={styles.list}>
          {contacts.map((contact, i) => (
            <li key={`contact_${i}`} className={styles.item}>
              <p className={styles.name}>{contact.name}</p>
              <p className={styles.phone}>{contact.phone}</p>
              <p className={styles.email}>{contact.email}</p>
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
