import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';
//import images
import LaptopChat from '../../assets/images/Laptop.png';
import { Col, Container, Row } from 'reactstrap';
import Chat_laptop from '../../assets/images/Chat_laptop.svg';
import QuiltStep3 from '../../assets/images/Quilt_Steps_S3.svg';
import TiltLaptop from '../../assets/images/newUI/laptop-1.svg';
import HollowCube from '../../assets/images/newUI/hollowCube.svg';
import BlackStrip from '../../assets/images/newUI/black-strip.svg';
import GreenStrip from '../../assets/images/newUI/green-strip.svg';
import sliderRec from '../../assets/images/newUI/slider-1-rec.svg';
import sliderFolder from '../../assets/images/newUI/slider-1-folder.svg';
import '../../assets/css/newUI/title1.css';


export default class Main extends Component {
  render() {
    return (
      <React.Fragment style={{ backgroundColor: "white" }}>
        <div className="mt-100 mt-60 md:h-screen grid grid-cols-1 w-screen justify-items-end items-center lg:grid-cols-2 px-4 py-8">
          <div className='justify-self-end relative'>
            <img src={TiltLaptop} className="lg:h-[711px] -rotate-6" alt="" />
            <img src={HollowCube} className="lappy-cube" alt="" />

            {/* <img src={BlackStrip} className="black-strip" alt="" />
            <img src={GreenStrip} className="green-strip" alt="" /> */}
          </div>

          <div className="section-title text-left justify-self-start">
            <h1 className="main-heading">An encrypted<div className='main-highlighted-text'>social protocol</div></h1>
            <h1 className="first-title-2"></h1>
            <p className="font-medium text-[25px] lg:w-[40ch] main-paragraph text-center lg:text-left mt-16 lg:mt-12">We provide a human element to the blockchain by allowing users to socialise and transact, securely and anonymously across the crypto space.</p>

            <div className='flex justify-center lg:block'>
              <a
                href="https://medium.com/@quilt.chat"
                className="mt-3 h6 btn btn-default btn-pills btn-11 p-8 main-cta"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>

        {/* <Container className="mt-100 mb-100">
          <Row className="">

            <Carousel className="carousel-body">
              <Carousel.Item>
                <img
                  className="silder-rec"
                  src={sliderRec}
                  alt="First slide"
                />
                <img
                  className="slider-folder"
                  src={sliderFolder}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="silder-rec"
                  src={sliderRec}
                  alt="Second slide"
                />
                <img
                  className="slider-folder"
                  src={sliderFolder}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="silder-rec"
                  src={sliderRec}
                  alt="Third slide"
                />
                <img
                  className="slider-folder"
                  src={sliderFolder}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
          </Row>
        </Container> */}
      </React.Fragment>
    );
  }
}
