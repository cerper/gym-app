"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brandsData = [
  {
    image: "/assets/img/brands/brand-1.png",
  },
  {
    image: "/assets/img/brands/brand-2.png",
  },
  {
    image: "/assets/img/brands/brand-3.png",
  },
  {
    image: "/assets/img/brands/brand-4.png",
  },
  {
    image: "/assets/img/brands/brand-5.png",
  },
];
const statsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const Brands = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5  ">
      {brandsData.map((brand, index) => {
        return (
          <motion.div
            variants={statsContainerVariants}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            key={index}
            className="my-4"
          >
            <div className="flex items-center justify-center">
              <Image
                src={brand.image}
                alt="logo"
                width={100}
                height={100}
                className="h-[100px] text-black"
              />
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
export default Brands;
