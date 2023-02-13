import React from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png"

import styles from "./Newsletter.module.scss";
const cx = classNames.bind(styles)
const Newsletter = () => {
    return(
        <>
            <section className={cx('newsletter')}>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className={cx('newsletter_content')}>
                                <h2>Subtitle now to get useful traveling information.</h2>
                                <div className={cx('newsletter_input')}>
                                    <input
                                        type='email'
                                        placeholder="Enter your email"
                                    />
                                    <button className={cx('btn', 'newsletter_btn')}>
                                        Subscribe
                                    </button>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consecterur adipisicing elit.
                                    Obcaecati adipisici sunt in, provident facere ipsam.
                                </p>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className={cx('newsletter_img')}>
                                <img src={maleTourist} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Newsletter