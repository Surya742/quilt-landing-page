import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import '../../assets/css/newUI/title1.css';

import GreenBox from '../../assets/images/newUI/greenBox.svg';
import bwFace from '../../assets/images/newUI/bwFace.svg';
import bwFace2 from '../../assets/images/newUI/bwFace2.svg';
import bwFace3 from '../../assets/images/newUI/bwFace3.svg';
import bwFace4 from '../../assets/images/newUI/bwFace4.svg';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

export default class GettingStarted extends Component {
    render() {
        return (
            <div className='flex justify-around rounded-bl-[10rem] w-full min-h-screen' style={{ backgroundColor: '#212121' }}>
                <img src={GreenBox} alt="" className="greenBox" />
                <div className="greenDesc">
                    <h1>Chandan<span style={{ display: 'block', marginTop: "-1%", color: '#00E467' }}> Das</span></h1>
                    <p className='fw-lighter fs-6'>Blockchain Developer</p>
                </div>
                <img src={bwFace} alt="" className="h-42" />
                <img src={bwFace2} alt="" className="h-42" />
                <img src={bwFace3} alt="" className="h-42" />
                <img src={bwFace4} alt="" className="h-42" />
            </div>
        )
    }
} 
