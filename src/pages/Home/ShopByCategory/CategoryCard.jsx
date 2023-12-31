import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoryCard = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { picture, name, price, rating, _id } = toy || {};
    console.log(toy)

    const handleViewDetails = () => {

        if (!user) {
            Swal.fire(
                'You have to',
                'log in first to view details',
                'error'
            )

        }
    };

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="fade-down" className='border-2 rounded-xl'>
            <div className="card h-[560px] w-full bg-base-100 shadow-md">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Toy" className="rounded-xl w-3/4" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title ml-7">{name}</h2>
                    <div className='flex justify-around items-center'>
                        <div className='font-bold'>Price: ${price}</div>
                        <div className='font-bold flex justify-center items-center'>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            <FaStarHalfAlt className='text-warning'></FaStarHalfAlt>
                            <p className='ml-1 text-gray-500'>{rating}</p>
                        </div>
                    </div>
                    <div className="card-actions flex justify-center bottom-2 my-auto">

                        {
                            user ? <button className='mr-3 bg-[#FF900E] text-white px-4 py-2 rounded-lg font-medium'><Link to={`/details/${_id}`}>View Details</Link></button>
                                : <>

                                    <Link to={`/details/${_id}`}>
                                        <button onClick={handleViewDetails} className='mr-3 bg-[#FF900E] text-white px-4 py-2 rounded-lg font-medium'>View Details</button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;