import Link from "../components/btn-link";
import Title from "../components/title-default";
import TitlePrimary from "../components/title-primary";
import articles from "../data/articles.json";

function Articles() {
  return (
    <div className='grid grid-flow-row-dense md:grid-flow-col-dense lg:py-30 md:py-20 md:text-start text-center pt-15 pb-7 px-(--mx-sm) md:px-(--mx-md) xl:px-(--mx-xl) max-w-screen'>
      <Title className='md:text-start'>Articles</Title>
      {/* <p className=' font-(family-name:--font-header) text-(--color-text-dark) gap-4 font-bold text-2xl md:text-(length:--text-32)  lg:text-5xl    text-center '>
        Stay inspired with our blogs
      </p> */}
      <TitlePrimary
        className={
          "mt-5.5 md:mt-0 md:mb-8 mb-9 md:col-span-2 md:text-start md:text-nowrap"
        }>
        Stay inspired with our blogs
      </TitlePrimary>
      <div className='flex h-fit row-start-5 md:col-start-3 md:row-start-2 md:justify-end justify-center md:items-start items-center'>
        <Link className='h-fit  mt-10 mb-9 md:mb-0 transform hover:tracking-wider perspective-distant origin-left text-nowrap   md:mt-[11px]  transition-[letter-spacing] duration-300 ease-in-out'>
          More Articles
        </Link>
      </div>
      <div className='flex flex-col gap-5 md:row-start-3 md:col-span-3'>
        {articles?.map((article, index) => {
          return (
            <div
              key={article?.id}
              className={`md:py-11 lg:gap-x-8 text-start grid grid-flow-row-dense md:grid-cols-2 gap-4 pb-5 ${
                index === articles.length - 1
                  ? ""
                  : "border-b-1 border-(--color-text-dark-muted)"
              }`}>
              <div className='lg:transition-transform lg:duration-300 lg:ease-in-out lg:hover:scale-110 md:w-70.5 object-fill md:object-cover object-center overflow-hidden h-35 w-full md:flex md:justify-end md:col-start-2 lg:col-start-3'>
                <img
                  loading='lazy'
                  src={article?.img}
                  alt={article?.title}></img>
              </div>
              <div className='grid grid-flow-row-dense gap-4 md:gap-2.5 lg:grid-flow-col-dense lg:col-span-2 items-center lg:gap-8 xl:gap-15'>
                <p className='xl:text-2xl mt-6 mb-2.5 font-bold text-[20px] font-(family-name:--font-header) md:text-2xl m-0 text-(--color-text-dark) lg:col-span-1 lg:leading-[38.4px] hover:underline decoration-(--color-text-dark)'>
                  {article?.title}
                </p>
                <div className='xl:pr-12 flex items-center gap-5.25 text-(--color-text-dark-primary) font-medium'>
                  <p className='article-date'>{article?.date}</p>
                  <div className='rounded-full w-2 h-2 md:w-2.5 md:h-2.5 bg-dot'></div>
                  <p className='article-time'>{article?.time} min read</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Articles;
