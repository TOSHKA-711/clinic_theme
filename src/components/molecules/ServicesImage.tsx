"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ServicesImage({ title }) {
  const images = [
    {
      id: 1,
      src: "/media/Doctors/doc3.jpg",
      className: "img1",
    },
    {
      id: 2,
      src: "/media/Doctors/doc4.jpg",
      className: "img2",
    },
    {
      id: 3,
      src: "/media/Doctors/doc5.jpg",
      className: "img3",
    },
    {
      id: 4,
      src: "/media/Doctors/doc4.jpg",
      className: "img4",
    },
    {
      id: 5,
      src: "/media/Doctors/doctor-detail.jpg",
      className: "img5",
    },
    {
      id: 6,
      src: "/media/Doctors/13.jpg",
      className: "img6",
    },
  ];

  return (
    <>
      <div className="w-full text-center">
        <h3 className="text-[2rem] font-bold text-main">{title}</h3>
        <div className="flex w-full items-center justify-center pb-5">
          <img src="/media/icons/icon/section-img.png" alt="" />
        </div>
      </div>

      <div className="gallery">
        {images.map(({ id, src , className }) => (
          <img
            src={src}
            className= {`transition  ${className} `}
            alt={`Doctor image ${id}`}
          />
        ))}
      </div>
    </>
  );
}

{
  /* <div className="mainSwiper swiperbtn">
  <Swiper
    modules={[Navigation, Autoplay]}
    spaceBetween={15}
    // slidesPerView={3}
    autoplay={{ delay: 5000 }}
    speed={500}
    loop={true}
    navigation={true}
    breakpoints={{
      500: { slidesPerView: 1.8 },
      748: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
      1300: { slidesPerView: 4 },
    }}
  >
    {images.map(({ id, src }) => (
      <SwiperSlide key={id}>
        <div className="w-full">
          <img
            src={src}
            className="h-[280px] w-full rounded-xl object-cover shadow-xl transition"
            alt={`Doctor image ${id}`}
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div> */
}