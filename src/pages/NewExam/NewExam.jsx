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
import axios from '../../services/axios';
import history from '../../services/history';
import DeleteExamModal from '../../components/Modal/DeleteExam/DeleteExamModal';

export default function NewExam({ match }) {
  const [deleteModalOnScreen, setDeleteModalOnScreen] = useState(false);
  const [showLastExam, setShowLastExam] = useState(false);
  const id = get(match, 'params.id', '');
  const examId = get(match, 'params.examid', '');

  return (
    <PageContainer>
      <DeleteExamModal
        id={id}
        examId={examId}
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
