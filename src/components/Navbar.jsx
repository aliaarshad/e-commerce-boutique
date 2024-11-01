import  { useState } from "react";
import "./Navbar.css"; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMagnifyingGlass, 
    faHeart, 
    faBagShopping, 
    faBars, 
    faCircleXmark  
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    <header>
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyWebsite</div>
        <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        {/* header right */}
        <div className="header-right">
          <a href="#" className="login">Login</a><span className="divider">/</span>
          <a href="#" className="register">Register</a>
          <div className="icons">
            <div className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} /> 
              </div>
            <div className="heart">
              <FontAwesomeIcon icon={faHeart} />
              <span className="heart-badge">2</span>
            </div>
            <div className="bag">
              <FontAwesomeIcon icon={faBagShopping} />
              <span className="bag-badge">3</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Off-canvas menu */}
      <div className={`offcanvas-menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}><FontAwesomeIcon icon={faCircleXmark} /></button>
        <div className="icons">
        <div className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} /> 
              </div>
            <div className="heart">
              <FontAwesomeIcon icon={faHeart} />
              <span className="heart-badge">2</span>
            </div>
            <div className="bag">
              <FontAwesomeIcon icon={faBagShopping} />
              <span className="bag-badge">3</span>
            </div>
          </div>
          <div className="logo">MyWebsite</div>
        <ul className="mobile-nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="mobile-header-right">
          <a href="#">Login</a><span className="divider">/</span>
          <a href="#">Register</a>
        </div>
      </div>
      </header>
    </>
  );
};

export default Navbar;
