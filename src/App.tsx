import './App.scss'
import Hero from './Hero'
import FixedRightPanel from './FixedPanel'
import Skills from './Skills/Skills'
import Projects from './Projects/Project'
import { RiGithubLine, RiPhoneFill, RiLinkedinFill,RiTwitterFill } from 'react-icons/ri'
import { ThemeCtx } from './context/ThemeContext'
import { useContext, useEffect } from 'react'
import Tab from './Tab'
import WorkExperience from './WorkExperience'
import Certifications from './Certifications'
import FiverLogo from './static/image/fiverr-logo.png'

const LINKS = {
  cv: 'https://drive.google.com/file/d/1UoNOAuD_hZLq28IZmd2Eua_6nD4Jp7NV/view?usp=sharing',
  github: 'https://github.com/AniekutmfonGodwin',
  linkedin: 'https://linkedin.com/in/aniekutmfongodwin',
  phone: 'tel:+2348123880944',
  twitter: 'https://twitter.com/aniekutmfon',
  fiverr: 'https://www.fiverr.com/aniesdigital',
}
const CONTACT_LINKS: any[] = [
  <>
    <a href={LINKS?.github}>
      <RiGithubLine />
    </a>
  </>,
  <>
    <a href={LINKS?.linkedin}>
      <RiLinkedinFill />
    </a>
  </>,
  <>
    <a href={LINKS?.phone}>
      <RiPhoneFill />
    </a>
  </>,
  <>
    <a href={LINKS?.twitter}>
      <RiTwitterFill />
    </a>
  </>,
  <>
    <a href={LINKS?.fiverr}>
      <img src={FiverLogo} style={{
        height:30,
      }} alt="fiverr" />
    </a>
  </>,
]

/* TAB */
const tabHead = [
  <>Work Experience</>,
  <>Skills & Interest</>,
  <>Projects</>,
  <>Certifications</>,
]
const tabContent = [<WorkExperience />, <Skills />, <Projects />, <Certifications/>]

// MAIN APP
function App() {
  const theme = useContext(ThemeCtx)
  useEffect(() => {
    const body = document?.body
    if (theme && body) {
      body?.setAttribute('data-theme', theme?.currentValue)
    }
  }, [theme])
  return (
    <div className="">
      <FixedRightPanel />
      <Hero
        mainTitle={<div className="">Ekere, Aniekutmfon</div>}
        subTitle={
          <>
            <ul className="list list-row " style={{ justifyContent: 'center' }}>
              <li className="list-item">Software Engineer</li>
            </ul>
          </>
        }
        contact_links={CONTACT_LINKS}
      />

      <section className="page_section relative z-[1]">
        <div className="flex flex-row flex-wrap-reverse meta_box lg:flex-nowrap">
          {/* META_BOX LEFT */}
          <div className="flex-grow sticky top-0 z-[2] meta_box-left h-full   hidden_scrollbar">
            {/* ABOUT */}
            <section className="flex-grow flex flex-col w-full">
              <div className="boxed_layout h-full flex flex-col  pt-[30px] md:pt-[100px] pb-[30px]">
                {/* ABOUT */}
                <section className="flex-grow px-[30px]">
                  <header className=" ">
                    <h3 className="section_title">ABOUT</h3>
                  </header>
                  <div className="overflow-y-auto  hidden_scrollbar">
                    <p className="lead ">
                    A Software Engineer with 3+ years of experience working with <span className="tag">MERN stack</span> and facilitating cutting-edge solutions
                    with a wide range of <span className="tag">e-commerce application</span> and technology skills. An expert in <span className="tag">Blockchain development</span>
                    experience in developing Decentralized Blockchain Applications using <span className="tag">Bitcoin</span>, <span className="tag">Ethereum</span>, <span className="tag">Binance Smart Chain</span>
                    and <span className="tag">Ripple</span>.
                    Proven ability to leverage full-stack knowledge and experience to build interactive and user-centered website
                    designs to scale. Expertise in large system architecture development and administration as well as network design
                    and configuration.
                    With <span className="tag">Python</span> as a primary language, I'm experienced with <span className="tag">Django</span>, and have working knowledge of technologies
                    such as <span className="tag">FastApi</span>, <span className="tag">Pydantic</span>, <span className="tag">Sqlalchemy</span>, <span className="tag">Selenium Webdriver</span>, <span className="tag">Beautifulsoup</span> and <span className="tag">Celery</span>
                    Also have Core knowledge in <span className="tag">
                      HTML
                      </span>
                      , <span className="tag">
                        CSS
                        </span>
                        , <span className="tag">
                          JavaScript
                          </span>
                           and expertise in <span className="tag">
                             React
                             </span>
                             , <span className="tag">
                               ReactNative
                               </span>
                               , <span className="tag">
                                 Redux
                                 </span>
                                 , <span className="tag">
                                   Material UI
                                   </span>
                                   .
                    <span className="tag">Nodejs</span> with frameworks such as <span className="tag">
                      Express
                      </span>
                       and <span className="tag">
                         Hapi.
                         </span>
                    Also experienced with database and database management such as <span className="tag">
                      MySQL
                      </span>
                      , <span className="tag">
                        PostgreSQL
                        </span>
                         and <span className="tag">
                           MongoDb
                           </span>
                           . Also
                    familiar with Testing to build production level solutions and working in an Agile Development Environment.
                    </p>
                    <p>
                      I am currently taking on remote contract and freelance jobs.
                    </p>
                  </div>
                </section>
                <div className="flex w-full justify-end self-end mt-[30px]">
                  <a
                    href={LINKS?.cv}
                    target="_blank"
                    download
                    className="btn btn-primary btn-lg "
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </section>

            {/* CONTACT FORM */}
            <section className="flex-grow  flex flex-col">
              <section className="boxed_layout  w-full  flex flex-col pt-[30px] md:pt-[100px]">
                <header className="px-[30px] flex-grow">
                  <h3 className="section_title">CONTACT</h3>
                  <p>I am open to new opportunities</p>
                  <ul className="flex flex-wrap mt-4 gap-[30px]">
                    {CONTACT_LINKS?.map((item, idx) => (
                      <li className="social_icon" key={idx}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </header>

                {/* <form className="flex flex-col gap-[10px] my-[30px]">
                <div className="px-[15px] flex flex-col gap-[10px]">
                  <div className="flex md:flex-row flex-col gap-[10px] flex-wrap">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full name"
                      className="bg-gray-100 flex-1"
                      id="contact_input-full_name"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email_address"
                      className="bg-gray-100 flex-1"
                      id="contact_input-email_address"
                    />
                  </div>
                  <textarea
                    className="bg-gray-100"
                    name="message"
                    id="contact_input-message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                  ></textarea>
                </div>
              </form> */}

                <div className="flex justify-end mt-[30px]">
                  <button type="submit" className="btn btn-outline btn-lg ">
                    <a href="mailto:aniekutmfonekere@gmail.com">Get in touch</a>
                  </button>
                </div>
              </section>
            </section>

            {/* FOOTER */}
            <footer className="mt-auto">
              <div className="boxed_layout text-center opacity-50 p-4 text-gray-400">
                Copyright &copy; 2022 | Ekere, Aniekutmfon
              </div>
            </footer>
          </div>

          {/* META_BOX RIGHT */}
          <Tab>
            {({ activeIndex, setActiveIndex }) => (
              <div className="md:flex-auto w-full relative z-[1] flex flex-col meta_box-right max-h-screen">
                <header className="tab_head z-[1] top-[0px] sticky max-w-full">
                  <ul className="flex items-stretch overflow-x-auto hidden_scrollbar ">
                    {tabHead.map((item, idx) => (
                      <li
                        className="badge pill cursor-pointer"
                        data-active={idx === activeIndex}
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </header>
                <div className="flex h-full overflow-y-auto hidden_scrollbar flex-grow">
                  <div className="boxed_layout z-0 relative px-4">
                    {tabContent?.map((item, idx) => (
                      <div
                        className="pt-[60px] pb-[15px]"
                        data-hide={idx !== activeIndex}
                        key={idx}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 right-0 w-[16px] px-4 h-full">
                    <div className="scroll-indicator">
                      <div className="">
                        <span>KEEP SCROLLING</span>
                      </div>

                      {/* <button className="scroll-navigator round-btn">
                      <RiArrowDownCircleLine />
                    </button> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Tab>
        </div>
      </section>
    </div>
  )
}

export default App
