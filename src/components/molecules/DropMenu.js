import React from "react";
import { Link } from "react-router-dom";
import { DropMenuItems } from "../atoms/DropMenuItems";

function DropMenu() {
  return (
    <ul className="dropdown-menu">
      {DropMenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link className={item.cName} to={item.path}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default DropMenu;
