import { SiX } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react"
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'

function App() {


  return (
    <div className="flex flex-col">
      <header className="flex sm:flex-col m-1">
        <a href="#home">DW</a>
        <div>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#blogs">blogs</a>
        </div>
        <a href="#contacts">contact</a>
      </header>
      <section id="home"></section>
      <section id="about"></section>
      <section id="skills"></section>
      <section id="projects"></section>
      <section id="blogs"></section>
      <section id="contacts">
        <div className="flex gap-5 justify-items-center justify-center">
          <a href="https://wa.me/+254114386583" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp color="#25D366" size={32} />
          </a>
          <a href="mailto:georgewakhu270@gmail.com">
            <Mail size={32} color="black"/>
          </a>
          <a href="">
            <SiX color="#000000" size={32} />
          </a>
          <a href="">
            <FaLinkedin size={32} color="blue"/>
          </a>
          <a href="https://github.com/georgewakhu270" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} color="black"/>
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
