import React from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";

import styles from "./CommonSection.module.scss"
const cx = classNames.bind(styles)
const CommonSection = ({title}) => {
    return(
        <>
            <section className={cx('common_section')}>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h1>{title}</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default CommonSection