import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const ToyCard = ({ toy }) => {

    const { _id, image, name, price, rating } = toy;
    const handleDetails=(_id)=>{
        console.log(_id);
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 ">
                <img src={image} alt="Toys" className=" rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p>Price: <span>{price}৳</span> </p>
                <p className='text-yellow-400'>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FontAwesomeIcon icon="fa-regular fa-star" />}
                        placeholderSymbol={<FontAwesomeIcon icon="fa-solid fa-star" />}
                        fullSymbol={<FontAwesomeIcon icon="fa-solid fa-star" />}
                        readonly
                    />
                </p>
                <div className=" text-right">
                    <button className="btn btn-sm btn-circle btn-outline  btn-secondary" onClick={()=>handleDetails(_id)}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;