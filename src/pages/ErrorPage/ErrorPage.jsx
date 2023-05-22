import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto my-20'>
            <img className='rounded mx-auto' width={500} src="https://i.ibb.co/WfJjVsf/error.png" alt="" />
            <div className='text-center'>
                <button className=" bg-orange-400 hover:bg-orange-500 text-white px-5 py-3 rounded-lg font-bold border"><Link to='/'>Back to home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;