import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className="navHeader">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/hotels">Hotels</NavLink>
            </header>

            <Outlet />
        </>
    );
};

export default Layout;
