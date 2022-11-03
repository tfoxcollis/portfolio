import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFighterJet, faEnvelope, faUser, faAt, faComment, faCircleXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
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
          <form>
            <div className="contact-wrapper">
              <div className="contact-section">
                <h3 className="p-none m-none mb-quarter text-white">
                  <FontAwesomeIcon icon={faFighterJet} />
                  <span className="ml-half">
                    Talk to me, Goose.
                  </span>
                </h3>
              </div>
              <div className="contact-section">
                <div className="form-item">
                  <input type="text" id="txtFullName" placeholder="name" />
                  <label className="lbl-floating" for="txtFullName">Name</label>
                  <FontAwesomeIcon className="icon text-white" icon={ faUser } />
                </div>
                <div className="form-item">
                  <input type="text" id="txtEmail" placeholder="email" />
                  <label className="lbl-floating" for="txtEmail">Email</label>
                  <FontAwesomeIcon className="icon text-white" icon={ faAt } />
                </div>
                <div className="form-item">
                  <textarea id="txtContent" placeholder="This is where you tell me about your job opportunity :)"></textarea>
                  <label className="lbl-floating" for="txtContent">{"This is where you tell me about your job opportunity :)"}</label>
                  <FontAwesomeIcon className="icon text-white" icon={ faComment } />
                </div>
              </div>
              <div className="contact-section text-right">
                <label className="contact-cancel" for="frmContactForm">
                  <FontAwesomeIcon icon={faCircleXmark} />
                  <span className="ml-quarter">Cancel</span>
                </label>
                <button className="btn-open ml-whole" type="button">
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