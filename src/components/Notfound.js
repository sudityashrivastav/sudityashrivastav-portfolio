import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
     <div className="pt-20 flex items-center justify-center h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="bg-secondaryBlue text-white rounded-lg flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt="" />
            <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt="" />
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 ">OOPS! </h1>
            <p className="px-4 pb-10 text-base leading-none text-center ">No signal here! we cannot find the page you are looking for </p>
            <Link to="/" className='p-2 px-10 rounded-full font-medium  lg:block transition-all active:scale-90 bg-primary text-secondary '>Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Notfound