import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contacts.css';
import WhatsApp from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";



function Contacts() {
  return (
    <div className="mainContainer">


      <div className="leftPanel">
        <div className="contactInfo">

          <span style={{paddingBottom: 55}}>
            <h1> <b> Let's talk </b> </h1>
            <h3> How can I help you? </h3>
          </span>

          <div className="contactItem">
            <WhatsApp className="contactsIcons"/>
            <p>+55 (44) 98868-2602</p>
          </div>
          <div className="contactItem">
            <EmailIcon className="contactsIcons"/>
            <p>dev.tj@protonmail.com</p>
          </div>
          <div className="contactItem">
            <LinkedInIcon className="contactsIcons"/>
            <a href="https://linkedin.com" ><p className="linkedinContact">Linkedin</p></a>
          </div>

        </div>
      </div>


      <div className="rightPanel">
        <form className="myForm">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">Company</label>
            <input type="text" className="form-control" id="company" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>


  </div>
  );
}

export default Contacts;