/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { PropTypes } from 'prop-types';
import './Dropdown.css';

function Dropdown({ label, items, isRequired, value, onChange }) {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select
        onChange={event => onChange(event.target.value)}
        required={isRequired}
        value={value}
      >
        <option value="">Selecionar time</option>

        {items.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  isRequired: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
