import data from "../data/footer.json";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Motion from "../components/motion";
function FooterColumn({ title, list, className = "" }) {
  return (
    <div className={className}>
      <h2 className='mb-8 text-white text-[20px] font-(family-name:--font-header) font-bold'>
        {title}
      </h2>
      <ul className='lg:w-fit'>
        {list?.map((item, i) => (
          <li
            key={i}
            className='lg:w-fit mb-4 lg:leading-[25.6px]'>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const firstTwo = data.slice(0, 2);
  const lastOne = data[data.length - 1];

  return (
    <div className='pt-16 lg:pb-15.5 text-center bg-text-dark relative w-full px-(--mx-sm) md:px-(--mx-md) xl:px-(--mx-xl)'>
      <Motion className='lg:text-start lg:grid-flow-col-dense grid grid-flow-row max-w-300 mx-auto '>
        <div className='flex flex-col gap-6 h-fit lg:col-span-1 xl:w-[379px] lg:w-[338px] mb-8.75 lg:mb-0'>
          <h1 className='tracking-(--t-84) text-white text-[42px] font-(family-name:--font-header) font-bold uppercase'>
            Styleest
          </h1>
          <p className='xl:text-lg xl:leading-[28.8px]'>
            Welcome to Styleest, where your fashion journey finds its perfect
            abode. Dive into a curated haven of style, where every piece tells a
            story of sophistication and contemporary allure.
          </p>
          <div className='flex justify-center lg:justify-start gap-2'>
            <BsTwitterX className=' w-6 h-6 p-[5.5px] text-text-dark-muted' />
            <FaInstagram className=' w-6 h-6 p-[5.5px] text-text-dark-muted' />
            <FaLinkedinIn className=' w-6 h-6 p-[5.5px] text-text-dark-muted' />
            <FaFacebook className=' w-6 h-6 text-text-dark-muted p-1' />
          </div>
        </div>

        <div className='w-full lg:flex lg:justify-end lg:mt-8 xl:mt-9.75'>
          <div className='xl:gap-x-14 md:items-start md:flex md:grid-cols-3 md:justify-between md:pb-0 xl:w-114 lg:w-102 lg:gap-x-8 lg:col-span-1 grid lg:grid-flow-col-dense gap-y-4 pb-11.5'>
            <div className='grid grid-cols-2 md:flex md:flex-row  gap-x-2.5 md:gap-x-49 lg:gap-x-8 xl:gap-14'>
              {firstTwo.map((d) => (
                <FooterColumn
                  key={d.id}
                  title={d.title}
                  list={d.list}
                  className='col-span-1 '
                />
              ))}
            </div>

            <FooterColumn
              title={lastOne.title}
              list={lastOne.list}
              className='md:w-46.5 lg:col-span-1 lg:mb-8'
            />
          </div>
        </div>
      </Motion>
    </div>
  );
}

export default Footer;
