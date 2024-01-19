import React from "react";
import MainCard from "../cards/MainCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function MainSlider({ data }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={true}
      loop={true}
      spaceBetween={24}
      breakpoints={{
        0: {
          slidesPerView: 1.5,
          slidesPerGroup: 1,
        },
        540: {
          slidesPerView: 2.5,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3.5,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        1280: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
      }}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <MainCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
