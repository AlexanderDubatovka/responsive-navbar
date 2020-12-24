import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropMenu from '../molecules/DropMenu';
import { NavbarSimpleItems } from '../atoms/NavbarSimpleItems';
import ArrowDownNavbar from '../../components/assets/img/arrow_down_navbar.png';

function NavbarLarge() {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);

  return (
    <>
      <li onClick={() => setDrop(!drop)}>
        <Link to="/">Components</Link>
        <img src={ArrowDownNavbar} alt="arrow down navbar" />
        {drop && <DropMenu />}
      </li>
      {NavbarSimpleItems.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
      })}
      <li onClick={() => setDrop2(!drop2)}>
        <Link to="/">Components 6</Link>
        <img src={ArrowDownNavbar} alt="arrow down navbar" />
        {drop2 ? <DropMenu /> : null}
      </li>
    </>
  );
}

export default NavbarLarge;
