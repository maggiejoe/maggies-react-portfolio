import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  // input validations
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid. Please enter a valid email');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='py-5 text-center container'>
      <h2 id='text-color' className='pb-3 mb-5 border-bottom border-dark'>Contact Me</h2>

      {/* contact form */}
      <form id="contact-form mb-5" onSubmit={handleSubmit}>
        <div className='d-flex justify-content-center'  style={{ height: "80vh" }}>
          <div className='col-6'>
            <div className='pb-3'>
              {/* <label id='text-color' className='form-label' htmlFor="name">Name </label> */}
              <input type="text" name="name" className='form-control' placeholder="Name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className='pb-3'>
              {/* <label id='text-color' className='form-label' htmlFor="email">Email Address </label> */}
              <input type="email" name="email" className='form-control' placeholder="Email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className='pb-3'>
              {/* <label id='text-color' className='form-label' htmlFor="message">Please write a brief message below</label> */}
              <textarea name="message" rows="8" className='form-control' placeholder="Message" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className='contact-btn py-1 px-4 rounded-3 border border-dark shadow-lg' type="submit">Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;