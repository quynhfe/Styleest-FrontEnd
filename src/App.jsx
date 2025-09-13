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

function App() {
  return (
    <div className='app '>
      <section className='header-hero'>
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
        <div className='relative z-[1]'>
          <Header />
          <Hero />
        </div>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
      <section className='w-full'>
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
        <Articles />
      </section>
      <section className='w-full'>
        <ShopNow />
      </section>
    </div>
  );
}

export default App;
