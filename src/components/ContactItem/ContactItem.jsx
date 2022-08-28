import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { AiOutlineDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';

import s from './ContactItem.module.css';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { id, name, number } = contact;

  return (
    <li key={id} className={s.item}>
      <p className={s.contact}>
        {name}: <span>{number}</span>
      </p>
      <button
        type="button"
        className={s.button}
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        <AiOutlineDelete size="20px" />
        <span>{isLoading ? 'Deleting...' : 'Delete'}</span>
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
