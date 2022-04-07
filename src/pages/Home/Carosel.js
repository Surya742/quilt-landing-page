import { useEffect, useState } from 'react';

//import images

import sliderRec from '../../assets/images/newUI/slider-1-rec.svg';
import BlackStrip from '../../assets/images/newUI/black-strip.svg';
import GreenStrip from '../../assets/images/newUI/green-strip.svg';
import Cube1 from '../../assets/images/newUI/small-1-cube.svg';
import sliderFolder from '../../assets/images/newUI/slider-1-folder.svg';
import HollowCube from '../../assets/images/newUI/hollowCube.svg';
import chain from '../../assets/images/newUI/chain.png';
import safe from '../../assets/images/newUI/safe.png';
import nft from '../../assets/images/newUI/nft.png';
import community from '../../assets/images/newUI/community.png';
import '../../assets/css/newUI/title1.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Carosel = () => {
  const [activeSlide, setActiveSlide] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(activeSlide === 5 ? 1 : activeSlide + 1)
    }, 10000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className='carousel-wrapper text-white grid grid-cols-1 xl:grid-cols-2 justify-items-start w-screen items-center 2xl:px-48 xl:px-12 md:px-24 text-center lg:text-left px-8 lg:py-0 py-32 relative' style={{ backgroundColor: '#212121' }}>
      <img src={Cube1} className="absolute -top-8 h-[270px] right-0 hidden lg:block" alt="" />
      <img src={GreenStrip} className="green-second-left-strip main-strip hidden lg:block" alt="" />
      <img src={GreenStrip} className="green-left-strip main-strip hidden lg:block" alt="" />
      <div className='4xl:px-32 3xl:px-24 xl:px-12 sm:px-0 duration-200 transition-all justify-self-center'>
        {activeSlide === 1 &&
          (
            <div className='duration-200 transition-all'>
              <h3 className='carousel-heading'>Own and control <br /><span className='text-[#00E467]'>your data</span></h3>
              <p className='font-medium carousel-text'>We are built on decentralised storage technologies, ensuring that your data is safely stored on the blockchain, giving you the utmost control.  </p>
            </div>
          )}

        {activeSlide === 2 && (
          <div className='max-w-full'>
            <h3 className='carousel-heading max-w-full'>Built on <br /><span className='text-[#00E467]'>Blockchain Technology</span></h3>
            <p className='font-medium carousel-text'>We are live on Polygon testnet and working towards integration with Solana & Avalanche</p>
          </div>
        )}

        {activeSlide === 3 && (
          <>
            <h3 className='carousel-heading'>Built Using End to End <br /><span className='text-[#00E467]'>Encryption</span></h3>
            <p className='font-medium carousel-text'>We provide an extra layer of security for every message and transaction sent using utilising various encryption algorithms.</p>
          </>
        )}

        {activeSlide === 4 && (
          <>
            <h3 className='carousel-heading right-0 2xl:relative 2xl:right-12' style={{ lineHeight: '1' }}>Supports <br /><span className='text-[#00E467]'>NFT & Crypto</span> <br />Transactions</h3>
            <p className='font-medium carousel-text right-0 2xl:relative 2xl:right-12'>Interact and Trade NFT creators and holders. Trade crypto with your friends</p>
          </>
        )}

        {activeSlide === 5 && (
          <>
            <h3 className='carousel-heading'><span className='text-[#00E467]'>Community </span> <br />Building</h3>
            <p className='font-medium carousel-text'>Build a community with users over web3.</p>
          </>
        )}
      </div>

      <div className='rounded-[49px] 2xl:h-[550px] 2xl:w-[500px] lg:h-[450px] lg:w-[400px] h-full w-full flex justify-center items-center 2xl:ml-48 lg:justify-self-center xl:justify-self-end sm:w-[300px] sm:justify-self-center flex-col relative'>
        {/* Bullets for scrolling */}
        <div className='bg-white h-full w-full flex justify-center items-center rounded-[49px]'>
          <img src={HollowCube} className='absolute z-[11] -bottom-8 -left-10' />
          {activeSlide === 1 && (
            <img src={sliderFolder} className='z-[10]' />
          )}
          {activeSlide === 2 && (
            <img src={chain} className='z-[10]' />
          )}
          {activeSlide === 3 && (
            <img src={safe} className='z-[10]' />
          )}
          {activeSlide === 4 && (
            <img src={nft} className='z-[10]' />
          )}
          {activeSlide === 5 && (
            <img src={community} className='z-[10]' />
          )}
        </div>
        <div className='mt-12 flex space-x-4'>
          <div className={`${'h-4 w-4 rounded-full cursor-pointer'} ${activeSlide === 1 ? "bg-green-500" : "bg-[#929292]"}`} onClick={() => setActiveSlide(1)} />
          <div className={`${'h-4 w-4 rounded-full cursor-pointer'} ${activeSlide === 2 ? "bg-green-500" : "bg-[#929292]"}`} onClick={() => setActiveSlide(2)} />
          <div className={`${'h-4 w-4 rounded-full cursor-pointer'} ${activeSlide === 3 ? "bg-green-500" : "bg-[#929292]"}`} onClick={() => setActiveSlide(3)} />
          <div className={`${'h-4 w-4 rounded-full cursor-pointer'} ${activeSlide === 4 ? "bg-green-500" : "bg-[#929292]"}`} onClick={() => setActiveSlide(4)} />
          <div className={`${'h-4 w-4 rounded-full cursor-pointer'} ${activeSlide === 5 ? "bg-green-500" : "bg-[#929292]"}`} onClick={() => setActiveSlide(5)} />
        </div>
      </div>
    </div>
  );

}


export default Carosel