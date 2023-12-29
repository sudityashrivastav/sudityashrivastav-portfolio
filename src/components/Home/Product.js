import config from '../../utitls/index.json';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">

      <div className="mb-8 md:mb-12">
        <h2 className="mb-4 text-center text-2xl font-extrabold text-primary  md:mb-6 lg:text-3xl">
        About
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
        I am a dedicated and results-driven software developer with a proven track record of excellence in frontend development. I have a knack for crafting responsive and user-friendly web interfaces using cutting-edge technologies like NextJS, ReactJS, TypeScript etc. My experience ranges from leading teams and architecting projects to tackling complex challenges, such as boosting code coverage and optimizing system performance.
        </p>
      </div>

      <div className={`container max-w-5xl mx-auto m-8`}>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`} data-aos="left">
          <div className={`w-full sm:w-[44%] p-6`}>
            <img
              src={"./images/programmer2.png"}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-primary font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-white mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap`} data-aos="fade-right">
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-white`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-[44%] p-6`}>
            <img
              src={"./images/programmer1.png"}
              alt={firstItem?.title}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Product;
