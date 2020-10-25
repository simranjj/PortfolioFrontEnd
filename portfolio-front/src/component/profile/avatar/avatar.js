import React from 'react';
import "./style.css";

import Typed from 'react-typed';

const Avatar = (props) => {

    return (
  <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="zoom-in" >
    <h1>{props.avatar.name}</h1>
      <p>
      <Typed
                    strings={['Full Stack Developer', 'Post Graduate Diploma - IT', 'Bachelor of Computer Science',
                    'Can Do Anything !']}
                    typeSpeed={55}
                    backSpeed={20}
                    loop
                /></p>
      <div className="social-links">
        <a href={props.avatar.github} className="github"><i className="bx bxl-github"></i></a>
        <a href={props.avatar.linkedin} className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section>
    );
}

export default Avatar;