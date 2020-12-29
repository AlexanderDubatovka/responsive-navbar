import React from 'react';
import { Link } from 'react-router-dom';
import { DropMenuItems } from '../atoms/DropMenuItems';

const DropMenu: React.FC = () => {
  return (
    <ul className="dropdown-menu">
      {DropMenuItems.map(
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

export default DropMenu;
