"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { MdShoppingCart } from "react-icons/md";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Cart from "./Cart";

const Header = () => {
  // state nav shape with scrolling
  const [active, setActive] = useState<boolean>(false);

  // state for toggle cart case
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  // Update the toggle state from cart
  const updateState = () => {
    setIsCartOpen(false);
  };
  // redux usage
  const data = useSelector((state: RootState) => state.cart.items);
  // UseEffect for Header
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setActive(window.scrollY > 100);
      }
    };
    if (typeof window !== 'undefined') {
      // Add event
      window.addEventListener("scroll", handleScroll);
      // remove event
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={`${
        active ? "bg-black shadow-md" : "bg-none"
      } fixed top-0 left-0 z-50 w-full `}
    >
      <div className="container mx-auto  text-white w-full h-[60px] flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <Image src="/logo.svg" width={70} height={30} alt="logo" />
        </Link>

        {/* Nav */}
        <Nav
          ConatinerStyle="hidden lg:flex gap-x-10 text-white cursor-pointer"
          linkStyle="capitalize"
        />
        {/* Booking Button */}
        <ScrollLink to="reservation" className="hidden lg:flex" smooth={true} duration={500} offset={0}>
          <Button size="sm" variant="orange">
            Book A Table
          </Button>
        </ScrollLink>
        {/* Cart */}
        <div className="relative">
          <MdShoppingCart
            className="text-3xl cursor-pointer hover:text-orange"
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
          />
          <span className="h-[20px] text-sm w-[20px] absolute top-[-8px] bg-orange flex items-center justify-center rounded-full right-[-10px]">
            {data.length}
          </span>
        </div>
        {/* Cart component */}
        <Cart isCartOpened={isCartOpen} updateState={updateState} />

        {/* Mobile Nav */}
        <NavMobile
          ConatinerStyle="lg:hidden "
          linkStyle="uppercase"
          IconsStyle="text-3xl"
        />
      </div>
    </header>
  );
};

export default Header;
