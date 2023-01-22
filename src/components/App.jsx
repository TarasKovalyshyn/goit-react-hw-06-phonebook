import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import { addContact } from './redux/contactsSlice';

const INITIAL_LIST = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [filter, setFilter] = useState('');
  // const dispatch = useDispatch();
  const [contacts, setContacts] = useState(INITIAL_LIST);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);



  
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };




  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };




  const addContact = contact => {
    const isIncontacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isIncontacts) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [{ id: nanoid(), ...contact }, ...prevState]);
  };




  const removeContacts = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const visibleContacts = getVisibleContacts();



  return (
    <div style={{ width: '300px', marginLeft: '15px' }}>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />

      <h2>Contacts </h2>

      {contacts.length > 0 ? (
        <Filter value={filter} onChange={changeFilter} />
      ) : (
        'Your phonebook is empty'
      )}
      {contacts.length > 0 && (
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={removeContacts}
        />
      )}
    </div>
  );
};

export default App;
