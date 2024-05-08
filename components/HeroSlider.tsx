"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
//import swiper
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButton from "./SwiperNavButton";

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="flex h-full justify-end pt-10">
          <div className="flex flex-col items-center justify-center lg:max-w-[700px] lg:items-start">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 mb-2 text-center lg:text-left"
            >
              <span>Where hard</span> work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="mb-4 max-w-[300px] text-center text-base italic text-white lg:max-w-[600px] lg:text-left lg:text-lg"
            >
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </motion.p>
            <motion.a
              href="/"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text="Get Started"
                containerStyles="w-[196px] h-[58px] bg-red-300 "
              />
            </motion.a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full justify-end pt-10">
          <div className="flex flex-col items-center justify-center lg:max-w-[700px] lg:items-start">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 mb-2 text-center lg:text-left"
            >
              <span>Where hard</span> work meets success
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="mb-4 max-w-[300px]  text-center text-base italic text-white lg:max-w-[600px] lg:text-left"
            >
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </motion.p>
            <motion.a
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              href="/compra"
            >
              <CustomButton
                text="Get Started"
                containerStyles="w-[196px] h-[58px] bg-red-300  "
              />
            </motion.a>
          </div>
        </div>
      </SwiperSlide>
      {/*swiper nav buttons */}
      <div className=" ">
        <SwiperNavButton
          btnStyles="border border-red-600 text-white h-[56px] w-[56px] flex
        justify-center items-center hover:bg-red-600 transition-all duration-300 "
          containerStyles="absolute gap-4  bottom-1 right-0 h-[100px] lg:h-[190px] w-full lg:w-[700px] z-50 flex justify-center lg:bottom-0"
          iconsStyles="text-2xl"
        />
      </div>
    </Swiper>
  );
};
export default HeroSlider;
