import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ toy }) => {
    const { _id, toyName,
        quantity,
        category,
        price,
        name,
    } = toy;
    return (
        <tr>
            <td>{name}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>Price: ${price}</td>
            <td>Quantity: {quantity}</td>
            <th>
                <button className=" bg-[#be8748] text-white px-4 py-2 rounded-lg font-semibold"><Link to={`/details/${_id}`}>View Details</Link></button>
            </th>
        </tr>
    );
};

export default TableRow;