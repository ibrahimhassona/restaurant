"use client"
import { FadeIn } from "@/variants";
import { motion } from "framer-motion";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <section className="mt-10 h-[100vh] mb-5" id="reservation">
      <div className="xl:bg-reservation bg-no-repeat flex flex-col justify-end items-end xl:h-full xl:py-10 ">
        <motion.div
        variants={FadeIn('up',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.4}}
        className="bg-black xl:w-[55%] max-xl:w-full p-10 max-xl:h-[100vh] flex flex-col max-xl:justify-around">
            <h2 className="text-white ">Book A Table</h2>
          <ReservationForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
