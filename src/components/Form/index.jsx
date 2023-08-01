/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */

import { React, useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import Dropdown from '../Dropdown';
import Button from '../Button';

function Form({ onPersonRegister, times }) {
  const [name, setName] = useState('');
  const [cargo, setCargo] = useState('');
  const [image, setImage] = useState('');
  const [time, setTime] = useState('');

  const onSave = event => {
    event.preventDefault();
    onPersonRegister({ name, cargo, image, time });
    setName('');
    setCargo('');
    setImage('');
    setTime('');
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputField
          isRequired={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChange={value => setName(value)}
        />
        <InputField
          isRequired={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          onChange={value => setCargo(value)}
        />
        <InputField
          isRequired={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onChange={value => setImage(value)}
        />
        <Dropdown
          value={time}
          onChange={value => setTime(value)}
          isRequired={true}
          label="Time"
          items={times}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}

Form.propTypes = {
  onPersonRegister: PropTypes.func.isRequired,
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Form;
