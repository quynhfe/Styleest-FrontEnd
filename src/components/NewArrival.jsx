import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import items from "../data/newArrival.json";

function NewArrival() {
  const [current, setCurrent] = useState(0);
  const [activeColor, setActiveColor] = useState({});
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleColorClick = (itemId, color) => {
    const newActiveColor = { ...activeColor, [itemId]: color };
    setActiveColor(newActiveColor);
    localStorage.setItem("activeColor", JSON.stringify(newActiveColor));
  };

  useEffect(() => {
    const savedColors = localStorage.getItem("activeColor");
    if (savedColors) {
      setActiveColor(JSON.parse(savedColors));
    }
  }, []);

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
      <h2 className='introdution-title lg:mt-47 text-center'>(New Arrival)</h2>;
      <h3 className='new-arrivials-title-primary'>
        Explore our latest fashion arrivals
      </h3>
      <div className='flex justify-between items-center h-fit  mt-6'>
        <p className='total-items'>{items?.length} items</p>
        <p className='see-collection mt-0'>See All Items</p>
      </div>
      <button
        onClick={prevSlide}
        className='  btn-next left-2'>
        <HiChevronLeft size={24} />
      </button>
      <div
        className='list-new-arrivials '
        style={{ transform: `translateX(-${current * 278}px)` }}>
        {items.map((item) => {
          return (
            <div
              key={item?.id}
              className='new-arrivial flex-shrink-0 '>
              <div className='new-arrivial-img-box relative group'>
                <img
                  className='new-arrivial-img'
                  src={item?.img}
                  alt={item?.name}></img>
                <a className='btn-add-to-card-box opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                  <button className='btn-add-to-card'>Add to Cart</button>
                </a>
              </div>

              <div className='new-arrivial-des'>
                <p className='new-arrivial-name'>{item?.name}</p>
                <div className='new-arrivial-price'>
                  {item?.salePrice && (
                    <p className='sale-price block'>{item.salePrice} USD</p>
                  )}
                  <p className='price'>{item?.price} USD</p>
                </div>
                <div className='list-color'>
                  {item?.colors.map((color) => {
                    const isActive = activeColor[item.id] === color;
                    return (
                      <div
                        key={color}
                        onClick={() => handleColorClick(item.id, color)}
                        className={`
                          color cursor-pointer
                          transition-colors  duration-300 ease-in ${
                            isActive
                              ? " bg-none border-(--color-border-item-active)"
                              : `border-(--color-border-item) ${colorMap[color]}`
                          }
                          
                        `}>
                        <div
                          key={color}
                          className={`
                          w-3 h-3 cursor-pointer transition-shadow duration-300 ease-in-out rounded-full
                          
                          ${colorMap[color]}
                          ${
                            isActive
                              ? "  shadow-(--color-boxshadow-items-color)"
                              : ` shadow-none ${colorMap[color]}`
                          }
                        `}></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={nextSlide}
        className='btn-next right-2'>
        <HiChevronRight size={24} />
      </button>
    </div>
  );
}

export default NewArrival;
