import React from 'react';

const PeopleUse = () => {
    return (
        <div className='bg-base-200 py-20 my-28 container mx-auto rounded-xl'>
            <h2 className='text-4xl font-semibold text-center mb-10'>Millions of people use: Magic ToyBox</h2>
            <div className='container lg:flex justify-center'>
                <div className="card w-60 h-60 mr-10 bg-green-200 shadow-lg">
                    <figure className="pt-10">
                        <img width={80} src="https://i.ibb.co/YTn8HkS/free.png" alt="free shipping" className="rounded-lg" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title">Free Shipping</h2>
                    </div>
                </div>
                <div className="card w-60 h-60 bg-base-100 mr-10 shadow-lg">
                    <figure className="pt-10">
                        <img width={80} src="https://i.ibb.co/GPMNQfD/moneyback-1-1.png" alt="free shipping" className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Money Back</h2>
                    </div>
                </div>
                <div className="card w-60 h-60 bg-yellow-100 mr-10 shadow-lg">
                    <figure className="pt-10">
                        <img width={80} src="https://i.ibb.co/HrfhndC/support-icon-1-1.png" alt="free shipping" className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">24/4 Hours Support</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PeopleUse;