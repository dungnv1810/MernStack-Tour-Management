import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Newsletter from "../../Shared/Newsletter";

import styles from "../../Styles/ThankYou.module.scss"
const cx = classNames.bind(styles)
const ThankYou = () => {
    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className={cx('pt-5 pb-5 text-center')}>
                            <div className={cx('thank_you')}>
                                <span><i class="ri-checkbox-circle-line"></i></span>
                                <h1 className={cx('mb-3 fw-semibold')}>Thank You</h1>
                                <h3 className={cx("mb-3")}>your tour is booked</h3>
                                <Button className={cx('w-25', 'primary_btn')}>
                                    <Link to='/home'>
                                        Back to Home
                                    </Link>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className={cx('newsletter')}><Newsletter/></div>
        </>

    )
}
export default ThankYou