import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    const handleAddAToy = event => {
        event.preventDefault()
        const form = event.target;
        const toyName = form.toyName.value;
        const quantity = form.quantity.value;
        const picture = form.picture.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;
        const newToy = {
            toyName,
            quantity,
            picture,
            category,
            price,
            rating,
            name,
            email,
            description,
        }
        // console.log(newToy)

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
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Product Added!',
                        text: 'New Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    useTitle("Add a toy")
    return (
        <div className='container mx-auto w-3/4 my-16'>
            <div className='border-4 border-orange-200 p-10 rounded-lg  bg-orange-50'>
                <h1 className='text-center text-3xl text-orange-500 mb-5 font-bold'>Add a new toy</h1>
                <form onSubmit={handleAddAToy}>
                    <div className='grid lg:grid-cols-2'>
                        {/*toy name quantity row */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Toy Name</span>
                            </label>
                            <label className="">
                                <input required type="text" name='toyName' placeholder="toy name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Available Quantity</span>
                            </label>
                            <label className="">
                                <input required type="number" name='quantity' placeholder="quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* photo url and category row */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Picture URL</span>
                            </label>
                            <label className="">
                                <input required type="url" name='picture' placeholder="toy picture url" className="input input-bordered w-full" />
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
                                    <option value="others">Others</option>
                                </select>
                            </label>

                        </div>
                        {/* price and rating row */}
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="">
                                <input required type="number" name='price' placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control my-3 mx-3">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <label className="">
                                <input required type="text" name='rating' placeholder="rating" className="input input-bordered w-full" />
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
                        <input className="btn bg-orange-400 border-none hover:bg-orange-500  text-white normal-case text-xl font-bold" type="submit" value="Add Now" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAToy;