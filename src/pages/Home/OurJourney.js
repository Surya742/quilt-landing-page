import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import '../../assets/css/newUI/title1.css';

import Roadmap from '../../assets/images/newUI/Roadmap.png';
import more from '../../assets/images/newUI/more.svg';
import line from '../../assets/images/newUI/line.svg';
//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

export default class OurJourney extends Component {
    render() {
        return (
            <React.Fragment>
                    <Row className="d-flex justify-content-center p-5">
                        <h1 className="Jour-head">Our Journey</h1>
                        <img src={Roadmap} alt="" className="Jour-road" />
                        <img src={more} alt="" className="Jour-more" />
                        <img src={line} alt="" className="Jour-line" />
                    </Row>
            </React.Fragment>
        )
    }
}
