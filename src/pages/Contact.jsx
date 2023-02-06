import React, { forwardRef } from 'react';
import Title from '../components/Title';
import { ReactComponent as HomeIcon } from '../icons/HomeIcon.svg';
import { ReactComponent as EmailIcon } from '../icons/EmailIcon.svg';
import { ReactComponent as GithubIcon } from '../icons/GithubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../icons/LinkedinIcon.svg';
import { ReactComponent as PhoneIcon } from '../icons/PhoneIcon.svg';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';


const Contact = (props) => {
  const [contactInfo, setContactInfo] = useState({name: '', email: '', body: ''});
  const form = useRef();

  const handleFormChange = (e) => {
    console.log(e.target.value)
    setContactInfo(e.target.value)
  };

  const handleContact = async (e) => {
    e.preventDefault();
    console.log(contactInfo)
    try {
      const res = await emailjs.sendForm('service_pcizvve', 'template_5mfv9y4', form.current, 'kaO5fDd6_HAzMTs25');
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
            142141241
          </div>
          <div className='ContactDetails'>
            <EmailIcon className='Icon' />
            yonatansalmon_@gmail.com
          </div>
          <h4 className='FollowMe'>Follow Me</h4>
          <div className='IconContainer'>
            <a className='LinkIcon' rel='noreferrer' href='https://www.linkedin.com/in/yonatansalmon' target='_blank'>
              <LinkedinIcon className='Icon' />
            </a>
            <a className='LinkIcon' rel='noreferrer' href='https://www.linkedin.com/in/yonatansalmon' target='_blank'>
              <GithubIcon className='Icon' />
            </a>
          </div>
        </div>

        <form className='ContactForm' ref={form} onSubmit={handleContact}>
          <h4>Send a Note</h4>
          <div className='NameEmailContainer'>
            <input type='text' name='name' placeholder='Name' onChange={handleFormChange} className='Name FormInput' />
            <input type='text' name='email' placeholder='Email' onChange={handleFormChange} className='Email FormInput' />
          </div>
          <textarea className='FormInput' name='body' onChange={handleFormChange} placeholder='Tell me more...'></textarea>
          <button className='SendMsgBtn'>Send Message </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
