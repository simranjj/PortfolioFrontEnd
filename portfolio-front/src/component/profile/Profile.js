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
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';

export default () => {

    const user = useSelector(state => state.user);
    const avatar = {
        name : user.name,
        github : user.github,
        linkedin : user.linkedin
    }
    const about = {
        description : user.description,
        email : user.email
    }
    useEffect(() => {
        AOS.init({
            duration:1000,
        });
      }, []);


    return (
        <div >
            <Nav/>
           <Avatar avatar={avatar}/>
           <About about={about}/>
           <Skills/>
           <Resume/>
           <Projects/>
           <Contact/>
           <Footer/>
        </div>
    )
}

