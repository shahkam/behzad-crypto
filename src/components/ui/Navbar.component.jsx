import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import './Navbar.css'
const NavbarComponent = () => {

  const btnToggleRef = useRef(); 

  const toggleMenu = ()=> {
    btnToggleRef.current.click();
  } 

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">
            <FaCoins className='navbar-logo-icon' /> Behzad | Crypto
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={btnToggleRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={toggleMenu}>
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={toggleMenu}>
                <Link className="nav-link active" aria-current="page" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item" onClick={toggleMenu}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item" onClick={toggleMenu}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default NavbarComponent; 