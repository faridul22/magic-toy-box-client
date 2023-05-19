import React from 'react';
import banner1 from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'
import banner4 from '../../../assets/images/banner4.jpg'

const Slider = () => {
    return (
        <div className='h-fit'>
            <div className="carousel h-4/6 w-full">
                <div id="slide1" className="carousel-item relative h-4/6 w-full">
                    <img height={100} src={banner1} className="w-full" />
                    <div className="absolute mx-auto h-full w-full bg-gradient-to-r from-[#585555] to-[rgba(21, 21, 21, 0)]">
                        <div className=' text-center w-1/2 mx-auto lg:mt-80 md:mt-32 sm:mt-20 text-white'>
                            <h2 className='lg:text-7xl lg:my-5 sm:text-3xl font-bold'>Sale 15%</h2>
                            <p className='lg:text-3xl lg:my-5 sm:text-1xl font-extrabold'>Different type toys for your children</p>
                            <p className='hidden md:block'>You can buy toy cars from us for your kids if you want. We have many beautiful toy cars for kids. Your baby will feel very comfortable having them and will play with them.</p>
                            <button className="btn btn-error my-5 normal-case text-white">Shop Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img height={100} src={banner2} className="w-full" />
                    <div className="absolute mx-auto h-full w-full bg-gradient-to-r from-[#585555] to-[rgba(21, 21, 21, 0)]">
                        <div className=' text-center w-1/2 mx-auto lg:mt-80 md:mt-32 sm:mt-20 text-white'>
                            <h2 className='lg:text-7xl lg:my-5 sm:text-3xl font-bold'>Sale 15%</h2>
                            <p className='lg:text-3xl lg:my-5 sm:text-1xl font-extrabold'>Different type toys for your children</p>
                            <p className='hidden md:block'>You can buy toy cars from us for your kids if you want. We have many beautiful toy cars for kids. Your baby will feel very comfortable having them and will play with them.</p>
                            <button className="btn btn-error my-5 normal-case text-white">Shop Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img height={100} src={banner3} className="w-full" />
                    <div className="absolute mx-auto h-full w-full bg-gradient-to-r from-[#585555] to-[rgba(21, 21, 21, 0)]">
                        <div className=' text-center w-1/2 mx-auto lg:mt-80 md:mt-32 sm:mt-20 text-white'>
                            <h2 className='lg:text-7xl lg:my-5 sm:text-3xl font-bold'>Sale 15%</h2>
                            <p className='lg:text-3xl lg:my-5 sm:text-1xl font-extrabold'>Different type toys for your children</p>
                            <p className='hidden md:block'>You can buy toy cars from us for your kids if you want. We have many beautiful toy cars for kids. Your baby will feel very comfortable having them and will play with them.</p>
                            <button className="btn btn-error my-5 normal-case text-white">Shop Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img height={100} src={banner4} className="w-full" />
                    <div className="absolute mx-auto h-full w-full bg-gradient-to-r from-[#585555] to-[rgba(21, 21, 21, 0)]">
                        <div className=' text-center w-1/2 mx-auto lg:mt-80 md:mt-32 sm:mt-20 text-white'>
                            <h2 className='lg:text-7xl lg:my-5 sm:text-3xl font-bold'>Sale 15%</h2>
                            <p className='lg:text-3xl lg:my-5 sm:text-1xl font-extrabold'>Different type toys for your children</p>
                            <p className='hidden md:block'>You can buy toy cars from us for your kids if you want. We have many beautiful toy cars for kids. Your baby will feel very comfortable having them and will play with them.</p>
                            <button className="btn btn-error my-5 normal-case text-white">Shop Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;