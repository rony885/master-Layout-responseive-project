// import React from 'react';

import { Outlet } from "react-router-dom";
import MainMenu from "../components/MainMenu";
import Footer from "../shared/Footer";

const Main = () => {
    return (
        <div>
            <MainMenu></MainMenu>
            {/* <img src="" alt="" /> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;