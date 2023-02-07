import React, { forwardRef } from 'react';
import Title from '../components/Title';
import { ReactComponent as HomeIcon } from '../icons/HomeIcon.svg';
import { ReactComponent as EmailIcon } from '../icons/EmailIcon.svg';
import { ReactComponent as GithubIcon } from '../icons/GithubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../icons/LinkedinIcon.svg';
import { ReactComponent as PhoneIcon } from '../icons/PhoneIcon.svg';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useRef } from 'react';
import '../App.css';
import ContactForm from '../components/ContactForm';

const Contact = (props) => {
  return (
    <>
      <section className='contactContainer'>
        <Title backgroundTitle='Contact' frontalTitle='Get In Touch' />
        <div className='ContactInfoContainer'>
          <div className='ContactInfo'>
            <div className='ContactDetails'>
              <HomeIcon className='Icon' />
              Petach Tikva, Israel
            </div>
            <div className='ContactDetails'>
              <PhoneIcon className='Icon' />
              052-9533170
            </div>
            <div className='ContactDetails'>
              <EmailIcon className='Icon' />
              yonatansalmon@gmail.com
            </div>
            <h4 className='FollowMe'>Follow Me</h4>
            <div className='IconContainer'>
              <a className='LinkIcon' rel='noreferrer' href='https://www.linkedin.com/in/yonatansalmon' target='_blank'>
                <LinkedinIcon className='Icon' />
              </a>
              <a className='LinkIcon' rel='noreferrer' href='https://github.com/yonatansalmon' target='_blank'>
                <GithubIcon className='Icon' />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};

export default Contact;
