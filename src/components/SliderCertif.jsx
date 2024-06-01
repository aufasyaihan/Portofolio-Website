/* eslint-disable react/prop-types */
import CERTIFICATE from "../Certificate";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderCertif() {
  return (
    <Swiper
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      loop={true}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={-46}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {CERTIFICATE.map((certif) => {
        return (
          <SwiperSlide key={certif.id}>
            <a
              href={certif.link}
              target="_blank"
              className="flex flex-col border border-gray-500 rounded-lg h-80 sm:h-[450px] bg-white overflow-hidden mb-10 mx-12"
            >
              <div className="sm:h-72 w-full">
                <img
                  src={certif.img}
                  alt={certif.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 h-full w-full flex flex-col justify-between">
                <div>
                  <h1 className="font-semibold text-xs sm:text-md md:text-lg">
                    {certif.name}
                  </h1>
                  <p className="text-sky-700 text-xs sm:text-md md:text-lg">
                    {certif.institution}
                  </p>
                </div>
                <p className="text-end text-gray-600">({certif.year})</p>
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
