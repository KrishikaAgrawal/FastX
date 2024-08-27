import React from "react";

const AddPayment = () => {
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
        ADD PAYMENT METHOD
        <div className="text-[0.9rem] text-[#080404]">
          {" "}
          All payments are secured and encrypted
        </div>
      </div>
      {/* form */}
      <div className="px-40 flex justify-between mb-40 gap-40 ">
        <div className=" flex flex-col w-1/2 mt-4 gap-6">
          {/* <div className="rounded-[0.7rem] border w-full py-3 pl-5">
            <span className="    text-[1rem]  text-[#898989]">
              Enter Cardholder Name
            </span>
          </div> */}
          <input
            placeholder="Enter Cardholder Name"
            className="text-[#898989] rounded-[0.7rem] border w-full py-3 pl-5"
          />
          <input
            placeholder="  Enter Card Number"
            type="number"
            className="text-[#898989] rounded-[0.7rem] border w-full py-3 pl-5"
          />
          <input
            placeholder="Enter Expiry date"
            className="text-[#898989] rounded-[0.7rem] border w-full py-3 pl-5"
          />

          <div className=" flex flex-row self-start justify-center items-center  ">
            <div className="rounded-[1.4rem] border  flex justify-center items-center w-[1rem] h-[1rem]  ">
              <div className="rounded-[0.6rem] bg-[#63B178] w-[0.5rem] h-[0.5rem] "></div>
            </div>
            <p className=" ml-3 text-[0.8rem]">
              I give my consent and accept all terms and condition
            </p>
          </div>
          <button
            type="submit"
            className="font-semibold mt-10 text-[#FFFFFF] py-4 rounded-[1.1rem] hover:cursor-pointer bg-[#63B178] flex justify-center items-center w-[25.4rem]"
          >
            Add Payment Method
          </button>
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

export default AddPayment;
