import React from 'react';
import PropTypes from 'prop-types';
import style from '../Filter/Filter.module.css';

const Filter = ({ htmlFor, onChange, value }) => (
  <>
    <form className={style.form__filter}>
      <label htmlFor={htmlFor} className={style['form__name-title']}>
        Fined contacts by name
        <input
          className={style['form__name-input']}
          onChange={onChange}
          value={value}
          name="filter"
          type="text"
          placeholder="Input fined contacts"
        />
      </label>
    </form>
  </>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};
export default Filter;