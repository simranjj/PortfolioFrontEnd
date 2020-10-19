import React from 'react';
import "./style.css";


const About = (props) => {


  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="section-title">
          <h2>About</h2>
          <p className="pb-4">{props.about.description} </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Developer.</h3>
            <p className="font-italic">
              I am a full stack developer with internship experience in two companies.
              </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 26 October 1996</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +1 416 720 0534</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Toronto, Canada</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 23</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Post Graduate Diploma</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Email Id:</strong>{props.about.email}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;