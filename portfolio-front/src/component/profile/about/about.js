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
            Dedicated professional with over 4 years of experience in software development across law enforcement, financial, and various other industries. Gained knowledge in frontend-backend development, database, and DevOps practices through active involvement in Agile projects, facilitating seamless collaboration between technical and non-technical teams.
            </p>
            <div className="row pb-0">
              <div className="col-lg-6 pb-0">
                <div><i className='bx bxs-chevron-right'></i><strong>Name:</strong> Simran Singh</div>
                <div><i className='bx bxs-chevron-right'></i><strong>Languages:</strong> Javascript, Typescript, SQL</div>
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