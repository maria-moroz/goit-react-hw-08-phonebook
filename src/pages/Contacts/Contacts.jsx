import { useContacts } from 'hooks/useContacts';
import ClipLoader from 'react-spinners/ClipLoader';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './Contacts.module.css';

export default function Contacts() {
  const { filteredContacts, error, isLoading, isSuccess } = useContacts();
  const contactsNumber = filteredContacts.length;

  return (
    <div className="container">
      <h1 className={s.header}>
        You have <span>{contactsNumber}</span> contacts
      </h1>
      <Filter />
      {isLoading && <ClipLoader />}
      {isSuccess && filteredContacts && (
        <ContactList contacts={filteredContacts} />
      )}
      {error && <p>Sorry, we can't find your contacts :( </p>}
    </div>
  );
}
