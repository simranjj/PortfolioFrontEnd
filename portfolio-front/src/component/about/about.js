import React  from 'react';
import "./style.css";


const About = () => {


    return (
        <section id="about" class="about">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
  
          <div class="section-title">
            <h2>About</h2>
            <p class="pb-4">Heya! I'am Simran. I like to cook and explore different aspects of life.
               I also like to critically think on issues and resolve them. My background in IT gives me a lot of 
              oppourtunities to quench that thirst. Apart from that I love to explore new places. 
              Lets see what else this world got for me ... </p>
          </div>
  
          <div class="row">
            <div class="col-lg-4">
              <img src="assets/img/profile-img.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Developer.</h3>
              <p class="font-italic">
                I am a full stack developer with internship experience in two companies.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> 26 October 1996</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> +1 416 720 0534</li>
                    <li><i class="icofont-rounded-right"></i> <strong>City:</strong> City : Toronto, Canada</li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 23</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> Post Graduate Diploma</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Email Id:</strong> email@example.com</li>
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