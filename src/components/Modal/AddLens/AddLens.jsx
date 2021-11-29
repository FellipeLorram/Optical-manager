import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { Background, Container } from '../styled';
import Header from '../Header';
import Body from './Body';
import Footer from './Footer';
import axios from '../../../services/axios';
import history from '../../../services/history';

const BgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const ContainerVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 0.2,
    },
  },
};

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

  return (
    <AnimatePresence>
      {onScreen && (
        <Background
          variants={BgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Container
            variants={ContainerVariants}
          >
            <Header setOnScreen={setOnScreen} />
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
            />
          </Container>
        </Background>
      )}
    </AnimatePresence>
  );
}

AddLens.propTypes = {
  edit: PropTypes.bool.isRequired,
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
