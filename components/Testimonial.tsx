"use client";

import TestimonialSlide from "./TestimonialSlide";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Testimonial = () => {
  return (
    <section
      className="h-[70vh] py-8 md:h-[80vh] xl:h-[88vh] "
      id="testimonials"
    >
      <div className="container  mx-auto flex h-full flex-col">
        <h2 className="h2 text-center ">Testimonials</h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className=""
        >
          <TestimonialSlide />
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonial;
