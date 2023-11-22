import { Link } from "react-router-dom"

const MobileOptions = ({ isOpen, setIsOpen }) => {


    return (
        <div className={`${isOpen ? "scale-1" : "scale-0"} flex flex-col items-center justify-center left-0 top-0 h-screen w-screen fixed transition-all duration-500 bg-bg_theme lg:hidden z-50`}>
            <ul className="shrivastavG text-sm flex w-5/6 h-3/4 bg-bg_theme flex-col items-center justify-center gap-5">

                <p className="font-bold my-3 text-2xl text-white">Menu</p>
                <Link onClick={() => setIsOpen(false)} to="/" target="_blank" className="border-2 font-bold text-blue-600 hover:scale-90 transition-all hover:bg-blue-600 hover:text-white  border-blue-600 w-3/4 text-center px-8 py-3 rounded-full shadow-lg ">Home</Link>
                
                <Link onClick={() => setIsOpen(false)} to={"/projects"} className="border-2 font-bold text-purple-600 hover:scale-90 transition-all hover:bg-purple-600 hover:text-white  border-purple-600 w-3/4 text-center px-8 py-3 rounded-full shadow-lg ">Projects</Link>

                <Link onClick={() => setIsOpen(false)} to="/contact" className="border-2 shadow-lg font-bold text-red-600 hover:scale-90 transition-all hover:bg-red-600 hover:text-white  border-red-600 w-3/4 text-center px-8 py-3 rounded-full ">Contact</Link>

                <Link onClick={() => setIsOpen(false)} to="/about" className="border-2 font-bold text-green-600 hover:scale-90 transition-all hover:bg-green-600 hover:text-white  border-green-600 w-3/4 text-center px-8 py-3 rounded-full shadow-lg ">About</Link>


            </ul>
        </div>
    )
}

export default MobileOptions