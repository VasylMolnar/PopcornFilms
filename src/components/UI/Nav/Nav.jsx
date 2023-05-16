import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/auth/authSlice';

const Nav = ({ openMenu }) => {
  const isAuth = useSelector(selectCurrentToken);

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
          <li className="item">
            <NavLink to="/oscar" className="nav__link">
              Оскар
            </NavLink>
          </li>
        </ul>
      </nav>

      {isAuth ? (
        <ul className="nav__info">
          <li className="item">
            <NavLink
              to="/userPage"
              className="nav__link enter"
              style={{ color: 'white' }}
            >
              Вхід
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className="nav__info">
          <li className="item">
            <NavLink to="/register" className="nav__link">
              Реєстрація
            </NavLink>
          </li>

          <li className="item">
            <NavLink to="/login" className="nav__link enter" style={{ color: 'white' }}>
              Вхід
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
