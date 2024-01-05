import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroCard from "../cards/HeroCard";

export default function HeroSlider({ data }) {
  // console.log(data);
  // const [data, setData] = useState([]);
  // console.log(data);
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${config.bearer_token}`,
  //     },
  //   };

  //   fetch(url, options)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data.results.slice(0, 6));
  //       const result = data.results.slice(0, 6);
  //       setData(result);
  //     });
  // }, [url]);
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={true}
      loop={true}
      slidesPerView={1}
      breakpoints={{
        0: {
          navigation: {
            nextEl: null,
            prevEl: null,
          },
        },
        768: {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {data.slice(0, 5).map((item, index) => (
        <SwiperSlide key={index}>
          <HeroCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
