import { FaPhoneSquareAlt } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const ContactButton = () => {
  return (
    <div className='w-[40px] hidden md:flex fixed top-1/2 md:top-1/3 py-4 rounded-md left-0 justify-center items-center flex-col gap-4 text-white z-50'>

      <a className="text-xl pl-2 hover:bg-primary rounded-r-full py-1 w-full h-full duration-200" href="https://github.com/sudityashrivastav" target="_blank">
        <IoLogoGithub className=""/>
      </a>
      <a className="text-xl pl-2 hover:bg-primary rounded-r-full py-1 w-full h-full duration-200"  target="_blank" href="tel: +91 7408157036">
        <FaPhoneSquareAlt />
      </a>
      <a className="text-xl pl-2 hover:bg-primary rounded-r-full py-1 w-full h-full duration-200"  target="_blank" href="https://x.com/IAmSuditya">
        <RiTwitterXFill />
      </a>
      <a className="text-xl pl-2 hover:bg-primary rounded-r-full py-1 w-full h-full duration-200"  target="_blank" href="https://www.linkedin.com/in/suditya-kumar-b15163245">
        <FaLinkedin />
      </a>
    </div>
  )
}

export default ContactButton