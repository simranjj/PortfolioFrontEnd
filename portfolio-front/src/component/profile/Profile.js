import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Nav from './navigation/nav';
import Avatar from './avatar/avatar';
import About from './about/about';
import Skills from './skills/skills';
import Resume from './resume/resume';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Footer from './footer/footer';
import { Redirect} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';

export default () => {


    let user = useSelector(state => state.user);
    if (user.username === '')
        user = JSON.parse(localStorage.getItem('user'))

        useEffect(() => {
            AOS.init({
                  duration: 1000,
            });
        }, []);

    return (
        
        <div>
            {user ? <>
            <Nav/>
            <Avatar avatar={{
                name: user.name,
                github: user.github,
                linkedin: user.linkedin
            }} />
            <About about={{
                description: user.description,
                email: user.email
            }} />
            <Skills />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
            </>
             :  <Redirect to="/" /> }
        </div>
       
    )
}

