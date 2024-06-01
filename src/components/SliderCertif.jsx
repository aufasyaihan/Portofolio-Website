/* eslint-disable react/prop-types */
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderCertif({sertif}) {
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
      {sertif.map((certif) => {
        return (
          <SwiperSlide key={certif.id}>
            <a
              href={certif.link}
              target="_blank"
              className="flex flex-col border border-gray-500 rounded-lg h-80 sm:h-[450px] bg-white overflow-hidden mb-10 mx-12"
            >
              <div className="sm:h-80 h-full w-full">
                <img
                  src={certif.img}
                  alt={certif.name}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-4 h-full w-full flex flex-col justify-between">
                <div>
                  <h1 className="font-bold text-md md:text-lg">
                    {certif.name}
                  </h1>
                  <p className="text-gray-600 text-xs sm:text-md md:text-lg">
                    {certif.institution}
                  </p>
                </div>
                <p className="text-end text-xs md:text-md text-gray-600">({certif.year})</p>
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
