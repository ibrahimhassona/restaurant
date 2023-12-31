"use client";

import { MobileNavProps, NavLinks } from "@/app/types";
import React, { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
const links: NavLinks = [
  {
    path: "home",
    name: "home",
    offset: 50,
    icon: <RiHomeFill />,
  },
  {
    path: "menu",
    name: "menu",
    offset: -50,
    icon: <BiSolidFoodMenu />,
  },
  {
    path: "about",
    name: "about",
    offset: 20,
    icon: <FaUsers />,
  },
  {
    path: "contact",
    name: "contact",
    offset: -90,
    icon: <RiHomeFill />,
  },
];

const NavMobile = ({
  ConatinerStyle,
  linkStyle,
  IconsStyle,
}: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className={`${ConatinerStyle}`}>
        <div
          className="text-[30px] text-white cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <RiMenu2Line className='hover:text-orange transition-all duration-300' />
        </div>
      </div>
      {/* Aside Menu */}
      <aside
        className={` ${
          isOpen ? "right-0" : "-right-full"
        } h-full w-full fixed top-0 p-10 bg-black z-30 transition-all duration-500`}
      >
        {/* Head of mobile nav */}
        <div className="flex flex-col h-full justify-between items-center ">
          {/* Triger Menu*/}
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-4xl text-white absolute top-8 left-8 cursor-pointer"
          >
            <IoCloseOutline />
          </div>
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.svg" width={90} height={30} alt="logo" />
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-5">
            {links.map((link, index) => (
              <ScrollLink
                className="flex items-center gap-x-3 text-white"
                to={link.path}
                offset={link.offset}
                smooth={false}
                key={index}
              >
                <div className={`${IconsStyle}`}>{link.icon}</div>
                <div className={`${linkStyle}`}>{link.name}</div>
              </ScrollLink>
            ))}
          </div>
          {/* Book Button */}
          <ScrollLink to="reservation" smooth offset={-50}>
            <Button size="sm" variant="orange">
              Book A Table
            </Button>
          </ScrollLink>
        </div>
      </aside>
    </>
  );
};

export default NavMobile;
