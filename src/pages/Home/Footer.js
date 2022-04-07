import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import { FaMediumM, FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
//Import Images
import logolight from "../../assets/images/Quilt.svg";
import logodark from "../../assets/images/Quilt.svg";
//Import Icons
import SubscribeFrom from "react-mailchimp-subscribe";
import QuiltLogo from '../../assets/images/newUI/quilt-new-logo.svg';
import '../../assets/css/newUI/title1.css';


class Footer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "Home", link: "#home" },
        { title: "About", link: "#main" },
        { title: "Roadmap", link: "#journey" },
      ],
      grid2: [
        { title: "Features", link: "#features" },
        { title: "Team", link: "#team" },
        { title: "Blog", link: "https://medium.com/@quilt.chat", target: "_blank" },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <footer className="rounded-tr-[5rem] footer" style={{ backgroundColor: "#212121" }}>
          <Container>
            <Link to="/" className="logo-footer">
              <img src={QuiltLogo} height="38" alt="" />
            </Link>
            <div className='grid grid-cols-1 lg:grid-cols-3 w-full'>
              <div>
                <h2 className="foot-head">Join our <span style={{ color: "#00E467" }}>community</span></h2>
                <p className="foot-p">We are new team introducing world new level of messaging and encryption. Be believe Web 3.0 is much more secure then you think.</p>
                <div className='flex gap-2'>


                  <div className='flex justify-center items-center bg-green-500 p-2 rounded-md'>
                    <a href='' target="_blank">
                      <FaDiscord
                        icon="discord"
                        className="fea fea-social text-black"
                        size={25}
                      />
                    </a>
                  </div>

                  <div className='flex justify-center items-center bg-green-500 p-2 rounded-md'>
                    <a href='' target="_blank">
                      <FaTwitter
                        icon="twitter"
                        className="fea fea-social text-black"
                        size={25}
                      />
                    </a>
                  </div>

                  <div className='flex justify-center items-center bg-green-500 p-2 rounded-md'>
                    <a href='https://medium.com/@quilt.chat/about-us-a1ec33dc5cdf' target="_blank">
                      <FaMediumM
                        icon="medium"
                        className="fea fea-social text-black"
                        size={25}
                      />
                    </a>
                  </div>
                </div>
                <p style={{ color: "#00E467", fontSize: "15px", marginTop: "5%" }}>Copyright © 2022 Quilt.chat</p>
              </div>
              <div>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <a href={grid.link} target={grid.target} className='text-light'>
                        {grid.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <a href={grid.link} target={grid.target} className='text-light'>
                        {grid.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </Container>
        </footer>
        {/* <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="8">
                <div className="text-sm-start text-light">
                  <p className="mb-0">
                    © 2022 quilt.
                  </p>
                </div>
              </Col>

            </Row>
          </Container>
        </footer> */}
      </React.Fragment>
    );
  }
}
export default Footer;
