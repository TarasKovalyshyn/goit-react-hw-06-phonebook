import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useSelector } from 'react-redux';
import { selekectContacts } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(selekectContacts);

  return (
    <div style={{ width: '300px', marginLeft: '15px' }}>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts </h2>

      {contacts.length > 0 ? <Filter /> : <p>Your phonebook is empty</p>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
