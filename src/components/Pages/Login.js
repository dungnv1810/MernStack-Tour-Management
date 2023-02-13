import React, {useState} from "react";
import { Container, Row, Col, Form, FormProps, Button, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import loginImg from "../../assets/images/login.png"
import userIcon from "../../assets/images/user.png"
import styles from "../../Styles/Login.module.scss"
const cx = classNames.bind(styles)
const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        passWord: undefined
    })
    const handlesChange = e => {
        setCredentials(prev => ({...prev, [e.target.id] : e.target.value}))
    }
    const hendleClick = e => {
        e.prevenDefault()
    }
    return(
        <>
            <section className={cx('login')}>
                <Container>
                    <Row>
                        <Col lg='8' className={cx('m-auto')}>
                            <div className={cx('login_container')}>
                                <div className={cx('login_img')}>
                                    <img src={loginImg} alt=""/>
                                </div>
                                <div className={cx('login_form')}>
                                    <div className={cx('user')}>
                                        <img src={userIcon} alt=''/>
                                    </div>
                                    <h2>Login</h2>
                                    <Form onSubmit={hendleClick}>
                                        <FormGroup>
                                            <input 
                                                type='email'
                                                placeholder="Email"
                                                required 
                                                id="email"
                                                onChange={handlesChange}   
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <input 
                                                type='password'
                                                placeholder="password"
                                                required 
                                                id="passWord"
                                                onChange={handlesChange}   
                                            />
                                        </FormGroup>
                                        <Button className={cx('btn', 'auth_btn', 'secondary_btn')} 
                                        type='submit'>Login</Button>
                                    </Form>
                                    <p>Don't have an account? <Link to='/register'>Create</Link></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Login;