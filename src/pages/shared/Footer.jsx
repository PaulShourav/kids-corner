import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black text-gray-400 py-24'>
        <div className='my-container'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-9'>
                <ul>
                    <li className='text-2xl text-white font-bold mb-2'><FontAwesomeIcon icon="fa-solid fa-star-and-crescent" className='text-yellow-400' /> Kids <span className='text-yellow-400'>Corner</span></li>
                    <li><p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p></li>
                    <li><img src="/Icons/Group 9969.png" alt="" /></li>

                </ul>
                <ul >
                    <li className='text-xl text-white font-bold mb-1'>Market</li>
                    <li >About Us</li>
                    <li>Work</li>
                    <li>Careers</li>
                </ul>
                <ul>
                    <li className='text-xl text-white font-bold mb-1'>Product</li>
                    <li>Prototype</li>
                    <li>Plans & Pricing</li>
                    <li>Customers</li>
                    <li>Integrations</li>
                </ul>
                <ul>
                    <li className='text-xl text-white font-bold mb-1'>Support</li>
                    <li>Help Desk</li>
                    <li>Sales</li>
                    <li>Become a Partner</li>
                    <li>Developers</li>
                </ul>
                <ul>
                    <li className='text-xl text-white font-bold mb-1'>Contact</li>
                    <li>524 Broadway , NYC</li>
                    <li>+1 777 - 978 - 5570</li>

                </ul>
            </div>

            <div className='border-t '>
            <p className='text-gray-500 mt-5'>@2023 KidsCorner. All Rights Reserved</p>
            </div>

        </div>

    </footer>
    );
};

export default Footer;