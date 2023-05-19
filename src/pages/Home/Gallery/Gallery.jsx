import React from 'react';

const Gallery = () => {
    return (
        <div className='container mx-auto my-6'>
            <div className='mt-14 mb-10'>
                <div className="divider text-3xl font-semibold">Toys Gallery</div>
                <p className='text-center my-0 text-orange-500'>Our Toy Collection</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                <div>
                    <h3 className='font-bold '>Private Car</h3>
                    <div className="h-96 carousel carousel-vertical rounded-lg">
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/vv6TrXR/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/vv6TrXR/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/vv6TrXR/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view.jpg" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold '>Bus</h3>
                    <div className="h-96 carousel carousel-vertical rounded-lg">
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/vv6TrXR/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/vv6TrXR/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/vv6TrXR/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view.jpg" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold '>Track</h3>
                    <div className="h-96 carousel carousel-vertical rounded-lg">
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/vv6TrXR/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/vv6TrXR/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://i.ibb.co/vv6TrXR/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;