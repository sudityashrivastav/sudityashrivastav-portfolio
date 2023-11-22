import config from '../../utitls/index.json'
import { Link } from 'react-router-dom';


const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-between lg:flex-row mt-20 md:mt-44">
      <div className="sm:text-center lg:text-left flex flex-col justify-center mb-5">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="">{mainHero.title}</span>{' '}
          <span className={`block text-primary`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-sm text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="flex justify-center items-center">
            <Link to="./helllo.pdf" target="_blank" download className='p-3 text-sm px-10 rounded-full font-medium lg:block transition-all active:scale-90 bg-primary text-bg_theme hover:shadow-2xl hover:shadow-primary'>
              {mainHero.primaryAction.text}
            </Link>

          </div>
          <div className="mt-3 flex justify-center sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className='p-2 px-12 rounded-full font-medium  transition-all active:scale-90 bg-transparent border border-white hover:border-primary text-white hover:text-primary'
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
      <div className=' hidden xl:block w-[42vw]'>
        <img className=' mb-10' src={"./images/programmer3.png"} />
      </div>
    </main>
  );
};

export default MainHero;
