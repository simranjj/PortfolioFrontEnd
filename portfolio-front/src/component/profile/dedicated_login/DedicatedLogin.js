import React, { useEffect } from "react";
import { getUserDataByLoginApi } from "../../../api/user_api";
import { useDispatch } from "react-redux";
import { initUserAction } from "../../../redux/actions";
import { StatusCodes } from "http-status-codes";
import { DEDICATED_LOGIN_PASSWORD, DEDICATED_LOGIN_USERNAME } from "../../../constants/config";
import Nav from '../navigation/nav';
import Avatar from '../avatar/avatar';
import About from '../about/about';
import Skills from '../skills/skills';
import Resume from '../resume/resume';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import Footer from '../footer/footer';
import AOS from 'aos';

const DedicatedLogin = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // fixed for creator's profile
    let loginDetails = { username: DEDICATED_LOGIN_USERNAME, password: DEDICATED_LOGIN_PASSWORD };
    getUserDataByLoginApi(loginDetails).then((response) => {
      if (response.status === StatusCodes.OK) {
        const userData = response.data.data;
        const user = {
          name: userData.name,
          github: userData.github,
          linkedin: userData.linkedin,
          description: userData.description,
          email: userData.email
        }
        dispatch(initUserAction(user));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <div>
      <Nav />
      <Avatar />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default DedicatedLogin;