import { useState, useEffect, useRef, useMemo } from "react";
import feedbacks from "../data/feedback.json";

function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);
  const delay = 3000;

  const extendedFeedbacks = useMemo(() => {
    if (feedbacks.length === 0) {
      return [];
    }
    const firstClone = { ...feedbacks[0] };
    const lastClone = { ...feedbacks[feedbacks.length - 1] };
    return [lastClone, ...feedbacks, firstClone];
  }, []);

  if (extendedFeedbacks.length === 0) {
    return null;
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, delay);

    return resetTimeout;
  }, [currentIndex, delay]);

  const handleTransitionEnd = () => {
    if (currentIndex === extendedFeedbacks.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 0);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedFeedbacks.length - 2);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 0);
    }
  };

  const handleDotClick = (index) => {
    resetTimeout();
    setCurrentIndex(index + 1);

    setTimeout(() => {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    }, 100);
  };

  const getActiveDotIndex = () => {
    if (currentIndex === 0) return feedbacks.length - 1;
    if (currentIndex === extendedFeedbacks.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <div className='feedback'>
      <p className='new-arrivials-title-primary mt-0 text-center'>
        What our customer says
      </p>
      {/* <span className='w-[89px] h-[67px]'>
        <svg
          className='filcurrent w-full h-full '
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.79159 66.8333C1.26389 66.8333 0 65.5694 0 63.0417V46.4167C0 41.5972 0.791667 36.3194 2.375 30.5833C3.95833 24.8472 6.33333 19.2778 9.5 13.875L30.9583 0.958333C31.5278 0.319444 32.0833 0 32.625 0C33.1667 0 33.6111 0.277778 33.9583 0.833333L40.0833 10.4583C40.6528 11.2153 40.6528 11.8472 40.0833 12.3611L27.625 28.125C27.2917 28.4583 26.875 29.1806 26.375 30.2917C25.875 31.4028 25.625 32.5417 25.625 33.6806C25.625 34.2083 25.7917 34.7778 26.125 35.3889C26.4583 36 26.9306 36.5 27.5417 36.8889L38.2083 43.125C39.1667 43.7153 39.6528 44.5833 39.6528 45.7222C39.6528 46.8611 39.1667 47.8472 38.2083 48.6806L16.2083 66.2083C15.6389 66.7778 15.3542 67.0972 15.3542 67.1667C15.3542 67.2361 15.6389 67.5208 16.2083 68.0278L21.375 73.1944C21.875 73.6944 22.1389 73.9583 22.1667 73.9861C22.1944 74.0139 21.875 74.2917 21.2083 74.8194L12.5417 78.5833C12.0417 78.8611 11.5139 79 10.9583 79C8.36111 79 6.43056 78.1944 5.16667 76.5833C3.90278 74.9722 3.72222 73.125 4.625 71.0417L3.79159 69.5417V66.8333ZM49.0417 66.8333C46.5139 66.8333 45.25 65.5694 45.25 63.0417V46.4167C45.25 41.5972 46.0417 36.3194 47.625 30.5833C49.2083 24.8472 51.5833 19.2778 54.75 13.875L76.2083 0.958333C76.7778 0.319444 77.3333 0 77.875 0C78.4167 0 78.8611 0.277778 79.2083 0.833333L85.3333 10.4583C85.9028 11.2153 85.9028 11.8472 85.3333 12.3611L72.875 28.125C72.5417 28.4583 72.125 29.1806 71.625 30.2917C71.125 31.4028 70.875 32.5417 70.875 33.6806C70.875 34.2083 71.0417 34.7778 71.375 35.3889C71.7083 36 72.1806 36.5 72.7917 36.8889L83.4583 43.125C84.4167 43.7153 84.9028 44.5833 84.9028 45.7222C84.9028 46.8611 84.4167 47.8472 83.4583 48.6806L61.4583 66.2083C60.8889 66.7778 60.6042 67.0972 60.6042 67.1667C60.6042 67.2361 60.8889 67.5208 61.4583 68.0278L66.625 73.1944C67.125 73.6944 67.3889 73.9583 67.4167 73.9861C67.4444 74.0139 67.125 74.2917 66.4583 74.8194L57.7917 78.5833C57.2917 78.8611 56.7639 79 56.2083 79C53.6111 79 51.6806 78.1944 50.4167 76.5833C49.1528 74.9722 48.9722 73.125 49.875 71.0417L49.0417 69.5417V66.8333Z'
            fill='currentColor'
          />
        </svg>
      </span> */}
      <div className='overflow-hidden'>
        <div
          className='flex '
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: !isTransitioning
              ? "none"
              : "transform 700ms ease-in-out",
          }}
          onTransitionEnd={handleTransitionEnd}>
          {extendedFeedbacks != null &&
            extendedFeedbacks.map((feedback, index) => (
              <div
                className='w-full flex-shrink-0 p-2'
                key={index}>
                <div className='a-feedback'>
                  <div className='feedback-content'>
                    <p className='feedback-content-title'>
                      {feedback?.product?.title}
                    </p>
                    <p className='feedback-content-des'>
                      “{feedback?.product?.description}“
                    </p>
                  </div>
                  <div className='feedback-img'>
                    <img
                      src={feedback?.product?.img}
                      alt={feedback?.product?.title}></img>
                  </div>
                  <div className='feedback-customer'>
                    <div className='cus-avt'>
                      <img
                        src={feedback?.avatar}
                        alt={feedback?.name}></img>
                    </div>
                    <div className='cus-info'>
                      <p className='cus-name'>{feedback?.name}</p>
                      <p className='cus-job'>{feedback?.job}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className='text-center mt-8 flex justify-center gap-2'>
        {feedbacks.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
              getActiveDotIndex() === index
                ? "bg-(--color-text-dark)"
                : "bg-(--color-text-grey)"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}></button>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
