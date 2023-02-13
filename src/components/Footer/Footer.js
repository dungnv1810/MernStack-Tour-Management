import React from "react"
import classNames from "classnames/bind"
import { Container, Row, Col, List, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from "react-router-dom"

import logo from "../../assets/images/logo.png"
import styles from "./Footer.module.scss"
const cx = classNames.bind(styles)

const nav_link1 = [
    {
        id: 1,
        path: '/home',
        display: 'Home'
    },
    {
        id: 2,
        path: '/about',
        display: 'About'
    },
    {
        id: 3,
        path: 'tours',
        display: 'Tours'
    },
]

const nav_link2 = [
    {
        id: 1,
        path: '/gallery',
        display: 'Gallery'
    },
    {
        id: 2,
        path: '/login',
        display: 'Login'
    },
    {
        id: 3,
        path: '/register',
        display: 'Register'
    },
]
const Footer = () => {
    const year = new Date().getFullYear()
    return(
        <section className={cx('footer')}>
            <footer>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <div className={cx('logo')}>
                                <img src={logo} alt=""/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.</p>
                                <div className={cx('social_links')}>
                                    <span>
                                        <Link to='#'>
                                            <i className="ri-youtube-line"></i>
                                        </Link>
                                    </span>
                                    <span>
                                        <Link to='#'>
                                            <i className="ri-github-fill"></i>
                                        </Link>
                                    </span>
                                    <span>
                                        <Link to='#'>
                                            <i className="ri-facebook-circle-line"></i>
                                        </Link>
                                    </span>
                                    <span>
                                        <Link to='#'>
                                            <i className="ri-instagram-line"></i>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3'>
                            <h5 className={cx('footer_link-title')}>Discover</h5>
                            <ListGroup className={cx('footer_quick-links')}>
                                {
                                    nav_link1.map((item, index) => {
                                        return(
                                            <ListGroupItem key={item.id} className={cx('ps-0 border-0', 'footer_contact')}>
                                                <Link to={item.path}>{item.display}</Link>
                                            </ListGroupItem>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                        <Col lg='3'>
                            <h5 className={cx('footer_link-title')}>Quick Links</h5>
                            <ListGroup className={cx('footer_quick-links')}>
                                {
                                    nav_link2.map((item, index) => {
                                        return(
                                            <ListGroupItem key={item.id} className={cx('ps-0 border-0', 'footer_contact')}>
                                                <Link to={item.path}>{item.display}</Link>
                                            </ListGroupItem>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                        <Col lg='3'>
                            <h5 className={cx('footer_link-title')}>Contact</h5>
                            <ListGroup className={cx('footer_quick-links')}>
                                <ListGroupItem className={cx('ps-0 border-0 gap-3', 'footer_contact')}>
                                    <h6 className={cx('mb-0 d-flex align-items-center gap-1')}>
                                        <span>
                                            <i className="ri-map-pin-line"></i>
                                        </span>
                                        Address:
                                    </h6>
                                    <p className={cx('mb-0')}>HaNoi, VietNam</p>
                                </ListGroupItem>
                                <ListGroupItem className={cx('ps-0 border-0 gap-3', 'footer_contact')}>
                                    <h6 className={cx('mb-0 d-flex align-items-center gap-1')}>
                                        <span>
                                            <i className="ri-mail-line"></i>
                                        </span>
                                        Email:
                                    </h6>
                                    <p className={cx('mb-0')}> dungcoi459@gmail.com</p>
                                </ListGroupItem>
                                <ListGroupItem className={cx('ps-0 border-0 gap-3', 'footer_contact')}>
                                    <h6 className={cx('mb-0 d-flex align-items-center gap-1')}>
                                        <span>
                                            <i className="ri-phone-line"></i>
                                        </span>
                                        Phone:
                                    </h6>
                                    <p className={cx('mb-0')}> 03456 303 66</p>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg='12' className={cx('text-center pt-5')}>
                            <p className={cx('copyright')}>
                                Coppyright {year}, design and develop by Muhibur Rahman. All
                                right reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </section>
    )
}
export default Footer;