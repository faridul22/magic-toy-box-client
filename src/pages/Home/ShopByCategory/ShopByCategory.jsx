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
        <div className='container mx-auto'>
            <div className='mt-14 mb-10'>
                <div className="divider text-3xl font-semibold">Shop By Category</div>
            </div>
            <div className='text-center'>
                <div className="lg:flex container rounded-lg items-center justify-center bg-slate-50 mx-auto font-medium normal-case text-xl">
                    <div className='mx-5'>
                        <button onClick={() => handleActive("sportsCar")} className={active === "sportsCar" ? "rounded-xl bg-[#FF900E] text-white py-3 px-5" : "py-3 px-5 rounded-xl bg-orange-100"}>Sports Car</button>
                    </div>
                    <div className='mx-5'>
                        <button onClick={() => handleActive("truck")} className={active === "truck" ? "rounded-xl bg-[#FF900E] text-white py-3 px-5" : "py-3 px-5 rounded-xl bg-orange-100"}>Truck</button>
                    </div>
                    <div className='mx-5'>
                        <button onClick={() => handleActive("bus")} className={active === "bus" ? "rounded-xl bg-[#FF900E] text-white py-3 px-5" : "py-3 px-5 rounded-xl bg-orange-100"}>Bus Car</button>
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