import { changeFilter } from 'redux/contactsSlice';
import { selekectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
const Filter = () => {
  const filter = useSelector(selekectFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));
  return (
    <label className={css.label__filter}>
      Find contacts by name
      <input
        type="text"
        className={css.filter__input}
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
