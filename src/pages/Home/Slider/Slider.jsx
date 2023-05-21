import React from 'react';

const Slider = () => {
    return (
        <div className="">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='relative'>
                        <img src="https://i.ibb.co/XzFxGb5/banner1.jpg" className="w-full" />
                        <div className='absolute inset-0 flex justify-center items-center text-center text-white'>
                            <div className='bg-gradient-to-r from-[rgba(25, 25, 25, 0)] to-[rgba(21, 21, 21, 0)]'>
                                <h2 className='lg:text-7xl lg:my-5 sm:text-3xl font-bold'>Sale 15%</h2>
                                <p className='lg:text-3xl lg:my-5 sm:text-1xl font-extrabold'>Different type toys for your children</p>
                                <p className='hidden md:block'>You can buy toy cars from us for your kids if you want. <br /> We have many beautiful toy cars for kids. Your baby will feel very comfortable having them and will play with them.</p>
                                <button className="btn btn-error my-5 normal-case text-white">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='relative'>
                        <img src="https://i.ibb.co/k6VRjTw/banner3.jpg" className="w-full" />
                        <div className='absolute inset-0 flex justify-center items-center text-center text-white'>
                            <div>
                                <h2 className='lg:text-7xl lg:my-5 sm:text-3xl font-bold'>Sale 15%</h2>
                                <p className='lg:text-3xl lg:my-5 sm:text-1xl font-extrabold'>Different type toys for your children</p>
                                <p className='hidden md:block'>You can buy toy cars from us for your kids if you want. <br /> We have many beautiful toy cars for kids. Your baby will feel very comfortable having them and will play with them.</p>
                                <button className="btn btn-error my-5 normal-case text-white">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='relative'>
                        <img src="https://i.ibb.co/4j3KmF9/banner4.jpg" className="w-full" />
                        <div className='absolute inset-0 flex justify-center items-center text-center text-white'>
                            <div>
                                <h2 className='lg:text-7xl lg:my-5 sm:text-3xl font-bold'>Sale 15%</h2>
                                <p className='lg:text-3xl lg:my-5 sm:text-1xl font-extrabold'>Different type toys for your children</p>
                                <p className='hidden md:block'>You can buy toy cars from us for your kids if you want. <br /> We have many beautiful toy cars for kids. Your baby will feel very comfortable having them and will play with them.</p>
                                <button className="btn btn-error my-5 normal-case text-white">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='relative'>
                        <img src="https://i.ibb.co/4j3KmF9/banner4.jpg" className="w-full" />
                        <div className='absolute inset-0 flex justify-center items-center text-center text-white'>
                            <div>
                                <h2 className='lg:text-7xl lg:my-5 sm:text-3xl font-bold'>Sale 15%</h2>
                                <p className='lg:text-3xl lg:my-5 sm:text-1xl font-extrabold'>Different type toys for your children</p>
                                <p className='hidden md:block'>You can buy toy cars from us for your kids if you want. <br /> We have many beautiful toy cars for kids. Your baby will feel very comfortable having them and will play with them.</p>
                                <button className="btn btn-error my-5 normal-case text-white">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Slider;