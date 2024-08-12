import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import Section from './components/Section/Section'

function App() {
  // Начальные контакты
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  // Состояние для хранения контактов
  const [contacts, setContacts] = useState(() => {
    const storedContacts = window.localStorage.getItem('savedContacts');
    // Печать данных из localStorage для отладки
    console.log('Loaded contacts from localStorage:', storedContacts);
    return storedContacts ? JSON.parse(storedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState('');

  // Эффект для сохранения контактов в localStorage
  useEffect(() => {
    console.log('Contacts updated:', contacts);
    window.localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  // Функция для удаления контакта
  const onDelete = (id) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  };

  // Функция для добавления нового контакта
  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // Фильтрация контактов
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Section>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onContactSearch={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={onDelete} />
      </Section>
    </div>
  );
}

export default App;
