"use client";

import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeItems } from "@/redux/cartslice/CartSlice";
import { Button } from "./ui/button";

const Cart = ({
  isCartOpened,
  updateState,
}: {
  isCartOpened: boolean;
  updateState: () => void;
}) => {
  const cartdata = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  //Total of prices function
  let total = [0];
  cartdata.map((q) => total.push(q.quantity * q.items.price));

  return (
    <div
      className={`${
        isCartOpened == false ? "-left-full" : " left-0"
      } fixed min-h-full w-full md:w-[50%]  top-0 bg-[#252826] transition-all duration-500 `}
    >
      <div className="w-[95%] mx-auto h-full flex flex-col mt-10 text-black relative">
        <h1 className="text-2xl  text-orange text-center  font-poppins uppercase">
          Orders
        </h1>
        {/* Close Window */}
        <IoIosArrowBack
          onClick={updateState}
          className="text-3xl text-white absolute right-8 top-0 cursor-pointer hover:text-orange transition-all duration-300"
        />
        <div className="flex flex-col gap-5  justify-center items-center w-full">
          <p className="text-white text-center mt-4 font-[500]">
            Total : <span className="text-orange"> {total.reduce((pre, curr) => pre + curr)} $</span>
          </p>
          <Button size="sm" variant="orange" className="">
            Confirm Order
          </Button>
          {/* Cart Content */}
          <div className="flex w-full flex-col gap-5">
            {/* maping from store */}
            {/*  If cart is not empty show this */}
            {cartdata.length !== 0 ? (
              cartdata.map((item) => (
                <div
                  key={item.items.id}
                  className="flex flex-col gap-1 relative items-start  bg-black px-3 py-2 shadow-lg"
                >
                  <div className="flex justify-between w-full  gap-2  ">
                    <h3 className="font-poppins font-normal text-[16px]  text-white">
                      {item.items.title}
                    </h3>
                    <div className=" flex gap-3 font-[600] mr-8 text-nowrap">
                      <p className="text-orange">{item.items.price} $</p>
                      <p className="text-orange">{item.quantity} X</p>
                    </div>
                  </div>

                  {/* Delete */}
                  <MdDeleteForever
                    className="absolute right-0 text-white text-3xl cursor-pointer hover:text-orange transition-all duration-300"
                    onClick={() => dispatch(removeItems(item))}
                  />
                </div>
              ))
            ) : (
              // If cart is empty show this
              <h2 className="text-center text-white flex justify-center items-center font-poppins text-xl h-[300px]">
                Cart Is Empty !
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
