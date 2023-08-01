import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

function Button({ children }) {
  return (
    <button className="Button" type="submit">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
