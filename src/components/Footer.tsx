"use client";

import Image from "next/image";
import Link from "next/link";
// Motion
import { motion } from "framer-motion";
import { FadeIn } from "../variants";

const data = [
  {
    title: "blog",
    items: [
      "Sit pellentesque neque",
      "Arcu et tincidunt dictum ",
      "nunc ut nisi",
      " dolor euismod",
    ],
  },
  {
    title: "new items",
    items: [
      "Sit pellentesque neque ",
      "Arcu et tincidunt dictum ",
      "nunc ut nisi",
      " dolor euismod",
    ],
  },
  {
    title: "Social media",
    items: ["facebook", "instgram", "youtube", " WhatsApp"],
  },
];

const Footer = () => {
  return (
    <motion.footer
      variants={FadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className="w-full bg-footer bg-no-repeat bg-cover pt-8 max-md:min-h-[100vh-100px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap gap-[40px] justify-between max-md:flex-col  items-start py-8">
          {/* logo */}
          <div className="mt-2 min-md:min-w-[150px]">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={90} height={33} />
            </Link>
          </div>
          {/* Groups */}
          {data.map((col, index) => (
            <div
              key={index}
              className="flex flex-col justify-center capitalize gap-5"
            >
              <h3 className="text-orange font-semibold font-poppins">
                {col.title}
              </h3>
              <ul className="flex flex-col justify-center items-start gap-2">
                {col.items.map((li) => (
                  <Link href="/">{li}</Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Copy Rights */}
      <div className="bg-black">
        <div className="container mx-auto">
          <p className="text-center text-white">
            {" "}
            &copy; 2023 <span className="text-orange">W'Food</span> . All Rights
            Reserved.{" "}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
