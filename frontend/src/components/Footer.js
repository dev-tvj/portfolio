import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">

          <div className="socialMedia">

            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <InstagramIcon className="iconHover"/>
            </a>
            <a href='mailto:dev.tj@protonmail.com' target='_blank' rel='noopener noreferrer'>
              <EmailIcon className="iconHover" />
            </a>
            <a href='https://www.linkedin.com/in/tales-jesus/?locale=en_US' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon className="iconHover" />
            </a>
            <a href='https://www.github.com/dev-tvj/' target='_blank' rel='noopener noreferrer'>
              <GithubIcon className="iconHover" />
            </a>

          </div>

          <p> &copy; 2023 developertj.com</p>

        </div>
      );
}

export default Footer;