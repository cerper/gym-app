"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Classes = () => {
  return (
    <section id="classes">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className=" grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex h-[300px] w-full flex-col items-center justify-center lg:h-[480px]"
            >
              <div className="absolute top-0 z-10 h-full w-full bg-black/50" />
              <Image
                src={item.img}
                alt={item.name}
                className="object-cover"
                fill
                priority
              />
              <div className="z-30 flex max-w-[400px] flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="h3   text-red-600 "
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="max-w-[500px] text-center text-white"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex items-center justify-center "
                >
                  <CustomButton
                    containerStyles="w-[196px] h-[58px] bg-red-300 "
                    text="Read more"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};
export default Classes;
