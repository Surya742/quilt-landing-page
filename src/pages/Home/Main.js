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
      <React.Fragment style={{backgroundColor: "white"}}>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <img src={TiltLaptop} className="main-ill lappy" alt="" />
              <img src={HollowCube} className="lappy-cube" alt="" />
            </Col>

            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <img src={BlackStrip} className="black-strip" alt="" />
              <img src={GreenStrip} className="green-strip" alt="" />
              <div className="section-title">
                <h1 className="first-title">An encrypted</h1>
                <h1 className="first-title-2">social protocol</h1>
                <p className="text-dark first-title-3">We provide a human element to the blockchain by allowing users to socialise and transact, securely and anonymously across the crypto space.</p>
                
                <a
                  href="https://medium.com/@quilt.chat"
                  className="mt-3 h6 btn btn-default btn-pills btn-11"
                >
                  Launch App
                </a>
              </div>
            </Col>
          </Row>
        </Container>

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
