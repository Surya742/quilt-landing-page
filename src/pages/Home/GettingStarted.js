import React, { Component } from 'react'

import GreenBox from '../../assets/images/newUI/greenBox.svg';
import bwFace from '../../assets/images/newUI/bwFace.svg';
import bwFace2 from '../../assets/images/newUI/bwFace2.svg';
import bwFace3 from '../../assets/images/newUI/bwFace3.svg';
import bwFace4 from '../../assets/images/newUI/bwFace4.svg';
import '../../assets/css/newUI/title1.css';

export default class GettingStarted extends Component {
    render() {
        return (
            <div className='rounded-bl-[10rem] w-full min-h-screen getting-started-wrapper py-24 text-white justify-center text-left' style={{ backgroundColor: '#212121' }} id="team">
                <div className='getting-started-grid w-screen'>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Chandan<br /><span className='text-[#00E467]'>Das</span></p>
                        <p className='mt-4'>Blockchain Developer</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Shailesh<br /><span className='text-[#00E467]'>Dsouza</span></p>
                        <p className='mt-4'>Designer</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Abduljalaal<br /> <span className='text-[#00E467]'>Abubakar</span></p>
                        <p className='mt-4'>Business Strategist</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name getting-started-person-name-more-height'>Eugene<br /> <span className='text-[#00E467]'>Anisei</span></p>
                        <p className='mt-4'>Frontend Developer</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Pan<br /> <span className='text-[#00E467]'>Bartosz</span></p>
                        <p className='mt-4'>Blockchain Developer</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Surya<br /> <span className='text-[#00E467]'>K Sahani</span></p>
                        <p className='mt-4'>Full Stack Developer</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Mah’d<br /> <span className='text-[#00E467]'>Shahwan</span></p>
                        <p className='mt-4'>Project Manager</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Melo<br /> <span className='text-[#00E467]'></span></p>
                        <p className='mt-4'>Writer</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Claire <br /> <span className='text-[#00E467]'>Q</span></p>
                        <p className='mt-4'>AI assistant</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Viktor <br /> <span className='text-[#00E467]'>Sopko</span></p>
                        <p className='mt-4'>Fullstack Engineer</p>
                    </div>
                    <div className='w-82'>
                        <p className='font-bold getting-started-person-name'>Oliver <br /> <span className='text-[#00E467]'>Keresti</span></p>
                        <p className='mt-4'>Frontend Engineer</p>
                    </div>
                </div >
            </div >
        )
    }
} 
