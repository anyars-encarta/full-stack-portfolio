import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const formRef = useRef();
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

    setFormData({ ...formData, [name]: [value] })
  };

  const handleSubmit = (e) => {
    const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    e.preventDefault();
    setLoading(true);

    emailjs.send(
      SERVICE,
      TEMPLATE,
      {
        from_name: user_name,
        to_name: 'Anyars',
        from_email: user_email,
        to_email: 'anyarsencarta@gmail.com',
        message: user_message,
      },
      PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    }, (error) => {
      alert(error)
    })

    // The code below sends mails to Sanity
    // const contact = {
    //   _type: 'contact',
    //   name: user_name,
    //   email: user_email,
    //   message: user_message,
    // };

    // client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
  };

  return (
    <>
      <h2 className='head-text'>Take A Coffee & Chat With Me</h2>

      <div className='app__footer-cards'>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__footer-card'
        >
          <img src={images.email} alt='email' />
          <a
            href='mailto:anyarsencarta@gmail.com'
            className='p-text'
          >
            anyarsencarta@gmail.com
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__footer-card'
        >
          <img src={images.mobile} alt='mobile' />
          <a
            href='tel:+233 24 211 9972'
            className='p-text'
          >
            +233 24 211 9972
          </a>
        </motion.div>
      </div>

      {!isFormSubmitted ?
        <form ref={formRef} onSubmit={handleSubmit} className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='user_name'
              value={user_name}
              onChange={handleChangeInput}
            />
          </div>

          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='user_email'
              value={user_email}
              onChange={handleChangeInput}
            />
          </div>

          <div className='app__flex'>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='user_message'
              // rows={5}
              value={user_message}
              onChange={handleChangeInput}
            />
          </div>

          <button type='submit' className='p-text'>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
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