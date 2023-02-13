import React, {useRef, useEffect} from "react"
import classNames from "classnames/bind"
import {Container, Row, Button} from "reactstrap"
import {NavLink, Link} from "react-router-dom"

import logo from "../../assets/images/logo.png"
import styles from "./Header.module.scss"
const cx = classNames.bind(styles)

const nav_link = [
    {
        id: 1,
        path: '/home',
        display: 'Home'
    },
    {
        id: 2,
        path: '/about',
        display: 'About'
    },
    {
        id: 3,
        path: 'tours',
        display: 'Tours'
    },
]

const Header = () => {
    const headerref = useRef(null)
    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerref.current.classList.add(cx('sticky_header'))
            }else{
                headerref.current.classList.remove(cx('sticky_header'))
            }
        })
    }
    useEffect(()=>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    })
    return(
        <>
            <header className={cx('header')} ref={headerref}>
                <Container>
                    <Row>
                        <div className={cx('nav_wrapper')}>
                            <div className={cx('logo')}>
                                <img src={logo} alt=""/>
                            </div>
                            <div className={cx('navigation')}>
                                <ul className={cx('menu')}>
                                    {
                                        nav_link.map((item, array, index) => {
                                            return(
                                                <li className={cx('nav_item')} key={item.id}>
                                                    <NavLink to={item.path} className={navClass => navClass.isActive ? cx('active_link') : ''}>
                                                        {item.display}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className={cx('nav_right')}>
                                <div className={cx('nav_btns')}>
                                    <Button className={cx('btn secondary__btn')}>
                                        <Link to='/login'>
                                            Login
                                        </Link>
                                    </Button>
                                    <Button className={cx('btn primary__btn')}>
                                        <Link to='/register'>
                                            Register
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <span className={cx('menu_mobile')}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </Row>
                </Container>
            </header>
        </>
    )
}
export default Header;