import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', body: '' });
  const [error, setError] = useState(false);

  const form = useRef();

  const handleFormInput = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const notify = () =>
    toast('Thank you for reaching out!', {
      position: 'bottom-right',
      className: 'Toast',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const handleContact = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (contactInfo.name === '') {
        setError('Please enter a name');
        return;
      }
      if (!contactInfo.email || regex.test(contactInfo.email) === false) {
        setError('Invalid Email');
        return;
      }
      if (contactInfo.body === '') {
        setError('Please enter a message for the email');
        return;
      }
      const res = await emailjs.sendForm('service_giixmgq', 'template_5mfv9y4', form.current, 'kaO5fDd6_HAzMTs25');
      if (res.status === 200) {
        notify();
      }
    } catch (err) {
      console.log(err);
      setError('Oops something went wrong')
    }
    setContactInfo({ name: '', email: '', body: '' });
  };
  return (
    <form className='ContactForm' ref={form} onSubmit={handleContact}>
      <h4>Send a Note</h4>
      <div className='NameEmailContainer'>
        <input type='text' name='name' placeholder='Name' className='Name FormInput' onChange={handleFormInput} value={contactInfo.name} />
        <input type='text' name='email' placeholder='Email' onChange={handleFormInput} value={contactInfo.email} className='Email FormInput' />
      </div>
      <textarea className='FormInput' name='body' onChange={handleFormInput} value={contactInfo.body} placeholder='Tell me more...'></textarea>
      {error && <h1 className='ErrorMessage'>{error}</h1>}
      <button className='SendMsgBtn'>Send Message </button>
    </form>
  );
};

export default ContactForm;
