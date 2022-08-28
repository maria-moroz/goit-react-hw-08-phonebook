import { nanoid } from 'nanoid';
import { updateFilter, getContactsFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

import s from './Filter.module.css';
import 'styles/form.css';

export default function Filter() {
  const filterId = nanoid();

  const dispatch = useDispatch();

  const filter = useSelector(getContactsFilter);

  return (
    <div className={s.formContainer}>
      <label htmlFor={filterId} className={s.label}>
        Search contacts by name
      </label>
      <input
        type="text"
        name="name"
        id={filterId}
        className={s.input}
        value={filter}
        autoComplete="off"
        onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      />
    </div>
  );
}
