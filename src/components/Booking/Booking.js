import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import classNames from "classnames/bind";

import styles from "./Booking.module.scss";
const cx = classNames.bind(styles)
const Booking = ({ tour, avgRating }) => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'dungcoi459@gmail.com',
        fullName: '',
        phone: '',
        bookAt: '',
        guestSize: 1
    })
    const handlesChange = e => {
        setCredentials(prev => ({...prev, [e.target.id] : e.target.value}))
    }
    const handleClick = e => {
        e.preventDefault()
        navigate('/thank-you')
    }
    const { price, reviews } = tour
    const serviceFree = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) * Number(serviceFree)
    return ( 
        <>
            <div className={cx("booking")}>
                <div className={cx("booking_top")}>
                    <h3>${price} <span>/ per persion</span></h3>
                    <span className={cx('tour_lacation', 'tour_rating')}>
                        <i className="ri-star-fill" style={{color:"var(--secondary-color)"}}></i>
                        {avgRating === 0 ? null : avgRating}
                        ({reviews.length})
                    </span>
                </div>
                <div className={cx("booking_form")}>
                    <h5>Infomation</h5>
                    <Form className={cx("booking_info=form")} onSubmit={handleClick}>
                        <FormGroup>
                            <input
                                type='text'
                                placeholder="Full Name"
                                id="fullName"
                                required
                                onChange={handlesChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <input
                                type='number'
                                placeholder="Phone"
                                id="phone"
                                required
                                onChange={handlesChange}
                            />
                        </FormGroup>
                        <FormGroup className={cx('d-flex align-items-center gap-3')}>
                            <input
                                type='date'
                                placeholder=""
                                id="bookAt"
                                required
                                onChange={handlesChange}
                            />
                            <input
                                type='number'
                                placeholder="Guest"
                                id="guestSize"
                                required
                                onChange={handlesChange}
                            />
                        </FormGroup>
                    </Form>
                </div>
                <div className={cx("booking_bottom")}>
                    <ListGroup>
                        <ListGroupItem className={cx("border-0 px-0")}>
                            <h5 className={cx("d-flex align-items-center gap-1")}>${price} <i className="ri-close-line"></i> 1 persion</h5>
                            <span>${price}</span>
                        </ListGroupItem>
                        <ListGroupItem className={cx("border-0 px-0")}>
                            <h5>Service charge</h5>
                            <span>${serviceFree}</span>
                        </ListGroupItem>
                        <ListGroupItem className={cx("border-0 px-0", "total")}>
                            <h5>Total</h5>
                            <span>${totalAmount}</span>
                        </ListGroupItem>
                    </ListGroup>
                    <Button onClick={handleClick} className={cx("btn w-100 mt-4", "primary_btn")}>Book Now</Button>
                </div>
            </div>
        </>
    )
}
export default Booking