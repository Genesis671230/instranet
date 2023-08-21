"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";


const SwiperGallery = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true} pagination={true}  className="mySwiper">
                <SwiperSlide>
                    <div className="relative">
                    <img src="https://source.unsplash.com/random/900x800/?HR" className="  object-cover" alt="" />
                        <div className="absolute bottom-10 p-4 w-full bg-black text-white z-10 h-20">
                            HR hiring will start from next month first day
                        </div>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className="relative">
                    <img src="https://source.unsplash.com/random/900x800/?ceo" className="  object-cover" alt="" />
                        <div className="absolute bottom-0 p-4 w-full bg-black text-white z-10 h-20">
                            CEO made new announcements regarding payroll
                        </div>
                    </div>
                    
                    </SwiperSlide>
                <SwiperSlide><img src="https://source.unsplash.com/random/900x800/?news" className="  object-cover" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://source.unsplash.com/random/900x800/?hiring" className="  object-cover" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://source.unsplash.com/random/900x800/?events" className="  object-cover" alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperGallery