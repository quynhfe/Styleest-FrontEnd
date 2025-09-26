import { useState, useEffect, useRef, useMemo } from "react";
import items from "../data/newArrival.json";
import Link from "../components/btn-link";
import Title from "../components/title-default";
import TitlePrimary from "../components/title-primary";
import Button from "../components/button";
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
};

function NewArrival() {
  const total = items.length;
  const transitionDuration = 500;

  const extendedItems = useMemo(
    () =>
      total <= 1
        ? items
        : [
            { ...items[total - 1], originalId: items[total - 1].id },
            ...items,
            { ...items[0], originalId: items[0].id },
          ],
    [total],
  );

  const [currentIndex, setCurrentIndex] = useState(total > 1 ? 1 : 0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activeColor, setActiveColor] = useState({});

  const sliderRef = useRef(null);
  const dragRef = useRef({ isDragging: false, startPos: 0, translate: 0 });
  const isMobile = useMediaQuery("(max-width: 767px)");

  const navigate = (direction) => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + direction);
  };

  const handleTransitionEnd = () => {
    if (total <= 1) return;
    const extLen = extendedItems.length;

    if (currentIndex === extLen - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }

    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extLen - 2);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleColorClick = (itemId, color) => {
    const newActiveColor = { ...activeColor, [itemId]: color };
    setActiveColor(newActiveColor);
    localStorage.setItem("activeColor", JSON.stringify(newActiveColor));
  };

  useEffect(() => {
    const savedColors = localStorage.getItem("activeColor");
    if (savedColors) setActiveColor(JSON.parse(savedColors));
  }, []);

  const getPositionX = (e) =>
    e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;

  const handleDragStart = (e) => {
    if (!isMobile) return;
    dragRef.current = {
      isDragging: true,
      startPos: getPositionX(e),
      translate: 0,
    };
    if (sliderRef.current) sliderRef.current.style.transition = "none";
  };

  const handleDragMove = (e) => {
    if (!isMobile || !dragRef.current.isDragging) return;
    const dragOffset = getPositionX(e) - dragRef.current.startPos;
    dragRef.current.translate = dragOffset;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${
        -currentIndex * 278 + dragOffset
      }px)`;
    }
  };

  const handleDragEnd = () => {
    if (!isMobile || !dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    if (sliderRef.current) {
      sliderRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    }

    const { translate } = dragRef.current;
    if (translate < -50) navigate(1);
    else if (translate > 50) navigate(-1);
    else if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * 278
      }px)`;
    }
  };

  const swipeHandlers = isMobile
    ? {
        onMouseDown: handleDragStart,
        onTouchStart: handleDragStart,
        onMouseMove: handleDragMove,
        onTouchMove: handleDragMove,
        onMouseUp: handleDragEnd,
        onTouchEnd: handleDragEnd,
        onMouseLeave: handleDragEnd,
      }
    : {};

  const colorMap = {
    brown: "bg-item-brown",
    green: "bg-item-green",
    grey: "bg-item-grey",
    white: "bg-white",
    black: "bg-text-dark",
    blue: "bg-item-blue",
  };

  return (
    <div className='lg:z-0 bg-bg-secondary w-full px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl) text-center gap-6 items-center justify-center font-bold md:pb-20 py-15 xl:pt-66.5 md:pt-52.75 lg:pt-53.5 pb-15 overflow-hidden'>
      <div className='max-w-300 mx-auto'>
        <Title className={"mb-11.5 "}>New Arrival</Title>
        <TitlePrimary>Explore our latest fashion arrivals</TitlePrimary>
        <div className='flex justify-between items-center h-fit mt-6'>
          <p className='text-text-grey tracking-(--t-16)'>
            {items.length} items
          </p>
          <Link className='mt-0'>See All Items</Link>
        </div>
        <div
          ref={sliderRef}
          className='w-full mt-[32px] flex gap-5 md:grid md:grid-cols-3 md:grid-rows-3 xl:grid-cols-4 xl:grid-rows-2 md:gap-6 transition-transform duration-500 ease-in-out'
          style={{
            transform: isMobile
              ? `translateX(-${currentIndex * 278}px)`
              : "none",
            transition: isTransitioning
              ? `transform ${transitionDuration}ms ease-in-out`
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
          {...swipeHandlers}>
          {(isMobile ? extendedItems : items).map((item, index) => (
            <div
              key={`${item.originalId || item.id}-${index}`}
              className='max-md:w-[258px] xl:w-[282px] lg:max-w-[391px] w-full md:col-span-1 md:row-span-1 flex flex-col items-center justify-center flex-shrink-0'
              onDragStart={(e) => e.preventDefault()}>
              <div className='h-82 w-64.5 md:w-full   overflow-hidden flex justify-start relative group'>
                <img
                  decoding='async'
                  loading='lazy'
                  className='w-64.5 h-82 md:w-full  md:h-full md:max-w-100 lg:max-w-70.5 object-cover object-top transition-transform duration-300 origin-top hover:scale-120 select-none'
                  src={item.img}
                  alt={item.name}
                />
                <div className='h-[47px] w-64.5 md:w-full md:max-w-100 lg:max-w-70.5 absolute z-1 bottom-[26px] flex text-text-dark items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                  <Button
                    animation={false}
                    className=' mx-5 w-full '>
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className='w-full flex flex-col gap-2 mt-6 text-start items-start'>
                <p className='lg:text-xl text-text-dark font-(family-name:--font-header)'>
                  {item.name}
                </p>
                <div className='flex gap-3 font-medium text-sm lg:text-(length:--text-16)'>
                  {item.salePrice && (
                    <p className='tracking-(--t-14) text-text-brown line-through'>
                      {item.salePrice} USD
                    </p>
                  )}
                  <p className='tracking-(--t-14) text-text-dark'>
                    {item.price} USD
                  </p>
                </div>

                <div className='flex gap-1.5 items-center py-1.5'>
                  {item.colors.map((color) => {
                    const isActive = activeColor[item.id] === color;
                    return (
                      <div
                        key={color}
                        onClick={() => handleColorClick(item.id, color)}
                        className={`flex justify-center items-center w-5 h-5 rounded-full border-1 cursor-pointer transition-colors duration-300 ease-in ${
                          isActive
                            ? "bg-none border-border-item-active"
                            : `border-border-item ${colorMap[color]}`
                        }`}>
                        <div
                          className={`w-3 h-3 cursor-pointer transition-shadow duration-300 ease-in-out rounded-full ${
                            colorMap[color]
                          } ${
                            isActive
                              ? "shadow-boxshadow-items-color"
                              : "shadow-none"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
