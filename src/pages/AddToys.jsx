import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleSave=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const image=form.name.image;
        const sub_category=form.sub_category.value;
        const seller_name=form.seller_name.value;
        const seller_email=form.seller_email.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const quantity=form.quantity.value;
        const description=form.description.value;
        const toy={name,image,sub_category,seller_name,seller_email,price,rating,quantity,description}
        console.log(toy);
        fetch("https://kids-corner-server.vercel.app/add",{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(toy)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire(
                    'Added',
                    'Toy data successfully updated',
                    'success'
                  )
            }
        })

    }
    return (
        
        <div className='my-container'>
            <div className="card  bg-base-100 shadow-xl">
                <form onSubmit={handleSave} className="card-body mx-16">
                    <p className='font-bold text-3xl text-center mb-4'>Add Toy</p>
                    <div className='flex flex-col gap-7 md:flex-row justify-between'>
                        <div className='w-full'>
                            <label className='font-bold'>Toy Name</label>
                            <input type="text" placeholder="Toy name" name='name' className="input input-bordered input-primary w-full " />
                        </div>
                        <div className='w-full'>
                            <label className='font-bold'>Image</label>
                            <input type="text" placeholder="Toy Image URL" name='image' className="input input-bordered input-primary w-full " />
                        </div>

                    </div>
                    <div className='flex flex-col gap-7 md:flex-row justify-between'>
                        <div className='md:w-1/4'>
                            <label className='font-bold'>Category</label>
                            <select className="select select-primary w-full max-w-xs" name='sub_category'>
                                <option disabled selected>Select Sub Category</option>
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
                            <input type="text" placeholder="Price" name='price' className="input input-bordered input-primary w-full " />
                        </div>
                        <div className='w-full'>
                            <label className='font-bold'>Rating</label>
                            <input type="text" placeholder="Rating" name='rating' className="input input-bordered input-primary w-full " />
                        </div>
                        <div className='w-full'>
                            <label className='font-bold'>Quantity</label>
                            <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered input-primary w-full " />
                        </div>
                    </div>


                    <div className='w-full'>
                        <label className='font-bold'>Description</label>
                        <div>
                            <textarea className="textarea textarea-primary w-full" name='description' placeholder="Description"></textarea>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-secondary">Save</button>
                </form>
            </div>
        </div>
    );
};

export default AddToys;