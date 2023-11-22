import React, { useState } from "react";
import { Link } from "react-router-dom";
import basicInfo from "../utitls/index.json";

const Header = () => {

  const [isHover, setisHover] = useState(false)
  const [isOtherHover, setisOtherHover] = useState(false)
  const handleMenuHover = (i) => {
    setisHover(i)
    setisOtherHover(true)
  }
  const { name } = basicInfo.company



  return (
    <header className={`Header font-extrabold z-50  lg:px-[120px] px-5 sm:px-10 py-2 fixed top-0 left-0 right-0 text-gray-700`}>
      <div className="contain flex items-center justify-between overflow-hidden">
        <Link to={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-white active:scale-[0.9] transition-all">
          <img alt="logo" className="rounded-full w-[30px] h-[30px]" src={"./images/logo.png"} />
          <span className="ml-3 text-xl hidden md:inline ">{name}</span>
        </Link>

        <nav onMouseLeave={() => setisOtherHover(false)} className={`hidden uppercase font-bold text-sm md:ml-auto md:mr-auto flex-wrap items-center justify-center lg:flex`}>

          <Link to="/" onMouseEnter={() => handleMenuHover(4)} className={`${isHover === 4 ? "hover:blur-none" : ""} ${isOtherHover === true ? "blur-sm" : ""} text-white hover:text-primary px-3 py-2 hover:scale-[0.9] transition-all `}>Home</Link>
          <Link to={"/projects"} onMouseEnter={() => handleMenuHover(1)} className={`${isHover === 1 ? "hover:blur-none" : ""} ${isOtherHover === true ? "blur-sm" : ""} hover:text-primary text-white px-3 py-2 hover:scale-[0.9] transition-all `}>Projects</Link>
          <Link to={"/contact"} onMouseEnter={() => handleMenuHover(2)} className={`${isHover === 2 ? "hover:blur-none" : ""} ${isOtherHover === true ? "blur-sm" : ""} hover:text-primary text-white px-3 py-2 hover:scale-[0.9] transition-all `}>Contact</Link>
          <Link to={"/about"} onMouseEnter={() => handleMenuHover(3)} className={`${isHover === 3 ? "hover:blur-none" : ""} ${isOtherHover === true ? "blur-sm" : ""} hover:text-primary px-3 text-white py-2 hover:scale-[0.9] transition-all `}>About</Link>

        </nav>

        <Link to="./resume.pdf" target="_blank" download className='p-2 text-sm px-10 rounded-full font-medium lg:block transition-all active:scale-90 bg-primary text-bg_theme hover:shadow-2xl hover:shadow-primary'>Resume</Link>
      </div>
    </header>
  );
}

export default Header