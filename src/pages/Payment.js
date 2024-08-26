import React from "react";
import { useNavigate } from "react-router-dom";
import SelectPayment from "./SelectPayment";
const Payment = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Payment/SelectPayment");
  };
  return (
    <div className=" w-full ">
      {/* header */}
      <div className="py-5 px-40 flex flex-row justify-between   ">
        {/* Logo */}
        <div className=" flex flex-row items-center">
          <p className=" font-medium text-[0.9rem]">
            MyFast
            <span className="text-[#63B178]">X</span>
          </p>
          <img
            src="/assets/images/Download2.png"
            className=" bg-[50%_50%] bg-cover bg-no-repeat w-[1.6rem] h-[1.6rem]"
          />
          <div className=" inline-block font-semibold text-[0.7rem] ">
            Partner
          </div>
        </div>
        {/* help and support */}
        <div className="flex flex-row">
          <div className=" flex w-[1.5rem] h-[1.5rem]">
            <img
              className="w-[1.1rem] h-[1.1rem]"
              src="/assets/images/Frame (2).png"
            />
          </div>
          <span className="font-semibold text-[0.8rem] ">Help and support</span>
        </div>
      </div>
      {/* Payment mtd */}
      <div className="px-40 font-bold text-[1.5rem] text-[#080404] py-5">
        SELECT PAYMENT METHOD
        <div className="text-[0.9rem] text-[#080404]">
          {" "}
          All payments are secured and encrypted
        </div>
      </div>

      {/* Add box */}
      <div className="px-40  flex justify-between pt-4">
        <div
          onClick={handleClick}
          className="rounded-2xl hover:cursor-pointer bg-[#F8F8F8]  flex flex-col w-[25.4rem] gap-5 h-60 justify-center items-center "
        >
          <span className="font-light text-[5rem] text-[#787878] leading-10">
            +
          </span>
          <span className="font-medium text-[1rem] text-[#787878]">
            Add New Payment Method
          </span>
        </div>
        <img
          src="/assets/images/Payment.png"
          className="w-[30.3rem] h-[24.9rem]"
        />
      </div>
      <div className="bg-[linear-gradient(90deg,#FFFFFF,#D9D9D9,#FFFFFF)] mt-40 h-[0.1rem] px-40"></div>
      <span className="font-medium text-[0.8rem] text-[#4E4E4E] px-40 align-middle flex justify-center py-8">
        © 2024 MYFASTX TECHNOLOGIES PVT LTD. All Rights Reserved CIN:
        U52219UP2023PTC192260
      </span>
    </div>
  );
};

export default Payment;
