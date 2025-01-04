import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "../../../styles/EffectCard.module.css"
export default function TeacherSlider() {
  return ( 
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="swiper1"
    >
      <SwiperSlide>
        <img
          className="container-fluid w-full absolute bottom-0 -z-10"
          src="/public/images/post/midi.asghari.png"
          alt="rec"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="container-fluid w-full absolute bottom-0 -z-10 "
          src="/public/images/post/mohsen.png"
          alt="rec"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="container-fluid w-full absolute bottom-0 -z-10"
          src="/public/images/post/Sheldon_Cooper.png"
          alt="rec"
        />
      </SwiperSlide>
     
      
    </Swiper>
  );
}