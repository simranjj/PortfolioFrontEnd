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
              <p><em>Enthusiastic developer holding Post-Graduate Diploma with skills in Web Development and Software Engineering.</em></p>
              <ul>
                <li>Toronto, Canada.</li>
                <li>simranjeet271@gmail.com.</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Post Graduate Diploma -Information Technology Solutions Diploma</h4>
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
                <li>Worked  in an agile environment and demonstrated effective communication in weekly meetings with the client about the task assigned in JIRA.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Software Developer Intern</h4>
              <h5>August 2019-December 2019</h5>
              <p><em>MyCondoLink | Toronto, CA</em></p>
              <ul>
                <li>Created Unit Management System individually to keep track of inventory, get an insight into capital investment
                     and generate ad-hoc reports.</li>
                <li>Built application usingJava, JDBC, JavaFX, CSS, MS SQLServer.</li>
                <li>Gathered and analyzed requirements of the client and professionally accepted feedback during weekly meetings.</li>

              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;