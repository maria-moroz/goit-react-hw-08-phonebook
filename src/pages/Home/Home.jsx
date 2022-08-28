import { Link } from 'react-router-dom';
import s from './Home.module.css';
import { TiContacts } from 'react-icons/ti';

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <div className={s.icon}>
          <TiContacts size="70px" color="#377d71" />
        </div>
        <h1 className={s.header}>
          Welcome to <span>Phonebook</span>!
        </h1>
        <p className={s.description}>
          You no longer need to keep contacts in your head,
          <br /> we'll remember them for you.
        </p>
        <Link to="/login" className={s.link}>
          Let's start
        </Link>
      </div>
    </div>
  );
}
