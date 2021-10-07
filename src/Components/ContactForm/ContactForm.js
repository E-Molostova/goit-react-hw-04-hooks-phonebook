import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

const ContactForm = ({ isContactExist, addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isContactExist(name)) {
      alert(`${name} is already in contacts!`);
    } else {
      addNewContact({ name, number });
      reset();
    }
  };

  return (
    <form className={style.formContact} onSubmit={handleSubmit}>
      <label className={style.inputLabel}>
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={style.contactInput}
        />
      </label>
      <label className={style.inputLabel}>
        Number
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={style.contactInput}
        />
      </label>
      <button className={style.buttonInput} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   addNewContact: PropTypes.func.isRequired,
//   isContactExist: PropTypes.func.isRequired,
// }
