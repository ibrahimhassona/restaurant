"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { FadeIn } from "@/variants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className=" pt-[8rem] ">
      <div className="grid gap-8 max-lg:grid-cols-1 grid-cols-2  justify-center">
        {/* text */}
        <motion.div
          variants={FadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col justify-between max-lg:mx-4 lg:ml-10 gap-3 "
        >
          <h2 className="text-[40px] lg:text-[56px] leading-none max-md:text-center">
            Let's Talk About <span className="text-orange"> W'Food</span>
          </h2>
          <p>
            Mauris nam et ipsum ipsum in. Risus nullam in sit mi est justo at
            fringilla. Consequat ac fringilla quis enim, sit ipsum. Laoreet eget
            metus morbi convallis gravida elementum facilisis. Neque enim quis
            fusce amet. Pellentesque netus vel eu
            <br />
            <br />
            posuere ultrices facilisi. Senectus velit lobortis velit arcu varius
            lectus mattis. Dictum aenean duis aliquet Tortor purus egestas urna
            scelerisque vel ornare lectus ultricies. Nisi, eu ut ultricies enim
            enim amet porttitor. Volutpat ac tellus volutpat eget volutpat orci
            enim, ut a. Turpis adipiscing eleifend dignissim viverra euismod
            ultrices.
          </p>
          <Button className="max-sm:w-full">Read More</Button>
        </motion.div>
        {/* image */}
        <motion.div
          variants={FadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex justify-center"
        >
          <Image
            src="/about/img.png"
            alt="About"
            width={370}
            height={600}
            className="w-full hidden lg:flex"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
