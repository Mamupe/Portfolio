import '../Contact/Contact.css';

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="formCont">
      <h1>Contacto</h1>
      <form className="cf" ref={form} onSubmit={sendEmail}>
        <div className="part1">
          <input className="name" type="text" placeholder="Name" name="user_name" />
          <input
            className="mail"
            type="email"
            placeholder="Email address"
            name="user_email"
          />
        </div>
        <div className="part2">
          <textarea name="message" type="text" placeholder="Message"></textarea>
        </div>
        <input className="submit" type="submit" value="Submit" id="input-submit" />
      </form>
    </div>
  );
};

export default Contact;
