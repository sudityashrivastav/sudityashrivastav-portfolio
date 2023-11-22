import { useState, useEffect } from 'react'
import Project from './Project'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'

const Projects = () => {
  const [projectList, setprojectList] = useState("")
  const [isLoading, setIsLoading] = useState(true)

async function fetchData() {

    try {
      setIsLoading(true)
      const data = await axios.get("https://sudityashrivastav-backend.vercel.app/projects")
      setprojectList(data.data)
    }

    catch (e) {
      console.log(e);
      setIsLoading(false)
    }
  }


  useEffect(() => {
    // fetchData()

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])


  return (
    <div className=" py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl py-10 px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-primary md:mb-6 lg:text-3xl">
            Projects
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
            Explore my portfolio and discover a collection of projects that reflect not just my technical prowess but a dedication to delivering results that exceed expectations. Each line of code is a testament to my commitment to quality and innovation.
          </p>
        </div>
        {/* text - end */}
        {
          isLoading === true ? <div className='grid place-items-center'><BallTriangle
          height={40}
          width={40}
          radius={5}
          color="#fff"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        /></div> : <div className="grid gap-5 sm:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-8">
            <Project />
          </div>
        }

      </div>
    </div>

  )
}

export default Projects