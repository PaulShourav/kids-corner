import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);

    const [toys, setToys] = useState([]);
    const [editData, setEditData] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })

    }, [])
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteToy/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaning = toys.filter(toy => toy._id !== _id);
                            console.log(remaning);
                            setToys(remaning)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    const handleEdit = (_id) => {
        fetch(`http://localhost:5000/edit/${_id}`)
            .then(res => res.json())
            .then(data => {
                setEditData(data);
            })
    }
    console.log(editData);
    const handleUpdate = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Edit it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const form=e.target;
                const name=form.name.value;
                const id=form.id.value;
                
                const image=form.image.value;
                const sub_category=form.sub_category.value;
                const price=form.price.value;
                const rating=form.rating.value;
                const quantity=form.quantity.value;
                const description=form.description.value;
                const toy={id,name,image,sub_category,price,rating,quantity,description}
                console.log(toy);
                fetch(`http://localhost:5000/update/${id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(toy)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.matchedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                "Successfully Updated",
                                'success'
                            )
                        }
                    })
               
            }
        })
    }
    console.log(toys);
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
                            toys?.map((toy, index) =>
                                <tr key={toy._id}>
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
                                    <td className='space-x-2'>
                                        <label htmlFor="my-modal-3" onClick={() => handleEdit(toy._id)} className="btn btn-sm btn-circle btn-outline  btn-secondary"><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></label>
                                        <button onClick={() => handleDelete(toy._id)} className="btn btn-sm btn-circle btn-outline  btn-secondary"><FontAwesomeIcon icon="fa-solid fa-trash-can" /></button>
                                        <Link to={`/details/${toy._id}`} className="btn btn-sm btn-circle btn-outline  btn-secondary" >
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>
            {/* modal */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box w-11/12 max-w-5xl relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpdate} className="card-body mx-16">
                        <p className='font-bold text-3xl text-center mb-4'>Add Toy</p>
                        <input type="text" hidden  name='id' defaultValue={editData?._id}  />
                        <div className='flex flex-col gap-7 md:flex-row justify-between'>
                            <div className='w-full'>
                                <label className='font-bold'>Toy Name</label>
                                <input type="text" placeholder="Toy name" name='name' defaultValue={editData?.name} className="input input-bordered input-primary w-full " />
                            </div>
                            <div className='w-full'>
                                <label className='font-bold'>Image</label>
                                <input type="text" defaultValue={editData?.image} placeholder="Toy Image URL" name='image' className="input input-bordered input-primary w-full " />
                            </div>

                        </div>
                        <div className='flex flex-col gap-7 md:flex-row justify-between'>
                            <div className='md:w-1/4'>
                                <label className='font-bold'>Category</label>
                                <select className="select select-primary w-full max-w-xs" name='sub_category' defaultValue={editData?.sub_category}>
                                    <option disabled selected>{editData?editData.sub_category:"Select Sub Category"}</option>
                                    <option value='avengers'>Avengers</option>
                                    <option value="transformers">Transformers</option>
                                    <option value="star wars">Star wars</option>

                                </select>
                            </div>
                            <div className='md:w-1/4'>
                                <label className='font-bold'>Seller Name</label>
                                <input type="text" defaultValue={user?.displayName} name='seller_name' disabled className="input input-bordered input-primary w-full " />
                            </div>
                            <div className='md:w-1/2'>
                                <label className='font-bold'>Seller Email</label>
                                <input type="text" defaultValue={user?.email} name='seller_email' disabled className="input input-bordered input-primary w-full " />
                            </div>
                        </div>
                        <div className='flex flex-col gap-7 md:flex-row justify-between'>
                            <div className='w-full'>
                                <label className='font-bold'>Price</label>
                                <input type="text" placeholder="Price" name='price' defaultValue={editData?.price} className="input input-bordered input-primary w-full " />
                            </div>
                            <div className='w-full'>
                                <label className='font-bold'>Rating</label>
                                <input type="text" placeholder="Rating" name='rating' defaultValue={editData?.rating} className="input input-bordered input-primary w-full " />
                            </div>
                            <div className='w-full'>
                                <label className='font-bold'>Quantity</label>
                                <input type="text" placeholder="Quantity" name='quantity' defaultValue={editData?.quantity} className="input input-bordered input-primary w-full " />
                            </div>
                        </div>


                        <div className='w-full'>
                            <label className='font-bold'>Description</label>
                            <div>
                                <textarea className="textarea textarea-primary w-full" name='description' defaultValue={editData?.description} placeholder="Description"></textarea>
                            </div>
                        </div>
                        <button type='submit' className="btn btn-secondary">Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MyToys;