import React from "react";
import classNames from "classnames/bind";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
import ServicesCard from "./ServicesCard";
import styles from "./Services.module.scss"
const cx = classNames.bind(styles)

const servicesData = [
    {
        id: 1,
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectertur adipisicing edit"
    },
    {
        id: 2,
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectertur adipisicing edit"
    },
    {
        id: 2,
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet, consectertur adipisicing edit"
    },
]
const Services = () => {
    return(
        <>
            {
                servicesData.map((item, array, index) => {
                    return(
                        <Col lg='3' key={item.id}>
                            <ServicesCard item={item}/>
                        </Col>
                    )
                })
            }
        </>
    )
}
export default Services;