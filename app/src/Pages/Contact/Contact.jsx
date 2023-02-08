import './Contact.css';

import emaijs from 'emailjs-com';
import { useFormik } from 'formik';
import React, { useState } from 'react';
const Contact = () => {
  const [successResult, setSuccessResult] = useState('');
  const [errorResult, setErrorResult] = useState('');

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate(values) {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.subject) {
        errors.subject = 'Required';
      }

      if (!values.message) {
        errors.message = 'Required';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    async onSubmit(values) {
      try {
        await emaijs.send(
          'service_zkjoc6d',
          'Portfolio_mamupe',
          values,
          'w4GZ1-cnaqJ-vOrHK',
        );
        form.resetForm();
        setSuccessResult('Thank you! Your message has been successfully sent');
        setTimeout(() => {
          setSuccessResult('');
        }, 5000);
      } catch (e) {
        setErrorResult('Something went wrong while sending your message!');
        setTimeout(() => {
          setErrorResult('');
        }, 5000);
      }
    },
  });

  function FormErrorHandler({ name }) {
    return form.errors[name] ? (
      <div className="contact-form__err">{form.errors[name]}</div>
    ) : null;
  }

  return (
    <div className="formCont">
      <h3>¡Contacta conmigo!</h3>
      <form className="cf" onSubmit={form.handleSubmit}>
        <div className="part1">
          <label>Nombre:</label>
          <input
            className="name"
            value={form.values.name}
            onChange={form.handleChange}
            type="text"
            placeholder="Nombre completo"
            name="name"
          />
          <FormErrorHandler name="name" />
          <label>Email:</label>
          <input
            className="mail"
            value={form.values.email}
            onChange={form.handleChange}
            type="text"
            placeholder="example@mail.com"
            name="email"
          />
          <FormErrorHandler name="email" />
          <label>Asunto:</label>
          <input
            value={form.values.subject}
            onChange={form.handleChange}
            className="subject"
            type="text"
            placeholder="Asunto"
            name="subject"
          />
          <FormErrorHandler name="subject" />
        </div>
        <div className="part2">
        <label>Mensaje:</label>
          <textarea
            value={form.values.message}
            onChange={form.handleChange}
            placeholder="Escribe tu mensaje"
            name="message"
          />
          <FormErrorHandler name="message" />
        </div>

        <button className="submit" type="submit">
          Enviar
        </button>
        <div className="contact-form__result">
          {successResult && <span className="contact-form__scc"> {successResult} </span>}
          {errorResult && <span className="contact-form__scc"> {errorResult} </span>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
