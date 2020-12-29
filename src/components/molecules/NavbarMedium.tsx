import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropMenu from '../molecules/DropMenu';
import DropMenuMedium from './DropMenuMedium';
import ArrowDownNavbar from '../../components/assets/img/arrow_down_navbar.png';
import HamburgerMenu from '../../components/assets/img/hamburger-menu.png';

const NavbarMedium: React.FC = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const [drop2, setDrop2] = useState<boolean>(false);

  return (
    <>
      <li onClick={() => setDrop(!drop)}>
        <Link to="/">Components</Link>
        <img src={ArrowDownNavbar} alt="arrow down navbar" />
        {drop && <DropMenu />}
      </li>
      <li>
        <Link to="/">Components 1</Link>
      </li>
      <li>
        <Link to="/">Components 2</Link>
      </li>

      <li onClick={() => setDrop2(!drop2)}>
        <Link to="/" style={{ borderBottom: '0px solid white' }}>
          <img src={HamburgerMenu} alt="hamburger menu navbar" /> Show more
        </Link>
        {drop2 && <DropMenuMedium />}
      </li>
    </>
  );
};

export default NavbarMedium;
