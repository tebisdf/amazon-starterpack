import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SliderProducts } from "../../data/products";
//import css of the swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

export default function Slider() {
  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          640: { slidesPerView: 3 },
          0: { slidesPerView: 1 },
        }}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        className="mySwiper"
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>shop now</div>
            </div>
            <img src={slide.img} alt="product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
