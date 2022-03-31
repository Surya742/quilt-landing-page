import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';
//import images
import { Container, Row } from 'reactstrap';
import sliderRec from '../../assets/images/newUI/slider-1-rec.svg';
import sliderFolder from '../../assets/images/newUI/slider-1-folder.svg';
import '../../assets/css/newUI/title1.css';


export default class Carosel extends Component {
  render() {
    return (
      <React.Fragment style={{backgroundColor: "black"}}>

        <Container className="mt-100 mb-100">
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
                <Carousel.Caption className="desc-box">
                  <h3 className="slider-head"><span style={{fontSize: '40px'}}>Own and control</span> <span style={{color: "#00E467", display: "inline-block", fontSize: "50px"}}>your data</span></h3>
                  <p className="slider-desc">We are built on decentralised storage technologies, ensuring that your data is safely stored on the blockchain, giving you the utmost control.</p>
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
                <Carousel.Caption className="desc-box">
                  <h3 className="slider-head"><span style={{fontSize: '40px'}}>Own and control</span> <span style={{color: "#00E467", display: "inline-block", fontSize: "50px"}}>your data</span></h3>
                  <p className="slider-desc">We are built on decentralised storage technologies, ensuring that your data is safely stored on the blockchain, giving you the utmost control.</p>
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
                <Carousel.Caption className="desc-box">
                  <h3 className="slider-head"><span style={{fontSize: '40px'}}>Own and control</span> <span style={{color: "#00E467", display: "inline-block", fontSize: "50px"}}>your data</span></h3>
                  <p className="slider-desc">We are built on decentralised storage technologies, ensuring that your data is safely stored on the blockchain, giving you the utmost control.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
