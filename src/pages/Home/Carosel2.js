import React, { useEffect, useState } from 'react';

//import images
import BlackStrip from '../../assets/images/newUI/black-strip.svg';
import GreenStrip from '../../assets/images/newUI/green-strip.svg';
import computer from "../../assets/images/newUI/computer.png"
import dapp from "../../assets/images/newUI/dapp.png"
import privateKey from "../../assets/images/newUI/privateKey.png"
import chat from "../../assets/images/newUI/chat.png"
import '../../assets/css/newUI/title1.css';


const Carosel2 = () => {
  const [activeSlide, setActiveSlide] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(activeSlide === 4 ? 1 : activeSlide + 1)
    }, 10000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <React.Fragment>
      {/* <img src={Cube1} className="absolute -top-8 h-[270px] right-0 hidden lg:block" alt="" />
        <img src={GreenStrip} className="green-second-left-strip main-strip hidden lg:block" alt="" />
        <img src={GreenStrip} className="green-left-strip main-strip hidden lg:block" alt="" /> */}
      <div className='carousel-wrapper text-black grid grid-cols-1 xl:grid-cols-2 justify-items-start w-screen items-center 2xl:px-48 xl:px-12 md:px-24 text-center lg:text-left px-8 lg:py-0 py-32 relative' style={{ backgroundColor: 'white' }}>
        <img src={BlackStrip} className="-bottom-52 right-0 main-strip" alt="" />
        <img src={GreenStrip} className="-bottom-60 -right-14 main-strip" alt="" />
        <div className='rounded-[49px] 2xl:h-[550px] 2xl:w-[500px] lg:h-[450px] lg:w-[400px] h-full w-full flex justify-center items-center 2xl:ml-48 lg:justify-self-center xl:justify-self-end sm:w-[300px] sm:justify-self-center flex-col relative'>
          {/* Bullets for scrolling */}
          <div className='bg-white h-full w-full flex justify-center items-center rounded-[49px]'>
            {/* <img src={HollowCube} className='absolute z-[11] -bottom-8 -left-10' /> */}
            {activeSlide === 1 && (
              <img src={computer} className='z-[10]' />
            )}
            {activeSlide === 2 && (
              <img src={dapp} className='z-[10]' />
            )}
            {activeSlide === 3 && (
              <img src={privateKey} className='z-[10]' />
            )}
            {activeSlide === 4 && (
              <img src={chat} className='z-[10]' />
            )}
          </div>
          <div className='mt-12 flex space-x-4'>
            <div className={`${'h-4 w-4 rounded-full cursor-pointer'} ${activeSlide === 1 ? "bg-green-500" : "bg-[#929292]"}`} onClick={() => setActiveSlide(1)} />
            <div className={`${'h-4 w-4 rounded-full cursor-pointer'} ${activeSlide === 2 ? "bg-green-500" : "bg-[#929292]"}`} onClick={() => setActiveSlide(2)} />
            <div className={`${'h-4 w-4 rounded-full cursor-pointer'} ${activeSlide === 3 ? "bg-green-500" : "bg-[#929292]"}`} onClick={() => setActiveSlide(3)} />
            <div className={`${'h-4 w-4 rounded-full cursor-pointer'} ${activeSlide === 4 ? "bg-green-500" : "bg-[#929292]"}`} onClick={() => setActiveSlide(4)} />
          </div>
        </div>

        <div className='4xl:px-32 3xl:px-24 xl:px-12 sm:px-0 duration-200 transition-all justify-self-center'>
          {activeSlide === 1 &&
            (
              <div className='duration-200 transition-all flex flex-col mt-8'>
                <h3 className='carousel-heading'>Connect your<br /><span className='text-[#00E467]'>wallet</span></h3>
                <p className='font-medium carousel-text'>We are live on Polygon testnet.</p>
                <div className='2xl:flex 2xl:justify-start md:justify-center items-center'>
                  <a
                    href="https://app.quilt.chat/"
                    className="mt-1 h6 btn btn-default btn-pills btn-11 p-8 border-2 w-48"
                  >
                    Try it now
                  </a>
                </div>
              </div>
            )}

          {activeSlide === 2 && (
            <div className='max-w-full flex flex-col mt-8'>
              <h3 className='carousel-heading max-w-full'>Add your friend's<br /><span className='text-[#00E467]'>wallet address</span></h3>
              <div className='2xl:flex 2xl:justify-start md:justify-center items-center'>
                <a
                  href="https://app.quilt.chat/"
                  className="mt-1 h6 btn btn-default btn-pills btn-11 p-8 border-2 w-48"
                >
                  Try it now
                </a>
              </div>
            </div>
          )}

          {activeSlide === 3 && (
            <div className='flex flex-col mt-12'>
              <h3 className='carousel-heading'>Add an<br /><span className='text-[#00E467]'>extra layer</span> <br />of encryption by generating your private keys</h3>
              <div className='2xl:flex 2xl:justify-start md:justify-center items-center mt-8'>
                <a
                  href="https://app.quilt.chat/"
                  className="mt-1 h6 btn btn-default btn-pills btn-11 p-8 border-2 w-48"
                >
                  Try it now
                </a>
              </div>
            </div>
          )}

          {activeSlide === 4 && (
            <div className='mt-8 flex flex-col'>
              <h3 className='carousel-heading' style={{ lineHeight: 1.12 }}>Enjoy a  <br /><span className='text-[#00E467]'>private and secure</span> <br />messaging with your friends.</h3>
              <div className='2xl:flex 2xl:justify-start md:justify-center items-center mt-2'>
                <a
                  href="https://app.quilt.chat/"
                  className="mt-1 h6 btn btn-default btn-pills btn-11 p-8 border-2 w-48"
                >
                  Try it now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}


export default Carosel2