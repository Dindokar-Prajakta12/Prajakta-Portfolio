import React, { useState } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send form data to an API)
        alert('Message sent!');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

  return (
    <>
    <h1>CONTACT ME</h1>
     <div className="contact-container">
            <div className="maa">
            <h2 className="contact-title">Contact</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
      <div className="container contact" id="contact">

        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a 
            href="https://www.linkedin.com/in/prajakta-dindokar-697816224/" 
            target="_blank" 
            rel="noreferrer" 
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          
          <a 
            href="https://github.com/Dindokar-Prajakta12" 
            target="_blank" 
            rel="noreferrer" 
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          
          <a 
            href="mailto:dindokarprajakta28@gmail.com" 
            target="_blank" 
            rel="noreferrer" 
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
