"use client";

import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24 " id="contact">
      <div className="container mx-auto pb-24 ">
        <div className="grid grid-cols-1 gap-x-8  gap-y-14 text-white xl:grid-cols-4 ">
          {/*info */}
          <div className=" flex flex-col  gap-4">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src={"/assets/img/logo (1).png"}
                alt="logo"
                width={117}
                height={55}
                className="object-center text-black"
              />
            </Link>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam
              architecto harum necessitatibus vitae provident commodi ex eos
              nemo
            </p>
            <ul className="flex flex-col gap-4 ">
              <li className="flex items-center  gap-4 text-white">
                <FaMapMarkerAlt className="text-2xl text-red-600" />
                <h6>Location:</h6>
                <div className="font-oswald text-xl ">Caracas, Venezuela</div>
              </li>
              <li>
                <div className="flex items-center gap-4 ">
                  <FaPhoneAlt className="text-2xl text-red-600" />
                  <div className="font-oswald text-xl">+58 04160131808</div>
                </div>
              </li>
              <li>
                <Link href="" className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-red-600" />
                  <div className="font-oswald text-xl underline">
                    davidlovera16@gmail.com
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/*blog */}
          <div>
            <h4 className="h4 mb-4 text-red-600">recent blog post</h4>
            <div
              className="border-gray-40 flex  flex-col gap-3
            border-b border-dotted  pb-3"
            >
              <Link href="/" className="transition-all hover:text-red-600">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
              </Link>
              <p className="text-[12px] uppercase tracking-[3px] text-gray-400">
                September 22,2024
              </p>{" "}
              <div
                className="flex flex-col gap-3 border-b border-dotted
            border-gray-400 pb-3"
              >
                <Link href="/" className="transition-all hover:text-red-600">
                  <h5 className="h5 leading-snug">
                    How to stay motivated for all exercises
                  </h5>
                </Link>
                <p className="text-[12px] uppercase tracking-[3px] text-gray-400">
                  September 22,2024
                </p>
              </div>
              <div className="flex flex-col  gap-4 pb-3">
                <Link href="/" className="transition-all hover:text-red-600">
                  <h5 className="h5 leading-snug">
                    How to stay motivated for all exercises
                  </h5>
                </Link>
                <p className="text-[12px] uppercase tracking-[3px] text-gray-400">
                  September 22,2024
                </p>
              </div>
            </div>
          </div>{" "}
          {/*gallery */}
          <div>gallery</div>
          {/*newslatter */}
          <div>newslatter</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
