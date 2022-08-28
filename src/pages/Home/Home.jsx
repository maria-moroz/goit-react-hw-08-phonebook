import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Home.module.css';
import { TiContacts } from 'react-icons/ti';
import { getUserToken } from 'redux/auth/authSlice';

export default function Home() {
  const token = useSelector(getUserToken);
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
          {token ? 'My contacts' : "Let's start"}
        </Link>
      </div>
    </div>
  );
}
