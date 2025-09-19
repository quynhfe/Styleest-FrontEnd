import "./index.css";
import Header from "./sections/header";
import Hero from "./sections/hero";
import AboutUs from "./sections/about-us";
import Banner from "./sections/banner";
import Collaboration from "./sections/collaboration";
import NewArrival from "./sections/new-arrival";
import Category from "./sections/category";
import Feedback from "./sections/feedback";
import Article from "./sections/article";
import ShopNow from "./sections/shop-now";
import Footer from "./sections/footer";
function App() {
  return (
    <div className='bg-bg-default'>
      <section className=' relative z-1 h-200 2xl:max-h-190   w-full   bg-bg-secondary text-center overflow-hidden '>
        <div className='relative h-full w-full top-0 '>
          <Header></Header>
          <Hero />
        </div>
        <picture className='absolute z-[-2] inset-0'>
          <source
            srcSet='/images/hero/hero.jpg'
            media='(min-width: 768px)'
          />
          <img
            src='/images/hero/hero-mobile.jpg'
            alt='Hero'
            className='h-full w-full  object-cover object-center md:object-[35%_-40px] md:scale-105 lg:object-left-top lg:scale-112'
          />
        </picture>
      </section>
      <section className='about-us '>
        <div id='about-us'>
          <AboutUs />
        </div>
        <div className='h-400 w-full hidden lg:block lg:top-0.75 bg-bg-secondary absolute z-0'></div>
        <div id='collaboration'>
          <Collaboration />
        </div>
      </section>
      <section
        id='product'
        className='w-full'>
        <NewArrival></NewArrival>
      </section>

      <section className='w-full'>
        <Banner />
      </section>
      <section>
        <Category />
      </section>
      <section className='w-full'>
        <Feedback />
      </section>

      <section>
        <div id='articles' />
        <Article />
      </section>

      <section className='w-full'>
        <ShopNow />
      </section>
      <section className='w-full'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
