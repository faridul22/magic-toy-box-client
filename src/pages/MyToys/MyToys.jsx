import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const url = `https://magic-toy-box-server.vercel.app/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })
    }, []);

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this toy items!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://magic-toy-box-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }
    useTitle("My toys")
    return (
        <div className='mb-28 mt-7 container mx-auto'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='normal-case font-bold text-[20px]'>Product name</th>
                            <th className='normal-case font-bold text-[20px]'> Price & Rating</th>
                            <th className='normal-case font-bold text-[20px]'>Category & Available quantity</th>
                            <th className='normal-case font-bold text-[20px]'>Seller Info</th>
                            <th className='text-orange-400 '>Update</th>
                            <th className='text-red-600'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {toys.map(toy => <MyToysRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToysRow>)}

                    </tbody>

                </table>
            </div>
            <div className='divider'>End</div>
        </div>
    );
};

export default MyToys;