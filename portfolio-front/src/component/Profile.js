import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  Link } from "react-router-dom";
import Nav from './navigation/nav';
import Avatar from './avatar/avatar';
import About from './about/about';
import Skills from './skills/skills';
import Resume from './resume/resume';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Footer from './footer/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';

export default () => {

    const user = useSelector(state => state.user);
    useEffect(() => {
        AOS.init({
            duration:1000,
        });
      }, []);


    return (
        <div >
             { <Link to="/editprofile">Edit Profile</Link> }
           { user.username }
           <Nav/>
           <Avatar/>
           <About/>
           <Skills/>
           <Resume/>
           <Projects/>
           <Contact/>
           <Footer/>
        </div>
    )
}

