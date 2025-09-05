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
    <div className='categories'>
      <p className='introdution-title lg:mb-6 text-center '>(Categories)</p>
      <p className='new-arrivials-title-primary lg:mb-15.25  mb-10 mt-3 text-center'>
        Curated products
      </p>
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
                   xl:absolute bottom-0 xl:z-10 xl:col-span-1 xl:row-span-1 transition-position  duration-500 ease-in-out   
                   ${infoBoxPosition[categorie?.name]} xl:m-0`}>
                <p className='category-name xl:pb-7 xl:group-hover:pb-0'>
                  {categorie?.name}
                </p>
                <p className='category-des block xl:hidden  xl:group-hover:block'>
                  {categorie?.description}
                </p>
                <p className='see-collection block xl:hidden mb-9'>
                  Explore Now
                </p>
                <a className='box-btn-explore hidden xl:group-hover:block w-fit'>
                  <button className='btn-login text-sm h-[47px] w-[152px] py-4 '>
                    Explore Now
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
