import React from 'react';
import "./style.css";


const Skills = () => {

    return (

        <section id="skills" className="skills section-bg services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>I have gone through few projects with different teammates gaining following skills over the time.</p>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">
                   
                        <div className="progress">
                            <span className="skill">Java<i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: "90%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Spring Boot<i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">HTML/CSS/Bootstrap<i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">MERN <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">SQL <i className="val">85%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12  d-flex justify-content-around" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box iconbox-red w-50">
                            <div className="icon">
                                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                                </svg>
                                <i className="bx bx-star"></i>
                            </div>
                            <h4><p>Other Skills</p></h4>
                            <p> REST API, JUnit, Vue.js, Kafka, Git.</p>
                        </div>
                        <div className="icon-box iconbox-teal w-50">
                            <div className="icon">
                                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                                </svg>
                                <i className="bx bx-face"></i>
                            </div>
                            <h4><p>Soft Skills</p></h4>
                            <p>Critical Thinking, Adaptability,<br/> Prioritizing and Managing tasks, Quick learner.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>


    );
}

export default Skills;