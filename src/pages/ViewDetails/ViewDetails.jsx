import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const toy = useLoaderData();
    console.log(toy)
    return (
        <div>
            <h2>Details here</h2>
        </div>
    );
};

export default ViewDetails;