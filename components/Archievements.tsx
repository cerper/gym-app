"use client";

import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUser } from "react-icons/im";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    number: 20,
    icon: <FaBriefcase />,
    text: "training courses",
  },
  {
    number: 879,
    icon: <FaClock />,
    text: "working here",
  },
  {
    number: 150,
    icon: <ImUser />,
    text: "happy-customers",
  },
  {
    number: 9,
    icon: <FaTrophy />,
    text: "international awards",
  },
];

//animation

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

const statsItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Archievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 items-center justify-center gap-10 md:grid-cols-4"
        >
          {stats.map((item, index) => {
            return (
              <motion.div
                variants={statsItem}
                key={index}
                className="mt-16 flex flex-col items-center justify-center"
              >
                {/* circulo afuera */}
                <div className="mx-auto mb-6 flex h-[140px] w-[140px] rounded-full border border-red-600 p-1">
                  {/* circulo adentro y count */}
                  <div
                    ref={ref}
                    className="flex h-full w-full flex-col items-center justify-center rounded-full border border-red-400 text-5xl"
                  >
                    {/*si el usuario esta viendo esta seccion se renderice el contido */}
                    {inView && (
                      <CountUp start={0} end={item.number} duration={6} />
                    )}
                  </div>
                </div>
                <div className="mb-4 flex flex-col items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <h4 className="lg:h4 h6 mb-4 text-center lg:text-balance">
                  {" "}
                  {item.text}
                </h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Archievements;
