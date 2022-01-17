import React from 'react';
import { Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import SideBar from '../components/SideBar/SideBar';
import TopBar from '../components/TopBar/TopBar';
import Clients from '../pages/Clients/Clients';
import Login from '../pages/Login/Login';
import { Container, Main } from '../styles/GlobalStyles';
import MyRoute from './MyRoute';
import Level from '../pages/Level/Level';
import ControlPanel from '../pages/ControlPanel/ControlPanel';
import Sells from '../pages/sells/Sells';
import Exams from '../pages/exams/Exams';
import Repairs from '../pages/Repairs/Repairs';
import Configs from '../pages/configs/Configs';
import Client from '../pages/Client/Client';
import ClientChoose from '../pages/ClientChoose/ClientChoice/ClientChoice';
import NewSell from '../pages/NewSell/NewSell';
import NewExam from '../pages/NewExam/NewExam';
import Officce from '../pages/Officce/Office';
import Frames from '../pages/Frames/Frames';
import Lens from '../pages/Lens/Lens';
import Register from '../pages/RegisterPage/Index';
import Sellers from '../pages/Sellers/Index';
import SellerPage from '../pages/NewSeller/Index';
import Repair from '../pages/Repair/Index';

export default function Routes() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <MyRoute exact path="/Register" component={Register} isClosed={false} />
        <MyRoute exact path="/Login" component={Login} isClosed={false} />
        <MyRoute exact path="/Level" component={Level} isClosed />
        <Container>
          <SideBar />
          <Main>
            <TopBar />
            <MyRoute exact path="/" component={ControlPanel} isClosed />
            <MyRoute exact path="/clients" component={Clients} isClosed />
            <MyRoute exact path="/new-client" component={Client} isClosed />
            <MyRoute exact path="/search" component={ClientChoose} isClosed />
            <MyRoute exact path="/new-repair" component={ClientChoose} isClosed />
            <MyRoute exact path="/new-sell" component={ClientChoose} isClosed />
            <MyRoute exact path="/edit-sell/:id/:sellid" component={NewSell} isClosed />
            <MyRoute exact path="/new-exam" component={ClientChoose} isClosed />
            <MyRoute exact path="/new-exam/:id" component={NewExam} isClosed />
            <MyRoute exact path="/edit-exam/:id/:examid" component={NewExam} isClosed />
            <MyRoute exact path="/new-sell/:id" component={NewSell} isClosed />
            <MyRoute exact path="/client/:id" component={Client} isClosed />
            <MyRoute exact path="/new-repair/:id" component={Repair} isClosed />
            <MyRoute exact path="/repair/:id/:repairid" component={Repair} isClosed />
            <MyRoute exact path="/sells" component={Sells} isClosed />
            <MyRoute exact path="/exams" component={Exams} isClosed />
            <MyRoute exact path="/repairs" component={Repairs} isClosed />
            <MyRoute exact path="/configs" component={Configs} isClosed />
            <MyRoute exact path="/officce" component={Officce} isClosed />
            <MyRoute exact path="/officce/frames" component={Frames} isClosed />
            <MyRoute exact path="/officce/lens" component={Lens} isClosed />
            <MyRoute exact path="/officce/sellers" component={Sellers} isClosed />
            <MyRoute exact path="/officce/new-seller" component={SellerPage} isClosed />
            <MyRoute exact path="/officce/seller/:id" component={SellerPage} isClosed />
          </Main>
        </Container>
      </Switch>
    </AnimatePresence>
  );
}
