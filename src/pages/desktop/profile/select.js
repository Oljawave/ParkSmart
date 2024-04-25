
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import arrowleft from './profile_img/arrow-left.png';
import arrowRight from './profile_img/arrow-right.png';
import logo from './profile_img/logo.png';
import logoBlack from './profile_img/black-logo.png'
import Header from '../../../components/header';
import ContainerMain from '../../../components/content-main';

function Select() {
  return (
   <Header />,
   <ContainerMain/>
  );
}

export default Select;