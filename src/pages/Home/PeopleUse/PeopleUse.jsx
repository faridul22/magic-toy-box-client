import React from 'react';

const PeopleUse = () => {
    return (
        <div className='bg-base-200 py-20 my-28 sm:w-full mx-auto container rounded-xl'>
            <h2 className='lg:text-4xl font-semibold text-center mb-10'>Millions of people use: Magic ToyBox</h2>
            <div className='lg:ml-20 md:ml-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-0 gap-4'>
                <div className="card mx-auto w-4/5 lg:w-60 lg:h-60 sm:mx-3 mr-10 bg-green-200 shadow-lg">
                    <figure className="pt-10">
                        <img width={80} src="https://i.ibb.co/YTn8HkS/free.png" alt="free shipping" className="rounded-lg" />
                    </figure>
                    <div className="card-body md:px-0 sm:px-0 items-center text-center ">
                        <h2 className="card-title">Free Shipping</h2>
                    </div>
                </div>
                <div className="card mx-auto w-4/5 lg:w-60 lg:h-60 sm:mx-3 bg-base-100 mr-10 shadow-lg">
                    <figure className="pt-10">
                        <img width={80} src="https://i.ibb.co/GPMNQfD/moneyback-1-1.png" alt="free shipping" className="" />
                    </figure>
                    <div className="card-body md:px-0 sm:px-0 items-center text-center">
                        <h2 className="card-title">Money Back</h2>
                    </div>
                </div>
                <div className="card mx-auto w-4/5 lg:w-60 lg:h-60 sm:mx-3 bg-yellow-100 mr-10 shadow-lg">
                    <figure className="pt-10">
                        <img width={80} src="https://i.ibb.co/HrfhndC/support-icon-1-1.png" alt="free shipping" className="" />
                    </figure>
                    <div className="card-body md:px-0 sm:px-0 items-center text-center">
                        <h2 className="card-title">24/4 Hours Support</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PeopleUse;