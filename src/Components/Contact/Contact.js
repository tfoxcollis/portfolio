import React, { useRef } from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFighterJet, faEnvelope, faUser, faAt, faComment, faCircleXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ot7m8ye', 'template_uxsodin', form.current, 'rA8GGTB7ZpaSgBPLT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contactContainer" className="form-container">
      <h2 className="front-text text-white">Contact Me</h2>
      <label className="btn-open" for="frmContactForm">
        <FontAwesomeIcon icon={ faEnvelope } />
        <span className="ml-half">Open Form</span>
      </label>
      <input type="checkbox" id="frmContactForm" />
      <div className="contact-modal">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-wrapper">
              <div className="contact-section">
                <h3 className="p-none m-none mb-quarter text-white">
                  <FontAwesomeIcon className="fighter-icon text-white" icon={faFighterJet} />
                  <span className="ml-half">
                    Talk to me, Goose.  
                  </span>
                </h3>
              </div>
              <div className="contact-section">
                <input type="hidden" name="toName" value="Trish"></input>
                <div className="form-item">
                  <input type="text" id="txtFullName" name="txtFullName" placeholder="name" />
                  <label className="lbl-floating" for="txtFullName">Name</label>
                  <FontAwesomeIcon className="icon text-white" icon={ faUser } />
                </div>
                <div className="form-item">
                  <input type="text" id="txtEmail" name="txtEmail" placeholder="email" />
                  <label className="lbl-floating" for="txtEmail">Email</label>
                  <FontAwesomeIcon className="icon text-white" icon={ faAt } />
                </div>
                <div className="form-item">
                  <textarea id="txtContent" name="txtContent" rows="10" placeholder="This is where you tell me about your job opportunity :)"></textarea>
                  <label className="lbl-floating" for="txtContent">{"This is where you tell me about your job opportunity :)"}</label>
                  <FontAwesomeIcon className="icon text-white" icon={ faComment } />
                </div>
              </div>
              <div className="contact-section text-right">
                <label className="contact-cancel" for="frmContactForm">
                  <FontAwesomeIcon icon={faCircleXmark} />
                  <span className="ml-quarter">Cancel</span>
                </label>
                <button className="btn-open ml-whole" type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span className="ml-half"><label for="frmContactForm">Send</label></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact