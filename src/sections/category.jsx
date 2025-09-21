import Button from "../components/button";
import Link from "../components/btn-link";
import Title from "../components/title-default";
import TitlePrimary from "../components/title-primary";
import categories from "../data/categories.json";
const imgPosition = {
  Men: "object-[center_-100px] md:object-[center_-70px] lg:object-[center_-130px] xl:object-center",
  Women:
    "object-[center_-80px] md:object-[center_-50px] lg:object-[center_-90px] xl:object-[center_-80px]",
  Kids: "object-[center_-40px] md:object-[center_-20px] lg:object-[center_-50px] ",
  Sports:
    "object-[center_-75px] md:object-[center_-50px] lg:object-[center_-90px] xl:object-center",
};

const infoBoxPosition = {
  Men: " md:col-start-2 lg:col-start-2 xl:row-end-3  md:ml-[85px]",
  Women: "md:col-start-1 lg:col-start-1 md:mr-[85px]  ",
  Kids: "md:col-start-2 lg:col-start-2 md:ml-[85px] ",
  Sports: "md:col-start-1 lg:col-start-1 xl:row-end-3  md:mr-[85px]",
};

const categoryPosition = {
  Men: " xl:row-span-2 xl:col-start-1 ",
  Women: " xl:row-span-1 ",
  Kids: " xl:row-span-1 xl:col-start-2",
  Sports: " xl:row-span-2",
};

function Category() {
  return (
    <div className='lg:py-30 md:py-20 md:text-start text-center pt-15 pb-7 px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
      <Title className='md:mb-4 lg:mb-6 text-center'>Categories</Title>
      <TitlePrimary className={"lg:mb-15.25 mb-10 mt-3"}>
        Curated products
      </TitlePrimary>
      <div className='md:grid md:grid-rows-4 gap-6 xl:gap-6 xl:grid-flow-row-dense xl:grid-cols-3 xl:grid-rows-2 xl:w-full xl:h-[640px]'>
        {categories.map((categorie) => {
          return (
            <div
              className={`xl:overflow-hidden xl:relative lg:grid-cols-2 flex flex-col md:row-span-1 md:grid md:grid-cols-3 md:grid-flow-col-dense items-center justify-center group xl:col-span-1 xl:grid-cols-1 xl:grid-rows-2 ${
                categoryPosition[categorie?.name]
              }`}
              key={categorie?.id}>
              <div
                className={`max-md:w-96 max-md:77.5 xl:w-full xl:h-full xl:row-span-2 lg:h-[272px] md:h-[221px] md:w-full md:col-span-1 xl:overflow-hidden h-[311px] w-[384px]`}>
                <img
                  loading='lazy'
                  className={`max-md:w-96 max-md:77.5 h max-h-100 md:max-w-125 lg:max-w-200 lg:max-h-200  h-full w-full object-cover xl:transition-transform xl:duration-300 xl:group-hover:scale-110 ${
                    imgPosition[categorie?.name]
                  } `}
                  src={categorie?.img}
                  alt={categorie?.name}></img>
              </div>
              <div
                className={`hidden xl:block xl:absolute xl:z-5 xl:col-span-1 xl:row-span-1 xl:bg-[linear-gradient(180deg,rgba(17,17,17,0)_0%,rgb(17,17,17)_100%)] w-full h-full bottom-0 xl:m-0`}></div>
              <div
                className={`xl:text-white lg:p-0 xl:m-0 xl:px-6   md:col-span-2 lg:col-span-1 md:row-span-1 text-(--color-text-dark) xl:absolute xl:h-78.5 px-6 bottom-0 z-10 xl:col-span-1 xl:row-span-1 ${
                  infoBoxPosition[categorie?.name]
                } xl:m-0`}>
                <p className='md:w-86.25 xl:text-(length:--text-32) mt-6 mb-2.5 font-bold text-[20px] font-(family-name:--font-header) xl:translate-y-55 xl:group-hover:translate-y-0 col-span-1 transform transition duration-400'>
                  {categorie?.name}
                </p>
                <div className='md:w-86.25  xl:translate-y-55 xl:group-hover:block xl:group-hover:translate-y-0 transform transition duration-400'>
                  <p className='xl:text-lg mb-8 font-medium xl:leading-[28.8px] leading-[25.6px] xl:opacity-0 xl:group-hover:opacity-100 transform transition-discrete duration-100'>
                    {categorie?.description}
                  </p>
                  <div className='md:w-86.25 xl:row-start-3 xl:col-start-3 right-0 md:justify-end xl:justify-start hidden xl:flex items-stretch justify-center overflow-hidden xl:opacity-0 xl:group-hover:opacity-100 transform transition-discrete duration-100'>
                    <div className='w-fit h-11.75'>
                      <Button className={"py-[14px] text-[14px] "}>
                        Explore Now
                      </Button>
                    </div>
                  </div>
                </div>
                <Link className='block xl:hidden mb-9'>Explore Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
