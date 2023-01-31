import React, { forwardRef } from 'react';
import Title from '../components/Title';
import { ReactComponent as HomeIcon } from '../icons/HomeIcon.svg';
import { ReactComponent as EmailIcon } from '../icons/EmailIcon.svg';
import { ReactComponent as GithubIcon } from '../icons/GithubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../icons/LinkedinIcon.svg';
import { ReactComponent as PhoneIcon } from '../icons/PhoneIcon.svg';

const Contact = (props) => {
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
            <LinkedinIcon className='Icon' />
            <GithubIcon className='Icon' />
          </div>
        </div>

        <form className='ContactForm'>
          <h4>Send a Note</h4>
          <div className='NameEmailContainer'>
            <input type='text' placeholder='Name' className='Name FormInput' />
            <input type='text' placeholder='Email' className='Email FormInput' />
          </div>
          <textarea className='FormInput' placeholder='Tell me more...'></textarea>
          <button>Send Message </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
