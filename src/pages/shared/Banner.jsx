import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../../styles.css";

// import required modules
import { EffectCards } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    return (
        <div className='bg-lime-100'>
            <div className='my-container'>
                <div className='min-h-screen flex justify-center items-center'>
                    <div className=' flex  gap-8 flex-col md:flex-row '>
                        <div className='basis-1/2'>
                            <p className='font-bold text-lg md:text-4xl ' >BEST TOYS FOR <br /> YOUR KIDS</p>
                            <p className='my-2 md:my-5 text-sm md:text-base'>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                            <button className="md:btn btn-sm btn-active btn-secondary">Button<FontAwesomeIcon icon="fa-solid fa-arrow-right" className='ms-2' beat /></button>
                        </div>
                        <div className='basis-1/2'>
                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/images/avengers-1.png" className='py-10' alt="" />
                                </SwiperSlide>
                                <SwiperSlide><img src="/images/avengers-2.png" className='py-10' alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/avengers-3.png" className='py-10' alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/starwars-2.png" className='py-10' alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/avengers-5.png" className='py-10' alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/avengers-6.png" className='py-10' alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/transformers-1.png" className='py-10' alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/transformers-2.png" className='py-10' alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/starwars-1.png" className='py-10' alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Banner;