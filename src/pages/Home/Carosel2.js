import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';
//import images
import { Container, Row } from 'reactstrap';
import lappyCarosel from '../../assets/images/newUI/lappyCarosel.svg';
import '../../assets/css/newUI/title1.css';


export default class Carosel2 extends Component {
  render() {
    return (
      <React.Fragment style={{ backgroundColor: "white" }}>

        <Container className="mt-100 mb-100">
          <Row className="">

            <Carousel className="carousel-body2" variant="dark">
              <Carousel.Item>
                <Carousel.Caption className="desc-box2">
                  <h3 className="slider-head2"><span style={{ fontSize: '40px', color: 'black', fontWeight: 'bold' }}>Connect your Wallet</span></h3>
                  <p className="slider-desc2" style={{ color: "black" }}>We are live on Polygon testnet.</p>
                  <a
                    href="https://app.quilt.chat/"
                    target="_blank"
                    className="mt-3 h6 btn btn-default btn-pills btn-11"
                  >
                    Try it now
                  </a>
                </Carousel.Caption>
                <img
                  className="slider-folder2"
                  src={lappyCarosel}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption className="desc-box2">
                  <h3 className="slider-head2"><span style={{ fontSize: '40px', color: 'black', fontWeight: 'bold' }}>Find your friends</span></h3>
                  <p className="slider-desc2" style={{ color: "black" }}>Search you friends via their wallet.</p>
                  <a
                    href="https://app.quilt.chat/"
                    target="_blank"
                    className="mt-3 h6 btn btn-default btn-pills btn-11"
                  >
                    Try it now
                  </a>
                </Carousel.Caption>
                <img
                  className="slider-folder2"
                  src={lappyCarosel}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption className="desc-box2">
                  <h3 className="slider-head2"><span style={{ fontSize: '40px', color: 'black', fontWeight: 'bold' }}>Chat with them</span></h3>
                  <p className="slider-desc2" style={{ color: "black" }}>Every message you send is encrypted. Now you don't have to worry about privacy.</p>
                  <a
                    href="https://app.quilt.chat/"
                    target="_blank"
                    className="mt-3 h6 btn btn-default btn-pills btn-11"
                  >
                    Try it now
                  </a>
                </Carousel.Caption>
                <img
                  className="slider-folder2"
                  src={lappyCarosel}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>

          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
