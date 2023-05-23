import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const toys = useLoaderData();
    const [searchToy, setSearchToy] = useState(toys);
    const [searchText, setSearchText] = useState("");

    // console.log(searchToy)

    const handleSearch = () => {
        fetch(`https://magic-toy-box-server.vercel.app/getToyNameByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSearchToy(data);
            });
    };

    useTitle("All toys")
    return (
        <div >
            <div className="navbar container mx-auto bg-orange-50 rounded-md mb-3 mt-7">
                <div className="w-3/4 mx-auto">
                    <div className="form-control w-[700px] ml-10">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search" className="input input-bordered" />{""}
                    </div>
                    <button className="btn bg-orange-400 hover:bg-orange-600 hover:text-white border-0 ml-10 text-white" disabled={searchText == ""} onClick={handleSearch}>Search</button>
                </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto container mx-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className=''>
                        <tr>
                            <th className='font-bold'>Seller</th>
                            <th className='font-bold'>Toy Name</th>
                            <th className='font-bold'>Sub-category</th>
                            <th className='font-bold'>Price</th>
                            <th className='font-bold'>Available Quantity</th>
                            <th className='font-bold'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <>
                            {
                                searchToy.map(toy => <TableRow
                                    key={toy._id}
                                    toy={toy}
                                ></TableRow>)
                            }
                        </>
                    </tbody>
                </table>
            </div>

            <div className='divider container mx-auto'></div>
        </div>
    );
};

export default AllToys;