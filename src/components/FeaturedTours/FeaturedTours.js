import React from "react";
import classNames from "classnames/bind";
import TourCard from "../../Shared/TourCard";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";

import styles from "./FeaturedTours.module.scss"
const cx = classNames.bind(styles)
const FeaturedTours = () => {
    return(
        <>
            {
                tourData.map((item, index) => {
                    return(
                        <Col key={item.id} lg='3' className={cx('mb-4')}>
                            <TourCard tours={item}/>
                        </Col>
                    )
                }) 
            }
        </>
    )
}
export default FeaturedTours