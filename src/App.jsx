import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import NewArrival from "./components/NewArrival";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Feedback from "./components/Feedback";
import Articles from "./components/Articles";
import ShopNow from "./components/ShopNow";
import Footer from "./components/Footer";
import Collaboration from "./components/Collaboration";

function App() {
  return (
    <div className='app '>
      <section className='header-hero '>
        <picture className='img-header-hero'>
          <source
            srcSet='/images/hero/hero.jpg'
            media='(min-width: 768px)'
          />
          <img
            src='/images/hero/hero-mobile.jpg'
            alt='Hero'
            className='h-full w-full object-cover'
          />
        </picture>
        <div className='relative z-[1]  h-full w-full '>
          <Header></Header>
          <Hero />
        </div>
      </section>

      <section className='about-us '>
        <div id='about-us'>
          <AboutUs />
        </div>
        <div className='h-400 w-full hidden lg:block lg:top-0.75 bg-(--color-bg-secondary) absolute z-0'></div>
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
