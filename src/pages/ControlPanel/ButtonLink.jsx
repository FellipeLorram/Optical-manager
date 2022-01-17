import React, { useState } from 'react';

import Article from '../../components/Svgs/Control Panel Buttons/Article';
import Bag from '../../components/Svgs/Control Panel Buttons/Bag';
import PersonAdd from '../../components/Svgs/Control Panel Buttons/PersonAdd';
import RepairIcon from '../../components/Svgs/Control Panel Buttons/RepairIcon';
import Printer from '../../components/Svgs/Control Panel Buttons/Printer';
import Button from '../../components/Buttons/Index';

export default function ButtonLink() {
  const [widthScreen] = useState(window.innerWidth);
  const [PersonAnimate, setPersonAnimate] = useState(false);
  const [BagAnimate, setBagAnimate] = useState(false);
  const [RepairAnimate, setRepairAnimate] = useState(false);
  const [ArticleAnimate, setArticleAnimate] = useState(false);

  return (
    <>
      {widthScreen < 768 && (
        <Button
          type="svg-link"
          to="/officce"
        >
          <span className="icon--container">
            <Printer />
          </span>
          <span>ESCRITÓRIO</span>
        </Button>
      )}
      <Button
        onMouseOver={() => setPersonAnimate(true)}
        onMouseLeave={() => setPersonAnimate(false)}
        type="svg-link"
        to="/new-client"
      >
        <span className="icon--container">
          <PersonAdd animate={PersonAnimate} />
        </span>
        <span>NOVO CLIENTE</span>
      </Button>

      <Button
        onMouseOver={() => setBagAnimate(true)}
        onMouseLeave={() => setBagAnimate(false)}
        type="svg-link"
        to="/new-sell"
      >
        <span className="icon--container">
          <Bag animate={BagAnimate} />
        </span>
        <span>NOVA VENDA</span>
      </Button>

      <Button
        onMouseOver={() => setArticleAnimate(true)}
        onMouseLeave={() => setArticleAnimate(false)}
        type="svg-link"
        to="/new-exam"
      >
        <span className="icon--container">
          <Article animate={ArticleAnimate} />
        </span>
        <span>NOVO EXAME</span>
      </Button>

      <Button
        onMouseOver={() => setRepairAnimate(true)}
        onMouseLeave={() => setRepairAnimate(false)}
        type="svg-link"
        to="/new-repair"
      >
        <span className="icon--container">
          <RepairIcon animate={RepairAnimate} />
        </span>
        <span>NOVO CONCERTO</span>
      </Button>
    </>
  );
}
