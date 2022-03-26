import React, { Component } from 'react';
//import images
import LaptopChat from '../../assets/images/Laptop.png';
import { Col, Container, Row } from 'reactstrap';
import Chat_laptop from '../../assets/images/Chat_laptop.svg';
import QuiltStep3 from '../../assets/images/Quilt_Steps_S3.svg';
import TiltLaptop from '../../assets/images/newUI/laptop-1.svg';
import HollowCube from '../../assets/images/newUI/hollowCube.svg';
import BlackStrip from '../../assets/images/newUI/black-strip.svg';
import GreenStrip from '../../assets/images/newUI/green-strip.svg';
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

        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={7}
              md={6}
              className="order-2 order-md-1 mt-4 mt-sm-0 pt-sm-0"
            >
              <div className="section-title me-lg-5">
                <h4 className="title mb-4">WHY quilt</h4>
                <ul className="list-unstyled text-dark">
                  <li className="mb-0">
                    <span className="text-success h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    You <span className="text-success">Own</span> and{' '}
                    <span className="text-success">Control</span> Your{' '}
                    <span className="text-success">Data</span>
                  </li>
                  <li className="mb-0">
                    <span className="text-success h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    We are Built on Blockchain Technology
                  </li>
                  <li className="mb-0">
                    <span className="text-success h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    We Are Built Using <span className="text-success"></span>End
                    to <span className="text-success"></span>End Encryption{' '}
                  </li>
                  <li className="mb-0">
                    <span className="text-success h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    We Support NFT Trades, Crypto Transactions, and Community
                    Building
                  </li>
                </ul>
                <a
                  href="https://medium.com/@quilt.chat"
                  className="mt-3 h6 btn btn-success btn-pills"
                >
                  Find Out More <i className="uil uil-angle-right-b"></i>
                </a>
              </div>
            </Col>

            <Col lg={5} md={6} className="order-1 order-md-2">
              <img src={QuiltStep3} className="main-ill img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
