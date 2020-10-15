import React, { useState, useEffect } from 'react';
import "./style.css";
import { init, send } from 'emailjs-com';

const Contact = () => {

    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
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
                : name === "subject" ? setSubject(value)
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
        <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Contact</h2>
                </div>

                <div class="row mt-1">

                    <div class="col-lg-4">
                        <div class="info">
                           

                            <div class="email">
                                <i class='bx bx-mail-send' ></i>
                                <h4>Email:</h4>
                                <p>simranjeet271@gmail.com</p>
                            </div>

                            <div class="phone">
                                <i class='bx bxs-phone-call' ></i>
                                <h4>Call:</h4>
                                <p>+1 416 720 0534</p>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-8 mt-5 mt-lg-0">

                        <form role="form" class="php-email-form" method="POST">
                            <div class="form-row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="name" onChange={handleChange} class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div class="validate"></div>
                                </div>
                                <div class="col-md-6 form-group">
                                    <input type="email" class="form-control" name="email" onChange={handleChange} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div class="validate"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" name="feedback" rows="5" onChange={handleChange} data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div class="validate"></div>
                            </div>
                            <div class="mb-3 text-center">
                                {loading ?
                                    <div class="mb-4 pb-3">
                                        <div class="spinner-border text-success " role="status">
                                        </div> <span class="loading">Loading...</span></div> : null}
                                {error ?
                                    <div class="alert alert-danger" role="alert">
                                        There is some problem :/
                                </div> : null}
                                {sent ?
                                    <div class="alert alert-success" role="alert">
                                        Email sent successfully!
                                </div> : null}
                            </div>
                            <div class="text-center"><button type="submit" onClick={handleSubmit}>Send Message</button></div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;