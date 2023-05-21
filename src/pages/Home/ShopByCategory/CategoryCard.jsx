import React, { useContext } from 'react';
import ViewDetails from './../../ViewDetails/ViewDetails';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const CategoryCard = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { picture, name, price, raging, _id } = toy || {};
    const notify = () => toast("Wow so easy!");

    return (
        <div className='border-2 rounded-xl'>
            <div className="card h-[560px] w-96 bg-base-100 shadow-md">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Toy" className="rounded-xl w-3/4" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title ml-7">{name}</h2>
                    <div className='flex justify-around items-center'>
                        <div className='font-bold'>Price: ${price}</div>
                        <div className='font-bold text-warning flex justify-center items-center'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStarHalfAlt></FaStarHalfAlt>
                            <p className='ml-1'>{raging}</p>
                        </div>
                    </div>
                    <div className="card-actions flex justify-center bottom-2 my-auto">

                        {
                            user ? <button className='mr-3 bg-[#FF900E] text-white px-4 py-2 rounded-lg font-medium'><Link to={`/details/${_id}`}>View Details</Link></button>
                                : <>
                                    <ToastContainer />
                                    <button className='mr-3 bg-[#FF900E] text-white px-4 py-2 rounded-lg font-medium'><Link onClick={notify} to="/login"  >View Details</Link></button>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;