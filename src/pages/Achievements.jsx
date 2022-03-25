import React from "react";
import Section from "../components/Section";

// import { BsTrophy } from "react-icons/bs"
import { RiFilePaper2Fill } from "react-icons/ri"

export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <ul className="fa-ul mb-0">
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://devskiller.com/hr-certification/5o9YS2D9zy2h5jdntogPei">
              Tech Recruitment Certified Professional
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://certificates.simplicdn.net/share/3148372_1641335274.pdf">
            JavaScript for Beginners
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://certificates.simplicdn.net/share/3142288_1641096642.pdf">
              ReactJS for Beginners
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://certificates.simplicdn.net/share/3139435_1641029483.pdf">
              Getting Started with ReactJS Components
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://www.pdffiller.com/jsfiller-desk13/?isShareViaLink=1&projectId=964760748&loader=tips&replace_gtm=false#290e1f62ec7665199ccb5833461cadc2">
              Software Testing
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://coursera.org/share/ca2b8c2dc8d9571be2b641d807b0bc8e">
              Soft Skills Course
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://media-exp1.licdn.com/dms/document/C4D1FAQE7PTsodM_jfw/feedshare-document-pdf-analyzed/0/1620399950388?e=2147483647&v=beta&t=Lwi3gZOIGdLi-g5CGdwViQpcPV48FEQketOpFhJmgTw">
              Certificate of Language Ability
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://app.testdome.com/cert/21ab5822e8ac4d4ab757e301b76ccc9b">
              HTML/CSS and JavaScript
            </a>
          </div>
        </ul>
      </Section>
    </React.Fragment>
  );
}
