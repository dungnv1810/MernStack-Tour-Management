import React, {useRef, useState} from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";

import avatar from "../../assets/images/avatar.jpg"
import tourData from "../../assets/data/tours"
import calculateAvgRating from "../../Unils/avgRaiting"
import Booking from "../Booking/Booking";
import styles from "../../Styles/ToursDetails.module.scss"
const cx = classNames.bind(styles)
const ToursDetails = () => {
    const {id} = useParams()
    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating] = useState(null)

    const tour = tourData.find(tour => tour.id === id)
    const {photo, title, desc, price, reviews, city, distance, maxGroupSize, address} = tour
    const {totalRaiting, avgRating} = calculateAvgRating(reviews)
    // format date
    const options = {day: 'numeric', month: 'long', year: 'numeric'}
    
    const submitHandler = e => {
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value
        alert(`${tourRating}, ${reviewText}`)
    }
    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <div className={cx('tour_content')}>
                                <img src={photo} alt=''/>
                                <div className={cx('tour_info')}>
                                    <h2>{title}</h2>
                                    <div className={cx('d-flex align-items-center gap-5')}>
                                    <span className={cx('tour_lacation', 'tour_rating')}>
                                        <i className="ri-star-fill" style={{color:"var(--secondary-color)"}}></i>
                                        {avgRating === 0 ? null : avgRating}

                                        {totalRaiting === 0 ? (
                                            "Not rated"
                                        )  : (
                                            <span>{reviews.length}</span>
                                        )}  
                                    </span>
                                    <span>
                                        <i className="ri-map-pin-user-fill"></i>{address}
                                    </span>
                                    </div>
                                    <div className={cx('tour_extra-details')}>
                                        <span><i className="ri-map-pin-2-line"></i>{city}</span>
                                        <span><i className="ri-money-dollar-circle-line"></i> ${price}  / per person</span>
                                        <span><i className="ri-map-pin-time-line"></i> {distance}  k/m</span>
                                        <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                                    </div>
                                    <h5>Desciption</h5>
                                    <p>{desc}</p>
                                </div>
                                <div className={cx('tour_reviews', 'mb-4')}>
                                    <h4>Reviews ({reviews.length}) reviews</h4>
                                    <Form onSubmit={submitHandler}>
                                        <div className={cx('d-flex align-item-center gap-3 mb-4', 'rating_group')}>
                                            <span onClick={()=>setTourRating(1)}>1 <i className="ri-star-fill"></i></span>
                                            <span onClick={()=>setTourRating(2)}>2 <i className="ri-star-fill"></i></span>
                                            <span onClick={()=>setTourRating(3)}>3 <i className="ri-star-fill"></i></span>
                                            <span onClick={()=>setTourRating(4)}>4 <i className="ri-star-fill"></i></span>
                                            <span onClick={()=>setTourRating(5)}>5 <i className="ri-star-fill"></i></span>
                                        </div>
                                        <div className={cx('review_input')}>
                                            <input
                                                type='text'
                                                ref={reviewMsgRef}
                                                placeholder="share your thoughts"
                                                required
                                            />
                                            <button className={cx('btn', 'primary_btn')} type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </Form>

                                    <ListGroup className={cx('user_reviews')}>
                                        {
                                            reviews.map((reviews, index) => {
                                                return(
                                                    <div key={index} className={cx('reviews_item')}>
                                                        <img src={avatar} alt=""/>
                                                        <div className={cx('w-100')}>
                                                            <div className={cx('d-flex align-items-center justify-content-between')}>
                                                                <div>
                                                                    <h5>muhib</h5>
                                                                    <p>{new Date('01-18-2023').toLocaleDateString('en-Us', options)}</p>
                                                                </div>
                                                                <span className={cx('d-flex align-items-center')}>
                                                                    5 <i className="ri-star-fill"></i>
                                                                </span>
                                                            </div>
                                                            <h6>Amazing tour</h6>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        <Col lg='4'>
                            <Booking tour={tour} avgRating={avgRating}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default ToursDetails;