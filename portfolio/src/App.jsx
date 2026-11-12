import { 
  SiX, SiCss, SiSqlite, SiMongodb, SiPostgresql, SiMysql, SiVim, SiVsco, SiVscodium,  
} from "@icons-pack/react-simple-icons";
import { Mail, ArrowDown, ArrowUp } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { 
  FaLinkedin, FaWhatsapp, FaGithub, FaHtml5, FaJava, FaJs, FaPython, FaPhp, FaDocker, FaGit, FaWindows, FaLinux
} from 'react-icons/fa';

import { DiCode, DiGit } from "react-icons/di"
import {VscVscode} from "react-icons/vsc"
import { langcontent } from "./data"
import LangWrap from "./assets/elements/LangWrap"

import ItemSpan from "./assets/elements/ItemSpan";
import computer from "./assets/computer.jpg";

function App() {

  const [showBadge, setShowBadge] = useState(true)
  const homeref = useRef(null)

  useEffect(function () {
    const observer = new IntersectionObserver(
      function ([entry]) {
        setShowBadge(entry.isIntersecting)
      }, {
      threshold: 0.1,
    }
    )
    if (homeref.current) {
      observer.observe(homeref.current)
    }
    return function () {
      if (homeref.current) observer.unobserve(homeref.current)
    }
  }, [])


  return (
    
    <div className="flex flex-col scroll-smooth">
      
      <header className="flex  p-2 sticky top-0 justify-between h-15 items-center bg-white shadow-md z-50 sticky-header p-1 bg-linear-to-t from-sky-500 to-indigo-500 opacity-70">
      
        <a href="#home">DW</a>
      
        <div className="flex justify-center align-center gap-2">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#blogs">blogs</a>
        </div>
      
        <a href="#contacts">contact</a>
      
      </header>
      
      <section ref={homeref} className={`w-full min-h-[90vh] relative bg-no-repeat bg-cover bg-center`} id="home">
        <div className="sticky top-20 right-8 z-10 flex justify-end">
      
          <div className={`pointer-events-auto flex bg-green-500 text-white p-2 rounded-md w-60 transition-all shadow-lg transform hover:scale-105 duration-500 ease-out ${showBadge ? "opacity-75 translate-y-0 scale-100" : "opacity-0 -translate-y-5 scale-95"} `}>
            <p>Available for new opportunities</p>
          </div>
      
        </div>
      
        <div className="m-8 text-white md:mx-50 md:mt-25">
      
          <h1 className="tracking-[.16em] font-bold text-sm">HELLO I AM</h1>
          <h1 className="tracking-[-.075em] font-[800] text-beige m-[13px]">Derrick Wakhu</h1>
          <h1 className="mt-[19px] font-[600] text-beige">Professional | Problem Solver | Lifelong Learner</h1>
          <h1 className="max-w-[550px] mt-[19px] text-[1.04rem] leading-1.8">I turn ideas into thoughtful, practical solutions. I enjoy learning, solving problems and working with people to make meaningful progress.</h1>
      
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="bg-[#20231f] text-white p-[15px] hover:translate-y-[-2px]">Explore my work <ArrowDown size={16} /></a>
            <a href="mailto:georgewakhu270@gmail.com" className="border border-[#d9ddd6] border-solid px-[20px] py-[14px] hover:translate-y-[-2px]">Get in touch <ArrowUp size={16} /></a>
          </div>
      
        </div>
      
      </section>

      <section className="w-full min-h-[70vh]" id="about">
        
        <ItemSpan text="ABOUT" />
        
        <div className="p-5 flex flex-col sm:flex-row sm:items-center gap-6">
          
          <div className="w-full sm:w-1/2">
          
            <img src={computer} className="w-full sm:h-[70vh] border-none rounded-lg shadow-md object-cover" alt="computer"/>
          
          </div>
          
          <div className="p-2 w-full sm:w-1/2">
            
            <div className="text-justify sm:p-3 flex flex-col justify-center space-y-4">
              
              <div className="">
                <p>
                  I am a full stack developer and data scientist who passionate about building clean, accessible and fast web experiences. I focus on bridging the gap between design and scalable code.
                </p>
              </div>
              
              <div className="">
              
                <p>
                  I am a computer scientist who is a graduate of Kenyatta University. I have worked with various technologies like python, javascript and PHP to design user interactive and responsive applications to users.
                  My experience using this technologies have allowed me to pay closer attention to best techniques of building applications.
                </p>
              
              </div>
              
              <div className="">
              
                <p>
                  When not working in tech, I enjoy evenings reading a book, going on hike or watching a movie.
                </p>
              
              </div>
              
              <div className="">
              
                <p>
                  I’m currently open to full-time roles and freelance projects. Feel free to reach out via email or check out my work below!
                </p>
              
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="w-full" id="skills">

        <ItemSpan text="SKILLS" />

        <div className="">
          {langcontent.map((item, index) => (
            <LangWrap key={index} title={item.title} items={item.items}/>
          ))}
        </div>

      </section>

      <section className="w-full" id="projects">
        <ItemSpan text="PROJECTS" />
      </section>

      <section className="w-full" id="blogs">
        <ItemSpan text="BLOGS" />
      </section>

      <section className="w-full p-2" id="contacts">
        <ItemSpan text="CONTACTS" />
        <div className="flex gap-5 items-center justify-center w-full m-auto p-2">
          <a href="https://wa.me/+254114386583" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp color="#25D366" size={32} />
          </a>
          <a href="mailto:georgewakhu270@gmail.com">
            <Mail size={32} color="black" />
          </a>
          <a href="">
            <SiX color="#000000" size={32} />
          </a>
          <a href="">
            <FaLinkedin size={32} color="blue" />
          </a>
          <a href="https://github.com/georgewakhu270" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} color="black" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
