import React from 'react';


const SubscribeSection = () => {
    return (
        <div className='my-32'>

            <div className="card h-80 container md:flex mx-auto lg:card-side bg-[#52C1BA] shadow-xl">
                <figure><img width={400} src="https://i.ibb.co/Yfh8Czt/newsletters-1.png" alt="Album" /></figure>
                <div className="card-body">
                    <div className='text-center '>
                        <h2 className="text-7xl font-medium mb-3">Subscribe</h2>
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

/* <div className="card-actions justify-center">
                        <div className='text-black'>
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter amount</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="0.01" className="input input-bordered" />
                                    <span>BTC</span>
                                </label>
                            </div>
                        </div>
                    </div> */