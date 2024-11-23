import react from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import OfferCard from "./OfferCard";
import PartnerCard from "./PartnerCard";
export default function Partners({ points, description }) {
  return (
    <main
      className="min-h-60 rounded-sm bg-white p-4 font-bold my-5"
      data-aos="flip-down"
    >
      <h4 className="text-[20px] text-main sm:text-[30px]" style={{textAlign : "center"}}>Our Partners</h4>
      <div className="partners-cards">
      
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
      <SwiperSlide> <PartnerCard/></SwiperSlide>
      <SwiperSlide> <PartnerCard/></SwiperSlide>
      <SwiperSlide> <PartnerCard/></SwiperSlide>
   
    </Swiper>
      </div>
    </main>
  );
}

