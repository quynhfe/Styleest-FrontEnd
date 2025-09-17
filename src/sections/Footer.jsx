import data from "../data/footer.json";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
function Footer() {
  return (
    <div className='footer relative w-full'>
      <div className='footer-f max-w-7xl mx-auto'>
        <div className='flex flex-col gap-6 lg:col-span-1 xl:w-[379px] lg:w-[338px]'>
          <h1 className='footer-title'>Styleest</h1>
          <p className='footer-des xl:text-lg xl:leading-[28.8px]'>
            Welcome to Styleest, where your fashion journey finds its perfect
            abode. Dive into a curated haven of style, where every piece tells a
            story of sophistication and contemporary allure.
          </p>
          <div className='footer-socials '>
            <BsTwitterX className='footer-socials-icon' />
            <FaInstagram className='footer-socials-icon' />
            <FaLinkedinIn className='footer-socials-icon' />
            <FaFacebook className='footer-socials-icon p-1' />
          </div>
        </div>

        <div className='w-full lg:flex lg:justify-end '>
          <div className='list-outline'>
            {data?.map((d) => {
              return (
                <div
                  key={d?.id}
                  className={` ${
                    d.id === data.length
                      ? " lg:w-fit lg:col-span-1 col-span-2 lg:mb-8"
                      : "col-span-1"
                  }`}>
                  <h2 className='outline-title'>{d?.title}</h2>
                  <ul className='lg:w-fit'>
                    {d?.list?.map((item, i) => (
                      <li
                        className='out-line'
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
      <div className='footer-s '>
        <div className='max-w-7xl mx-auto'>
          <p className='copy-right'>
            Copyright© 2023. Agensip Creative Agency. All Right Reserved.
          </p>
          <div className='end-footer'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
