import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { LastExamContainer } from './styled';
import Arrow from '../../components/Svgs/ArrowBack/ArrowRigth';
import axios from '../../services/axios';

const Variants = {
  initial: { x: '100vw' },
  animate: {
    x: 0,
    transition: {
      duration: 0.3, type: 'spring',
    },
  },
  exit: { x: '100vw' },
};

export default function LastExam({ id, show, setShow }) {
  const [lastExamData, setLastExamData] = useState({});
  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`/clients/${id}`);
        const lastExam = data[0].exams.slice(-1)[0];
        setLastExamData(lastExam);
        if (lastExam) setHasContent(true);
      } catch (error) {
        setHasContent(false);
      }
    }
    getData();
  }, [id]);

  return (
    <AnimatePresence>
      {show && (
        <LastExamContainer
          variants={Variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >

          <div className="header">
            <span
              tabIndex={0}
              role="button"
              onKeyUp={() => setShow(false)}
              onClick={() => setShow(false)}
            >
              <Arrow />
            </span>
          </div>

          <div className="body">
            {hasContent ? (
              <>
                <div className="row">
                  <div className="info--container">
                    <span className="info--label">ANAMINESE:</span>
                    <span>{lastExamData.anaminese || 'N/A'}</span>
                  </div>
                </div>
                <div className="small--column">
                  <span className="title">OFTALMOSCOPIA</span>
                  <div className="row">
                    <div className="info--container">
                      <span className="info--label">OLHO DIREITO:</span>
                      <span>{lastExamData.oftOd || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">OLHO ESQUERDO:</span>
                      <span>{lastExamData.oftOe || 'N/A'}</span>
                    </div>
                  </div>
                </div>
                <div className="small--column">

                  <span className="title">TONOMETRIA</span>
                  <div className="row">
                    <div className="info--container">
                      <span className="info--label">OLHO DIREITO:</span>
                      <span>{lastExamData.tonoOd || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">OLHO ESQUERDO:</span>
                      <span>{lastExamData.tonoOe || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="info--container">
                    <span className="info--label">MOTILIDADE:</span>
                    <span>{lastExamData.motilidade || 'N/A'}</span>
                  </div>
                  <div className="info--container">
                    <span className="info--label">PPC:</span>
                    <span>{lastExamData.PPC || 'N/A'}</span>
                  </div>
                  <div className="info--container">
                    <span className="info--label">PPA:</span>
                    <span>{lastExamData.PPA || 'N/A'}</span>
                  </div>
                </div>

                <div className="small--column">

                  <span className="title">LENSOMETRIA</span>
                  <div className="row">
                    <div className="info--container">
                      <span className="info--label">ESF OD:</span>
                      <span>{lastExamData.LsEsfOd || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">CIL OD:</span>
                      <span>{lastExamData.LsCilOd || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">EIXO OD:</span>
                      <span>{lastExamData.LsEixoOd || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="info--container">
                      <span className="info--label">ESF OE:</span>
                      <span>{lastExamData.LsEsfOe || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">CIL OE:</span>
                      <span>{lastExamData.LsCilOe || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">EIXO OE:</span>
                      <span>{lastExamData.LsEixoOe || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="info--container">
                      <span className="info--label">ADICÃO:</span>
                      <span>{lastExamData.LsAdd || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                <div className="small--column">

                  <span className="title">RX FINAL</span>
                  <div className="row">
                    <div className="info--container">
                      <span className="info--label">ESF OD:</span>
                      <span>{lastExamData.rxEsfOd || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">CIL OD:</span>
                      <span>{lastExamData.rxCilOd || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">EIXO OD:</span>
                      <span>{lastExamData.rxEixoOd || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="info--container">
                      <span className="info--label">ESF OE:</span>
                      <span>{lastExamData.rxEsfOe || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">CIL OE:</span>
                      <span>{lastExamData.rxCilOe || 'N/A'}</span>
                    </div>
                    <div className="info--container">
                      <span className="info--label">EIXO OE:</span>
                      <span>{lastExamData.rxEixoOe || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="info--container">
                      <span className="info--label">ADICÃO:</span>
                      <span>{lastExamData.rxAdd || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-content">
                NÃO HÁ EXAMES DESSE CLIENTE NO SISTEMA
              </div>
            )}
          </div>
        </LastExamContainer>
      )}
    </AnimatePresence>
  );
}

LastExam.propTypes = {
  id: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
