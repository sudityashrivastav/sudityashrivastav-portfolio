import MainHero from './MainHero'
import Product from './Product'
import Features from './Features'
import Stats from './Stats'
import Services from './Services'

const Home = () => {
      
    return (
            <div className='bg-bg_theme text-white' >
                <MainHero />
                <Product />
                <Stats />
                <Services />
                <Features />
            </div >
        )
    }

    export default Home