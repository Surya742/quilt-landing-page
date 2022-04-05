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
        { title: "Home", link: "/" },
        { title: "About", link: "/" },
        { title: "Roadmap", link: "/" },
      ],
      grid2: [
        { title: "Our Story", link: "/" },
        { title: "Team", link: "/" },
        { title: "Blog", link: "/" },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer" : "footer"} style={{ backgroundColor: "#212121" }}>
          <Container>
            <Row>
              <Col
                lg="6"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link to="" className="logo-footer">
                  <img src={QuiltLogo} height="38" alt="" />
                </Link>

                <h2 className="foot-head">Join our <span style={{ color: "#00E467" }}>community</span></h2>
                <p className="foot-p">Lorem ipsum dolor sit amet. Ut excepturi deserunt qui veritatis quisquam aut quidem adipisci ut inventore.</p>

                <ul className={this.props.isLight ? "list-unstyled social-icon social mb-0 m t-4" : "list-unstyled social-icon foot-social-icon mb-0 mt-4"}>

                  <li className="list-inline-item me-1">
                    <a href="https://medium.com/@quilt.chat" className="icon-hover rounded" target="_blank"
                      style={{ backgroundColor: "#00E467" }}>
                      <FaMediumM className="fea icon-sm fea-social text-dark" />
                    </a>
                  </li>

                  <li className="list-inline-item me-1">
                    <a href="https://github.com/quilt-dao" className="icon-hover rounded" target="_blank"
                      style={{ backgroundColor: "#00E467" }}>
                      <FaGithub
                        icon="github"
                        className="fea icon-sm fea-social text-dark"
                      />
                    </a>
                  </li>

                  <li className="list-inline-item me-1">
                    <a href="https://twitter.com/Quilt_chat" target="_blank" className="icon-hover rounded"
                      style={{ backgroundColor: "#00E467" }}>
                      <FaTwitter
                        icon="twitter"
                        className="fea icon-sm fea-social text-dark"
                      />
                    </a>
                  </li>

                  <li className="list-inline-item me-1">
                    <a href="https://discord.gg/u3RjUUwm5J" target="_blank" className="icon-hover   rounded"
                      style={{ backgroundColor: "#00E467" }}>
                      <FaDiscord
                        icon="discord"
                        className="fea icon-sm fea-social text-dark"
                      />
                    </a>
                  </li>

                </ul>
                <p style={{ color: "#00E467", fontSize: "15px", marginTop: "5%" }}>Copyright © 2022 Quilt.chat</p>
              </Col>

            </Row>
            <Row className="foot-list">
              <Col
                lg="3"
                md="3"
                xs="6"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-light" : "text-foot"
                        }
                      >
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="3"
                md="3"
                xs="6"
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-light" : "text-foot"
                        }
                      >
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>

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
