import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ toy, handleDelete }) => {
    const { _id } = toy;


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
                <Link to={`/updateToyInfo/${_id}`}>
                    <button className="btn btn-ghost btn-xs">Update</button>
                </Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToysRow;