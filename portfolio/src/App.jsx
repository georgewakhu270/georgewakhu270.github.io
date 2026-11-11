import { SiX } from "@icons-pack/react-simple-icons";
import { Mail, ArrowDown, ArrowUp } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'

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
      <header className="flex  m-1 sticky top-0 justify-between h-15 items-center bg-white shadow-md z-50 sticky-header p-1">
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
      <section ref={homeref} className="w-full min-h-[100vh] relative" id="home">
        <div className="sticky top-20 right-8 z-10 flex justify-end">
          <div className={`pointer-events-auto flex bg-green-500 text-white p-2 rounded-md w-60 transition-all shadow-lg transform hover:scale-105 duration-500 ease-out ${showBadge ? "opacity-75 translate-y-0 scale-100" : "opacity-0 -translate-y-5 scale-95"} `}>
            <p>Available for new opportunities</p>
          </div>
        </div>
        <div className="m-8">
          <h1 className="tracking-[.16em] font-bold text-sm">HELLO I AM</h1>
          <h1 className="tracking-[-.075em] font-[800] text-[#555d55] m-[13px]">Derrick Wakhu</h1>
          <h1 className="mt-[19px] font-[600] text-[#555d55]">Professional | Problem Solver | Lifelong Learner</h1>
          <h1 className="max-w-[550px] mt-[19px] text-[1.04rem] leading-1.8">I turn ideas into thoughtful, practical solutions. I enjoy learning, solving problems and working with people to make meaningful progress.</h1>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="bg-[#20231f] text-white p-[15px]">Explore my work <ArrowDown size={16}/></a>
            <a href="mailto:georgewakhu270@gmail.com" className="border border-[#d9ddd6] border-solid px-[20px] py-[14px]">Get in touch <ArrowUp size={16}/></a>
          </div>
          {/* <div className="mt-9 flex flex-wrap items-center gap-3">
                        <a className="button-primary" href="#work">Explore my work <ArrowDown size={16} /></a>
                        <a className="button-secondary" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={16} /></a>
                      </div> */}
        </div>
      </section>
      <section className="w-full min-h-screen" id="about">
        <h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1><h1>Hello I am Derrick Wakhu</h1>
      </section>
      <section className="w-full min-h-screen" id="skills"></section>
      <section className="w-full h-screen" id="projects"></section>
      <section className="w-full" id="blogs"></section>
      <section className="w-full p-2" id="contacts">
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
