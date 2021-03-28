import {Link} from 'next/Link';

import styles from './Contacts.module.scss';
import contacts from '../../pages/api/contacts';

export default function Contacts() {
  return (
    <section>
      <div className='container'>
        <h2 className='section__header'>Наши контакты</h2>
        <ul className={styles.list}>
          {contacts.map((contact, i) => (
            <li key={`contact_${i}`} className={styles.item}>
              <p className={styles.name}>{contact.name}</p>
              <p className={styles.phone}>{contact.phone}</p>
              <p className={styles.email}>{contact.email}</p>
            </li>
          ))}
        </ul>
        <Link to='/privacy-policy' className={styles.link}>
          Политика конфиденциальности
        </Link>
      </div>
    </section>
  );
}
