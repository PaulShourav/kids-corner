import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {

    const { _id, image, name, price, rating } = toy;
    
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
                    <Link to={`/details/${_id}`}  className="btn btn-sm btn-circle btn-outline  btn-secondary" >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;