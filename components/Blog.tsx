"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

const blogData = [
  {
    name: "Cardio is a good option to build a great body ?",
    image: "/assets/img/blog/post3.jpg",
    text: "Lorem ipsum dolor sit,",
  },
  {
    name: "The best way to build muscle?",
    image: "/assets/img/blog/post4.jpg",
    text: "Lorem ipsum dolor sit, ",
  },
  {
    name: "Never skip legs day, all you have to now ",
    image: "/assets/img/blog/post2.jpg",
    text: "Lorem ipsum dolor sit, ",
  },
  {
    name: "Andrea one of our best trainer tells us her secret",
    image: "/assets/img/blog/post1.jpg",
    text: "Lorem ipsum dolor sit, ",
  },
];

const Blog = () => {
  return (
    <section className=" mt-12 py-8 md:mt-4 lg:py-0 " id="blog">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 "
      >
        {blogData.map((blog, index) => {
          return (
            <div
              key={index}
              className="relative flex h-[300px] w-full flex-col items-center justify-center lg:h-[480px]"
            >
              <div className="absolute top-0 z-10 h-full w-full bg-black/50" />
              <Image
                src={blog.image}
                alt={blog.name}
                fill
                className="object-fill"
              />
              <div className="z-30 flex max-w-[400px] flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-center text-2xl text-white"
                >
                  {blog.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className=" text-center text-base text-white"
                >
                  {blog.text}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    text="see more"
                    containerStyles="capitalize w-[196px] h-[58px] bg-red-300"
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
export default Blog;
