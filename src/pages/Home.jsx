import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/Ayomide-Ibosiola (Technical Recruiter).pdf"
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
          <h1 className="mb-0">
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
      I am a Talent Management Professional with proven experience in Designing HR Processes, Technical Recruiting, Talent Sourcing, Strategy Development, Recruitment and Selection, Employee Onboarding, Payroll Management, HRIS, Employer Branding, Learning and Development, and other Human Resources functions spanning across Tech Start-ups, with a strong Software Development background; specialized in building Web Applications that are aesthetically pleasing and logic driven.
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
