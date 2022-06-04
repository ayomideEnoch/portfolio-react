import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/Ayomide Ibosiola — Technical Recruiter.pdf"
import SGCartoon from "../assets/ayomide_cartoon.png"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/ayomide-ibosiola",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/ayomideEnoch",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/ayomideIbosiola",
      icon: <FaTwitter />,
    },
    {
      href: "https://web.facebook.com/ayomide.ibosiola",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/ayomideibosiola/",
      icon: <FaInstagram />,
    },
  ]

  return (
    <Section id="about">
      <div className='row justify-content-between'>
        <div className='col-md-6 order-last order-lg-first' data-aos='fade-up'>
          <h1 className="mb-0 about-home">
            Ayòmídé 
            <span className="text-primary" style={{paddingLeft: '2vw'}}>ÌBÒSÍOLÁ</span>
          </h1>
          <div className="subheading mb-3">
            <span style={{paddingRight: '0.3vw'}}>
              Impossible is nothing!
            </span>
            <span style={{paddingRight: '0.3vw'}}>
              ·
            </span>
            <a href="mailto:ayomideibosiola100@gmail.com" className='home-mail'>
              ayomideibosiola100@gmail.com
            </a>
          </div>
        </div>
        <div className='col-md-3 mb-5 mb-lg-0' data-aos='fade-up'>
          <img
            src={SGCartoon}
            alt="Ayomide Cartoon"
            style={{height: '40vh', width: '40vh'}}
          />
        </div>
      </div>

      <p className="lead mb-4">
      I am a Data-driven Technical Recruiter capable of Advanced Boolean Search to identify and mine top candidates with a strong Software Development background (4-5), specialized in building web and mobile applications that are aesthetically pleasing and logic-driven.<br></br>
      There’s nothing like the thrill of a candidate’s enthusiastic “Yes!” to an offer, and an equally pleased Hiring Manager who just landed a top performer. Perhaps even more satisfying is successfully recruiting a superstar and then seeing him/her develop a billion-dollar product. Knowing my efforts impact the bottom line keeps me going every day.<br></br>
      In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. <br></br>My core interests include:
        <ul>
          <li>Designing HR Processes</li>
          <li>Technical Recruiting</li>
          <li>Talent Sourcing</li>
          <li>Strategy Development</li>
          <li>Recruitment and Selection</li>
          <li>Employee Onboarding</li>
          <li>Payroll Management</li>
          <li>Human Resources Information System (HRIS)</li>
          <li>Employer Branding</li>
          <li>And other Human Resources functions spanning across Tech Start-ups.</li>
        </ul> 
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
