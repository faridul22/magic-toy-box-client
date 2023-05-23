import React from 'react';


const SubscribeSection = () => {
    return (
        <div className='my-32'>

            <div className="card h-80 container md:flex mx-auto lg:card-side bg-[#52C1BA] shadow-xl">
                <figure><img width={400} className='hidden lg:block' src="https://i.ibb.co/Yfh8Czt/newsletters-1.png" alt="Album" /></figure>
                <div className="card-body">
                    <div className='text-center '>
                        <h2 className="text-7xl font-medium mb-3 text-gray-800">Subscribe</h2>
                        <span className='text-2xl text-gray-700 mt-5'>Subscribe to keep up with fresh news and existing updates every moment.</span>
                    </div>
                    <div className="card-actions my-auto justify-center">
                        <div className="form-control">
                            <label className="label">

                            </label>
                            <label className="input-group">
                                <input type="email" placeholder="subscribe" className="input input-bordered" />
                                <span className='bg-red-500 text-white'>Subscribe</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SubscribeSection;