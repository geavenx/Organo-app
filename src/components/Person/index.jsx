import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';

function Person({ name, cargo, image, bgColor }) {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Person;
