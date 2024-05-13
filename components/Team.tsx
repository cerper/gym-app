"use client";

import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const team = [
  {
    name: "David",
    role: "body builder",
    image: "/assets/img/trainers/david.jpg",
    description:
      "hat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    social: [
      { icon: <FaFacebook />, href: "http//facebook.com" },
      { icon: <FaInstagram />, href: "http//instagram.com" },
      { icon: <FaTiktok />, href: "http//tiktok.com" },
    ],
  },
  {
    name: "Matt",
    role: "body builder",
    image: "/assets/img/trainers/matt.jpg",
    description:
      "hat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    social: [
      { icon: <FaFacebook />, href: "http//facebook.com" },
      { icon: <FaInstagram />, href: "http//instagram.com" },
      { icon: <FaTiktok />, href: "http//tiktok.com" },
    ],
  },
  {
    name: "rosy",
    role: "body builder",
    image: "/assets/img/trainers/rosy.jpg",
    description:
      "hat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    social: [
      { icon: <FaFacebook />, href: "http://facebook.com" },
      { icon: <FaInstagram />, href: "http://instagram.com" },
      {
        icon: <FaTiktok />,
        href: "https://www.youtube.com/watch?v=yHYKgNxsSIo",
      },
    ],
  },
  {
    name: "sofia",
    role: "body builder",
    image: "/assets/img/trainers/sofia.jpg",
    description:
      "hat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    social: [
      { icon: <FaFacebook />, href: "http://facebook.com" },
      { icon: <FaInstagram />, href: "http//instagram.com" },
      { icon: <FaTiktok />, href: "http//tiktok.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 pt-16 xl:h-[100vh] " id="team">
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl">Our Trainers are:</h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12  grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {team.map((person, index) => {
            return (
              <div key={index}>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className=" mx-auto mt-4  flex h-[260px] w-[220px]"
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={300}
                    height={300}
                  />
                </motion.div>
                <motion.h3
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-center"
                >
                  {person.name}
                </motion.h3>
                <motion.h6
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h6 text-center text-xl text-red-600"
                >
                  {person.role}
                </motion.h6>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="mx-auto max-w-[300px] text-center text-base underline"
                >
                  {person.description}
                </motion.p>
                <div>
                  <div className=" mt-4 flex items-center justify-center gap-4">
                    {person.social.map((social, index) => {
                      return (
                        <div key={index}>
                          <Link
                            href={social.href}
                            className="hover:text-red-600"
                          >
                            <div className=" text-3xl">{social.icon}</div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Team;
