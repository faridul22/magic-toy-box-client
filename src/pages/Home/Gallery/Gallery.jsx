import React from 'react';

const Gallery = () => {
    return (
        <div className='container mx-auto mb-32'>
            <div className='mt-14 mb-2'>
                <div className="divider text-3xl font-semibold">Toys Gallery</div>
                <p className='text-center mb-5 my-0 text-gray-500'><small>Welcome to our captivating toy gallery, <br /> where imagination comes to life! Step into a world of enchantment <br /> and playfulness as you explore our carefully curated collection of delightful toys.</small></p>

            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {/* row 1 */}
                <div>
                    <div className="h-96 carousel carousel-vertical border-4 border-gray-300 p-3 rounded-md">
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/Gn3z7TK/privatecar5.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/FsKFFqg/privatecar4.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/mX16XpW/bus1.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/n0BGFVm/truck4.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/FsKFFqg/privatecar4.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/kxxRRpJ/car3.jpg" />
                        </div>
                    </div>
                </div>
                {/* row 2 */}
                <div>

                    <div className="h-96 carousel carousel-vertical border-4 border-gray-300 p-3 rounded-md">
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/GVtdmFH/privatecar6.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/NKwsBY3/truck1.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/kxxRRpJ/car3.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/B2cXBFt/privatecar3.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/G5BDvgY/truck3.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/Cv8nxdB/truck6.jpg" />
                        </div>

                    </div>
                </div>
                {/* row 3 */}
                <div>

                    <div className="h-96 carousel carousel-vertical border-4 border-gray-300 p-3 rounded-md">
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/H7L8sQJ/privatecar1.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/QMDBNhw/truck5.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/jz7fBw7/privatecar2.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/kxxRRpJ/car3.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/y5cqNXr/privatecar7.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/zfsxZD7/truck2.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;