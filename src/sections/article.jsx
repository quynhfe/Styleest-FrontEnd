import Link from "../components/btn-link";
import Motion from "../components/motion";
import Title from "../components/title-default";
import TitlePrimary from "../components/title-primary";
import articles from "../data/articles.json";

function Articles() {
  return (
    <div className=' px-(--mx-sm) md:px-(--mx-md) xl:px-(--mx-xl) '>
      <div className='max-w-300 mx-auto grid grid-flow-row-dense md:grid-flow-col-dense lg:py-30  md:py-20 md:text-start text-center pt-16 pb-15 '>
        <Motion
          variant='scale'
          delay={0.3}>
          <Title className='md:text-start md:mb-4'>Articles</Title>
        </Motion>
        <Motion
          variant='scale'
          delay={0.3}>
          <TitlePrimary
            className={
              "mt-5.5 md:mt-0  mb-8 xl:mb-3 md:col-span-2 md:text-start md:text-nowrap"
            }>
            Stay inspired with our blogs
          </TitlePrimary>
        </Motion>
        <div className='flex h-fit row-start-5 md:col-start-3 md:row-start-2 md:justify-end justify-center md:items-start items-center'>
          <Link className='h-fit  mt-15  transform hover:tracking-wider perspective-distant origin-left text-nowrap   md:mt-2.75 xl:mt-5.5 transition-[letter-spacing] duration-300 ease-in-out'>
            More Articles
          </Link>
        </div>
        <div className=' flex flex-col md:gap-0 md:row-start-3 md:col-span-3'>
          {articles?.map((article, index) => {
            return (
              <>
                <Motion
                  key={article?.id}
                  variant='scale'
                  delay={0.3}
                  className='group md:py-6 lg:gap-x-8 text-start grid grid-flow-row-dense md:grid-cols-2 gap-y-4 '>
                  <div className='object-fill md:object-cover object-center overflow-hidden h-35 w-full md:flex md:justify-end md:col-start-2 lg:col-start-3'>
                    <img
                      className='md:w-70.5 lg:transition-transform lg:duration-300 lg:ease-in-out lg:group-hover:scale-115'
                      decoding='async'
                      loading='lazy'
                      src={article?.img}
                      alt={article?.title}></img>
                  </div>
                  <div className='grid grid-flow-row-dense gap-4 md:gap-4 lg:grid-flow-col-dense lg:col-span-2 items-center lg:gap-8 xl:gap-15'>
                    <p className='xl:text-2xl  font-bold text-[20px] font-(family-name:--font-header) md:text-2xl  text-text-dark lg:col-span-1 lg:leading-[38.4px] md:hover:underline decoration-text-dark'>
                      {article?.title}
                    </p>
                    <div className='xl:pr-12 tracking-(--t-16) flex items-center gap-5.25 text-text-dark-primary font-medium'>
                      <p className='article-date'>{article?.date}</p>
                      <div className='rounded-full w-2 h-2 md:w-2.5 md:h-2.5 bg-dot'></div>
                      <p className='article-time'>{article?.time} min read</p>
                    </div>
                  </div>
                </Motion>
                <div
                  className={`my-5 w-full md:col-span-2 ${
                    index === articles.length - 1
                      ? "hidden"
                      : "block border-b-1 border-text-dark-muted"
                  }`}></div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
