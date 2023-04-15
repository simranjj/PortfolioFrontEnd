import React from 'react';
import "./style.css";


const Resume = () => {

  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item">
              <h4>Simran Singh</h4>
              <p><em>Highly motivated and detail-oriented professional with a combined 3+ years of practical experience in Software Development. Equipped with practical experience in frontend , backend, database and server technologies while working in an Agile environment.</em></p>
              <ul>
                <li>Waterloo, Canada.</li>
                <li>simranjeet271@gmail.com.</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Post Graduate Diploma - Information Technology Solutions Diploma</h4>
              <h5>January 2019-August 2020</h5>
              <p><em>Humber College | Toronto, ON| Percentage: 89%</em></p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Computer Science</h4>
              <h5>August 2014-August 2018</h5>
              <p><em>Panjab University | Chandigarh, India</em></p>
            </div>
            <h3 className="resume-title">Personal Project</h3>
            <div className="resume-item pb-0">
              <h4>Portfolio</h4>
              <h5>August 2020-October 2020</h5>
              <ul>
                <li>Produced REST APIs to perform CRUD using Node.js and Express.js for user's portfolio.</li>
                <li>Developed the user's profile using REST APIs in React.js, Redux and various other packages.</li>
                <li>Used HTML, CSS and Bootstrap to build components in React.js.</li>
                <li>Deployed both back-end and front-end projects on Heroku.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">

                <h4>Full Stack Developer</h4>
                <h5>May 2021-June 2023</h5>
                <p><em>HealthIM |  Kitchener, ON, CA</em></p>
                <ul>
                  <li>Lead development solo and also collaborated with a team of developers on the various products, enabling the screening of patients with mental disorders and building reports for police organizations across Canada and parts of the USA to drive sound strategic decision-making. </li>
                  <li>Maintained and upgraded existing desktop and web applications with JavaScript and Typescript using Electron.js, React.js and Redux. Used Ruby on Rails to create and improve API endpoints in Ruby on Rails interacting with PostgreSQL.
                  </li>
                  <li> Constructed the entire development environment using Fargate, Load Balancers, Aurora and various other services in AWS. Built CI/CD pipelines to host Docker containerised applications. Performed linux server maintenance  on a regular basis.
                  </li>
                    </ul>


              <h4>Software Developer</h4>
              <h5>May 2020-August 2020</h5>
              <p><em>Intransigence Technologies | Toronto, CA </em></p>
              <ul>
                <li>Collaborated  closely  with  a  team  of  five  other  members on  The  Brilliant  Dashboard Service project
                    which gives a business owner an understanding of customer activities to get a competitive edge in the market.</li>
                <li>Built REST APIs using Java in Spring Boot to read user activity from MongoDB. </li>
                <li>Developed front-end components with Javascript in Vue.js that uses data from REST APIs to display it in the form
                    of charts to the user.</li>
                <li>Implemented  Kafka  Consumers  to  consume  messages  in  Spring  Boot  and  store  it  into MongoDB.</li>
                <li>Performed Unit Testing using JUnit for service layer in Spring Boot application.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;