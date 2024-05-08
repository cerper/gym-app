"use client";

import { FaUser } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Archievements from "./Archievements";

const featureds = [
  {
    icon: <FaUser />,
    title: "award-winning trainers",
    subtitle:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: <IoIosPricetag />,
    title: "excellent prices",
    subtitle:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const About = () => {
  return (
    <section className="bg-white pb-14 pt-8 lg:pb-28 lg:pt-16" id="about">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h2 text-center"
        >
          About Us
        </motion.h2>
        <div className="lg:grid-row-3 mt-20 grid grid-cols-1 grid-rows-1  gap-9 lg:grid-cols-3 ">
          {featureds.map((feautured, index) => {
            return (
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={index}
                className="flex flex-col items-center justify-center gap-4 border p-8"
              >
                <div className="flex h-[80px] w-[80px] items-center justify-center gap-2 rounded-full bg-primary-300 text-4xl text-white">
                  {feautured.icon}
                </div>
                <h4 className="h4 max-w-[300px]  text-red-600">
                  {feautured.title}
                </h4>
                <p className="text-center text-lg">{feautured.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
        <Archievements />
      </div>
    </section>
  );
};
export default About;
