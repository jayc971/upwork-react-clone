import React from 'react';
import {star} from "../../assets";
import {Container, Row, Col} from "reactstrap";

export default function BrowseByCategory() {
    return(<>
        <Container><Row >
        <Col>
        <div className="section_2_header">
        <h3>Browse talent by category</h3>
        <div>
            <p>Looking for work?</p>
            <a href="#0" className={"primary-color"}> Browse jobs</a>
        </div>
    </div></Col></Row ><Row>
            <Col lg={3} xl={3} md={4} xs={6}>
            <div className="section_2_categories_tile m-3">
                <h4>Development & IT</h4>
                <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
                    <span> 1,853 skills </span>
                </div>
            </div></Col> <Col lg={3} xl={3} md={4} xs={6}>
            <div className="section_2_categories_tile m-3">
                <h4>Design & Creative</h4>
                <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
                    <span> 968 skills </span>
                </div>
            </div></Col> <Col lg={3} xl={3} md={4} xs={6}>
            <div className="section_2_categories_tile m-3">
                <h4>Sales & Marketing</h4>
                <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
                    <span> 392 skills </span>
                </div>
            </div></Col> <Col lg={3} xl={3} md={4} xs={6}>
            <div className="section_2_categories_tile m-3">
                <h4>Writing & Translation</h4>
                <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
                    <span> 505 skills </span>
                </div>
            </div></Col> <Col lg={3} xl={3} md={4} xs={6}>
            <div className="section_2_categories_tile m-3">
                <h4>Admin & Customer Support</h4>
                <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
                    <span> 508 skills </span>
                </div>
            </div></Col> <Col lg={3} xl={3} md={4} xs={6}>
            <div className="section_2_categories_tile m-3">
                <h4>Finance & Accounting</h4>
                <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
                    <span> 214 skills </span>
                </div>
            </div></Col> <Col lg={3} xl={3} md={4} xs={6}>
            <div className="section_2_categories_tile m-3">
                <h4>Engineering & Architecture</h4>
                <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
                    <span> 650 skills </span>
                </div>
            </div></Col> <Col lg={3} xl={3} md={4} xs={6}>
            <div className="section_2_categories_tile m-3">
                <h4>Legal</h4>
                <div>
            <span>
              <img src={star} alt="star"/>
              4.85/5
            </span>
                    <span> 133 skills </span>
                </div>
            </div>
        </Col> </Row > </Container></>)
}