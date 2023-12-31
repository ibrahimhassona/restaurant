"use client";
import { NavLinks, NavProps } from "@/app/types";
import { Link } from "react-scroll";

const Nav = ({ ConatinerStyle, linkStyle }: NavProps) => {
  const links: NavLinks = [
    {
      path: "home",
      name: "home",
      offset: 50,
    },
    {
      path: "menu",
      name: "menu",
      offset: -10,
    },
    {
      path: "about",
      name: "about",
      offset: 20,
    },
    {
      path: "contact",
      name: "contact",
      offset: -50,
    },
  ];
  return (
    <nav className={`${ConatinerStyle}`}>
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          duration={500}
          smooth={true}
          spy={true}
          offset={link.offset}
          className={linkStyle}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
