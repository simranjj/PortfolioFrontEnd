import React from 'react';
import "./style.css";


const Footer = () => {

    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <h3>Simran Singh</h3>
                    <p>“Learning to code is learning to create and innovate.”<br/>
—Enda Kenny, Taoiseach, Ireland</p>
                    <div className="social-links">
                        <a href="https://github.com/simranjj" className="twitter"><i className="bx bxl-github"></i></a>
                        <a href="https://www.linkedin.com/in/simranjeet-singh-7a2a58152/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;