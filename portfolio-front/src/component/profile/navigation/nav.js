import React  from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import Scrollspy from 'react-scrollspy'


const Nav = () => {


  return (
    <>
      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav className="nav-menu">

          <Scrollspy items={['hero', 'about', 'skills', 'journey', 'portfolio', 'contact']} currentClassName="active" data>
            <li><a className="active" href="#hero"><i className="bx bx-home"></i> <span>Hero</span></a></li>
            <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#skills"><i className="bx bx-star"></i> <span>Skills</span></a></li>
            <li><a href="#journey"><i className="bx bx-book-content"></i> <span>Journey</span></a></li>
            <li><a href="#portfolio"><i className="bx bx-vector"></i> <span>Projects</span></a></li>
            <li><a href="#contact"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            <Link to="/login"><i className="bx bx-edit"></i> <span>Edit</span></Link>
          </Scrollspy>

        </nav>
      </header>
    </>
  );
}

export default Nav;