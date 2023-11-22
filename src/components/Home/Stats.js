import React from 'react'

const Stats = () => {
    return (
        <div className="bg- rounded-md py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                {/* text - start */}
                <div className="mb-8 md:mb-12">
                    <h2 className="mb-4 text-center text-2xl font-extrabold text-primary  md:mb-6 lg:text-3xl">
                     My Service Statistics
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
                        Get to know much process has been completed by me this year.
                    </p>
                </div>
                {/* text - end */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
                    {/* stat - start */}
                    <div className="flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-xl cursor-pointer bg-secondaryBlue shadow-bg_theme p-4 lg:p-8">
                        <div className="text-xl font-bold text-primary sm:text-2xl md:text-3xl">
                            10+
                        </div>
                        <div className="text-sm font-semibold sm:text-base text-white">Projects</div>
                    </div>
                    {/* stat - end */}
                    {/* stat - start */}
                    <div className="flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-xl cursor-pointer bg-secondaryBlue shadow-bg_theme p-4 lg:p-8">
                        <div className="text-xl font-bold text-primary sm:text-2xl md:text-3xl">
                            15+
                        </div>
                        <div className="text-sm font-semibold sm:text-base text-white">Languages</div>
                    </div>
                    {/* stat - end */}
                    {/* stat - start */}
                    <div className="flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-xl cursor-pointer bg-secondaryBlue shadow-bg_theme p-4 lg:p-8">
                        <div className="text-xl font-bold text-primary sm:text-2xl md:text-3xl">
                            20+
                        </div>
                        <div className="text-sm font-semibold sm:text-base text-white">Costumers</div>
                    </div>
                    {/* stat - end */}
                    {/* stat - start */}
                    <div className="flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-xl cursor-pointer bg-secondaryBlue shadow-bg_theme p-4 lg:p-8">
                        <div className="text-xl font-bold text-primary sm:text-2xl md:text-3xl">
                            A Couple
                        </div>
                        <div className="text-sm font-semibold sm:text-base text-white">Free Time</div>
                    </div>
                    {/* stat - end */}
            
                    
                </div>
            </div>
        </div>

    )
}

export default Stats