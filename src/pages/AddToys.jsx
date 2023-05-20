import React from 'react';

const AddToys = () => {
    return (
        <div className='my-container'>     
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body mx-16">
                <p className='font-bold text-3xl text-center mb-4'>Add Toy</p>
                    <div className='flex flex-col gap-7 md:flex-row justify-between'>
                        <div className='w-full'>
                            <label className='font-bold'>Category</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className='w-full'>
                            <label className='font-bold'>Category</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                        </div>
                    </div>
                    <div className='flex flex-col gap-7 md:flex-row justify-between'>
                        <div className='md:w-1/4'>
                            <label className='font-bold'>Category</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className='md:w-1/4'>
                            <label className='font-bold'>Category</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className='md:w-1/2'>
                            <label className='font-bold'>Category</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                        </div>
                    </div>
                    <div className='flex flex-col gap-7 md:flex-row justify-between'>
                        <div className='w-full'>
                            <label className='font-bold'>Category</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className='w-full'>
                            <label className='font-bold'>Category</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                        </div>
                        <div className='w-full'>
                            <label className='font-bold'>Category</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full " />
                        </div>
                    </div>
                    
            
                        <div className='w-full'>
                            <label className='font-bold'>Category</label>
                            <div>
                            <textarea className="textarea textarea-primary w-full" placeholder="Bio"></textarea>
                            </div>   
                        </div>
                   
                </div>
            </div>
        </div>
    );
};

export default AddToys;