import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ModalContainer from '../../../components/Modal/Index';
import Body from './Body';
import Footer from '../../../components/Modal/Footer';
import axios from '../../../services/axios';
import history from '../../../services/history';

export default function AddLens({
  edit, data, onScreen, setOnScreen, setEdit,
}) {
  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    setName(data.name);
    setPrice(data.price);
    setType(data.type);
    setId(data.id);
  }, [data]);

  const handleSaveClick = () => {
    if (!name) {
      setIsValidName(false);
      return;
    }
    async function Request() {
      try {
        if (id) {
          await axios.put(`/lens/${id}`, {
            name, price, type,
          });
        } else {
          await axios.post('/lens/new-len', {
            name, price, type,
          });
        }

        setOnScreen(false);
      } catch (error) {
        history.push('/office');
      }
    }
    Request();
  };

  const handleClickDelete = () => {
    async function request() {
      try {
        await axios.delete(`/lens/${id}`);
        setOnScreen(false);
      } catch (error) {
        history.push('/officce');
      }
    }
    request();
  };

  return (
    <ModalContainer onScreen={onScreen} setOnScreen={setOnScreen}>
      <Body content={{
        edit, name, setName, price, setPrice, type, setType, isValidName, setIsValidName,
      }}
      />
      <Footer
        name={name}
        setIsValidName={setIsValidName}
        setOnScreen={setOnScreen}
        edit={edit}
        setEdit={setEdit}
        handleSaveClick={handleSaveClick}
        id={id}
        deleteLabel="DELETAR LENTE"
        handleClickDelete={handleClickDelete}
      />
    </ModalContainer>
  );
}

AddLens.propTypes = {
  edit: PropTypes.bool.isRequired,
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
