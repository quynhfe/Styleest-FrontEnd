// import { useEffect, useState } from "react";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import items from "../data/newArrival.json";

// function NewArrival() {
//   const [current, setCurrent] = useState(0);
//   const [activeColor, setActiveColor] = useState({});
//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % items.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + items.length) % items.length);
//   };

//   const handleColorClick = (itemId, color) => {
//     const newActiveColor = { ...activeColor, [itemId]: color };
//     setActiveColor(newActiveColor);
//     localStorage.setItem("activeColor", JSON.stringify(newActiveColor));
//   };

//   useEffect(() => {
//     const savedColors = localStorage.getItem("activeColor");
//     if (savedColors) {
//       setActiveColor(JSON.parse(savedColors));
//     }
//   }, []);

//   const colorMap = {
//     brown: "bg-(--color-item-brown)",
//     green: "bg-(--color-item-green)",
//     grey: "bg-(--color-item-grey)",
//     white: "bg-white",
//     black: "bg-(--color-text-dark)",
//     blue: "bg-(--color-item-blue)",
//   };
//   return (
//     <div className='relative new-arrivials overflow-hidden'>
//       <h2 className='introdution-title lg:mt-47 text-center'>(New Arrival)</h2>;
//       <h3 className='new-arrivials-title-primary'>
//         Explore our latest fashion arrivals
//       </h3>
//       <div className='flex justify-between items-center h-fit  mt-6'>
//         <p className='total-items'>{items?.length} items</p>
//         <p className='see-collection mt-0'>See All Items</p>
//       </div>
//       <button
//         onClick={prevSlide}
//         className='  btn-next left-2'>
//         <HiChevronLeft size={24} />
//       </button>
//       <div
//         className='list-new-arrivials '
//         style={{ transform: `translateX(-${current * 278}px)` }}>
//         {items.map((item) => {
//           return (
//             <div
//               key={item?.id}
//               className='new-arrivial flex-shrink-0 '>
//               <div className='new-arrivial-img-box relative group'>
//                 <img
//                   className='new-arrivial-img'
//                   src={item?.img}
//                   alt={item?.name}></img>
//                 <a className='btn-add-to-card-box opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
//                   <button className='btn-add-to-card'>Add to Cart</button>
//                 </a>
//               </div>

//               <div className='new-arrivial-des'>
//                 <p className='new-arrivial-name'>{item?.name}</p>
//                 <div className='new-arrivial-price'>
//                   {item?.salePrice && (
//                     <p className='sale-price block'>{item.salePrice} USD</p>
//                   )}
//                   <p className='price'>{item?.price} USD</p>
//                 </div>
//                 <div className='list-color'>
//                   {item?.colors.map((color) => {
//                     const isActive = activeColor[item.id] === color;
//                     return (
//                       <div
//                         key={color}
//                         onClick={() => handleColorClick(item.id, color)}
//                         className={`
//                           color cursor-pointer
//                           transition-colors  duration-300 ease-in ${
//                             isActive
//                               ? " bg-none border-(--color-border-item-active)"
//                               : `border-(--color-border-item) ${colorMap[color]}`
//                           }

//                         `}>
//                         <div
//                           key={color}
//                           className={`
//                           w-3 h-3 cursor-pointer transition-shadow duration-300 ease-in-out rounded-full

//                           ${colorMap[color]}
//                           ${
//                             isActive
//                               ? "  shadow-(--color-boxshadow-items-color)"
//                               : ` shadow-none ${colorMap[color]}`
//                           }
//                         `}></div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <button
//         onClick={nextSlide}
//         className='btn-next right-2'>
//         <HiChevronRight size={24} />
//       </button>
//     </div>
//   );
// }

// export default NewArrival;

// import { useState, useEffect, useRef, useMemo } from "react";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import items from "../data/newArrival.json";

// // Hook để xác định kích thước màn hình
// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);
//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     media.addEventListener("change", listener);
//     return () => media.removeEventListener("change", listener);
//   }, [matches, query]);
//   return matches;
// };

// function NewArrival() {
//   const total = items.length;
//   const transitionDuration = 500; // ms

//   // 1. Nhân bản item đầu và cuối để tạo vòng lặp
//   const extendedItems = useMemo(() => {
//     if (total <= 1) return [...items];
//     const firstClone = { ...items[0], originalId: items[0].id };
//     const lastClone = { ...items[total - 1], originalId: items[total - 1].id };
//     return [lastClone, ...items, firstClone];
//   }, [total]);

//   const extLen = extendedItems.length;

//   // 2. State quản lý slide
//   const [currentIndex, setCurrentIndex] = useState(extLen > total ? 1 : 0);
//   const [isTransitioning, setIsTransitioning] = useState(true);

//   const sliderRef = useRef(null);
//   const isMobile = useMediaQuery("(max-width: 767px)");

//   // 3. Hàm chuyển slide (chỉ tăng/giảm index)
//   const nextSlide = () => {
//     if (!isTransitioning) return;
//     setCurrentIndex((prev) => prev + 1);
//   };

//   const prevSlide = () => {
//     if (!isTransitioning) return;
//     setCurrentIndex((prev) => prev - 1);
//   };

//   // 4. Xử lý "nhảy" slide khi transition kết thúc để tạo hiệu ứng lặp
//   const handleTransitionEnd = () => {
//     if (total <= 1) return;

//     // Khi đến slide nhân bản cuối cùng
//     if (currentIndex === extLen - 1) {
//       setIsTransitioning(false); // Tắt hiệu ứng
//       setCurrentIndex(1); // Nhảy về slide thật đầu tiên
//     }

//     // Khi đến slide nhân bản đầu tiên
//     if (currentIndex === 0) {
//       setIsTransitioning(false); // Tắt hiệu ứng
//       setCurrentIndex(extLen - 2); // Nhảy về slide thật cuối cùng
//     }
//   };

//   // Bật lại transition sau khi đã nhảy slide
//   useEffect(() => {
//     if (!isTransitioning) {
//       // Dùng setTimeout để đảm bảo DOM đã cập nhật trước khi bật lại transition
//       const timer = setTimeout(() => setIsTransitioning(true), 50);
//       return () => clearTimeout(timer);
//     }
//   }, [isTransitioning]);

//   // Các logic phụ khác
//   const [activeColor, setActiveColor] = useState({});
//   const handleColorClick = (itemId, color) => {
//     const newActiveColor = { ...activeColor, [itemId]: color };
//     setActiveColor(newActiveColor);
//     localStorage.setItem("activeColor", JSON.stringify(newActiveColor));
//   };
//   useEffect(() => {
//     const savedColors = localStorage.getItem("activeColor");
//     if (savedColors) setActiveColor(JSON.parse(savedColors));
//   }, []);

//   // Logic swipe cho mobile
//   const isDragging = useRef(false);
//   const startPos = useRef(0);
//   const currentTranslate = useRef(0);
//   const getPositionX = (event) =>
//     event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
//   const handleDragStart = (e) => {
//     if (!isMobile) return;
//     isDragging.current = true;
//     startPos.current = getPositionX(e);
//     currentTranslate.current = 0;
//     // Tạm thời tắt transition khi đang kéo
//     if (sliderRef.current) {
//       sliderRef.current.style.transition = "none";
//     }
//   };
//   const handleDragMove = (e) => {
//     if (!isMobile || !isDragging.current) return;
//     const dragOffset = getPositionX(e) - startPos.current;
//     const newTranslate = -currentIndex * 278 + dragOffset;
//     currentTranslate.current = dragOffset;
//     sliderRef.current.style.transform = `translateX(${newTranslate}px)`;
//   };
//   const handleDragEnd = () => {
//     if (!isMobile || !isDragging.current) return;
//     isDragging.current = false;
//     // Bật lại transition
//     if (sliderRef.current) {
//       sliderRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
//     }
//     if (currentTranslate.current < -50) {
//       nextSlide();
//     } else if (currentTranslate.current > 50) {
//       prevSlide();
//     } else {
//       sliderRef.current.style.transform = `translateX(-${
//         currentIndex * 278
//       }px)`;
//     }
//   };
//   const swipeHandlers = isMobile
//     ? {
//         onMouseDown: handleDragStart,
//         onTouchStart: handleDragStart,
//         onMouseMove: handleDragMove,
//         onTouchMove: handleDragMove,
//         onMouseUp: handleDragEnd,
//         onTouchEnd: handleDragEnd,
//         onMouseLeave: handleDragEnd,
//       }
//     : {};
//   const colorMap = {
//     brown: "bg-(--color-item-brown)",
//     green: "bg-(--color-item-green)",
//     grey: "bg-(--color-item-grey)",
//     white: "bg-white",
//     black: "bg-(--color-text-dark)",
//     blue: "bg-(--color-item-blue)",
//   };

//   return (
//     <div className='relative new-arrivials overflow-hidden'>
//       <h2 className='introdution-title lg:mt-47 text-center'>(New Arrival)</h2>
//       <h3 className='new-arrivials-title-primary'>
//         Explore our latest fashion arrivals
//       </h3>
//       <div className='flex justify-between items-center h-fit mt-6'>
//         <p className='total-items'>{items.length} items</p>
//         <p className='see-collection mt-0'>See All Items</p>
//       </div>

//       <div
//         ref={sliderRef}
//         className='list-new-arrivials'
//         style={{
//           transform: `translateX(-${currentIndex * 278}px) translateX(278px)`,
//           transition: isTransitioning
//             ? `transform ${transitionDuration}ms ease-in-out`
//             : "none",
//         }}
//         onTransitionEnd={handleTransitionEnd}
//         {...swipeHandlers}>
//         {extendedItems.map((item, index) => (
//           <div
//             key={`${item.originalId || item.id}-${index}`}
//             className='new-arrivial flex-shrink-0'
//             onDragStart={(e) => e.preventDefault()}>
//             <div className='new-arrivial-img-box relative group'>
//               <img
//                 className='new-arrivial-img select-none'
//                 src={item.img}
//                 alt={item.name}
//               />
//               <a className='btn-add-to-card-box opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
//                 <button className='btn-add-to-card'>Add to Cart</button>
//               </a>
//             </div>
//             <div className='new-arrivial-des'>
//               <p className='new-arrivial-name'>{item.name}</p>
//               <div className='new-arrivial-price'>
//                 {item.salePrice && (
//                   <p className='sale-price block'>{item.salePrice} USD</p>
//                 )}
//                 <p className='price'>{item.price} USD</p>
//               </div>
//               <div className='list-color'>
//                 {item.colors.map((color) => {
//                   const isActive = activeColor[item.id] === color;
//                   return (
//                     <div
//                       key={color}
//                       onClick={() => handleColorClick(item.id, color)}
//                       className={`color cursor-pointer transition-colors duration-300 ease-in ${
//                         isActive
//                           ? "bg-none border-(--color-border-item-active)"
//                           : `border-(--color-border-item) ${colorMap[color]}`
//                       }`}>
//                       <div
//                         className={`w-3 h-3 cursor-pointer transition-shadow duration-300 ease-in-out rounded-full ${
//                           colorMap[color]
//                         } ${
//                           isActive
//                             ? "shadow-(--color-boxshadow-items-color)"
//                             : `shadow-none ${colorMap[color]}`
//                         }`}></div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewArrival;
import { useState, useEffect, useRef, useMemo } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import items from "../data/newArrival.json";

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
    brown: "bg-(--color-item-brown)",
    green: "bg-(--color-item-green)",
    grey: "bg-(--color-item-grey)",
    white: "bg-white",
    black: "bg-(--color-text-dark)",
    blue: "bg-(--color-item-blue)",
  };

  return (
    <div className='relative new-arrivials overflow-hidden'>
      <h2 className='introdution-title lg:mt-47 text-center'>(New Arrival)</h2>
      <h3 className='new-arrivials-title-primary'>
        Explore our latest fashion arrivals
      </h3>

      <div className='flex justify-between items-center h-fit mt-6'>
        <p className='total-items'>{items.length} items</p>
        <p className='see-collection mt-0'>See All Items</p>
      </div>

      <div
        ref={sliderRef}
        className='list-new-arrivials'
        style={{
          transform: isMobile ? `translateX(-${currentIndex * 278}px)` : "none",
          transition: isTransitioning
            ? `transform ${transitionDuration}ms ease-in-out`
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
        {...swipeHandlers}>
        {(isMobile ? extendedItems : items).map((item, index) => (
          <div
            key={`${item.originalId || item.id}-${index}`}
            className='new-arrivial flex-shrink-0'
            onDragStart={(e) => e.preventDefault()}>
            <div className='new-arrivial-img-box relative group'>
              <img
                className='new-arrivial-img select-none'
                src={item.img}
                alt={item.name}
              />
              <a className='btn-add-to-card-box opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                <button className='btn-add-to-card'>Add to Cart</button>
              </a>
            </div>

            <div className='new-arrivial-des'>
              <p className='new-arrivial-name'>{item.name}</p>
              <div className='new-arrivial-price'>
                {item.salePrice && (
                  <p className='sale-price block'>{item.salePrice} USD</p>
                )}
                <p className='price'>{item.price} USD</p>
              </div>

              <div className='list-color'>
                {item.colors.map((color) => {
                  const isActive = activeColor[item.id] === color;
                  return (
                    <div
                      key={color}
                      onClick={() => handleColorClick(item.id, color)}
                      className={`color cursor-pointer transition-colors duration-300 ease-in ${
                        isActive
                          ? "bg-none border-(--color-border-item-active)"
                          : `border-(--color-border-item) ${colorMap[color]}`
                      }`}>
                      <div
                        className={`w-3 h-3 cursor-pointer transition-shadow duration-300 ease-in-out rounded-full ${
                          colorMap[color]
                        } ${
                          isActive
                            ? "shadow-(--color-boxshadow-items-color)"
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
  );
}

export default NewArrival;
