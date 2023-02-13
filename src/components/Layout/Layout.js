import React from "react"
import classNames from "classnames/bind"

import Header from "../Header/Header"
import Router from "../Router/Router"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.scss"
const cx = classNames.bind(styles)
const Layout = () => {
    return(
        <>
            <Header/>
            <Router/>
            <Footer/>
        </>
    )
}
export default Layout;