import React from 'react';
import PropTypes from 'prop-types';
import './Time.css';
import Person from '../Person';

function Time({ name, primaryColor, secondaryColor, persons }) {
  return persons.length > 0 ? (
    <section className="time" style={{ backgroundColor: secondaryColor }}>
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
      <div className="colaboradores">
        {persons.map(person => (
          <Person
            bgColor={primaryColor}
            key={person.name}
            name={person.name}
            cargo={person.cargo}
            image={person.image}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  );
}

Time.propTypes = {
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  persons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Time;
