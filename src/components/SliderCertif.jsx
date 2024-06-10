/* eslint-disable react/prop-types */
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderCertif({ sertif }) {
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
    >
      {sertif.map((certif) => {
        return (
          <SwiperSlide key={certif.id}>
            <a
              href={certif.link}
              target="_blank"
              className="flex flex-col border-2 rounded-lg h-96 sm:h-[450px] bg-white overflow-hidden mb-10 mx-12 shadow-lg group"
            >
              <div className="sm:h-80 h-full w-full overflow-hidden">
                <img
                  src={certif.img}
                  alt={certif.name}
                  className="h-fit sm:h-full w-full object-cover group-hover:scale-110 transition-all duration-200 ease-in-out"
                />
              </div>
              <div className="p-4 h-full w-full flex flex-col justify-between">
                <div>
                  <h1 className="font-bold text-md sm:text-xl">
                    {certif.name}
                  </h1>
                  <p className="text-gray-600 text-xs sm:text-lg">
                    {certif.institution}
                  </p>
                </div>
                <p className="text-end text-xs md:text-md text-gray-600">
                  ({certif.year})
                </p>
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
