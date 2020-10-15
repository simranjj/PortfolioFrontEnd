import React from 'react';
import "./style.css";


const Resume = () => {

    return (
        <section id="resume" class="resume">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Resume</h2>
            </div>
          <div class="row">
            <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item">
                <h4>Simranjeet Singh</h4>
                <h5>January 2019-August 2020</h5>
                <p><em>Software developer holding Post-Graduate Diploma with internship experience in two  companies seeking an 
                  entry-level job that leverage skills in Java, Spring Boot, Vue.js and relational/non-Relational database such as
                   MS SQL Server or MongoDB to build web-based applications.</em></p>
                   </div>
  
              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Post Graduate Diploma -Information Technology Solutions Diploma</h4>
                <h5>January 2019-August 2020</h5>
                <p><em>Humber College | Toronto, ON| Percentage: 89%</em></p>
                   </div>
              <div class="resume-item">
                <h4>Bachelor of Computer Science</h4>
                <h5>August 2014-August 2018</h5>
                <p><em>Panjab University | Chandigarh, India</em></p>
                  </div>
                  <h3 class="resume-title">Personal Project</h3>
              <div class="resume-item pb-0">
                <h4>Portfolio Generator</h4>
                <p><em>May 2020-June 2020</em></p>
                <ul>
                  <li>ProducedREST APIs using Node.js and Express.js for creating a user'sportfolio.</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Software Developer</h4>
                <h5>May 2020-August 2020</h5>
                <p><em>Intransigence Technologies | Toronto, CA </em></p>
                <ul>
                  <li>Collaborated  closely  with  a  team  of  five  other  memberson  The  Brilliant  Dashboard Service project 
                    which gives a business owner an understanding of customer activities to get a competitive edge in the market.</li>
                  <li>Built REST APIs using Java in Spring Boot to read user activity from MongoDB. </li>
                  <li>Developed front-end components with Javascript in Vue.js that uses data from REST APIs to display it in the form 
                    of charts to the user.</li>
                  <li>Implemented  Kafka  Consumers  to  consume  messages  in  Spring  Boot  and  store  it  into MongoDB.</li>
                  <li>Performed Unit Testing using JUnit for service layer in Spring Boot application.</li>
                  <li>Worked  in an agile environment and demonstrated effective communication in weekly meetings with the client about the task assigned in JIRA.</li>
                </ul>
              </div>
              <div class="resume-item">
                <h4>Software Developer Intern</h4>
                <h5>August 2019-December 2019</h5>
                <p><em>MyCondoLink | Toronto, CA</em></p>
                <ul>
                  <li>CreatedUnit Management System individually to keep track of inventory, get an insight into capital investment
                     and generatead-hoc reports.</li>
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