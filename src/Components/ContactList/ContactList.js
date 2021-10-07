import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={style.contactsList}>
      {contacts.map(contact => (
        <li className={style.contactsItem} key={contact.id}>
          <p>{contact.name + ': ' + contact.number}</p>
          <button
            className={style.contactsDeleteBtn}
            id={contact.id}
            type="button"
            onClick={deleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;
