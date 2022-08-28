import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSlice';
import { useLogoutMutation } from 'redux/authSlice';
import s from './UserMenu.module.css';
export default function UserMenu() {
  const name = useSelector(getUserName);
  // const [logout, result] = useLogoutMutation();
  // const handleLogout = async () => {
  //   try {
  //     logout();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className={s.container}>
      <p className={s.text}>
        Hello, <span className={s.name}>{name}</span>
      </p>
      <button to="/" className={s.button}>
        Sign out
      </button>
    </div>
  );
}
