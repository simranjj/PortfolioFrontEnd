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
          <div className="col-lg-8 pt-4 pt-lg-0 content mt-3">
            <h3>Full Stack Developer.</h3>
            <p className="font-italic mb-4">
            I am a full stack developer having internship experience in two companies with the
             capability to deliver high-quality code and adapt to a new environment.
              </p>
            <div className="row pb-0">
              <div className="col-lg-6 pb-0">
                <div><i className='bx bxs-chevron-right'></i><strong>Name:</strong> Simran Singh.</div>
                <div><i className='bx bxs-chevron-right'></i><strong>Languages:</strong> Java, Javascript, SQL.</div>
                <div><i className='bx bxs-chevron-right'></i><strong>Education:</strong> Post Graduate Diploma.</div>
              </div>
              <div className="col-lg-6 pb-0  pr-4">
              <div><i className='bx bxs-chevron-right'></i><strong>Birthday:</strong> 26 October 1996.</div>
                <div><i className='bx bxs-chevron-right'></i><strong>City:</strong> Toronto, Canada.</div>
              </div>
              <div className="col-lg-12 ">
              <div><i className='bx bxs-chevron-right'></i><strong>Internship:</strong> In Web Design &amp; Software
                <div className="d-block d-sm-none w-100 pb-0"></div> 
                <span className="pl-4 pl-sm-0"> Engineering.</span>
                </div>
              <div><i className='bx bxs-chevron-right'></i><strong>Website:</strong> https://simran-singh.herokuapp.com/</div>
                <div><i className='bx bxs-chevron-right'></i><strong>Email Id: </strong>{props.about.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;