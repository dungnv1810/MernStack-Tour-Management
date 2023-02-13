import React from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";

import heroImg01 from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import worldImg from "../../assets/images/world.png";
import Subtitle from "../../Shared/Subtitle";
import SearchBar from "../../Shared/SearchBar";
import Services from "../../Services/Services";
import FeaturedTours from "../FeaturedTours/FeaturedTours";
import experienceImg from "../../assets/images/experience.png";
import MasonryImagesGallery from "../ImageGallery/MasonryImagesGallery";
import Testimonial from "../Testimonial/Testimonial";
import Newsletter from "../../Shared/Newsletter";

import styles from "../../Styles/Home.module.scss"
const cx = classNames.bind(styles)
const Home = () => {
    return(
        <>
            <section className={cx('hero_section_start')}>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className={cx('hero_content')}>
                                <div className={cx('hero_subtitle')}>
                                    <Subtitle subtitle={'Know Before You Go'}/>
                                    <img src={worldImg} alt=''/>
                                </div>
                                <h1>Traveling opens the do to cresting
                                    <span className={cx('hoghlight')}> memories</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Facilis saepe id voluptas molestiae. Aperiam corrupti
                                    voluptas earum at molestiae neque!
                                    Aut saepe voluptatum earum delectus deserunt id iste,
                                    quas officiis et repellat!
                                </p>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className={cx('hero_img-box')}>
                                <img src={heroImg01} alt=''/>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className={cx('hero_img-box', 'mt-4')}>
                                <video src={heroVideo} alt='' controls/>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className={cx('hero_img-box', 'mt-5')}>
                                <img src={heroImg02} alt=''/>
                            </div>
                        </Col>
                        <SearchBar/>
                    </Row>
                </Container>
            </section>
            {/*  */}
            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className={cx('services_subtitle')}>What we serve</h5>
                            <h2 className={cx('services_title')}>We offer our best services</h2>
                        </Col>
                        <Services/>
                    </Row>
                </Container>
            </section>
            {/*  */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className={cx('mb-5')}>
                            <Subtitle subtitle={'Explore'}/>
                            <h2 className={cx('featured_tour_title')}>
                                Our featured tours
                            </h2>
                        </Col>
                        <FeaturedTours/>
                    </Row>
                </Container>
            </section>
            {/*  */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className={cx('experience_content')}>
                                <Subtitle subtitle={'Experience'}/>
                                <h2>With our all experience <br/> we will serve you</h2>
                                <p>
                                    Lorem issum dolor sit amet, consectetur adipisicing alit.
                                    <br/>
                                    Quas aliquam, hic tempora inventore suscipit unde
                                </p>
                            </div>
                            <div className={cx('counter_wrapper')}>
                                <div className={cx('counter_box')}>
                                    <span>12k+</span>
                                    <h6>Successful trip</h6>
                                </div>
                                <div className={cx('counter_box')}>
                                    <span>2k+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className={cx('counter_box')}>
                                    <span>15</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className={cx('experience_img')}>
                                <img src={experienceImg} alt=''/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*  */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Gallery'}/>
                            <h2 className={cx('gallery_title')}>
                                Visit our customers tour gallery
                            </h2>
                        </Col>
                        <Col lg='12'>
                            <MasonryImagesGallery/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*  */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Fans Love'}/>
                            <h2 className={cx('testimonial_title')}>
                                What our fans say about us
                            </h2>
                        </Col>
                        <Col lg='12'>
                            <Testimonial/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*  */}
            <Newsletter/>
        </>
    )
}
export default Home;