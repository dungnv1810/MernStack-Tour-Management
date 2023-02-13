import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import classNames from "classnames/bind";

import tourData from "../../assets/data/tours"
import TourCard from "../../Shared/TourCard"
import SearchBar from "../../Shared/SearchBar";
import Newsletter from "../../Shared/Newsletter"
import CommonSection from "../../Shared/CommonSection";
import styles from "../../Styles/Tours.module.scss";
const cx = classNames.bind(styles) 
const Tours = () => {
    const [pageCount, setPageCount] = useState(0)
    const [pages, setPages] = useState(0)
    useEffect(()=>{
        const pages = Math.ceil(5/ 2)
        setPageCount(pages)
    },[pages])

    return(
        <>
            <CommonSection title={'All Tours'}/>
            <section className={cx('searchbar')}>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <SearchBar/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={cx('tourcard')}>
                <Container>
                    <Row>
                        {
                            tourData.map(tour => {
                                return(
                                    <Col lg='3'>
                                        <TourCard key={tour.id} tours={tour}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Col lg='12'>
                        <div className={cx('pagination', 'd-flex align-items-center justify-content-center mt-4 gap-3')}>
                            {[...Array(pageCount).keys()].map(number =>{
                                return(
                                    <span key={number} onClick={()=>setPages(number)}
                                        className={pages === number ? cx('active_page') : ''}
                                    >
                                        {number + 1}
                                    </span>
                                )
                            })}
                        </div>
                    </Col>
                </Container>
            </section>
            <Newsletter/>
        </>
    )
}
export default Tours;