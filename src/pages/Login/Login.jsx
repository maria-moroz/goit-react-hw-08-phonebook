import { Link } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import s from './Login.module.css';

export default function Login() {
  return (
    <div className="container">
      <h1 className={s.header}>Sign in to Phonebook</h1>
      <LoginForm />
      <p className={s.text}>
        New to Phonebook?
        <Link to="/register" className={s.link}>
          Create an account
        </Link>
      </p>
    </div>
  );
}
