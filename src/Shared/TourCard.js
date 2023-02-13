import React from "react";
import classNames from "classnames/bind";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../Unils/avgRaiting";

import styles from "./TourCard.module.scss"
const cx = classNames.bind(styles)
const TourCard = ({tours}) => {
    const {id, title, photo, price, featured, reviews, city} = tours;
    const {totalRaiting, avgRating} = calculateAvgRating(reviews)

    return(
        <>
            <div className={cx('tour_card')}>
                <Card className={cx('card')}>
                    <div className={cx('tour_img')}>
                        <img src={photo} alt='tour-img'/>
                        {featured && <span>Featured</span>}
                    </div>
                    <CardBody>
                        <div className={cx('card_top')}>
                            <span className={cx('tour_lacation')}>
                                <i className="ri-map-pin-line"></i>
                                {city}
                            </span>
                            <span className={cx('tour_lacation', 'tour_rating')}>
                                <i className="ri-star-fill"></i>
                                {avgRating === 0 ? null : avgRating}

                                {totalRaiting === 0 ? (
                                    "Not rated"
                                )  : (
                                    <span>{reviews.length}</span>
                                )}
                                
                            </span>
                        </div>
                        <h5 className={cx('tour_title')}>
                            <Link to={`/tours/${id}`}>
                                {title}
                            </Link>
                        </h5>
                        <div className={cx('card_bootom')}>
                            <h5>${price} <span> /person</span></h5>
                            <button className={cx('btn', 'booking_btn')}>
                                <Link to={`/tours/${id}`}>Book Now</Link>
                            </button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}
export default TourCard