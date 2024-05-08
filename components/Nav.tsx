"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "classes", offset: -80 },
  { name: "team", target: "team", offset: 0 },
  { name: "prices", target: "prices", offset: -40 },
  { name: "testimonials", target: "testimonials", offset: 0 },
  { name: "blog", target: "blog", offset: 0 },
  { name: "contact", target: "contact", offset: 0 },
];

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            key={index}
            offset={link.offset}
            to={link.target}
            activeClass="active"
            smooth
            spy
            className="cursor-pointer transition-all hover:text-red-700"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};
export default Nav;
