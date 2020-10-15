import React from 'react';
import "./style.css";


const Footer = () => {

    return (
        <div>
            <footer id="footer">
                <div class="container">
                    <h3>Simran Singh</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <div class="social-links">
                        <a href="https://github.com/simranjj" class="twitter"><i class="bx bxl-github"></i></a>
                        <a href="https://www.linkedin.com/in/simranjeet-singh-7a2a58152/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                    <div class="copyright">
                        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                    </div>
                   
                </div>
            </footer>
        </div>
    );
}

export default Footer;