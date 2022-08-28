import RegisterForm from 'components/RegisterForm/RegisterForm';
import s from './Register.module.css';

export default function Register() {
  return (
    <div className="container">
      <h1 className={s.header}>Let's create your account</h1>
      <RegisterForm />
    </div>
  );
}
