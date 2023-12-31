"use client";
import { motion } from "framer-motion";
import { FadeIn } from "../variants";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0 "
    >
      <div className="container mx-auto ">
        {/* text & image */}
        <div className="flex items-center xl:h-[960px]">
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              variants={FadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold "
            >
              A taste of local <br />
              flavours
            </motion.h1>
            <motion.p
              variants={FadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold mb-7"
            >
              by: <span className="text-orange">Ibrahim Hassouna</span>
            </motion.p>
            <motion.p
              variants={FadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-12 max-w-lg  mx-auto"
            >
              Posuere amet, sed vitae condimentum accumsan aliquam et, aliquam.
              Tellus in fusce vel gravida lobortis diam dis ut. Bibendum
              senectus urna, in ultricies sed lorem natoque. Risus pharetra
            </motion.p>
            <motion.div
              variants={FadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button>Let's eat</Button>
            </motion.div>
          </div>
          <motion.div
          variants={FadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0">
            <Image src="/hero/plate.png" width={700} height={800} alt="plate" />
          </motion.div>
        </div>
      </div>
      {/* coffe image */}
      <motion.div
          variants={FadeIn("up",1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
           className="hidden xl:flex xl:relative xl:-top-36">
        <Image src="/hero/coffee.png" width={400} height={410} alt="coffee" />
      </motion.div>
    </section>
  );
};

export default Hero;
