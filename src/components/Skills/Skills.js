import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { skillsImages } from "../../utitls/skill"
import changeTitle from "../../utitls/changeTitle"

const Skills = () => {

    const currentPath = useLocation().pathname
    useEffect(() => {
        if (currentPath === "/skills") {
            changeTitle("Skils | Suditya Shrivastav")
        }
    }, [])


    return (
        <div className="pb-5">
            <div className="mx-auto px-4 md:px-8 pt-24">
                {/* text - start */}
                <div className="mb-8 md:mb-12">
                    <h2 className="mb-4 text-center text-2xl font-extrabold text-primary  md:mb-6 lg:text-3xl">
                        Skills</h2>
                    <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
                        Proficient in both front-end and back-end development, I bring a holistic approach to creating seamless digital experiences
                    </p>
                </div>
                <div className={`${currentPath !== "/skills" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6" : " grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} grid place-items-center gap-4 text-white py-5`}>
                    {
                        skillsImages.map((image, key) => (
                            <div className={`${currentPath !== "/skills" ? "w-20 h-20" : " w-3/4 py-6"} shadow-md   bg-secondaryBlue rounded-lg p-4`}> <img className={`${currentPath !== "/skills" ? " " : "w-1/2 mx-auto"} hover:rotate-45 transition-all hover:scale-110`} src={"./images/skills/" + image.fileName + ".svg"} key={key} />
                                {
                                    currentPath === "/skills" ? <div>
                                        <p className="text-center my-4 text-lg font-bold">{image.name}</p>
                                        <p className="text-sm">{image.desc}</p>
                                    </div> : null
                                }
                            </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills