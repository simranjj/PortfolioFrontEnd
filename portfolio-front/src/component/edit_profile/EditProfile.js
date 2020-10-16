import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EditPersonalInfo from "./components/EditPersonalInfo";
import EditProjectInfo from "./components/EditProjectInfo";
import EditExperienceInfo from "./components/EditExperienceInfo";
import EditAchievementsInfo from "./components/EditAchievementsInfo";
import EditCertificateInfo from "./components/EditCertificateInfo"
import EditSkillInfo from "./components/EditSkillInfo";
import { Link } from "react-router-dom";

export default () => {


    return (
        <div>
            {<Link to="/profile">Profile</Link>}
            <Tabs>
                <TabList>
                    <Tab>Personal Details</Tab>
                    <Tab>Skills</Tab>
                    <Tab>Academic Projects</Tab>
                    <Tab>Professional Experience</Tab>
                    <Tab>Achievements</Tab>
                    <Tab>Certificates</Tab>
                </TabList>
                <TabPanel>
                   <EditPersonalInfo />
                </TabPanel>
                <TabPanel>
                    <EditSkillInfo />
                </TabPanel>
                <TabPanel>
                    <EditProjectInfo />
                </TabPanel>
                <TabPanel>
                    <EditExperienceInfo />
                </TabPanel>
                <TabPanel>
                    <EditAchievementsInfo />
                </TabPanel>
                <TabPanel>
                    <EditCertificateInfo />
                </TabPanel>
            </Tabs>
        </div>
    );
};
