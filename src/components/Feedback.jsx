import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useLayoutEffect,
} from "react";
import feedbacks from "../data/feedback.json";

function Feedback() {
  const total = feedbacks.length;
  const extendedFeedbacks = useMemo(() => {
    if (total <= 1) return [...feedbacks];
    const firstClone = { ...feedbacks[0] };
    const lastClone = { ...feedbacks[total - 1] };
    return [lastClone, ...feedbacks, firstClone];
  }, [total]);

  const extLen = extendedFeedbacks.length;
  const [currentIndex, setCurrentIndex] = useState(() =>
    extLen > total ? 1 : 0,
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  const delay = 3000;
  const mountedRef = useRef(false);

  const nextSlide = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex + 1) % extendedFeedbacks.length,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex) =>
        (currentIndex - 1 + total.length) % extendedFeedbacks.length,
    );
  };

  useLayoutEffect(() => {
    mountedRef.current = true;
    requestAnimationFrame(() => setIsTransitioning(true));
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (extLen === 0) return;
    if (currentIndex < 0 || currentIndex >= extLen) {
      const norm = ((currentIndex % extLen) + extLen) % extLen;
      setCurrentIndex(norm);
    }
  }, [currentIndex, extLen]);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    clearTimer();
    if (total <= 1) return;
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((p) => p + 1);
    }, delay);
    return clearTimer;
  }, [currentIndex, total]);

  const handleTransitionEnd = () => {
    if (total <= 1) return;

    if (currentIndex === extLen - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsTransitioning(true)),
      );
      return;
    }

    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extLen - 2);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsTransitioning(true)),
      );
    }
  };

  const handleDotClick = (dotIndex) => {
    clearTimer();
    const target = extLen > total ? dotIndex + 1 : dotIndex;
    setCurrentIndex(target);
  };

  const activeDotIndex = useMemo(() => {
    if (total === 0) return -1;
    if (extLen === total) {
      return currentIndex;
    }
    return (((currentIndex - 1) % total) + total) % total;
  }, [currentIndex, total, extLen]);

  return (
    <div className='feedback relative '>
      <div className='max-w-7xl mx-auto'>
        <div className='md:flex md:justify-between w-full'>
          <p className='new-arrivials-title-primary  mt-0 text-center not-last-of-type:'>
            What our customer says
          </p>
          <div className='md:flex hidden md:gap-6 '>
            <div>
              <img
                onClick={prevSlide}
                className='w-10 h-10 xl:w-[55px] xl:h-[55px] mx-auto'
                src='/images/feedback/mui-ten-trai.svg'
                alt='Mũi tên trái'
              />
            </div>
            <div>
              <img
                onClick={nextSlide}
                className='w-10 h-10 xl:w-[55px] xl:h-[55px] mx-auto'
                src='/images/feedback/mui-ten-phai.svg'
                alt='Mũi tên phải'
              />
            </div>
          </div>
        </div>

        <div
          className='overflow-hidden relative z-20 w-full'
          onMouseEnter={clearTimer}
          onMouseLeave={() => {
            if (total > 1) {
              clearTimer();
              timeoutRef.current = setTimeout(
                () => setCurrentIndex((p) => p + 1),
                delay,
              );
            }
          }}>
          <div className='absolute left-0 md:left-21.25 md:top-20 xl:top-10 top-5 w-full z-[-1] pointer-events-none'>
            <img
              className='w-40 h-25 xl:w-50 xl:h-40 mx-auto'
              src='/images/feedback/dau-ngoac-kep.svg'
              alt='Dấu ngoặc kép'
            />
          </div>
          <div
            className='flex'
            style={{
              width: `${extLen * 100}%`,
              transform: `translateX(-${currentIndex * (100 / extLen)}%)`,
              transition: !isTransitioning
                ? "none"
                : "transform 700ms ease-in-out",
            }}
            onTransitionEnd={handleTransitionEnd}>
            {extendedFeedbacks.map((fb, idx) => (
              <div
                key={idx}
                className='flex-shrink-0 md:p-0 p-2'
                style={{ width: `${100 / extLen}%` }}>
                <div className='a-feedback'>
                  <div className='feedback-content'>
                    <p className='feedback-content-title '>
                      {fb?.product?.title}
                    </p>
                    <p className='feedback-content-des'>
                      “{fb?.product?.description}“
                    </p>
                    <div className='feedback-customer hidden md:flex'>
                      <div className='cus-avt'>
                        <img
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

                  <div className='feedback-img'>
                    <div className='hidden md:block xl:hidden'>
                      {fb?.product?.imgLg ? (
                        <img
                          src={fb?.product?.imgLg}
                          alt={fb?.product?.title}
                        />
                      ) : (
                        <img
                          src={fb?.product?.img}
                          alt={fb?.product?.title}
                        />
                      )}
                    </div>

                    <img
                      className='md:hidden block xl:block'
                      src={fb?.product?.img}
                      alt={fb?.product?.title}
                    />
                  </div>

                  <div className='feedback-customer md:hidden flex'>
                    <div className='cus-avt'>
                      <img
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
          {Array.from({ length: total }).map((_, i) => {
            const active = activeDotIndex === i;
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => handleDotClick(i)}
                className={`h-2.5 w-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
                  active
                    ? "bg-[var(--color-text-dark)]"
                    : "bg-[var(--color-text-grey)]"
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
