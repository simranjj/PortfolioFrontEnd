import React from 'react';
import Nav from './navigation/nav';
import Avatar from './avatar/avatar';
import About from './about/about';
import Skills from './skills/skills';
import Resume from './resume/resume';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Footer from './footer/footer';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';

export default () => {


    return (
        
        <div>
            <Nav/>
            <Avatar />
            <About  />
            <Skills />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </div>
       
    )
}

