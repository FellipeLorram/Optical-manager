import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import Arrow from '../../components/Svgs/ArrowBack/ArrowLeft';
import {
  Delete,
  PageContainer,
  PageHeader,
} from '../../styles/GlobalStyles';
import Header from '../../components/ClientInfoContainer/Header';
import Body from './Body';
import { SeeLastExam } from './styled';
import LastExam from './LastExam';
import DeleteExamModal from '../../Widgets/Modals/DeleteModal/Index';
import history from '../../services/history';
import axios from '../../services/axios';

export default function NewExam({ match }) {
  const [deleteModalOnScreen, setDeleteModalOnScreen] = useState(false);
  const [showLastExam, setShowLastExam] = useState(false);
  const id = get(match, 'params.id', '');
  const examId = get(match, 'params.examid', '');

  const handleDeleteClick = () => {
    async function Request() {
      try {
        await axios.delete(`/clients/${id}/exams/${examId}`);
        setDeleteModalOnScreen(false);
        history.push('/clients');
      } catch (error) {
        history.push(`/client/${id}`);
      }
    }
    Request();
  };

  return (
    <PageContainer>
      <DeleteExamModal
        handleClick={handleDeleteClick}
        onScreen={deleteModalOnScreen}
        setOnScreen={setDeleteModalOnScreen}
      />
      <LastExam show={showLastExam} setShow={setShowLastExam} id={id} />
      <PageHeader>
        <Arrow />
        {examId ? ('') : ('NOVA CONSULTA')}
      </PageHeader>
      <Header id={id} />
      {!examId && (
        <SeeLastExam>
          <span
            tabIndex={0}
            role="button"
            onKeyUp={() => setShowLastExam(true)}
            onClick={() => setShowLastExam(true)}
          >
            VER ULTIMA CONSULTA
          </span>
        </SeeLastExam>
      )}
      <Body id={id} examId={examId} />
      {examId && (
        <Delete
          onClick={() => setDeleteModalOnScreen(true)}
        >
          DELETAR ESSA CONSULTA
        </Delete>
      )}
    </PageContainer>
  );
}

NewExam.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
