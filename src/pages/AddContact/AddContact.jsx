import { useContacts } from 'hooks/useContacts';
import ContactForm from 'components/ContactForm/ContactForm';
import s from './AddContact.module.css';
export default function AddContact() {
  const { filteredContacts } = useContacts();
  return (
    <div className="container">
      <h1 className={s.header}>
        Add new contact <br /> to your Phonebook
      </h1>
      <ContactForm contacts={filteredContacts} />
    </div>
  );
}
