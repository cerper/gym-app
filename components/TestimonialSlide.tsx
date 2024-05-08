"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = [
  {
    name: "david",
    image: "/assets/img/testimonial/david.jpg",
    text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "lucy",
    image: "/assets/img/testimonial/lucy.jpg",
    text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "maria",
    image: "/assets/img/testimonial/maria.jpg",
    text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "michael",
    image: "/assets/img/testimonial/michael.jpg",
    text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const TestimonialSlide = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      className="min-h-[600px]  "
    >
      {testimonialsData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="mb-4 pb-0 pt-6 lg:mt-8 lg:pb-8">
              <h3 className="h3  mt-4 text-center text-red-600">{item.name}</h3>
              <div className=" container mt-14 flex h-[300px] w-[300px] flex-col items-center justify-center md:h-[350px] md:w-[350px] md:flex-col">
                {" "}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="mt-6 h-[300px] w-[300px] rounded-full md:h-[350px] md:w-[350px]"
                />
                <div className="mt-4  text-center md:mb-8 md:text-xl lg:text-lg">
                  {item.text}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default TestimonialSlide;
