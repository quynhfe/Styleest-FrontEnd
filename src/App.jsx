import "./index.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import NewArrival from "./sections/NewArrival";
import Banner from "./sections/Banner";
import Categories from "./sections/Categories";
import Feedback from "./sections/Feedback";
import Articles from "./sections/Articles";
import ShopNow from "./sections/ShopNow";
import Footer from "./sections/Footer";
import Collaboration from "./sections/Collaboration";

function App() {
  return (
    <div className='app '>
      <section className='header-hero '>
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
        <Categories />
      </section>
      <section className='w-full'>
        <Feedback />
      </section>

      <section>
        <div id='articles' />
        <Articles />
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
