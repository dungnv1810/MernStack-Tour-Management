import React from "react";
import classNames from "classnames/bind";


import styles from "./Services.module.scss"
const cx = classNames.bind(styles)
const ServicesCard = ({item}) => {
    const {imgUrl, title, desc} = item
    return(
        <>
            <div className={cx('service_item')}>
                <div className={cx('service_img')}>
                    <img src={imgUrl} alt=''/>
                </div>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </>
    )
}
export default ServicesCard;