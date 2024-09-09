
import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import Section from './components/Section/Section'

function App() {

return (
    <div>
      <Section>
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      </Section>
    </div>
  );
}

export default App;
