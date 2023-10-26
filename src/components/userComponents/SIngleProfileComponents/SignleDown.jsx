import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Single.css'

// import required modules
import { Pagination } from 'swiper/modules';

export default function Helo() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
        }}
        modules={[Pagination]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        
      
      </Swiper>
    </>
  );
}
