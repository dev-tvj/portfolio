import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (

    <div className="experience darkText">

      <VerticalTimeline lineColor="#3e497a">

        {/* DELL */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Now"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
          >
          <h3 className="vertical-timeline-element-title">
            Dell Technologies - Software Developer
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
            Remote | World
          </h4>
          <p>
          Fullstack Software Development to <b>Dell Technologies & EMC</b>, I work in the maintenance and development of software for BRAIN, 
          technology that developers and testers use everyday to validate, request and update Dell Technologies business data, one of the largest Oracle database in World. 
          All work is optimized using agile methodologies, especially Scrum and Kanban.
          <br/><br/>

            __ <b>Skills</b> <br/>
            ● Backend: C# .Net | MVC | Entity framework <br/>
            ● Frontend: HTML | CSS | Javascript | Typescript | NodeJS | Angular <br/>
            ● API's | Micro-services | PCF <br/>
            ● Git | Gitlab <br/>
            ● Microsoft TFS | JIRA | SCRUM | Kanban | Confluence <br/>
            ● Oracle relacional Database <br/>
          </p>
        </VerticalTimelineElement>


        {/* FREELANCE */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Software Developer
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
            Maringá, PR - Brazil
          </h4>
          <p>
          Back-end Developer | C# dotNet Core | JavaScript & TypeScript | PHP & Laravel | Back-end Programmer
          <br/><br/>

            __ <b>Skills</b> <br/>
            ● C# (Csharp) & .Net Core (ASPnet Core) <br/>
            ● PHP & framework Laravel <br/>
            ● HTML | CSS | JavaScript <br/>
            ● MySQL relational Database <br/>
            ● Asana | Trello <br/>
            ● GIT | Github <br/>
              </p>
        </VerticalTimelineElement>


        {/* UNIFRAN */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Now"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Analysis and Systems development,  UNIFRAN University
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
          Superior Technology Course
          </h4>

          <p>Software Development - Backend & Frontend | Web Applications | APIs | PHP | JavaScript | MySQL | etc.</p>

          <p>Franca, SP - Brazil</p>
        </VerticalTimelineElement>


        {/* AMOR DE COMPRINHA */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            <i>Amor de Comprinha</i> Shop
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
            Campo Grande, MS - Brazil
          </h4>
          <p>
          Owner of Amor de Comprinha store, focused on selling Decorations and Utilities. It was a physical store from December 2019 until September 2020, 
          but due to losses caused by the pandemic, it was closed. From September 2020 onwards, the store remained online, serving customers throughout Brazil 
          through its social media and own e-commerce website until November 2021.
          <br/><br/>

            __ <b>Skills</b> <br/>
              ● Complete enterprise management (administrative, legal, logistical, inventory control, accounting, etc.) <br/>
              ● Customer service <br/>
              ● Sales <br/>
              ● Negotiation <br/>
              ● Wordpress | HTML <br/>
              ● Trello | Asana | Kanban <br/>
              ● Google ADS | Facebook ADS <br/>
              </p>
        </VerticalTimelineElement>


        {/* EVOLUTIVE */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Evolutive Marketing Digital
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
            States of São Paulo and MS - Brazil
          </h4>
          <p>
            Owner of "Evolutive Digital Marketing" agency, which provided services to over 40 companies in Brazil. Offered consultancy and technological and media solutions in marketing, 
            developed websites and applications, managed complete social media strategies, created graphic media, handled campaigns and advertisements through Google ADS 
            and Facebook ADS, etc. The agency had a diverse team of professionals, including journalists, advertisers, and graphic designers. There were two fisical offices in Brazil, 
            one in Campo Grande - MS to serve the Midwest region and one in Sorocaba - SP to serve the Southeast region.
            <br/><br/>

            __ <b>Skills</b> <br/>
              ● Overall agency management (administrative, financial, contractual, legal, accounting, etc.) <br/>
               ● Sales <br/>
               ● Negotiations <br/>
               ● Customer service <br/>
               ● Business trips <br/>
               ● Digital Ads Traffic Manager (ADS) <br/>
               ● Website creation <br/>
               ● Wordpress <br/>
               ● Apache <br/>
               ● HTML | CSS <br/>
               ● Canva | Etus <br/>
               ● Trello | Asana | Kanban <br/>
               ● Google ADS | Facebook ADS <br/>
          </p>
        </VerticalTimelineElement>


        {/* PHOTOGRAPHY */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2015"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Photography Services
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
            Campo Grande, MS - Brazil
          </h4>
          <p>Responsible for the administrative and organizational management of the company.
            Exercised activities: In charge of monitoring functions of publications, social network management, support and service to the public.
            Development of strategies for increased sales, negotiation and credits, market analysis, as well as research for short, medium and long term investments. 
            Elaboration of documents, contracts, minutes, reports, requests and control of the flow of debts and credits.
            Planning and implementation of actions in administrative routines, aiming optimization and performance, as well as correction and improvement of internal processes.
          </p>
        </VerticalTimelineElement>


        {/* LAW SCHOOL */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Law School,  Anhanguera University
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
            Campo Grande, MS - Brazil
          </h4>
          <br/>
          <p>Bachelor's Degree</p>
        </VerticalTimelineElement>


        {/* LABTEC */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2005 - 2010"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          LabTec <i>Informática</i> - Computer Technician
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
            Cuiabá, MT - Brazil
          </h4>
          <p>
          Autonomous activity that professionally performed general computer maintenance, Windows and Linux formatting, backups, 
          recovery of lost files, installation and maintenance of networks, repair and sales of computer parts.
          </p>
        </VerticalTimelineElement>


        {/* WEBDESIGN COURSE */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          WebDesign Bootcamp Course
          </h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">
            Cuiabá, MT - Brazil
          </h4>
          <br/>
          <p>
              My first course in the technology field, with 60 hours of learning, where my passion for web development began.
              <br/><br/>

              __ <b>Skills</b> <br/>
              ● HTML <br/>
               ● JavaScript <br/>
               ● PHP <br/>
               ● ASP <br/>
               ● MySQL <br/>
               ● FrontPage <br/>
               ● DreanWeaver <br/>
               ● Flash <br/>
               ● FireWorks <br/>
          </p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}

export default Experience;