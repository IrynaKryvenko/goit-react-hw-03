import css from  './ContactList.module.css'; // Импорт стилей
import ContactItem from "../Contact/Contact.jsx";

const ContactList = ({ contacts, onDelete }) => {
    return (
      <ul className={css.contactList}>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default ContactList;
