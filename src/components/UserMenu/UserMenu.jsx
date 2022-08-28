import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSlice';
import { useLogoutMutation } from 'redux/auth/authApi';
import s from './UserMenu.module.css';
export default function UserMenu() {
  const name = useSelector(getUserName);
  const [logout, { isLoading }] = useLogoutMutation();
  return (
    <div className={s.container}>
      <p className={s.text}>
        Hello, <span className={s.name}>{name}</span>
      </p>
      <button
        to="/"
        className={s.button}
        disabled={isLoading}
        onClick={() => logout()}
      >
        Sign out
      </button>
    </div>
  );
}
