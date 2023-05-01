import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ openMenu }) => {
  return (
    <div className={openMenu ? 'nav-menu isOpen' : 'nav-menu'}>
      <nav className="nav__bar">
        <ul className="nav__list">
          <li className="item">
            <NavLink to="/" className="nav__link">
              Головна
            </NavLink>
          </li>

          <li className="item">
            <NavLink to="/categories" className="nav__link">
              Категорії
            </NavLink>
          </li>

          <li className="item">
            <NavLink to="/chosen" className="nav__link">
              Обране
            </NavLink>
          </li>
        </ul>
      </nav>

      <ul className="nav__info">
        <li className="item">
          <NavLink to="/register" className="nav__link">
            Реєстрація
          </NavLink>
        </li>

        <li className="item">
          <NavLink to="/enter" className="nav__link enter">
            Вхід
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
