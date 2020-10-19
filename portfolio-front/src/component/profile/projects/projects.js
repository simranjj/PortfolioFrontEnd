import React from 'react';
import "./style.css";

const Projects = () => {

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container " data-aos="fade-up">
                <div className="section-title">
                    <h2>Projects</h2>
                    <p>Few major projects using Java, HTML, CSS, Bootstrap, MERN stack and MS SQL Server.</p>
                </div>
                <div className="row portfolio-container justify-content-center" >
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web ">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/Portfolio-api.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Portfolio Generator - REST Api</h4>
                                <p>Express.js, Node.js</p>
                                <div className="portfolio-links">
                                    <a href="https://github.com/simranjj/Portfolio-Generator/tree/master/portfolio" 
                                    data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web align-self-end">
                        <div className="portfolio-wrap "  >
                            <img src="assets/img/portfolio/portfolio.png" className="img-fluid " alt="" />
                            <div className="portfolio-info">
                                <h4>Portfolio Generation - Front end</h4>
                                <p>React.js, HTML, CSS, Bootstrap</p>
                                <div className="portfolio-links">
                                    <a href="https://github.com/simranjj/PortfolioFrontEnd/tree/master/portfolio-front" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100">
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/netflix.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Netflix</h4>
                                <p>Webservice</p>
                                <div className="portfolio-links">
                                    <a href="https://github.com/simranjj/Netflix" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/UMS.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>UMS</h4>
                                <p>Java</p>
                                <div className="portfolio-links">
                                    <a href="https://github.com/simranjj/UMS" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;