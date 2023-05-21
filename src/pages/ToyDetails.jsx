import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { name, image, seller_name, seller_email, sub_category, price, rating, description } = toy;

    console.log(toy);
    return (
        <>
         <div className="my-container min-h-screen my-28 px-9">
            <div className="flex gap-7 flex-col lg:flex-row">
                <div className='w-full md:w-1/3'>
                    <img src={image} className=" rounded-lg shadow-2xl" />
                </div>
                <div className='w-2/3 py-4'>
                    <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
                    <p className="py-3">Sub Category: {sub_category}</p>
                    <p className="py-3">Seller Name: {seller_name}</p>
                    <p className="py-3">Seller Eamil: {seller_email}</p>
                    <p className="py-3">Price: {price}</p>
                    <p className='text-yellow-400'>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FontAwesomeIcon icon="fa-regular fa-star" />}
                            placeholderSymbol={<FontAwesomeIcon icon="fa-solid fa-star" />}
                            fullSymbol={<FontAwesomeIcon icon="fa-solid fa-star" />}
                            readonly
                        />
                    </p>

                </div>
            </div>
            <div className='mt-6'>
                <p className='text-xl md:text-2xl font-bold'>Description</p>
                <p>{description}</p>
            </div>
        </div>
            
        </>

    );
};

export default ToyDetails;