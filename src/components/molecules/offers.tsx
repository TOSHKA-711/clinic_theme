import react from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import OfferCard from "./OfferCard";
export default function Offers({ points, description }) {
  return (
    <main
      className="min-h-60 rounded-sm bg-white p-4 font-bold my-5"
      data-aos="flip-down"
    >
      <h4 className="text-[16px] text-main sm:text-[20px]">Your Points, Your Gift!</h4>
      <h3 className="my-3 text-[12px] font-medium text-maintitle sm:text-[15px]">
      Collect points and redeem them for exclusive discounts and endless offers
      </h3>
      <div className="offers-cards">
      
       <Swiper
      
         modules={[Navigation, Pagination, A11y , Autoplay]}
         spaceBetween={20}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         autoplay={{ delay: 5000 }}
         speed={500}
         loop={true}
         breakpoints={{
         340:{
          slidesPerView: 1,
          spaceBetween: 10,
         }

          ,640: { // For small screens (mobile)
              slidesPerView: 2,
              spaceBetween: 10,
          },
          768: { // For medium screens (tablet)
              slidesPerView: 2,
              spaceBetween: 15,
          },
          1024: { // For large screens (desktop)
              slidesPerView: 3,
              spaceBetween: 20,
          },
      }}
      
    >
      <SwiperSlide> <OfferCard/></SwiperSlide>
      <SwiperSlide> <OfferCard/></SwiperSlide>
      <SwiperSlide> <OfferCard/></SwiperSlide>
      <SwiperSlide> <OfferCard/></SwiperSlide>
    </Swiper>
      </div>
    </main>
  );
}
