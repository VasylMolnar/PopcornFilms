import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Nav from '../UI/Nav/Nav';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          Popcorn<span>Films</span>
        </Link>

        <Nav openMenu={openMenu} />

        <button
          type="button"
          className="menu-button"
          aria-expanded="false"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
