import React from "react";
import "./style.css";

const Resume = () => {
  return (
    <section id="journey" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Brief Journey</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item">
              <h4>Simran Singh</h4>
              <p>
                <em>
                  Dedicated professional with over 4 years of experience in
                  software development across law enforcement, financial, and
                  various other industries. Gained knowledge in frontend-backend
                  development, database, and DevOps practices through active
                  involvement in Agile projects, facilitating seamless
                  collaboration between technical and non-technical teams.
                </em>
              </p>
              <ul>
                <li>Waterloo, Canada.</li>
                <li>simranjeet271@gmail.com.</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>
                Post Graduate Diploma - Information Technology Solutions Diploma
              </h4>
              <h5>January 2019-August 2020</h5>
              <p>
                <em>Humber College | Toronto, ON| Percentage: 89%</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Computer Science</h4>
              <h5>August 2014-August 2018</h5>
              <p>
                <em>Panjab University | Chandigarh, India</em>
              </p>
            </div>
            <h3 className="resume-title">Personal Project</h3>
            <div className="resume-item pb-0">
              <h4>Portfolio</h4>
              <h5>August 2020-October 2020</h5>
              <ul>
                <li>
                  Produced REST APIs to perform CRUD using Node.js and
                  Express.js for user's portfolio.
                </li>
                <li>
                  Developed the user's profile using REST APIs in React.js,
                  Redux and various other packages.
                </li>
                <li>
                  Used HTML, CSS and Bootstrap to build components in React.js.
                </li>
                <li>
                  Deployed both back-end and front-end projects on Heroku.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>June 2023-Present</h5>
              <p>
                <em>Manulife | Waterloo, ON, CA</em>
              </p>
              <ul>
                <li>
                  Drove development operations by actively participating in
                  Node.js based microservices development and spearheading
                  DevOps initiatives. Led and collaborated with senior
                  developers on three pivotal migration projects, reduced
                  technical debt by approximately 80%.
                </li>
                <li>
                  Employed docker and Jenkins CI/CD pipelines to containerize
                  Node.js, Express.js apps and store images in JFrog
                  artifactory. Constructed and deployed Helm charts to deploy
                  them to Azure Kubernetes Services. Constructed, maintained and
                  upgraded Azure Kubernetes cluster and its resources using
                  Terraform.
                </li>
                <li>
                  Improved and added functionality to Javascript, Typescript,
                  Nodes.js, Express.js, and GraphQL based microservices while
                  participating in code reviews. Leveraged Apex trigger
                  framework to implement an optimized version of existing
                  trigger, significantly improving the performance of trigger
                  and logging throughout the system.
                </li>
              </ul>

              <h4>Full Stack Developer</h4>
              <h5>May 2021-June 2023</h5>
              <p>
                <em>HealthIM | Kitchener, ON, CA</em>
              </p>
              <ul>
                <li>
                  Lead development solo and also collaborated with a team of
                  developers on various products, enabling the screening of
                  patients with mental disorders and building reports for police
                  organizations across Canada and parts of the USA to drive
                  sound strategic decision-making.{" "}
                </li>
                <li>
                  Maintained and upgraded existing desktop and web applications
                  with JavaScript and Typescript using Electron.js, React.js and
                  Redux. Used Ruby on Rails to create and improve API endpoints
                  in Ruby on Rails interacting with PostgreSQL.
                </li>
                <li>
                  {" "}
                  Constructed the entire development environment using Fargate
                  and various other AWS services. Built CI/CD pipelines to
                  automate building and storing Docker containerized
                  applications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
