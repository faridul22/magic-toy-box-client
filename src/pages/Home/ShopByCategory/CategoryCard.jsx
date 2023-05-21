import React, { useContext } from 'react';
import { Link, unstable_HistoryRouter, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CategoryCard = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { picture, name, price, raging, _id } = toy || {};
    const notify = () => toast("Wow so easy!");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/login";


    const handleViewDetails = () => {
        // Check if user is logged in (replace with your own login check logic)
        const isLoggedIn = false; // Replace with your login check logic

        if (!user) {
            Swal.fire(
                'You have to',
                'log in first to view details',
                'error'
            )
            // navigate(from, { replace: true, });

        } else {
            // Proceed with displaying the toy details
            // Add your logic here to show the toy details page

        }
    };

    return (
        <div className='border-2 rounded-xl'>
            <div className="card h-[560px] w-full bg-base-100 shadow-md">
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