import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getIsLoading } from 'redux/contacts/contactsSlice';
import operations from 'redux/contacts/contactsOperations';

import 'styles/form.css';

export default function ContactForm({ contacts }) {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const handleFormSubmit = async e => {
    e.preventDefault();

    const contact = { name: contactName, number: contactNumber };

    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      toast.error(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(operations.addContact(contact));

    setContactName('');
    setContactNumber('');
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': {
        setContactName(value);
        break;
      }
      case 'phone': {
        setContactNumber(value);
        break;
      }
      default:
        throw new Error(`Unsuported input name ${name}`);
    }
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <>
      <form className="formContainer" onSubmit={handleFormSubmit}>
        <div className="formFieldContainer">
          <label htmlFor={nameId} className="formLabel">
            Name
          </label>
          <input
            type="text"
            name="name"
            id={nameId}
            className="formInput"
            value={contactName}
            onChange={handleInputChange}
            autoComplete="off"
            autoFocus
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className="formFieldContainer">
          <label htmlFor={numberId} className="formLabel">
            Number
          </label>
          <input
            type="tel"
            name="phone"
            id={numberId}
            className="formInput"
            value={contactNumber}
            autoComplete="off"
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit" disabled={isLoading} className="formSubmitButton">
          {isLoading ? 'Adding...' : 'Add contact'}
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
