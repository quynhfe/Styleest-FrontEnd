import React, { Suspense, lazy } from "react";
import "./index.css";
import Header from "./sections/header.jsx";
import Hero from "./sections/hero.jsx";
const AboutUs = lazy(() => import("./sections/about-us"));
const Banner = lazy(() => import("./sections/banner"));
const Collaboration = lazy(() => import("./sections/collaboration"));
const NewArrival = lazy(() => import("./sections/new-arrival"));
const Category = lazy(() => import("./sections/category"));
const Feedback = lazy(() => import("./sections/feedback"));
const Article = lazy(() => import("./sections/article"));
const ShopNow = lazy(() => import("./sections/shop-now"));
const Footer = lazy(() => import("./sections/footer"));
const CopyRight = lazy(() => import("./sections/copy-right"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='bg-bg-default'>
        <section className=' relative z-1 h-200 2xl:max-h-190   w-full   bg-bg-secondary text-center overflow-hidden '>
          <div className='relative h-full w-full top-0 '>
            <Header></Header>
            <Hero />
          </div>
          <picture className='absolute z-[-2] inset-0'>
            <source
              srcSet='/images/hero/hero.avif'
              media='(min-width: 768px)'
            />
            <img
              src='/images/hero/hero-mobile.avif'
              alt='Hero'
              loading='lazy'
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
          <CopyRight />
        </section>
      </div>
    </Suspense>
  );
}

export default App;
