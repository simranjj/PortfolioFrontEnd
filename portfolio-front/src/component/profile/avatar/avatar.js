import React , { useEffect } from 'react';
import "./style.css";
import Typed from 'react-typed';
import { useSelector } from 'react-redux';

const Avatar = () => {

  const name = useSelector(state => state.user.name)
  const github = useSelector(state => state.user.github)
  const linkedin = useSelector(state => state.user.linkedin)

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" >
        <h2>Simranjeet Singh</h2>
        <p>
          <Typed
            strings={['Full Stack Developer', 'Bachelor of Computer Science | PG Diploma',
              'Can Do Anything !']}
            typeSpeed={55}
            backSpeed={20}
            loop
          /></p>
        <div className="social-links">
          <a href="https://github.com/simranjj" className="github"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/-simranjeet-singh-/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Avatar;