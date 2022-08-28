import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';

import 'styles/form.css';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = async e => {
    e.preventDefault();
    const contact = { name, email, password };
    dispatch(operations.register(contact));
    setName('');
    setEmail('');
    setPassword('');
  };

  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      default:
        throw new Error(`Unsuported input name ${name}`);
    }
  };

  return (
    <form className="formContainer" onSubmit={handleFormSubmit}>
      <div className="formFieldContainer">
        <label className="formLabel" htmlFor={nameId}>
          Username
        </label>
        <input
          className="formInput"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          required
        />
      </div>
      <div className="formFieldContainer">
        <label className="formLabel" htmlFor={emailId}>
          Email adress
        </label>
        <input
          className="formInput"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
          required
        />
      </div>
      <div className="formFieldContainer">
        <label className="formLabel" htmlFor={passwordId}>
          Password
        </label>
        <input
          className="formInput"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          autoComplete="off"
          required
        />
      </div>
      <button className="formSubmitButton" type="submit">
        Register
      </button>
    </form>
  );
}
