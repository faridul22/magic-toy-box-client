import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [active, setActive] = useState("sportsCar");

    useEffect(() => {
        fetch(`http://localhost:5000/categoryToy/${active}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [active])

    const handleActive = (tabName) => {
        setActive(tabName)
    }
    // console.log(active)
    // console.log(toys)
    return (
        <div className='container mx-auto'>
            <div className='mt-14 mb-5'>
                <div className="divider text-3xl font-semibold">Shop By Category</div>
                <p className='text-center text-gray-500 mt-3'>Click on the buttons below to filter products by category and shop.</p>
                <hr className='w-1/4 mx-auto' />
            </div>
            <div className='text-center'>
                <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                    <div className='lg:mx-3 md:my-3 sm:mb-3'>
                        <button onClick={() => handleActive("sportsCar")} className={active === "sportsCar" ? "bg-[#FF900E] text-white hover:bg-orange-500 btn normal-case" : "btn hover:bg-orange-500 text-black hover:text-white normal-case bg-orange-100"}>Sports Car</button>
                    </div>
                    <div className='lg:mx-3 md:my-3 sm:mb-3'>
                        <button onClick={() => handleActive("truck")} className={active === "truck" ? "bg-[#FF900E] text-white hover:bg-orange-500 btn normal-case" : "btn hover:bg-orange-500 text-black hover:text-white normal-case bg-orange-100"}>Truck</button>
                    </div>
                    <div className='lg:mx-3 md:my-3 sm:mb-3'>
                        <button onClick={() => handleActive("bus")} className={active === "bus" ? "bg-[#FF900E] text-white hover:bg-orange-500 btn normal-case" : "btn hover:bg-orange-500 text-black hover:text-white normal-case bg-orange-100"}>Bus Car</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>
                    {toys.map(toy => <CategoryCard
                        key={toy._id}
                        toy={toy}
                    ></CategoryCard>)}
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;