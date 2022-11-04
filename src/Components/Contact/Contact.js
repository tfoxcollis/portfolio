import React, { useRef } from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFighterJet, faEnvelope, faCircleXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import { FormInputs } from './FormInputs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_KEY, process.env.REACT_APP_EMAIL_TEMPLATE_KEY, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contactContainer" className="form-container">
      <h2 className="front-text text-white contact-header">Contact Me</h2>
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
              <FormInputs />
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