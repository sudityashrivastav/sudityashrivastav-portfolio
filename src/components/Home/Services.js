import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (<div className=" px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl">
            <p className="text-center text-base font-semibold leading-7 text-primary-500">
                Tech Stack
            </p>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Technologies nevers been outdated.. Always up-to-date
            </h2>
            <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-white md:grid-cols-3">
                <li className="rounded-xl hover:shadow-2xl shadow-xl bg-secondaryBlue px-6 py-8 ">
                    <img
                        src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                        alt=""
                        className="mx-auto h-10 w-10"
                    />
                    <h3 className="my-3 font-display font-medium">Responsive Design</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#FFFFFF80]">
                        Crafting websites and applications that adapt flawlessly to any screen size. From desktops to smartphones, the user experience remains intuitive and engaging.
                    </p>
                </li>
                <li className="rounded-xl bg-secondaryBlue px-6 py-8 hover:shadow-2xl shadow-xl">
                    <img
                        src="https://www.svgrepo.com/show/530442/port-detection.svg"
                        alt=""
                        className="mx-auto h-10 w-10"
                    />
                    <h3 className="my-3 font-display font-medium">Full Stack Expertise</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#FFFFFF80]">
                        Proficient in both front-end and back-end technologies. I bring a holistic approach to development, ensuring a cohesive and efficient user experience from start to finish.
                    </p>
                </li>
                <li className="rounded-xl bg-secondaryBlue px-6 py-8 hover:shadow-2xl shadow-xl">
                    <img
                        src="https://www.svgrepo.com/show/530444/availability.svg"
                        alt=""
                        className="mx-auto h-10 w-10"
                    />
                    <h3 className="my-3 font-display font-medium">Intuitive UI/UX Designs</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#FFFFFF80]">
                        Creating visually stunning and user-friendly interfaces. Every design decision is driven by the goal of enhancing user experience and engagement.
                    </p>
                </li>
                <li className="rounded-xl bg-secondaryBlue px-6 py-8 hover:shadow-2xl shadow-xl">

                    <img
                        src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                        alt=""
                        className="mx-auto h-10 w-10"
                    />
                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                        Robust Back-end Solutions
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#FFFFFF80]">
                        Building scalable and reliable server-side architectures. I ensure that the backbone of your application can handle growth and deliver optimal performance.
                    </p>

                </li>
                <li className="rounded-xl bg-secondaryBlue px-6 py-8 hover:shadow-2xl shadow-xl">

                    <img
                        src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                        alt=""
                        className="mx-auto h-10 w-10"
                    />
                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                        Database Management
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#FFFFFF80]">
                        Expertise in database management, ensuring efficient storage, retrieval, and manipulation of data. From SQL to NoSQL, I handle your data with precision.
                    </p>

                </li>
                <li className="rounded-xl bg-secondaryBlue px-6 py-8 hover:shadow-2xl shadow-xl">

                    <img
                        src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                        alt=""
                        className="mx-auto h-10 w-10"
                    />
                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                        Security First Approach:
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#FFFFFF80]">
                        Prioritizing security at every stage of development. Implementing industry best practices to safeguard your applications and user data.
                    </p>

                </li>
            </ul>
        </div>
        <div></div>
    </div>

    )
}

export default Services