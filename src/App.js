import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => {
    setContacts(prevState => [...prevState, { id: uuidv4(), ...newContact }]);
  };

  const isContactExist = contactName =>
    contacts.some(contact => contact.name.toLowerCase() === contactName.toLowerCase());

  const setFilterContact = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = () =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const deleteContact = e => {
    console.log(e.target.id);
    setContacts(prev => prev.filter(contact => contact.id !== e.target.id));
  };

  return (
    <>
      <div className={'bgImg'}>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={addNewContact} isContactExist={isContactExist} />
        <h2>Contacts </h2>
        <Filter value={filter} onChange={setFilterContact} />
        <ContactList contacts={filteredContacts()} deleteContact={deleteContact} />
      </div>
    </>
  );
};

export default App;

// class App extends Component {

//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     return (

//     );
//   }
// }

// export default App;
