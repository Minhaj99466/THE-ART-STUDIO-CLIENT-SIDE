import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Single.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper rounded-xl">
        <SwiperSlide ><img  src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/236x/b6/2c/8d/b62c8db33f548f840f240aa4fe60e01b.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/236x/24/44/14/244414913b27381aa63e4ee62da5bc37.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/474x/92/32/ca/9232cadf3a6e2e15722be87a03739f33.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/474x/46/79/73/4679734adc0ba9025cd113b3e53709b9.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
