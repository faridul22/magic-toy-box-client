import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [active, setActive] = useState("sportsCar");

    useEffect(() => {
        fetch(`http://localhost:5000/allToy/${active}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data)
            })
    }, [active])

    const handleActive = (tabName) => {
        setActive(tabName)
    }
    console.log(active)
    console.log(toys)
    return (
        <div>
            <div className='mt-14 mb-10'>
                <div className="divider text-3xl font-semibold">Shop By Category</div>
            </div>
            <div className='text-center'>

                <div className='container mx-auto tabs tabs-boxed'>
                    <div className="w-2/4 mx-auto">
                        <button className='btn normal-case btn-outline btn-primary ml-6'>
                            <a onClick={() => handleActive("sportsCar")} className={active === "sportsCar" ? "tab btn-primary" : ""}>Sports Car</a>
                        </button>
                        <button className='btn normal-case btn-outline btn-primary ml-6'>
                            <a onClick={() => handleActive("truck")} className={active === "truck" ? "tab btn-primary" : ""}>Truck</a>
                        </button>
                        <button className='btn normal-case btn-outline btn-primary ml-6'>
                            <a onClick={() => handleActive("bus")} className={active === "bus" ? "tab btn-primary" : ""}>Bus Car</a>
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
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