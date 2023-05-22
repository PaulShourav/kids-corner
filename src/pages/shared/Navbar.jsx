import React, { useContext } from 'react';
import { NavLink,Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logout} = useContext(AuthContext);
    // console.log(user);
    const handleLogout = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg'>
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
                    <Link to={'/'} className=" font-bold text-2xl"><FontAwesomeIcon icon="fa-solid fa-star-and-crescent" className='text-yellow-400' /> Kids <span className='text-yellow-400'>Corner</span> </Link>
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
                {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className=" tooltip tooltip-left btn btn-outline  btn-circle avatar flex justify-center" data-tip={user.displayName && user.displayName}>
                                    <FontAwesomeIcon icon="fa-solid fa-user" className='text-base' beat />
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                    <li><Link onClick={handleLogout}><FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" className='me-2' />Logout</Link></li>
                                </ul>
                            </div> : <div className='flex text-white text-lg'> 
                                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/login'>Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'btn btn-sm  btn-primary ms-4' : 'btn btn-sm btn-outline  text-white ms-4'} to='/register'>Register <FontAwesomeIcon icon="fa-solid fa-user" className='ms-2' /></NavLink> 
                                </div>
                        }
                </div>
            </div>
        </header>
    );
};

export default Navbar;