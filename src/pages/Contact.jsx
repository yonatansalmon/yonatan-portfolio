import React, { forwardRef } from "react";
import Title from "../components/Title";

const Contact = (props) => {
  return (
    <section className="contactContainer">
      <Title backgroundTitle="Contact" frontalTitle="Get In Touch" />
      <div className="ContactInfoContainer">
        <div className="ContactInfo">
          <h4>Address</h4>
          <p>Petach Tikva, Israel</p>
          <div className="ContactDetails"><FontAwesomeIcon icon="fa-solid fa-envelope" />142141241</div>
          <div className="ContactDetails">yonatansalmon_@gmail.com</div>
          <h4 className="FollowMe">Follow Me</h4>
          <div className="IconContainer"></div>
        </div>

        <form className="ContactForm">
          <h4>Send Us a Note</h4>
          <div className="NameEmailContainer">
            <input type="text" className="Name" />
            <input type="text" className="Email" />
          </div>
          <textarea></textarea>
          <button>Send Message </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
