import React from "react";
import classNames from "classnames/bind";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import galleryImages from "./ImageGallery";
import styles from "./ImageGallery.module.scss";
const cx = classNames.bind(styles)
const MasonryImagesGallery = () => {
    return(
        <>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 3, 992: 4}}>
                <Masonry gutter="1rem">
                    {
                        galleryImages.map((item, index) => {
                            return(
                                <img 
                                    key={index} 
                                    src={item} 
                                    alt=''
                                    className={cx('images')}    
                                />
                            )
                        })
                    }
                </Masonry>
            </ResponsiveMasonry>
        </>
    )
}
export default MasonryImagesGallery