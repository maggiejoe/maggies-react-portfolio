import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [formMessage, setFormMessage] = useState('');
  const { name, email, message } = formState;

  // const form = useRef();

  // input validations
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setFormMessage('Your email is invalid. Please enter a valid email');
      } else {
        setFormMessage('');
      }
    } else {
      if (!e.target.value.length) {
        const name = e.target.name;
        setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
      } else {
        setFormMessage('');
      }
    }
    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      // console.log('Handle Form', formState);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0hj3rgb', 'template_ygr0lgr', "#contactForm", 'iskQ2EzJDVVCqiAV2')
      .then((result) => {
        console.log(result.text);
        console.log("success");
      }, (error) => {
        console.log(error.text);
        console.log("fail");
      });
  }

  return (
    <section className='py-5 text-center container'>
      <h2 className='titles text-color pb-3 mb-5 border-bottom border-dark'>Contact Me</h2>
      <p className="col-12 pb-3 mb-5 text-decoration-none">
        <a href="mailto:maggiejoseph94@gmail.com" className="text-decoration-none all-text">
          Click here to shoot me an email!
        </a>
      </p>

      {/* contact form */}
      <form id="contactForm" onSubmit={sendEmail}>
        <div className='d-flex justify-content-center' style={{ height: "80vh" }}>
          <div className='col-6'>
            <div className='pb-3'>
              {/* <label id='text-color' className='form-label' htmlFor="name">Name </label> */}
              <input type="text" id="from_name" name="name" className='form-control' placeholder="Name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className='pb-3'>
              {/* <label id='text-color' className='form-label' htmlFor="email">Email Address </label> */}
              <input type="email" name="email" className='form-control' placeholder="Email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className='pb-3'>
              {/* <label id='text-color' className='form-label' htmlFor="message">Please write a brief message below</label> */}
              <textarea name="message" rows="8" className='form-control' placeholder="Message" defaultValue={message} onBlur={handleChange} />
            </div>
            {formMessage && (
              <div>
                <p className="error-text">{formMessage}</p>
              </div>
            )}
            <button className='all-text contact-btn py-1 px-4 rounded-3 border border-dark shadow-lg' type="submit" value="Send">Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;