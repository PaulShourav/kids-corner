import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })

    }, [])
   
    return (
        <section className='my-container my-28'>
            <div className='flex items-center justify-end mb-7 '>
                <input type="text" placeholder="Type here" className="input input-sm input-bordered  w-full max-w-xs" />
                <button className="btn btn-sm btn-square btn-secondary">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead className='bg-sky-600'>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, index) => <>
                                <tr>
                                    <th>{index += 1}</th>
                                    <td>{toy.seller_name}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={toy.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                            <div className="font-bold">{toy.name}</div>


                                        </div>
                                    </td>
                                    <td>{toy.sub_category}</td>
                                    <td>{toy.price}৳</td>
                                    <td>{toy.quantity}</td>
                                    <td>
                                    <Link to={`/details/${toy._id}`}  className="btn btn-sm btn-circle btn-outline  btn-secondary" >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                                    </td>
                                </tr>
                            </>)
                        }


                    </tbody>

                </table>
            </div>
        </section>
    );
};

export default AllToys;