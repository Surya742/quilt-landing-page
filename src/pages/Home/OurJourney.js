import React, { Component } from 'react'

import HollowCube from "../../assets/images/newUI/hollowCube.svg"
import '../../assets/css/newUI/title1.css';



export default class OurJourney extends Component {
    render() {
        return (
            <React.Fragment>
                <>
                    <h3 className='w-full text-center text-2xl font-bold our-journey-heading mb-8 mt-4 relative bottom-12 xl:bottom-24'>Our Journey</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:items-center 2xl:grid-cols-4 max-w-screen justify-items-center min-h-full text-[22px] justify-center text-black gap-12'>
                        <div className='text-center w-full flex flex-col'>
                            <div className='text-4xl font-bold text-black mb-4'>
                                1st Phase
                            </div>
                            <div className='flex flex-col justify-center'>
                                <img src={HollowCube} className='h-32' />
                                <p className='text-[22px] font-bold m-0'>NFT Marketplace</p>
                                <p>Mint, and Trade NFTs with peers, interact with NFT creators and holders anonymously.</p>
                            </div>
                        </div>

                        <div className='text-center w-full flex flex-col'>
                            <div className='text-4xl font-bold text-black mb-4'>
                                2nd Phase
                            </div>
                            <div className='flex flex-col justify-center'>
                                <img src={HollowCube} className='h-32' />
                                <p className='text-[22px] font-bold m-0'>Group / Community Building</p>
                                <p>Build a community with users all over web3. Thanks to all supporters and early users. Big thanks to our managers and devs.</p>
                            </div>
                        </div>

                        <div className='w-full flex flex-col text-center'>
                            <div className='text-4xl font-bold text-black mb-4'>
                                3rd Phase
                            </div>
                            <div className='flex flex-col justify-center'>
                                <img src={HollowCube} className='h-32' />
                                <p className='text-[22px] font-bold m-0'>Username</p>
                                <p>Later we'll add ability to change your username from boring 0x... to cool catchy username.</p>
                            </div>
                        </div>

                        <div className='flex flex-col text-center rounded-full '>
                            <div className='text-4xl font-bold text-black mb-4'>
                                Next Phases
                            </div>
                            <div>
                                <a className='font-semibold text-black p-2 px-4 border-2 journey-more-btn rounded-full'>
                                    More on Git
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            </React.Fragment>
        )
    }
}
