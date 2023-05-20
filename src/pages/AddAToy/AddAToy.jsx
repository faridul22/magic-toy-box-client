import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    const handleAddAToy = event => {
        event.preventDefault()
        const form = event.target;
        const toyName = form.name.value;
        const quantity = form.quantity.value;
        const picture = form.picture.value;
        const category = form.category.value;
        const price = form.price.value;
        const raging = form.raging.value;
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;
        const newToy = {
            toyName,
            quantity,
            picture,
            category,
            price,
            raging,
            name,
            email,
            description,
        }
        console.log(newToy)

        // send data
        fetch('http://localhost:5000/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className='container mx-auto w-3/4 my-16'>
            <div className='border-4 p-10 rounded-lg bg-slate-200'>
                <h1 className='text-center text-3xl font-bold'>Add A Toy</h1>
                <form onSubmit={handleAddAToy}>
                    <div className='grid lg:grid-cols-2'>
                        {/* name quantity row */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Toy Name</span>
                            </label>
                            <label className="">
                                <input required type="text" name='name' placeholder="toy name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Available Quantity</span>
                            </label>
                            <label className="">
                                <input required type="text" name='quantity' placeholder="quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* photo url and category row */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Picture URL</span>
                            </label>
                            <label className="">
                                <input required type="text" name='picture' placeholder="toy picture url" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <label className="">
                                <select className="select select-bordered w-full" name='category'>
                                    <option disabled selected>toy category</option>
                                    <option value="sportsCar">Sports Car</option>
                                    <option value="truck">Truck</option>
                                    <option value="bus">Bus</option>
                                </select>
                            </label>

                            {/* <input required type="text" placeholder="toy category" className="input input-bordered w-full" /> */}

                        </div>
                        {/* price and rating row */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="">
                                <input required type="text" name='price' placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <label className="">
                                <input required type="text" name='raging' placeholder="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* seller info row */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Seller name</span>
                            </label>
                            <label className="">
                                <input value={user && user.displayName} type="text" name='name' placeholder="seller name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Seller email</span>
                            </label>
                            <label className="">
                                <input value={user && user.email} type="text" name='email' placeholder="seller email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* description */}
                    <div className="form-control my-3 m-3">
                        <label className="label">
                            <span className="label-text font-bold">Detail description</span>
                        </label>
                        <label>
                            <textarea name='description' className="textarea textarea-bordered border-2 w-full" placeholder="Toy details description"></textarea>
                        </label>
                    </div>
                    {/* submit */}
                    <div className="form-control my-3 m-3">
                        <input className="btn btn-info  text-white normal-case text-xl font-bold" type="submit" value="Add Toy" />
                    </div>

                </form>
            </div>


        </div>
    );
};

export default AddAToy;