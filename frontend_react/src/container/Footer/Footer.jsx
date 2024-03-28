import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user_name, user_email, user_message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: user_name,
      email: user_email,
      message: user_message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  };

  return (
    <>
      <h2 className='head-text'>Take A Coffee & Chat With Me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a
            href='mailto:anyarsencarta@gmail.com'
            className='p-text'
          >
            anyarsencarta@gmail.com
          </a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a
            href='tel:+233 24 211 9972'
            className='p-text'
          >
            +233 24 211 9972
          </a>
        </div>
      </div>

      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='name'
              value={user_name}
              onChange={handleChangeInput}
            />
          </div>

          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={user_email}
              onChange={handleChangeInput}
            />
          </div>

          <div className='app__flex'>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='message'
              value={user_message}
              onChange={handleChangeInput}
            />
          </div>

          <button
            type='button'
            className='p-text'
            onClick={handleSubmit}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);