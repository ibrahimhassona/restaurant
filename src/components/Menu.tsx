"use client";
import { CartData } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItem } from "@/redux/cartslice/CartSlice";
import { FadeIn } from "@/variants";
import { motion } from "framer-motion";

const menu: CartData[] = [
  {
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: 24,
    id: 1,
  },
  {
    img: "/menu/item-2.png",
    title: "Chorizo and avocado spaghetti",
    price: 26,
    id: 2,
  },
  {
    img: "/menu/item-3.png",
    title: "Crayfish and black pepper toastie",
    price: 12,
    id: 3,
  },
  {
    img: "/menu/item-4.png",
    title: "Orange and banana cookies",
    price: 18,
    id: 4,
  },
];
const Menu = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <section className="bg-menu relative py-12 xl:py-24 " id="menu">
      <div className="container mx-auto">
        {/* Head Of Section */}
        <motion.div
          variants={FadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-[570px] mx-auto text-center xl:text-right "
        >
          <h2>Favorite Menu</h2>
          <Link
            href="/"
            className=" text-green xl:justify-end justify-center flex items-center gap-2"
          >
            View All
            <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
          </Link>
        </motion.div>
        {/* Grid Menu */}
        <motion.div
          variants={FadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="grid gap-3 xl:grid-cols-4 grid-cols-1 md:grid-cols-3 items-center mt-8"
        >
          {menu.map((item, index) => (
            <div
              key={index}
              className=" bg-white shadow-lg flex flex-col gap-2 max-w-[270px] mx-auto "
            >
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  width={240}
                  height={240}
                  alt={item.title}
                  className="w-full group hover:scale-110 transition-all duration-300 "
                />
              </div>
              <div className=" flex flex-col gap-2 px-3 pb-2">
                <h3 className="black">{item.title}</h3>
                {/* price & add to cart */}
                <div className="flex items-center justify-between  ">
                  <p className="font-semibold text-lg text-orange flex">
                    {item.price} $
                  </p>
                  <FaCartPlus
                    className="text-3xl  hover:text-black text-orange transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      dispatch(addItem({ items: item, quantity: 1 }));
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
