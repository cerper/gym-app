"use client";

import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import CustomButton from "./CustomButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const membershipData = [
  {
    title: "Standart",
    price: "20$",
    benefits: [
      {
        icon: <FaCheck />,
        description: "What is Lorem Ipsum? .",
      },
      {
        icon: <MdClose />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaCheck />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaCheck />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <MdClose />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    title: "Pro",
    price: "40$",
    benefits: [
      {
        icon: <FaCheck />,
        description: "What is Lorem Ipsum? .",
      },
      {
        icon: <MdClose />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaCheck />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaCheck />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <MdClose />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    title: "Premmium",
    price: "60$",
    benefits: [
      {
        icon: <FaCheck />,
        description: "Include membership",
      },
      {
        icon: <MdClose />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaCheck />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaCheck />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <MdClose />,
        description:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
];

const MembershipSlice = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[600px]"
    >
      {membershipData.map((items, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="mx-auto w-full max-w-sm border 
            border-red-600 transition-all duration-300 hover:bg-primary-300/80 xl:max-w-none"
            >
              <div className="border-b border-red-600 py-5 pb-[30px] ">
                <h4 className="h4 text-center text-white">{items.title}</h4>
              </div>
              <div>
                <ul>
                  {items.benefits.map((item, index) => {
                    return (
                      <div key={index} className="py-3">
                        <div className="ml-4 flex gap-4 text-2xl text-red-600 lg:text-3xl">
                          {item.icon}
                          <div className="text-base text-white">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="mb-8 text-center text-4xl font-bold underline">
                    {items.price}
                  </div>
                </ul>
                <div className="flex flex-col items-center justify-center">
                  <CustomButton
                    text="subscribe"
                    containerStyles="w-[196px] h-[58px] bg-red-300 mb-8"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default MembershipSlice;
