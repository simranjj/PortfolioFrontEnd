import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EditPersonalInfo from "./EditPersonalInfo";
import EditProjectInfo from "./EditProjectInfo";
import EditExperienceInfo from "./EditExperienceInfo";
import EditAchievementsInfo from "./EditAchievementsInfo";
import EditCertificateInfo from "./EditCertificateInfo"
import EditSkillInfo from "./EditSkillInfo";

export default () => {


    return (
        <div>
            
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
