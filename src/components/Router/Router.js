import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import Home from "../Pages/Home";
import Tours from "../Pages/Tours";
import ToursDetails from "../Pages/ToursDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Search from "../Pages/Search"
import ThankYou from "../Pages/ThankYou"

const Router = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/tours" element={<Tours/>}/>
                <Route path="/tours/:id" element={<ToursDetails/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/thank-you" element={<ThankYou/>}/>
                <Route path="/tours/search" element={<Search/>}/>
            </Routes>
        </>
    )
}
export default Router;