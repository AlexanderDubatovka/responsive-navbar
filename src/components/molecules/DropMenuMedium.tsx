import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropMenuItemsMedium1,
  DropMenuItemsMedium2,
} from '../atoms/DropMenuItemsMedium';
import ArrowDownNavbar from '../../components/assets/img/arrow_down_navbar.png';

const DropMenuMedium: React.FC = () => {
  return (
    <ul className="dropdown-menu-medium">
      {DropMenuItemsMedium1.map(
        (
          item: { cName: string; path: string; title: string },
          index: number
        ) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        }
      )}
      <li className="dropdown-link" style={{ background: 'rgb(100, 98, 98)' }}>
        <Link to="/" style={{ borderBottom: '0px solid white' }}>
          Components 6
        </Link>
        <img src={ArrowDownNavbar} alt="arrow down navbar" />
      </li>
      {DropMenuItemsMedium2.map(
        (
          item: { cName: string; path: string; title: string },
          index: number
        ) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default DropMenuMedium;
