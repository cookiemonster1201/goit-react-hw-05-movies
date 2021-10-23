import s from './SearchBar.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ currentTarget: { value } }) => {
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (e.currentTarget.query.value.trim() === '') {
      toast.info('please type a movie name');
      return;
    }
    const normalizedQuery = e.currentTarget.query.value.trim().toLowerCase();
    onSubmit(normalizedQuery);
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.button}>
        <span className={s.label}>Search</span>
      </button>

      <input
        className={s.input}
        name="query"
        type="text"
        autoComplete="off"
        placeholder="Search movies"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
