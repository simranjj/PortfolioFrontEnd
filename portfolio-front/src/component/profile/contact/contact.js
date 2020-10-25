import React, { useState, useEffect } from 'react';
import "./style.css";
import { init, send } from 'emailjs-com';
import { TEMPLATE_ID } from '../../../constants/config';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Contact = () => {

    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [validated, setValidated] = useState(false);

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

    }

    const handleSubmit = (event) => {
        toggleLoading();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            toggleLoading();
        }
        if (form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();
            send(
                'simranjeet271@gmail.com', TEMPLATE_ID,
                { message_html: feedback, from_name: name + ' ' + email }
            ).then(res => {
                console.log('Email successfully sent!')
                toggleLoading();
                toggleSent();
                setTimeout(toggleSent, 2000);
                return;

            })
                .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))

        }
        setValidated(true);
    };

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row ">

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

                    <div className="col-lg-8 mt-4">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">

                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your name.
            </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email ID"
                                            aria-describedby="inputGroupPrepend"
                                            name="email"
                                            onChange={handleChange}
                                            required

                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
            </Form.Control.Feedback>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                    <Form.Control as="textarea" rows={5} name="feedback" onChange={handleChange} placeholder="Message"
                                    required />
                                    <Form.Control.Feedback type="invalid">
                                        Please write something for me.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <div className="mb-3 text-center">
                                {loading ?
                                    <div className="mb-4 pb-3">
                                        <div className="spinner-border text-success " role="status">
                                        </div> <span className="loading">Loading...</span></div> : null}
                                {sent ?
                                    <div className="alert alert-success" role="alert">
                                        Email sent successfully!
                                </div> : null}
                            </div>
                            <div className=" mb-1 text-center"><Button type="submit" className="btn btn-success">Send</Button></div>

                        </Form>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;