import { useState } from 'react'
import { AiFillHome, AiOutlineHome } from "react-icons/ai"
import { BiSolidUserCircle, BiUserCircle } from 'react-icons/bi'
import { RiMenu4Line } from "react-icons/ri"
import { useNavigate } from 'react-router-dom'
import MobileOptions from './MobileOptions'


const MobileMenu = () => {
    const navigate = useNavigate();
    const [activeIcon, setActiveIcon] = useState("icon1");
    const [isOpen, setIsOpen] = useState(false)

    const handleIconClick = (icon) => {
        setActiveIcon(icon)
        setIsOpen(false)
        if (icon === "icon1") {

            navigate("/")
        }
        else if (icon === "icon3") {
            navigate("/profile")
        }
        if (icon === "icon2") {
            setIsOpen(!isOpen)
        }

    };

    return (
        <>
            <div className='fixed bottom-0 w-screen z-[51] left-0 right-0 lg:hidden grid place-items-center'>
                <ul className="menu w-10/12 flex items-center justify-center max-w-[350px] min-w-[200px] rounded-full bg-secondaryBlue shadow-sm shadow-secondaryBlue menu-horizontal text-white gap-5">
                    <li>
                        <div onClick={() => handleIconClick('icon1')} className={` ${activeIcon === "icon1" ? "bg-white text-bg_theme" : ""} cursor-pointer rounded-full hover:bg-white  hover:text-bg_theme`}>
                            <AiFillHome className={`icon ${activeIcon === 'icon1' ? 'block' : 'hidden'} text-xl`} />
                            <AiOutlineHome className={`icon ${activeIcon === 'icon1' ? 'hidden' : ''} text-xl`} />
                        </div>
                    </li>
                    <li>
                        <div onClick={() => handleIconClick('icon2')} className={` ${activeIcon === "icon2" ? "bg-white text-bg_theme" : ""} cursor-pointer rounded-full hover:bg-white  hover:text-bg_theme`}>
                            <RiMenu4Line className={` ${activeIcon === 'icon2' ? 'block' : 'hidden'} text-xl`} />
                            <RiMenu4Line className={`icon ${activeIcon === 'icon2' ? 'hidden' : ''} text-xl`} />
                        </div>
                    </li>

                    <li>
                        <div onClick={() => handleIconClick('icon3')} className={` ${activeIcon === "icon3" ? "bg-white text-bg_theme" : ""} cursor-pointer rounded-full hover:bg-white  hover:text-bg_theme`}>
                            <BiSolidUserCircle className={`icon ${activeIcon === 'icon3' ? 'block' : 'hidden'} text-xl`} />
                            <BiUserCircle className={` ${activeIcon === 'icon3' ? 'hidden' : ''} text-xl`} />
                        </div>
                    </li>
                </ul>

            </div>
            <MobileOptions isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default MobileMenu