import React from 'react';
import "./style.css";
import { NavHashLink } from 'react-router-hash-link';
import {  Link } from "react-router-dom";

const Nav = () => {

  const style = {   
    color: '#fff',
    background: '#0563bb' 
  }

  // const toggleActiveClassName =() => {

  //   console.log(window.scrollY);

  //   if ( window.scrollY > 0 && window.scrollY < 590 && window.location.hash != '#hero' )
  //   window.location.hash = '#hero';
  //   else if (window.scrollY > 590 && window.scrollY < 1242 && window.location.hash != '#about')
  //   window.location.hash = '#about';
  //   else if (window.scrollY > 1412 && window.scrollY < 2149 && window.location.hash != '#skills')
  //   window.location.hash = '#skills';
  //   else if (window.scrollY > 2160 && window.scrollY < 3223 && window.location.hash != '#resume')
  //   window.location.hash = '#resume';
  //   else if (window.scrollY > 3224 &&  window.scrollY < 4028 && window.location.hash != '#portfolio')
  //   window.location.hash = '#portfolio';
  //   else if (window.scrollY > 4028 && window.location.hash != '#contact')
  //   window.location.hash = '#contact';
    
  // }

  // window.addEventListener('scroll',toggleActiveClassName);

  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <nav className="nav-menu">
        <ul>
          <NavHashLink
            smooth
            to="#hero"
            activeClassName="active"
            activeStyle={style}
          ><i className="bx bx-home"></i> <span>Home</span></NavHashLink>
           <NavHashLink
            smooth
            to="#about"
            activeClassName="active"
            activeStyle={style}
          ><i className="bx bx-user"></i> <span>About</span></NavHashLink>
           <NavHashLink
            smooth
            to="#skills"
            activeClassName="active"
            activeStyle={style}
          ><i className="bx bx-star"></i> <span>Skills</span></NavHashLink>
           <NavHashLink
            smooth
            to="#resume"
            activeClassName="active"
            activeStyle={style}
          ><i className="bx bx-book-content"></i> <span>Resume</span></NavHashLink>
           <NavHashLink
            smooth
            to="#portfolio"
            activeClassName="active"
            activeStyle={style}
          ><i className="bx bx-vector"></i> <span>Projects</span></NavHashLink>
           <NavHashLink
            smooth
            to="#contact"
            activeClassName="active"
            activeStyle={style}
          ><i className="bx bx-envelope"></i> <span>Contact</span></NavHashLink>
         <Link to="/login"><i className="bx bx-edit"></i> <span>Edit</span></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;