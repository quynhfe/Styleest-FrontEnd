import articles from "../data/articles.json";

function Articles() {
  return (
    <div className='articles max-w-7xl'>
      <p className='introdution-title'>(Articles)</p>
      <p className='new-arrivials-title-primary lg:mb-8  mb-9 mt-3 text-center md:col-span-2 md:text-start md:text-nowrap'>
        Stay inspired with our blogs
      </p>
      <p className='see-collection flex mt-10 mb-9 row-start-5 hover:scale-105 md:col-start-3 md:row-start-2  md:mt-4 md:justify-end justify-center items-center'>
        More Articles
      </p>
      <div className='list-articles'>
        {articles?.map((article, index) => {
          return (
            <div
              key={article?.id}
              className={`an-article ${
                index === articles.length - 1
                  ? ""
                  : "border-b-[0.5px] border-(--color-text-dark-muted)"
              } `}>
              <div className='article-img'>
                <img
                  src={article?.img}
                  alt={article?.title}></img>
              </div>
              <div className='grid grid-flow-row-dense gap-4 md:gap-2.5 lg:grid-flow-col-dense lg:col-span-2  items-center lg:gap-8 xl:gap-15'>
                <p className=' category-name md:text-2xl m-0 text-(--color-text-dark) lg:col-span-1 lg:leading-[38.4px] hover:underline decoration-(--color-text-dark)'>
                  {article?.title}
                </p>
                <div className='article-content'>
                  <p className='article-date'>{article?.date}</p>
                  <div className='rounded-full w-2 h-2 bg-(--color-dot)'></div>
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
