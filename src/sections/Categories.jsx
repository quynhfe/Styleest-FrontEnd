import Button from "../components/Button";
import Link from "../components/Link";
import Title from "../components/Title";
import TitlePrimary from "../components/TitlePrimary";
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
  Men: " md:col-start-2 xl:row-end-3  md:ml-[85px]",
  Women: "md:col-start-1 md:mr-[85px]  ",
  Kids: "md:col-start-2  md:ml-[85px] ",
  Sports: "md:col-start-1 xl:row-end-3  md:mr-[85px]",
};

const categoryPosition = {
  Men: " xl:row-span-2 xl:col-start-1 ",
  Women: " xl:row-span-1 ",
  Kids: " xl:row-span-1 xl:col-start-2",
  Sports: " xl:row-span-2",
};

function Categories() {
  return (
    <div className='categories  '>
      <Title className='md:mb-4 lg:mb-6 text-center'>Categories</Title>
      {/* <p className='new-arrivials-title-primary lg:mb-15.25  mb-10 mt-3 text-center'>
        Curated products
      </p> */}
      <TitlePrimary className={"lg:mb-15.25  mb-10 mt-3"}>
        Curated products
      </TitlePrimary>
      <div className='list-category xl:gap-6  xl:grid-flow-row-dense xl:grid-cols-3 xl:grid-rows-2 xl:w-full xl:h-[640px]'>
        {categories.map((categorie) => {
          return (
            <div
              className={`category group xl:col-span-1 xl:grid-cols-1 xl:grid-rows-2  ${
                categoryPosition[categorie?.name]
              }`}
              key={categorie?.id}>
              <div className={`category-img-box `}>
                <img
                  className={`category-img  ${imgPosition[categorie?.name]} `}
                  src={categorie?.img}
                  alt={categorie?.name}></img>
              </div>
              <div
                className={` hidden xl:block xl:absolute xl:z-5 xl:col-span-1 xl:row-span-1 xl:bg-[linear-gradient(180deg,rgba(17,17,17,0)_0%,rgb(17,17,17)_100%)] w-full h-full bottom-0  xl:m-0`}></div>
              <div
                className={`category-info 
                   xl:absolute xl:h-78.5  bottom-0 z-10 xl:col-span-1 xl:row-span-1 
                   ${infoBoxPosition[categorie?.name]} xl:m-0`}>
                <p className='category-name  xl:translate-y-55   xl:group-hover:translate-y-0 col-span-1  transform transition duration-400  '>
                  {categorie?.name}
                </p>
                <div className=' xl:translate-y-55 xl:group-hover:block xl:group-hover:translate-y-0 transform transition duration-400'>
                  <p className='category-des xl:opacity-0 xl:group-hover:opacity-100 transform transition-discrete duration-100'>
                    {categorie?.description}
                  </p>
                  <div className='xl:row-start-3 xl:col-start-3 right-0 md:justify-end hidden xl:flex items-center justify-center w-full  overflow-hidden xl:opacity-0 xl:group-hover:opacity-100 transform transition-discrete duration-100 '>
                    <Button
                      bStyle='py-[14px] text-[14px]'
                      aStyle='h-[47px]'>
                      Explore Now
                    </Button>
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

export default Categories;
