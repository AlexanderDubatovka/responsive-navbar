import React from 'react';
import HamburgerMenu from '../../components/assets/img/hamburger-menu.png';

const ShowMenuButton: React.FC = () => {
  return (
    <div>
      <span className="show-more">
        <img src={HamburgerMenu} alt="hamburger menu navbar" /> Show more
      </span>
    </div>
  );
};

export default ShowMenuButton;
