import Image from 'next/image';
import React, { useState } from 'react';
import SwiperCore, { Controller, Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageLoader from '../../imageLoader';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Slider({ photos}) {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  // const slides = [];
  // for (let i = 0; i < 5; i += 1) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`} tag="li">
  //       <Image
  //         loader={imageLoader}
  //         unoptimized
  //         src={`https://picsum.photos/id/${i + 1}/500/300`}
  //         alt={`Slide ${i}`}
  //         width="500"
  //         height="400"
  //       />
  //     </SwiperSlide>,
  //   );
  // }

  return (
    <React.Fragment>
      <Swiper
        id="main"
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        loop
        spaceBetween={20}
        slidesPerView={2.5}
      >
        {photos.map((photo, index) => {
          return (
            <SwiperSlide key={index} tag="li">
              <Image
                loader={imageLoader}
                unoptimized
                src={photo.src.medium}
                alt={photo.alt}
                width="500"
                height="400"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
}

export default Slider;
