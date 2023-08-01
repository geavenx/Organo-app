/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { React } from 'react';
import { PropTypes } from 'prop-types';
import './InputField.css';

function InputField({ label, placeholder, isRequired, value, onChange }) {
  const modifiedPlaceholder = `${placeholder}`;

  const onType = event => {
    onChange(event.target.value);
  };

  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        value={value}
        onChange={onType}
        required={isRequired}
        type="text"
        placeholder={modifiedPlaceholder}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
