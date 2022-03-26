import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import MsgFrame from '../../assets/images/newUI/Msg-frame.svg';
import Cube1 from '../../assets/images/newUI/small-1-cube.svg';
import HollowCube from '../../assets/images/newUI/hollowCube.svg';
import '../../assets/css/newUI/Section.css';

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home d-flex align-items-center" style={{backgroundColor: '#212121'}}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={5} xs={12}>
                                <div className="title-heading text-left mt-5 pt-4" style={{width: '40%'}}>
                                    <img src={MsgFrame} className="MsgFrameBox" alt="" />
                                    <h4 className="heading fw-bolder text-light title-light mb-3">Making <h4 className="heading fw-bolder text-light title-light mb-3">Blockchain</h4><h4 className="heading fw-bolder text-light title-light mb-3"> Social</h4></h4>
                                </div>
                            </Col>
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />
                                <img src={HollowCube} className="Hollo1" alt="" />

                                <img src={Cube1} className="Cube1" alt="" />
                                <img src={Cube1} className="Cube1" alt="" />

                                <img src={Cube1} className="Cube2" alt="" />
                                <img src={Cube1} className="Cube2" alt="" />

                                <img src={Cube1} className="Cube3" alt="" />
                                <img src={Cube1} className="Cube3" alt="" />

                                <img src={Cube1} className="Cube4" alt="" />
                                <img src={Cube1} className="Cube4" alt="" />
                                
                                <img src={Cube1} className="Cube5" alt="" />
                                <img src={Cube1} className="Cube5" alt="" />

                                <img src={Cube1} className="Cube6" alt="" />
                                <img src={Cube1} className="Cube6" alt="" />

                                <img src={Cube1} className="Cube7" alt="" />
                                <img src={Cube1} className="Cube7" alt="" />
                            <Col lg={7} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}//Messaging made
// Secure on the Blockchain style={{backgraoundImages:"url( 