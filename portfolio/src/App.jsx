import { SiX } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react"
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function App() {


  return (
    <>
      <header>
        <a href="#home">DW</a>
      </header>
      <section id="home"></section>
      <section id="contacts">
        <div>
          <a href="https://wa.me/+254114386583" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp color="#25D366" size={32} />
          </a>
          <a href="mailto:georgewakhu270@gmail.com">
            <Mail size={32}/>
          </a>
          <a href="">
            <SiX color="#000000" size={32} />
          </a>
          <a href="">
            {/* <SiLinkerd size={32}/> */}
            <FaLinkedin size={32}/>
          </a>
        </div>
      </section>
    </>
  )
}

export default App
