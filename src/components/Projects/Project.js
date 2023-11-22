const Project = () => {
  return (
    // article - start
    <div className="flex flex-col overflow-hidden rounded-lg bg-secondaryBlue">
      <a
        href="#"
        className="group relative block h-48 overflow-hidden md:h-64"
      >
        <img
          src="https://cloud.appwrite.io/v1/storage/buckets/655cfb3d83460b6fca19/files/655cfba72c1fd1d1ae14/view?project=655b99c052cf8bae0c6f&mode=admin"
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </a>
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h2 className="mb-2 text-lg font-semibold text-primary">
          <a
            href="#"
            className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
          >
            My Portfolio
          </a>
        </h2>
        <p className="mb-8 text-white ">
        Explore my portfolio and discover a collection of projects that reflect not just my technical prowess but a dedication to delivering results that exceed expectations. Each line of code is a testament to my commitment to quality and innovation.
        </p>
        <div className="mt-auto flex items-end justify-between">
          <a
            href="https://github.com/sudityashrivastav"
            target="_blank"
            download
            className="w-full p-2 text-sm px-10 rounded-full font-medium lg:block transition-all hover:scale-90 active:scale-90 bg-primary text-bg_theme text-center"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
    // article - end
  );
};

export default Project;
