import React, { useState, useEffect, useRef, useMemo } from "react";
import feedbacks from "../data/feedback.json";
import TitlePrimary from "../components/title-primary";
import Motion from "../components/motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

function Feedback() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const totalFeedbacks = feedbacks.length;

  const DEFAULT_DURATION = 400;
  const MIN_DURATION = 200;
  const AUTO_PLAY_DELAY = 3000;

  const [currentTransitionDuration, setCurrentTransitionDuration] =
    useState(DEFAULT_DURATION);
  const lastClickTimeRef = useRef(null);

  const extendedFeedbacks = useMemo(() => {
    if (totalFeedbacks === 0) return [];
    return [feedbacks[totalFeedbacks - 1], ...feedbacks, feedbacks[0]];
  }, [totalFeedbacks]);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const intervalRef = useRef(null);

  const clearAutoPlayTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetAutoPlayTimer = () => {
    clearAutoPlayTimer();
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= extendedFeedbacks.length - 1) return prev;
          return prev + 1;
        });
      }, AUTO_PLAY_DELAY);
    }
  };

  const changeSlide = (getNewIndex) => {
    const now = Date.now();
    const timeSinceLastClick = lastClickTimeRef.current
      ? now - lastClickTimeRef.current
      : Infinity;
    lastClickTimeRef.current = now;

    const newDuration = Math.max(
      MIN_DURATION,
      Math.min(DEFAULT_DURATION, timeSinceLastClick),
    );
    setCurrentTransitionDuration(newDuration);

    setCurrentIndex(getNewIndex);
    resetAutoPlayTimer();
  };

  const goToNext = () =>
    changeSlide((prev) => {
      if (prev >= extendedFeedbacks.length - 1) return prev;
      return prev + 1;
    });

  const goToPrev = () =>
    changeSlide((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });

  const goToSlide = (i) => changeSlide(i + 1);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalFeedbacks + 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      setTransitionEnabled(false);
      setCurrentIndex(totalFeedbacks);
    }
  };

  useEffect(() => {
    resetAutoPlayTimer();
    return clearAutoPlayTimer;
  }, [isAutoPlaying]);

  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => setTransitionEnabled(true), 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, transitionEnabled]);

  const activeDotIndex = useMemo(() => {
    if (totalFeedbacks === 0) return -1;
    if (currentIndex === 0) return totalFeedbacks - 1;
    if (currentIndex === totalFeedbacks + 1) return 0;
    return currentIndex - 1;
  }, [currentIndex, totalFeedbacks]);

  if (totalFeedbacks === 0) {
    return null;
  }

  return (
    <div className='w-full xl:py-25 py-15 bg-bg-secondary px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl) relative'>
      <div className='max-w-300 mx-auto'>
        <div className='md:flex md:justify-between w-full'>
          <Motion
            key={isMobile ? "top" : "left"}
            variant={isMobile ? "top" : "left"}
            delay={0.3}>
            <TitlePrimary>What our customer says</TitlePrimary>
          </Motion>
          <div className='md:flex hidden md:gap-6'>
            <div>
              <img
                decoding='async'
                loading='lazy'
                onClick={goToPrev}
                className='w-10 h-10 xl:w-[55px] xl:h-[55px] mx-auto cursor-pointer active:scale-90 scale-100 transform transition duration-300'
                src='/images/feedback/mui-ten-trai.svg'
                alt='Mũi tên trái'
              />
            </div>
            <div>
              <img
                decoding='async'
                loading='lazy'
                onClick={goToNext}
                className='w-10 h-10 xl:w-[55px] xl:h-[55px] mx-auto cursor-pointer  active:scale-90 scale-100 transform transition duration-300'
                src='/images/feedback/mui-ten-phai.svg'
                alt='Mũi tên phải'
              />
            </div>
          </div>
        </div>

        <div
          className='overflow-hidden relative z-20 w-full'
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}>
          <div
            className='flex'
            style={{
              width: `${extendedFeedbacks.length * 100}%`,
              transform: `translateX(-${
                (currentIndex * 100) / extendedFeedbacks.length
              }%)`,
              transition: transitionEnabled
                ? `transform ${currentTransitionDuration}ms ease-in-out`
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}>
            {extendedFeedbacks.map((fb, idx) => (
              <div
                key={idx}
                className='flex-shrink-0 md:p-0 p-2 w-full'
                style={{ width: `${100 / extendedFeedbacks.length}%` }}>
                <div className='mt-13.75 xl:mt-18 xl:gap-x-31.75 md:gap-x-21.25 md:text-start text-center grid grid-cols-2 grid-flow-row-dense h-fit xl:grid-flow-col-dense xl:grid-cols-none'>
                  <div className='relative col-span-full md:flex md:flex-col md:gap-6 md:justify-center md:py-12 xl:py-7.75 md:col-span-1 text-text-dark-primary md:col-start-2'>
                    <div className='absolute left-1/3 md:left-[-33px] md:top-2 lg:top-10 xl:top-[-30px] top-[-40px] w-fit z-[-1] pointer-events-none'>
                      <img
                        decoding='async'
                        loading='lazy'
                        className='w-40 h-25 xl:w-50 xl:h-40 mx-auto'
                        src='/images/feedback/dau-ngoac-kep.svg'
                        alt='Dấu ngoặc kép'
                      />
                    </div>
                    <p className='xl:text-(length:--text-32) xl:leading-[51.2px] md:text-2xl md:m-0 mb-4 md:leading-[38.4px] leading-[32px] text-[20px] font-bold'>
                      {fb?.product?.title}
                    </p>
                    <p className='xl:text-[20px] xl:leading-[32px] mb-8 md:m-0 md:leading-[25.6px] font-medium xl:mb-4'>
                      "{fb?.product?.description}"
                    </p>
                    <div className=' gap-3  col-span-1 hidden md:flex'>
                      <div className='cus-avt'>
                        <img
                          decoding='async'
                          loading='lazy'
                          className='w-12 h-12 xl:w-14 xl:h-14 rounded-full overflow-hidden'
                          src={fb?.avatar}
                          alt={fb?.name}
                        />
                      </div>

                      <div className='cus-info'>
                        <p className='cus-name'>{fb?.name}</p>
                        <p className='cus-job'>{fb?.job}</p>
                      </div>
                    </div>
                  </div>

                  <div className='w-full md:h-[436px] xl:w-121.5 xl:h-103 flex justify-end md:justify-start col-start-2 col-span-1 md:col-start-1 '>
                    <img
                      decoding='async'
                      loading='lazy'
                      className='max-md:w-12 max-md:h-12 md:hidden block xl:block w-full h-full object-cover'
                      src={fb?.product?.img}
                      alt={fb?.product?.title}
                    />

                    <img
                      decoding='async'
                      loading='lazy'
                      className='hidden md:block xl:hidden w-full h-full object-cover'
                      src={fb?.product?.imgLg || fb?.product?.img}
                      alt={fb?.product?.title}
                    />
                  </div>

                  <div className='flex gap-3 col-span-1 md:col-start-2 md:hidden'>
                    <div className='cus-avt'>
                      <img
                        decoding='async'
                        loading='lazy'
                        className='w-12 h-12 rounded-full overflow-hidden'
                        src={fb?.avatar}
                        alt={fb?.name}
                      />
                    </div>

                    <div className='cus-info'>
                      <p className='cus-name'>{fb?.name}</p>
                      <p className='cus-job'>{fb?.job}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='text-center mt-8 flex justify-center gap-2 relative z-20'>
          {feedbacks.map((e, i) => {
            return (
              <button
                key={"circle" + i}
                onClick={() => goToSlide(i)}
                className={`h-2.5 w-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
                  activeDotIndex === i ? "bg-text-dark" : "bg-text-grey"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
