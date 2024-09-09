import { IoCall, IoPerson } from 'react-icons/io5';
import css from './Contact.module.css'; 
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice';

const ContactItem = ({ id, name, number, onDelete }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
      <li className={css.contactItem}>
          <div className={css.contactDetails}>
              <p className={css.contactName}><IoPerson className={css.icon} /> {name}</p>
          <p className={css.contactNumber}><IoCall className={css.icon} /> {number}</p>
          </div>
          <button className={css.deleteButton} type='button' onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;
