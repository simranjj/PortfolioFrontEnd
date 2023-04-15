import React from 'react';
import "./style.css";
import { useSelector } from 'react-redux';

const About = () => {

  const description = useSelector(state => state.user.description)
  const email = useSelector(state => state.user.email)
  
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="section-title">
          <h2>About</h2>
          <p className="pb-4">{description}</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content mt-3">
            <h3>Full Stack Developer.</h3>
            <p className="font-italic mb-4">
              Highly motivated and detail-oriented professional with a combined 3+ years of practical experience in Software Development. Equipped with practical experience in frontend , backend, database and server technologies while working in an Agile environment.
            </p>
            <div className="row pb-0">
              <div className="col-lg-6 pb-0">
                <div><i className='bx bxs-chevron-right'></i><strong>Name:</strong> Simran Singh</div>
                <div><i className='bx bxs-chevron-right'></i><strong>Languages:</strong> Javascript,Typescript,Ruby,SQL</div>
                <div><i className='bx bxs-chevron-right'></i><strong>Education:</strong> Bachelor of Computer Science</div>
              </div>
              <div className="col-lg-6 pb-0  pr-4">
                <div><i className='bx bxs-chevron-right'></i><strong>Birthday:</strong> 26 October 1996.</div>
                <div><i className='bx bxs-chevron-right'></i><strong>City:</strong> Waterloo, Canada</div>
              </div>
              <div className="col-lg-12 ">
                <div><i className='bx bxs-chevron-right'></i><strong>Experience:</strong> Software Engineering &amp;
                <div className="d-block d-sm-none w-100 pb-0"></div>
                  <span className="pl-4 pl-sm-0"> DevOps</span>
                </div>
                <div><i className='bx bxs-chevron-right'></i><strong>Email Id: </strong> simranjeet271@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;