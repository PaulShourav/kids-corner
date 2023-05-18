import React from 'react';
import { NavLink,Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header className='bg-base-300'>
            <div className="navbar my-container ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                            <li><NavLink to={'/my-toys'} className={({ isActive }) => isActive ? "active" : ""}>My Toys</NavLink></li>
                            <li><NavLink to={'/all-toys'} className={({ isActive }) => isActive ? "active" : ""}>All Toys</NavLink></li>
                            <li><NavLink to={'/add-toys'} className={({ isActive }) => isActive ? "active" : ""}>Add Toys</NavLink></li>
                            <li><NavLink to={'/blog'} className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'} className=" font-bold text-2xl">Kids Corner</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 text-lg px-1  ">
                        <li className='nav-item'><NavLink to={'/'} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                        <li className='nav-item'><NavLink to={'/my-toys'} className={({ isActive }) => isActive ? "active" : ""}>My Toys</NavLink></li>
                        <li className='nav-item'><NavLink to={'/all-toys'} className={({ isActive }) => isActive ? "active" : ""}>All Toys</NavLink></li>
                        <li className='nav-item'><NavLink to={'/add-toys'} className={({ isActive }) => isActive ? "active" : ""}>Add Toys</NavLink></li>
                        <li className='nav-item'><NavLink to={'/blog'} className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;