import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import { Button } from '../../styles/GlobalStyles';
import LevelConfirm from './LevelConfirm';
import LevelSelect from './LevelSelect';
import {
  Container,
  LevelContainer,
} from './styled';
import IsLoading from '../../components/Loader/IsLoading';

export default function Level() {
  const [loading, setLoading] = useState(false);
  const [levels, setLevels] = useState(['VENDEDOR', 'OPTOMETRISTA']);
  const [level, setLevel] = useState('ADMINISTRADOR');
  const [names, setNames] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [adminPassword, setAdmPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const response = await axios.get('/sellers/names');
      setNames(response.data);
      if (response.data.length === 0) setLevels(['OPTOMETRISTA']);
    }
    getData();
    setLoading(false);
  }, []);

  useEffect(() => {
    setSellerName(names[0]);
  }, [names]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (level === 'ADMINISTRADOR') {
      if (!adminPassword) return;
      dispatch(actions.adminRequest({ adminPassword }));
    } else if (level === 'VENDEDOR') {
      dispatch(actions.levelRequest({ currentUserName: sellerName, level: 1 }));
    } else if (level === 'OPTOMETRISTA') {
      dispatch(actions.levelRequest({ currentUserName: 'opto', level: 0 }));
    }
  };

  return (
    <Container>
      <IsLoading loading={loading} />
      <LevelContainer
        onSubmit={(e) => handleSubmit(e)}
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        exit={{ x: 2000 }}
      >
        <div className="header">
          Quem está utilizando o sistema?
        </div>
        <div className="body">
          <LevelSelect level={level} setLevel={setLevel} levels={levels} setLevels={setLevels} />
          <LevelConfirm
            names={names}
            sellerName={sellerName}
            setSellerName={setSellerName}
            level={level}
            setText={setAdmPassword}
            text={adminPassword}
          />
        </div>
        <div className="footer">
          <Button>ENTRAR</Button>
        </div>
      </LevelContainer>
    </Container>
  );
}
