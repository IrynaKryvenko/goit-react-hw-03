import { IoCall, IoPerson } from 'react-icons/io5';
import css from './Contact.module.css'; 

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
      <li className={css.contactItem}>
          <div className={css.contactDetails}>
              <p className={css.contactName}><IoPerson className={css.icon} /> {name}</p>
          <p className={css.contactNumber}><IoCall className={css.icon} /> {number}</p>
          </div>
          <button className={css.deleteButton} type='button' onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
