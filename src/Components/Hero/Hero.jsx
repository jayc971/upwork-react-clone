import React from 'react';
import {airbnb, bissell, image_1, microsoft} from "../../assets";
import {Container, Row, Col, Button} from "reactstrap";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <Container><Row className={" d-flex justify-content-between"}><Col  style={{marginTop: '15rem'}} xs={12} sm={6} md={6} lg={6} xl={6}>
                <h1  className={`${styles.hero__text} title-1 font-marcellus bold-font`}>
                    How work<br/>
                    should work
                </h1>
                <h3 className={`${styles.hero__sub_text} title-3 mb-5 mt-2`}>
                    Forget the old rules. You can have the best people.<br/>
                    Right now. Right here.
                </h3>
                <div className="section_1_bottom_left_btns">
                    <button className={styles.hero__btn}>Get Started
                    </button>

                </div>
                <div className="section_1_bottom_left_companies_logo">
                    <h4 className="title-4">Trusted by</h4>
                    <div>
                        <img src={microsoft} alt=""/>
                        <img src={airbnb} alt=""/>
                        <img src={bissell} alt=""/>
                    </div>
                </div>
            </Col>
            <Col  style={{marginTop: '15rem'}} xs={12} sm={6} md={6} lg={6} xl={4}>
                <img className={"w-100"} src={image_1} alt=""/>
            </Col>
        </Row></Container>
    )
}

export default Hero;