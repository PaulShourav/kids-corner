import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="/public/images/hero-bg.png" className="w-full" />
                <div className="my-container absolute flex gap-11 md:justify-between items-center transform -translate-y-1/2 md:left-5 md:right-5 top-1/2  ">
                    <div className='md:w-1/2 text-white text-center md:text-left '  >
                        <p className='font-bold text-lg md:text-4xl ' >BEST TOYS FOR <br /> YOUR KIDS</p>
                        <p className='my-2 md:my-5 text-sm md:text-base'>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? <span className='hidden md:inline-flex'>Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi</span>.</p>
                        <button className="md:btn btn-sm btn-active btn-secondary">Button</button>
                    </div>
                    <div className='hidden md:flex   md:w-1/2' >

                    <img src="/public/images/slider-img.png" className=' md:w-full md:h-full' alt="" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="/public/images/hero-bg.png" className="w-full" />
                <div className="my-container absolute flex gap-11 md:justify-between items-center transform -translate-y-1/2 md:left-5 md:right-5 top-1/2  ">
                    <div className='md:w-1/2 text-white text-center md:text-left '  >
                        <p className='font-bold text-lg md:text-4xl ' >BEST TOYS FOR <br /> YOUR KIDS</p>
                        <p className='my-2 md:my-5 text-sm md:text-base'>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? <span className='hidden md:inline-flex'>Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi</span>.</p>
                        <button className="md:btn btn-sm btn-active btn-secondary">Button</button>
                    </div>
                    <div className='hidden md:flex   md:w-1/2 ' >

                    <img src="/public/images/slider-img1.png" className=' object-cover mb-36' alt="" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;