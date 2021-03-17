import React , { useEffect } from 'react';
import "./style.css";
import Typed from 'react-typed';
import { useSelector } from 'react-redux';

const Avatar = () => {

  const name = useSelector(state => state.user.name)
  const github = useSelector(state => state.user.github)
  const linkedin = useSelector(state => state.user.linkedin)

  useEffect(() => {
    console.log(name + "in effect")
   
  })
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" >
        <h1>{name}</h1>
        <p>
          <Typed
            strings={['Full Stack Developer', 'Post Graduate Diploma - IT', 'Bachelor of Computer Science',
              'Can Do Anything !']}
            typeSpeed={55}
            backSpeed={20}
            loop
          /></p>
        <div className="social-links">
          <a href={github} className="github"><i className="bx bxl-github"></i></a>
          <a href={linkedin} className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Avatar;