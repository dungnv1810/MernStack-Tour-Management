import React from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import avata01 from "../../assets/images/ava-1.jpg";
import avata02 from "../../assets/images/ava-2.jpg";
import avata03 from "../../assets/images/ava-3.jpg";

import styles from "./Testimonial.module.scss"
const cx = classNames.bind(styles)
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        response: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return(
        <>
            <Slider {...settings}>
                <div className={cx('py-4 px-3', 'testimonial')}>
                    <p>
                        Lorem ipsum dolor sit amet consecterur adipisicing alit. Minus sit,
                        explicabo provident hic distinctio ,olestias voluptates nobis alias
                        placeat suscipit earum debitis recusandae voluptate illum expedita
                        corrupti aliquid doloribus delectus?
                    </p>
                    <div className={cx('d-flex align-items-center gap-4 mt-3')}>
                        <img src={avata01} alt='' className={cx('w-25 h-25 rounded-2')}/>
                        <div>
                            <h6 className={cx('mb-0 mt-3')}>John Doe</h6>
                            <p>Customers</p>
                        </div>
                    </div>
                </div>
                <div className={cx('py-4 px-3', 'testimonial')}>
                    <p>
                        Lorem ipsum dolor sit amet consecterur adipisicing alit. Minus sit,
                        explicabo provident hic distinctio ,olestias voluptates nobis alias
                        placeat suscipit earum debitis recusandae voluptate illum expedita
                        corrupti aliquid doloribus delectus?
                    </p>
                    <div className={cx('d-flex align-items-center gap-4 mt-3')}>
                        <img src={avata02} alt='' className={cx('w-25 h-25 rounded-2')}/>
                        <div>
                            <h6 className={cx('mb-0 mt-3')}>Lia Franklin</h6>
                            <p>Customers</p>
                        </div>
                    </div>
                </div>
                <div className={cx('py-4 px-3', 'testimonial')}>
                    <p>
                        Lorem ipsum dolor sit amet consecterur adipisicing alit. Minus sit,
                        explicabo provident hic distinctio ,olestias voluptates nobis alias
                        placeat suscipit earum debitis recusandae voluptate illum expedita
                        corrupti aliquid doloribus delectus?
                    </p>
                    <div className={cx('d-flex align-items-center gap-4 mt-3')}>
                        <img src={avata03} alt='' className={cx('w-25 h-25 rounded-2')}/>
                        <div>
                            <h6 className={cx('mb-0 mt-3')}>John Doe</h6>
                            <p>Customers</p>
                        </div>
                    </div>
                </div>
                <div className={cx('py-4 px-3', 'testimonial')}>
                    <p>
                        Lorem ipsum dolor sit amet consecterur adipisicing alit. Minus sit,
                        explicabo provident hic distinctio ,olestias voluptates nobis alias
                        placeat suscipit earum debitis recusandae voluptate illum expedita
                        corrupti aliquid doloribus delectus?
                    </p>
                    <div className={cx('d-flex align-items-center gap-4 mt-3')}>
                        <img src={avata02} alt='' className={cx('w-25 h-25 rounded-2')}/>
                        <div>
                            <h6 className={cx('mb-0 mt-3')}>John Doe</h6>
                            <p>Customers</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}
export default Testimonial