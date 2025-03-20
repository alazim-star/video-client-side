import React from 'react';
import Banner from '../Component/Banner';
import { Outlet } from 'react-router-dom';




const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Outlet></Outlet>
         
     
        </div>
    );
};

export default Home;