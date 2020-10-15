import React from 'react';
import "./style.css";

const Projects = () => {

    return (
        <section id="portfolio" class="portfolio section-bg">
            <div class="container " data-aos="fade-up">
                <div class="section-title">
                    <h2>Projects</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div class="row portfolio-container justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="col-lg-4 col-md-6 portfolio-item filter-web ">
                        <div class="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>Portfolio Generation - Back end</h4>
                                <p>Express.js, Node.js</p>
                                <div class="portfolio-links">
                                    <a href="https://github.com/simranjj/Portfolio-Generator/tree/master/portfolio" 
                                    data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>Portfolio Generation - Front end</h4>
                                <p>React.js, HTML, CSS, Bootstrap</p>
                                <div class="portfolio-links">
                                    <a href="https://github.com/simranjj/PortfolioFrontEnd/tree/master/portfolio-front" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-100">
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid " alt="" />
                            <div class="portfolio-info">
                                <h4>Netflix</h4>
                                <p>Webservice</p>
                                <div class="portfolio-links">
                                    <a href="https://github.com/simranjj/Netflix" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>UMS</h4>
                                <p>Java</p>
                                <div class="portfolio-links">
                                    <a href="https://github.com/simranjj/UMS" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
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