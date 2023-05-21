import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ toy }) => {
    const { _id, toyName,
        quantity,
        category,
        price,
        sellerName,
    } = toy;
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>Price: ${price}</td>
            <td>Quantity: {quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs"><Link to={`/details/${_id}`}>View Details</Link></button>
            </th>
        </tr>
    );
};

export default TableRow;