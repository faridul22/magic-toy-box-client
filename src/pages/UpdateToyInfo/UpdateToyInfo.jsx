import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToyInfo = () => {
    const toy = useLoaderData();
    console.log(toy)
    const { _id, quantity, price, description, } = toy;


    const handleUpdateToy = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedToy = { quantity, price, description, }
        console.log(updatedToy)

        // send data
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    //  (Price, available quantity, Detail description)

    return (
        <div className='container mx-auto w-3/4 my-16'>
            <div className='border-4 p-10 rounded-lg bg-slate-200'>
                <h1 className='text-center text-3xl font-bold'>Update Toy</h1>
                <form onSubmit={handleUpdateToy}>
                    <div className='grid lg:grid-cols-1'>
                        {/* price and quantity row */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="">
                                <input required type="text" name='price' defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Available Quantity</span>
                            </label>
                            <label className="">
                                <input required type="text" name='quantity' defaultValue={quantity} placeholder="quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* description */}
                    <div className="form-control my-3 m-3">
                        <label className="label">
                            <span className="label-text font-bold">Detail description</span>
                        </label>
                        <label>
                            <textarea name='description' defaultValue={description} className="textarea textarea-bordered border-2 w-full" placeholder="Toy details description"></textarea>
                        </label>
                    </div>
                    {/* submit */}
                    <div className="form-control my-3 m-3">
                        <input className="btn btn-info  text-white normal-case text-xl font-bold" type="submit" value="Update Toy" />
                    </div>

                </form>
            </div>


        </div>
    );
};

export default UpdateToyInfo;