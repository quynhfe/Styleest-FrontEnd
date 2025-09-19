import data from "../data/footer.json";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className='pt-16 text-center bg-text-dark relative w-full'>
      <div className='lg:text-start lg:grid-flow-col-dense grid grid-flow-row px-(--mx-sm) md:px-(--mx-md) xl:px-(--mx-xl) max-w-screen mx-auto'>
        <div className='flex flex-col gap-6 lg:col-span-1 xl:w-[379px] lg:w-[338px]'>
          <h1 className='text-white text-[42px] font-(family-name:--font-header) font-bold uppercase'>
            Styleest
          </h1>
          <p className='xl:text-lg xl:leading-[28.8px]'>
            Welcome to Styleest, where your fashion journey finds its perfect
            abode. Dive into a curated haven of style, where every piece tells a
            story of sophistication and contemporary allure.
          </p>
          <div className='flex justify-center lg:justify-start gap-2'>
            <BsTwitterX className='mb-8.5 w-6 h-6 p-[5.5px] text-(--color-text-dark-muted)' />
            <FaInstagram className='mb-8.5 w-6 h-6 p-[5.5px] text-(--color-text-dark-muted)' />
            <FaLinkedinIn className='mb-8.5 w-6 h-6 p-[5.5px] text-(--color-text-dark-muted)' />
            <FaFacebook className='mb-8.5 w-6 h-6  text-(--color-text-dark-muted) p-1' />
          </div>
        </div>

        <div className='w-full lg:flex lg:justify-end'>
          <div className='xl:gap-x-14 md:items-start md:flex md:grid-cols-3  md:justify-between md:pb-0 xl:w-114 lg:w-102 lg:gap-x-8 lg:col-span-1 grid lg:grid-flow-col-dense gap-y-4 pb-11.5'>
            {data?.map((d) => {
              return (
                <div
                  key={d?.id}
                  className={`${
                    d.id === data.length
                      ? "md:w-46.5 lg:col-span-1 col-span-2 md:col-span-1 lg:mb-8"
                      : "col-span-1"
                  }`}>
                  <h2 className='mb-8 text-white text-[20px] font-(family-name:--font-header) font-bold'>
                    {d?.title}
                  </h2>
                  <ul className='lg:w-fit'>
                    {d?.list?.map((item, i) => (
                      <li
                        className='lg:w-fit mb-4 lg:leading-[25.6px]'
                        key={i}>
                        <p> {item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='lg:pt-9 lg:pb-6.25 md:pt-11.75 md:pb-9 pt-6.75 pb-4 items-center px-(--mx-sm)  xl:px-(--mx-xl) max-w-screen lg:px-(--mx-md) border-t-1 border-[#474747] text-sm'>
        <div className='max-w-screen mx-auto lg:flex lg:justify-between'>
          <p className='opacity-70'>
            Copyright© 2023. Agensip Creative Agency. All Right Reserved.
          </p>
          <div className='opacity-70 flex gap-8 justify-center mt-3 lg:m-0'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
