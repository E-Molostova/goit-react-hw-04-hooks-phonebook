import React from 'react';
import style from './Filte.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={style.divFilter}>
      <label className={style.inputLabel}>
        Find contacts by name
        <input
          className={style.inputFilter}
          type="text"
          value={value}
          name="search"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
