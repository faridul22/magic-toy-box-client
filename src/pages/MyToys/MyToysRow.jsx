import React from 'react';
import { FaStar, FaStarHalfAlt, FaTrashAlt, FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToysRow = ({ toy, handleDelete }) => {
    const { _id, picture, toyName, email, name, price, description, quantity, raging, category } = toy;


    return (
        <tr>
            {/* name row */}
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName ? toyName : "not found"}</div>
                    </div>
                </div>
            </td>
            {/* price & rating */}
            <td>
                <span className="text-sm bg-opacity-50 mb-5 font-bold text-orange-500">Price: {price}</span>
                <br />
                <span className='badge badge-outline font-bold flex justify-center items-center'>
                    <FaStar className='text-warning '></FaStar>
                    <FaStar className='text-warning '></FaStar>
                    <FaStar className='text-warning '></FaStar>
                    <FaStar className='text-warning '></FaStar>
                    <FaStarHalfAlt className='text-warning '></FaStarHalfAlt>
                    <p className='ml-1'>{raging}</p>
                </span>
            </td>
            {/*category & quantity row */}
            <td>
                <span>Category: {category}</span>
                <br />
                <span>Quantity: {quantity}</span>
            </td>

            <td>
                <span>Name: {name ? name : 'not found'}</span>
                <br />
                <span>Email: {email ? email : "not found"}</span>

            </td>
            {/* Update action row */}
            <th>
                <Link to={`/updateToyInfo/${_id}`}>
                    <button className="btn btn-square btn-outline text-xs text-orange-400 px-3"><FaUpload className='font-bold text-xl' /></button>
                </Link>
            </th>
            {/* delete action row */}
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline text-red-500 font-bold"><FaTrashAlt className='font-bold text-xl' /></button>
            </th>
        </tr>
    );
};

export default MyToysRow;