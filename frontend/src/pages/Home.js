import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import LogoFull from '../assets/images/tj_logo_full_white.png';


function Home() {


  return (

    <div className="home">

      <div className="about primaryColor">

        {/* <div className="aboutFirstPart">
          <h2 > Hi, my name is <b style={{fontSize: 85}}>Thales</b></h2>
        </div> */}

        <img src={LogoFull} className="logoFull" alt="A full logo writed TJ."/>


        <div className="prompt">

          <p>I'm Thales Jesus, Fullstack software developer with a solid background in business world. <br/>(<b>13+ years and more than 40 companies</b>)</p>

          <Link to="/contacts"><button type="button" class="btn btn-block btn-lg glow-button btn-primary callToActionButton"> Let's talk </button></Link><br/>

          <a href='https://www.linkedin.com/in/tales-jesus/?locale=en_US' target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon className="iconHover" />
          </a>
          <a className="iconHover" href='https://www.github.com/dev-tvj/' target='_blank' rel='noopener noreferrer'>
            <GithubIcon className="iconHover" />
          </a>
          <a href='mailto:dev.tj@protonmail.com' target='_blank' rel='noopener noreferrer'>
            <EmailIcon className="iconHover" />
          </a>

        </div>

      </div>


      <div className="aboutMe">
        <h1> About me </h1>
        <ol className="list">
          <li className="item">
            <span>
            Fullstack Web Developer (backend and frontend) working with international team at DELL Technologies. With over <b>13+ years of experience</b> in various areas, I have <b>provided services and support to more than 40 companies</b>. 

            Throughout my career, I have worked in IT, fixing computers, website development, advertising agencies, digital marketing, digital ad management, sales, physical stores and online stores.

            I have developing focus with C #, Dotnet Core, Typscript / JavaScript / Angular, among other technologies required to create high-level web and mobile applications.

            I have several licenses and certificates in the area of technology and I consider myself a passionate about studying!
            </span>
          </li>
        </ol>
      </div>


      <div className="skills">
        <h1> My Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span>
              Angular, HTML, CSS, NPM, NodeJS,
              BootStrap, MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              .NET Core, AspNet Core, NodeJS, Laravel
              MySQL, Oracle Database, Dbeaver, Git, Github, Gitlab,
              Linux, Api REST, Micro-services, Apache, Docker, JSON, MVC, SOLID, Clean Code
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C#, JavaScript, TypeScript, PHP</span>
          </li>
          <li className="item">
            <h2>Other tools</h2>
            <span>
                JIRA, Microsoft TFS, Trello, Asana, SCRUM, Kanban, Wordpress, Google ADS, Facebook ADS, Canva, Photoshop, Jenkins, Confluence
            </span>
          </li>

          <li className="item">
            <h2>Soft skills</h2>
            <span>
              Leadership,
              Effective Communication,
              Problem Solving,
              Critical Thinking,
              Empathy,
              Resilience,
              Sales,
              Negotiations,
              Customer service
            </span>
          </li>
        </ol><br></br>
        <div style={{fontSize: '35', marginTop: 85}}>... and for what i don't know, <b>just give me a few hours 😁</b></div>
      </div>

    </div>

  );
}

export default Home;