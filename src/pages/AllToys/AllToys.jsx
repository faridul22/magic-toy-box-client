import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';

const AllToys = () => {

    const toys = useLoaderData();

    return (
        <div>
            <h1>All toys: {toys.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map(toy => <TableRow
                                key={toy._id}
                                toy={toy}
                            ></TableRow>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllToys;