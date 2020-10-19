import React, { useState, useEffect } from 'react';
import "./style.css";
import { init, send } from 'emailjs-com';

const Contact = () => {

    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        init("user_jswl9r9cf2wUC0iyzP3TL");
    }, []);

    const toggleLoading = () => {
        setLoading(loading => !loading);
    }

    const toggleSent = () => {
        setSent(sent => !sent);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        name === "name" ? setName(value)
            : name === "feedback" ? setFeedback(value)
                    : setEmail(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSent(false);
        const templateId = 'template_bpboggh';
        if ( feedback && name && email) {  
            setError(false);
            toggleLoading();
            sendFeedback(templateId, { message_html: feedback, from_name: name, reply_to: email });
        }
        else setError(true);

    }

    const sendFeedback = (templateId, variables) => {
        send(
            'simranjeet271@gmail.com', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
            toggleLoading();
            toggleSent();
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row mt-1">

                    <div className="col-lg-4">
                        <div className="info">
                           

                            <div className="email">
                                <i className='bx bx-mail-send' ></i>
                                <h4>Email:</h4>
                                <p>simranjeet271@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className='bx bxs-phone-call' ></i>
                                <h4>Call:</h4>
                                <p>+1 416 720 0534</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">
                        
                        <form role="form" className="php-email-form" method="POST">
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" onChange={handleChange} className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" className="form-control" name="email" onChange={handleChange} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="feedback" rows="5" onChange={handleChange} data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3 text-center">
                                {loading ?
                                    <div className="mb-4 pb-3">
                                        <div className="spinner-border text-success " role="status">
                                        </div> <span className="loading">Loading...</span></div> : null}
                                {error ?
                                    <div className="alert alert-danger" role="alert">
                                        There is some problem :/
                                </div> : null}
                                {sent ?
                                    <div className="alert alert-success" role="alert">
                                        Email sent successfully!
                                </div> : null}
                            </div>
                            <div className="text-center"><button type="submit" onClick={handleSubmit}>Send Message</button></div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;