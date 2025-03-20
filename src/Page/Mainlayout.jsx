import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
          
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;