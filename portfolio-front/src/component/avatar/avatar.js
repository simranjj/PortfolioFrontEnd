import React ,{ useEffect} from 'react';
import "./style.css";

import Typed from 'react-typed';

const Avatar = () => {

  
    return (
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" >
      <h1>Simran Singh</h1>
      <p>
      <Typed
                    strings={['full stack developer', 
                    'can do anything!']}
                    typeSpeed={55}
                    backSpeed={20}
                    loop
                /></p>
      <div class="social-links">
        <a href="https://github.com/simranjj" class="github"><i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/simranjeet-singh-7a2a58152/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section>
    );
}

export default Avatar;