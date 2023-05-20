import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <img className='rounded' src="https://i.ibb.co/WfJjVsf/error.png" alt="" />
            <div className='text-center'>
                <button className='btn'><Link to='/'>Go to Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;