import React from 'react';
import { motion } from 'framer-motion';

import { PromotionContainer } from './styled';
import MobileTexting from '../../components/Svgs/Promotion/MobileTexting';
import ManPannel from '../../components/Svgs/Promotion/ManPannel';

export default function Promotion() {
  return (
    <PromotionContainer>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="even--container"
      >
        <div className="text--container">
          <span className="title">Controle total na palma da mão</span>
          <span className="content">
            Se livre de toda aquela papelada descenessária,
            e tenha controle da sua ótica 24 horas por dia.
          </span>

        </div>
        <div className="svg-container">
          <MobileTexting />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="odd--container"
      >
        <div className="svg-container">
          <ManPannel />
        </div>
        <div className="text--container--odd">
          <span className="title">Analise seus dados dinamicamente</span>
          <span className="content">
            Uma ferramenta para facilitar sua gerência,
            e te ajudar a tomar decisões importantes sobre a seu negócio.
          </span>
        </div>
      </motion.div>
    </PromotionContainer>
  );
}
