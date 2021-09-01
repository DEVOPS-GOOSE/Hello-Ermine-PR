import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavbarStyle } from './style';

import Logo from '../../assets/hello-ermine_logo.png';
import Frozen from '../../assets/navbar/frozen.png';

const Navbar = ({ onClick, pageIndex }) => {
  let frozenImg = document.createElement('img');
  frozenImg.src = Frozen;

  useEffect(() => {
    const li = document.querySelectorAll('li');
    document.querySelectorAll('li img').forEach(elem => {
      elem.remove();
    });
    li.item(pageIndex).appendChild(frozenImg).classList.add('fade-in');
  }, [pageIndex]);
  
  return (
    <NavbarStyle show={false}>
      <img className='nav-logo' src={Logo} alt='Ermine logo'/>
      <ul>
        <li>
          <a href='#Home' onClick={() => onClick(0)}>HOME</a>
        </li>
        <li>
          <a href='#About' onClick={() => onClick(1)}>ABOUT</a>
        </li>
        <li>
          <a href='#Teams' onClick={() => onClick(2)}>TEAMS</a>
        </li>
        <li>
          <a href='#FAQs' onClick={() => onClick(3)}>FAQS</a>
        </li>
        <li>
          <a href='#Game' onClick={() => onClick(4)}>GAME</a>
        </li>
      </ul>
    </NavbarStyle>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func,
  pageIndex: PropTypes.number
};

export default Navbar;
