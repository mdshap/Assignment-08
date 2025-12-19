import React from 'react';
import Navbar from './NavBar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-400 mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;