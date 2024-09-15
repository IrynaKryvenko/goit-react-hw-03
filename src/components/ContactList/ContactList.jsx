import css from  './ContactList.module.css'; // Импорт стилей
import ContactItem from "../Contact/Contact.jsx";
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';
import { useSelector } from "react-redux";

const ContactList = () => {
      const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
      <ul className={css.contactList}>
            {filteredContacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                
                />
            ))}
        </ul>
    );
}

export default ContactList;
