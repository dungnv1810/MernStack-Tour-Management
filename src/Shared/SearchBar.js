import React, {useRef} from "react";
import classNames from "classnames/bind";
import { Col, Form, FormGroup } from "reactstrap";

import styles from "./Subtitle.module.scss"
const cx = classNames.bind(styles)
const SearchBar = () => {
    const locationRef = useRef('')
    const destanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHander = () => {
        const location = locationRef.current.value
        const destance = destanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value
        if(location === '' || destance === '' || maxGroupSize === ''){
            return alert("All fields are require!")
        }
    }
    return(
        <>  
            <Col lg='12'>
                <div className={cx('search_bar')}>
                    <Form className={cx('d-flex align-items-center gap-1')}>
                        <FormGroup className={cx('d-flex gap-3', 'form_group', 'form_group-fast')}>
                            <span>
                                <i className="ri-map-pin-line"></i>
                            </span>
                            <div>
                                <h6>Location</h6>
                                <input
                                    ref={locationRef}
                                    type='text'
                                    name="name"
                                    onChange={null}
                                    placeholder='Where are you going'
                                    autoComplete="off"
                                />
                            </div>
                        </FormGroup>
                        <FormGroup className={cx('d-flex gap-3', 'form_group', 'form_group-fast')}>
                            <span>
                                <i className="ri-map-pin-time-line"></i>
                            </span>
                            <div>
                                <h6>Distance</h6>
                                <input
                                    ref={destanceRef}
                                    type='number'
                                    name="name"
                                    onChange={null}
                                    placeholder='Distance k/m'
                                    autoComplete="off"
                                />
                            </div>
                        </FormGroup>
                        <FormGroup className={cx('d-flex gap-3', 'form_group')}>
                            <span>
                                <i className="ri-group-line"></i>
                            </span>
                            <div>
                                <h6>Max People</h6>
                                <input
                                    ref={maxGroupSizeRef}
                                    type='text'
                                    name="name"
                                    onChange={null}
                                    placeholder='0'
                                    autoComplete="off"
                                />
                            </div>
                        </FormGroup>
                        <span className={cx('search_icon')} type="submit" onClick={searchHander}>
                            <i className="ri-search-line"></i>
                        </span>
                    </Form>
                </div>
            </Col>
        </> 
    )
}
export default SearchBar