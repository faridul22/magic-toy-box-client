import React, { useContext } from 'react';
import { FaDollarSign, FaSearchDollar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const TableRow = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { _id, toyName,
        quantity,
        category,
        price,
        name,
    } = toy;

    const handleViewDetails = () => {

        if (!user) {
            Swal.fire(
                'You have to',
                'log in first to view details',
                'error'
            )
        }
    };
    return (
        <tr>
            <td>{name ? name : "Not found"}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>$ {price}</td>
            <td>{quantity} pcs</td>
            <th>
                <Link to={`/details/${_id}`}>
                    <button onClick={handleViewDetails} className=" bg-[#be8748] text-white px-4 py-2 rounded-lg font-semibold">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default TableRow;