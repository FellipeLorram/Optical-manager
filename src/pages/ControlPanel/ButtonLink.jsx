import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Article from '../../components/Svgs/Control Panel Buttons/Article';
import Bag from '../../components/Svgs/Control Panel Buttons/Bag';
import PersonAdd from '../../components/Svgs/Control Panel Buttons/PersonAdd';
import RepairIcon from '../../components/Svgs/Control Panel Buttons/RepairIcon';
import Printer from '../../components/Svgs/Control Panel Buttons/Printer';

import { LinkButton } from './styled';

export default function ButtonLink() {
  const [widthScreen] = useState(window.innerWidth);
  const [PersonAnimate, setPersonAnimate] = useState(false);
  const [BagAnimate, setBagAnimate] = useState(false);
  const [RepairAnimate, setRepairAnimate] = useState(false);
  const [ArticleAnimate, setArticleAnimate] = useState(false);

  return (
    <>
      {widthScreen < 768 && (
        <LinkButton
          to="/officce"
        >
          <span className="icon--container">
            <Printer />
          </span>
          <span>ESCRITÓRIO</span>
        </LinkButton>
      )}
      <LinkButton
        onMouseOver={() => setPersonAnimate(true)}
        onMouseLeave={() => setPersonAnimate(false)}
        to="/new-client"
      >
        <span className="icon--container">
          <PersonAdd animate={PersonAnimate} />
        </span>
        <span>NOVO CLIENTE</span>
      </LinkButton>

      <LinkButton
        onMouseOver={() => setBagAnimate(true)}
        onMouseLeave={() => setBagAnimate(false)}
        to="/new-sell"
      >
        <span className="icon--container">
          <Bag animate={BagAnimate} />
        </span>
        <span>NOVA VENDA</span>
      </LinkButton>

      <LinkButton
        onMouseOver={() => setArticleAnimate(true)}
        onMouseLeave={() => setArticleAnimate(false)}
        to="/new-exam"
      >
        <span className="icon--container">
          <Article animate={ArticleAnimate} />
        </span>
        <span>NOVO EXAME</span>
      </LinkButton>

      <LinkButton
        onMouseOver={() => setRepairAnimate(true)}
        onMouseLeave={() => setRepairAnimate(false)}
        to="/new-repair"
      >
        <span className="icon--container">
          <RepairIcon animate={RepairAnimate} />
        </span>
        <span>NOVO CONCERTO</span>
      </LinkButton>
    </>
  );
}
