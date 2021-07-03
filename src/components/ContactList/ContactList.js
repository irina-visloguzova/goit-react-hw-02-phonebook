import React from 'react';
import PropTypes from 'prop-types';
import style from '../ContactList/ContactList.module.css';

const ContactList = ({ filterContacts, onClickDelete }) => (
  <>
    <ul className={style.list}>
      {filterContacts.map(e => {
        return (
          <li key={e.id} className={style.item}>
            <span className={style['item-name']}>{e.name}:</span>
            <span className={style['item-number']}>{e.number}</span>
            <button
              className={style.button}
              type="button"
              onClick={onClickDelete}
              id={e.id}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  </>
);
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
export default ContactList;