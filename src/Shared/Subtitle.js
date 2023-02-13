import React from "react";
import classNames from "classnames/bind";
import style from "./Subtitle.module.scss"
const cx = classNames.bind(style)
const Subtitle = ({subtitle}) => {
    return(
        <>
            <h3 className={cx('section_subtitle')}>
                {subtitle}
            </h3>
        </>
    )
}
export default Subtitle