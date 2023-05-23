import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ViewDetails = () => {
    const toy = useLoaderData();
    console.log(toy)

    const { picture, toyName, name, email, price, rating, quantity, description } = toy;

    useTitle("View details")
    return (
        <div>
            <div className="card container w-3/4 mx-auto mb-32 mt-10 bg-base-100 shadow-xl pb-5">
                <figure className=''>
                    <img src={picture} width={500} alt="Toy" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">
                        {toyName}!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className='flex md:flex-none lg:justify-between mt-5'>
                        <div>
                            <h2 className="card-title">Product</h2>
                            <div className="card-actions lg:justify-start">
                                <div className="badge badge-outline">Quantity: {quantity}</div>
                                <div className="badge badge-outline">Price: ${price}</div>
                                <div className='badge badge-outline font-bold flex justify-center items-center'>
                                    <FaStar className='text-warning '></FaStar>
                                    <FaStar className='text-warning '></FaStar>
                                    <FaStar className='text-warning '></FaStar>
                                    <FaStar className='text-warning '></FaStar>
                                    <FaStarHalfAlt className='text-warning '></FaStarHalfAlt>
                                    <p className='ml-1'>{rating}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="card-title">Seller</h2>
                            <div className="card-actions lg:justify-end">
                                <div className="badge badge-outline">Name: {name}</div>
                                <div className="badge badge-outline">Email:{email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;