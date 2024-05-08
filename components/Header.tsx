"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import logo from "@/public/assets/img/logo (1).png";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      //defect scroll
      setHeaderActive(window.scrollY > 50);
    };
    //add scroll event
    window.addEventListener("scroll", handlerScroll);
    //clear scroll event
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <header
      className={`${headerActive ? "h-[115px]" : "h-[120px]"} max-w[1920px] fixed top-0 z-50 h-[100px] w-full
      bg-primary-200 transition-all`}
    >
      <div className="container mx-auto flex h-full flex-col  items-center justify-between lg:flex-row ">
        <Link href="/">
          <Image
            src={logo}
            alt="logo gym"
            width={117}
            height={55}
            priority
            className="mt-7 py-6 lg:py-2"
          />
        </Link>
        {/*mobile nav */}
        <MobileNav containerStyles="capitalize fixed text-white mt-4 flex text-sm gap-1.5 md:text-xl lg:hidden" />
        <Nav containerStyles="capitalize flex gap-4 hidden font-bold text-white lg:flex" />
      </div>
    </header>
  );
};
export default Header;
