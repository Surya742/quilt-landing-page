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
                <section className="bg-home d-flex align-items-center rounded-bl-[5rem] lg:rounded-bl-[15rem]" style={{ backgroundColor: '#212121' }}>
                    <Container>
                        <div className="title-heading text-left mt-5 pt-4 relative z-20">
                            <img src={MsgFrame} className="h-[350px] absolute -top-[7rem] left-8 blur-[2px] md:h-[475px] lg:h-[738px] lg:left-0 2xl:-left-40 lg:-top-[15rem]" alt="" />
                            <h4 className="text-white font-bold relative left-20 z-20 bottom-20 hero-heading md:bottom-[3rem] md:left-18 2xl:-left-20 lg:bottom-[8rem]">Making <br /> Blockchain <br /> Social</h4>
                        </div>
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
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}//Messaging made
// Secure on the Blockchain style={{backgraoundImages:"url( 