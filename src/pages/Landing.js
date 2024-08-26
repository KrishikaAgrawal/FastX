import React from "react";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Payment");
  };
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
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
          {/* buttons */}
          <div className="flex flex-row w-[16.8rem] h-10  ">
            <div className="rounded-md bg-black flex  w-[8.1rem] justify-center items-center">
              <span className=" font-normal text-[0.8rem] text-[#FFFFFF]">
                Sign up
              </span>
            </div>
            <div className="rounded-md bg-black flex  w-[8.1rem] justify-center items-center ml-2">
              <span className=" font-normal text-[0.8rem] text-[#FFFFFF]">
                Login
              </span>
            </div>
          </div>
        </div>

        {/* section 1 */}
        <div className=" flex px-40 flex-row  ">
          {/* Welcome */}
          <div className="rounded-md bg-[#F8F8F8] flex flex-col items-center w-1/3 p-8 mr-4">
            <img
              src="/assets/images/HttpslottiefilesComanimationstruckDlhb36Ze6B1.gif"
              className="bg-[50%_50%] bg-cover bg-no-repeat w-[18.3rem] h-[13.7rem]"
            />
            <p className="text-center  font-semibold text-[1rem] text-black my-8">
              Welcome to MyFast
              <span className="text-[#63B178]">X Partner</span>
            </p>
            <p className="text-center  font-semibold text-[1rem] mb-4 text-[#63B178]">
              Quick & Reliable Delivery and Logistics Solution
            </p>
            <p className="text-center font-medium text-[0.8rem] text-[#5D5D5D]">
              At MyFastX, we are revolutionizing the delivery and logistics
              industry by providing swift, dependable services to our clients.
              Our mission is to ensure every package reaches its destination on
              time, every time.
            </p>
          </div>
          {/* join us */}
          <div className="flex flex-col items-center   w-2/3">
            <div className="rounded-md bg-[#F8F8F8] flex flex-col   ">
              <img className=" top-[0rem]  h-[9.9rem]" />
              <div className="flex flex-col p-6">
                <div className=" self-start font-semibold text-[0.8rem] text-[#63B178]">
                  Drive Your Success with MyFastX
                </div>
                <div className=" self-start my-2 font-semibold text-[1.3rem]">
                  Join Us as a Partner Driver
                </div>
                <div className=" font-medium mb-4 text-[0.8rem] text-[#5D5D5D]">
                  Are you a vehicle owner looking for new opportunities? Join
                  MyFastX today and become part of a dynamic network of drivers.
                  With us, you’ll enjoy flexible work hours, competitive
                  earnings, and the satisfaction of delivering smiles across the
                  city.
                  <br />
                </div>
                <div
                  onClick={handleClick}
                  className="rounded-md w-52 h-10 bg-black flex justify-center items-center hover:cursor-pointer"
                >
                  <span className="text-[0.8rem]  text-[#FFFFFF]">
                    Register now for just Rs. 999!
                  </span>
                </div>
              </div>
            </div>
            <div className="cards rounded-md flex mt-4">
              <div className="bg-[#F2FAF5] flex flex-col p-3 w-1/4">
                <img
                  src="/assets/images/Transaction.png"
                  className=" bg-[50%_50%] bg-contain bg-no-repeat self-start w-[2.8rem] h-[2.8rem]"
                />
                <div className=" inline-block font-medium pb-2  text-[0.8rem] text-[#63B178]">
                  Reliable Income
                </div>
                <span className="font-medium text-[0.7rem] ">
                  Earn a steady income with consistent delivery requests.
                </span>
              </div>
              <div className="bg-[#F2FAF5] flex flex-col p-3 mx-4 w-1/4">
                <img
                  src="/assets/images/Schedule.png"
                  className=" bg-[50%_50%] bg-contain bg-no-repeat self-start w-[2.8rem] h-[2.8rem]"
                />
                <div className=" inline-block font-medium pb-2  text-[0.8rem] text-[#63B178]">
                  Flexible Schedule
                </div>
                <span className="font-medium text-[0.7rem] ">
                  Choose your working hours and balance your personal life.
                </span>
              </div>
              <div className="bg-[#F2FAF5] mr-4 flex flex-col p-3 w-1/4">
                <img
                  src="/assets/images/OnlineSupport.png"
                  className=" bg-[50%_50%] bg-contain bg-no-repeat self-start w-[2.8rem] h-[2.8rem]"
                />
                <div className=" inline-block font-medium pb-2  text-[0.8rem] text-[#63B178]">
                  Support
                </div>
                <span className="font-medium text-[0.7rem] ">
                  Access our dedicated support team whenever you need
                  assistance.
                </span>
              </div>

              <div className="bg-[#F2FAF5] flex flex-col p-3 w-1/4">
                <img
                  src="/assets/images/Increase.png"
                  className=" bg-[50%_50%] bg-contain bg-no-repeat self-start w-[2.8rem] h-[2.8rem]"
                />
                <div className=" inline-block font-medium pb-2  text-[0.8rem] text-[#63B178]">
                  Growth opportuninies
                </div>
                <span className="font-medium text-[0.7rem] ">
                  {" "}
                  Advance your career with regular training and development
                  programs.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="px-40 my-20">
          <div className="border-l-[#63B178] border-l-2 w-24 mb-2 text-center bg-[#F5F5F4]">
            <span className="font-medium text-[0.8rem] ">How It Works</span>
          </div>

          <div className=" mb-5 font-bold">
            <span className="  text-[2rem] absolute">
              Simple Steps to Get Started
            </span>
            <div className="bg-[#63B178] relative top-12  w-[10rem] h-[0.2rem]"></div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col mt-28 ">
              <div className=" flex flex-row h-20 items-center">
                <div className="mx-7 rounded-full border-[0.1rem] border-dashed border-[#63B178] flex justify-center items-center w-[3.1rem] h-[3.1rem]">
                  <div className="rounded-full bg-[#F6F6F6] flex justify-center items-center w-[2.4rem] h-[2.4rem]">
                    <img
                      src="/assets/images/AddUserMale.png"
                      className="bg-[50%_50%] bg-contain bg-no-repeat w-[1.4rem] h-[1.4rem]"
                    />
                  </div>
                </div>
                <div className="rounded-[0.6rem] bg-[#F8F8F8] flex flex-col px-5 py-2 w-[23.9rem] h-full">
                  <div className=" inline-block font-semibold text-[0.8rem] text-[#63B178] pb-1">
                    Register Online
                  </div>
                  <span className="self-start font-medium text-[0.8rem]">
                    Fill out our easy online application form and pay the
                    registration fee of Rs. 999
                  </span>
                </div>
              </div>
              <div className=" flex flex-row h-20 items-center my-16">
                <div className="mx-7 rounded-full border-[0.1rem] border-dashed border-[#63B178] flex justify-center items-center w-[3.1rem] h-[3.1rem]">
                  <div className="rounded-full bg-[#F6F6F6] flex justify-center items-center w-[2.4rem] h-[2.4rem]">
                    <img
                      src="/assets/images/VerifiedAccount.png"
                      className="bg-[50%_50%] bg-contain bg-no-repeat w-[1.4rem] h-[1.4rem]"
                    />
                  </div>
                </div>
                <div className="rounded-[0.6rem] bg-[#F8F8F8] flex flex-col px-5 py-2 w-[23.9rem] h-full">
                  <div className=" inline-block font-semibold text-[0.8rem] text-[#63B178] pb-1">
                    Get Verified
                  </div>
                  <span className="self-start font-medium text-[0.8rem]">
                    Complete the verification process to ensure you meet our
                    standards.
                  </span>
                </div>
              </div>
              <div className=" flex flex-row h-20 items-center">
                <div className="mx-7 rounded-full border-[0.1rem] border-dashed border-[#63B178] flex justify-center items-center w-[3.1rem] h-[3.1rem]">
                  <div className="rounded-full bg-[#F6F6F6] flex justify-center items-center w-[2.4rem] h-[2.4rem]">
                    <img
                      src="/assets/images/Jeep.png"
                      className="bg-[50%_50%] bg-contain bg-no-repeat w-[1.4rem] h-[1.4rem]"
                    />
                  </div>
                </div>
                <div className="rounded-[0.6rem] bg-[#F8F8F8] flex flex-col px-5 py-2 w-[23.9rem] h-full">
                  <div className=" inline-block font-semibold text-[0.8rem] text-[#63B178] pb-1">
                    Start Driving
                  </div>
                  <span className="self-start font-medium text-[0.8rem]">
                    Once approved, start accepting delivery requests and earn
                    money
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex items-center  ">
              <img
                src="assets/images/vehicles.png"
                className="w-[30rem] h-[24.6rem]"
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="px-40 my-20">
          <div className="border-l-[#63B178] border-l-2 w-44 mb-2 text-center bg-[#F5F5F4]">
            <span className="font-medium text-[0.8rem] ">
              What our partner says
            </span>
          </div>
          <div className="flex justify-between gap-20">
            <div className=" mb-5 w-1/2 ">
              <span className=" font-bold text-[2rem] absolute">
                Testimonials
              </span>
              <div className="bg-[#63B178] relative top-12  w-[10rem] h-[0.2rem]"></div>
              <div className="inline-block text-[1rem] leading-[1.5] text-[#535353] mt-20 font-semibold">
                At MyFastX, our commitment to excellence is reflected in the
                feedback from our valued customers. Here&#39;s what they have to
                say about their experiences with our quick and reliable delivery
                and logistics services
              </div>
              <div className="flex flex-row self-start w-[22.2rem] mt-28">
                <div className=" flex w-[12.1rem] h-[5.8rem]">
                  <img
                    src="/assets/images/7610492_3697648 2.png"
                    className="w-[10.9rem] h-[4.5rem]"
                  />
                </div>
                <div className="flex w-[10.9rem] h-[4.3rem]">
                  <img
                    src="/assets/images/OBJECTS.png"
                    className="w-[10.9rem] h-[4.3rem]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-[0.9rem] p-10 bg-[#F2FAF5] w-1/2 ">
              <div className=" flex flex-row self-start w-[fit-content]  ">
                <img
                  src="/assets/images/Avataar1.png"
                  className=" bg-[50%_50%] bg-cover bg-no-repeat w-[4rem] h-[4rem]"
                />
                <div className="flex flex-col ml-5 justify-center">
                  <p className=" inline-block font-semibold text-lg">
                    James Darwin
                  </p>
                  <p className=" inline-block text-sm">Kolkata, West Bengal</p>
                </div>
              </div>
              <div className=" inline-block font-normal text-[1rem] leading-[1.5] text-[#535353]  py-7">
                “ Joining MyFastX has been a game-changer for me. The flexible
                hours and reliable income have made my life so much easier. “
              </div>
              <div className="flex flex-row self-start gap-2 w-[8.9rem] pb-7">
                <img
                  src="/assets/images/Star.png"
                  className=" bg-[50%_50%] bg-contain bg-no-repeat w-[1.4rem] h-[1.4rem]"
                />
                <img
                  src="/assets/images/Star.png"
                  className=" bg-[50%_50%] bg-contain bg-no-repeat w-[1.4rem] h-[1.4rem]"
                />
                <img
                  src="/assets/images/Star.png"
                  className=" bg-[50%_50%] bg-contain bg-no-repeat w-[1.4rem] h-[1.4rem]"
                />
                <img
                  src="/assets/images/Star.png"
                  className=" bg-[50%_50%] bg-contain bg-no-repeat w-[1.4rem] h-[1.4rem]"
                />
                <img
                  src="/assets/images/Star.png"
                  className=" bg-[50%_50%] bg-contain bg-no-repeat w-[1.4rem] h-[1.4rem]"
                />{" "}
              </div>
              <div className="flex flex-row justify-between w-full ">
                <div className="rounded-[0.7rem] h-10 bg-[#FFFFFF] flex flex-row justify-around items-center w-[9.3rem] p-2">
                  <div className="rounded-full bg-[#63B178] w-[0.5rem] h-[0.5rem]"></div>
                  <div className="rounded-full bg-[#D9D9D9] w-[0.5rem] h-[0.5rem]"></div>
                  <div className="rounded-full bg-[#D9D9D9] w-[0.5rem] h-[0.5rem]"></div>
                  <div className="rounded-full bg-[#D9D9D9] w-[0.5rem] h-[0.5rem]"></div>
                  <div className="rounded-full bg-[#D9D9D9] w-[0.5rem] h-[0.5rem]"></div>
                  <div className="rounded-full bg-[#D9D9D9] w-[0.5rem] h-[0.5rem]"></div>
                </div>
                <div className=" flex flex-row w-[4.2rem] gap-2">
                  <div className="shadow-[0rem_0.3rem_0.3rem_0rem_rgba(0,0,0,0.03)] rounded-full bg-[#FFFFFF] flex justify-center items-center w-[1.7rem] h-[1.7rem] ">
                    <img
                      className="w-[1rem] h-[1rem] "
                      src="/assets/images/Frame.png"
                    />
                  </div>
                  <div className="shadow-[0rem_0.3rem_0.3rem_0rem_rgba(0,0,0,0.03)] rounded-full bg-[#FFFFFF] flex justify-center items-center w-[1.7rem] h-[1.7rem] ">
                    <img
                      className="w-[1rem] h-[1rem] "
                      src="/assets/images/Frame (1).png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="px-40 my-20 flex justify-between gap-20">
          <div className=" mb-5 w-1/2 ">
            <div className="border-l-[#63B178] border-l-2 w-60 mb-2 text-center bg-[#F5F5F4]">
              <span className="font-medium text-[0.8rem] ">
                Join the MyFastX Community Today!
              </span>
            </div>
            <span className=" font-bold text-[2rem] absolute">
              Ready to Get Started?
            </span>
            <div className="bg-[#63B178] relative top-12  w-[10rem] h-[0.2rem]"></div>
            <div className="inline-block text-[1rem] leading-[1.5] text-[#535353] mt-20 font-semibold">
              Don't miss out on this incredible opportunity to be part of a
              leading delivery and logistics platform. Sign up now for just
              <span className="text-[#63B178]">Rs.999</span> and start driving
              your way to success with MyFastX!
            </div>
            <div className="rounded-md bg-black flex  w-[8.1rem] h-10 my-8 justify-center items-center">
              <span className=" font-normal text-[0.8rem] text-[#FFFFFF]">
                Register Now
              </span>
            </div>
            <div className="flex flex-col font-semibold">
              <div className="inline-block self-starttext-[1rem] leading-[1.5] text-[#535353] my-5">
                For more information,
                <br />
                Contact us at:
                <br />
              </div>
              <div className="flex self-start mb-5 items-center">
                <div className="rounded-[2rem] bg-[#63B178] flex justify-center items-center mr-5 w-[2.5rem] h-[2.5rem] ">
                  <img
                    src="/assets/images/Phone.png"
                    className=" bg-[50%_50%] bg-contain bg-no-repeat w-[1.3rem] h-[1.3rem]"
                  />
                </div>
                <div className="inline-block text-[1rem] leading-[1.5] text-[#535353]">
                  +91-XXXXX XXXXX
                </div>
              </div>
              <div className="flex self-start mb-5 items-center">
                <div className="rounded-[2rem] bg-[#63B178] flex justify-center items-center mr-5 w-[2.5rem] h-[2.5rem] ">
                  <img
                    src="/assets/images/Mail.png"
                    className=" bg-[50%_50%] bg-contain bg-no-repeat w-[1.3rem] h-[1.3rem]"
                  />
                </div>
                <div className="inline-block text-[1rem] leading-[1.5] text-[#535353]">
                  support@myfastx.com
                </div>
              </div>
            </div>
          </div>

          <div className=" mb-5 w-1/2 ">
            <div className="border-l-[#63B178] border-l-2 w-48 mb-2 text-center bg-[#F5F5F4]">
              <span className="font-medium text-[0.8rem] ">
                Frequently Asked Questions
              </span>
            </div>
            <span className=" font-bold text-[2rem] absolute">
              Got Questions? We’ve Got Answers!
            </span>
            <div className="bg-[#63B178] relative top-12  w-[10rem] h-[0.2rem]"></div>

            <div className="mt-20 shadow-[0rem_0rem_0.3rem_0rem_rgba(0,0,0,0.11)] rounded-[1rem] bg-[#FCFCFC] flex flex-col items-center w-[33.6rem] ">
              <div className="border-b flex flex-row justify-between items-center px-4 py-3 w-[33.6rem]">
                <span className="   font-medium text-[0.8rem]">
                  What type of vehicles are eligible?
                </span>

                <div className=" flex w-[0.8rem] h-[0.8rem] items-center ">
                  <img
                    className="w-[0.8rem] h-[0.8rem] "
                    src="/assets/images/Frame (1).png"
                  />
                </div>
              </div>
              <div className="border-b flex flex-row justify-between items-center px-4 py-3 w-[33.6rem]">
                <span className="   font-medium text-[0.8rem]">
                  How do I get paid ?
                </span>

                <div className=" flex w-[0.8rem] h-[0.8rem] items-center ">
                  <img
                    className="w-[0.8rem] h-[0.8rem] "
                    src="/assets/images/Frame (1).png"
                  />
                </div>
              </div>
              <div className="border-b flex flex-row justify-between items-center px-4 py-3 w-[33.6rem]">
                <span className="   font-medium text-[0.8rem]">
                  What areas does MyFastX operate in?
                </span>

                <div className=" flex w-[0.8rem] h-[0.8rem] items-center ">
                  <img
                    className="w-[0.8rem] h-[0.8rem] "
                    src="/assets/images/Frame (1).png"
                  />
                </div>
              </div>
              <div className="border-b flex flex-row justify-between items-center px-4 py-3 w-[33.6rem]">
                <span className="   font-medium text-[0.8rem]">
                  What type of vehicles are eligible?
                </span>

                <div className=" flex w-[0.8rem] h-[0.8rem] items-center ">
                  <img
                    className="w-[0.8rem] h-[0.8rem] "
                    src="/assets/images/Frame (1).png"
                  />
                </div>
              </div>
              <div className="border-b flex flex-row justify-between items-center px-4 py-3 w-[33.6rem]">
                <span className="   font-medium text-[0.8rem]">
                  How do I get paid?
                </span>

                <div className=" flex w-[0.8rem] h-[0.8rem] items-center ">
                  <img
                    className="w-[0.8rem] h-[0.8rem] "
                    src="/assets/images/Frame (1).png"
                  />
                </div>
              </div>
              <div className=" flex flex-row justify-between items-center px-4 py-3 w-[33.6rem]">
                <span className="   font-medium text-[0.8rem]">
                  What areas does MyFastX operate in?
                </span>

                <div className=" flex w-[0.8rem] h-[0.8rem] items-center ">
                  <img
                    className="w-[0.8rem] h-[0.8rem] "
                    src="/assets/images/Frame (1).png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="bg-[#F2FAF5] flex flex-col items-center py-20 gap-5">
          <div className=" inline-block font-semibold text-[0.8rem] text-[#63B178]">
            Drive Your Success with MyFastX
          </div>
          <div className=" font-semibold text-[2rem]">
            Join Us as a Partner Driver
          </div>
          <div className=" font-medium text-[0.8rem] text-[#5D5D5D] w-1/2 text-center">
            Are you a vehicle owner looking for new opportunities? Join MyFastX
            today and become part of a dynamic network of drivers. With us,
            you’ll enjoy flexible work hours, competitive earnings, and the
            satisfaction of delivering smiles across the city.
            <br />
          </div>
          <div
            onClick={handleClick}
            className="rounded-md w-52 h-10 bg-black flex justify-center items-center hover:cursor-pointer"
          >
            <span className="text-[0.8rem]  text-[#FFFFFF]">
              Register now for just Rs. 999!
            </span>
          </div>
        </div>
        <img
          src="/assets/images/Screenshot202406221813341.png"
          className=" bg-[50%_50%] bg-cover bg-no-repeat  h-[33.4rem]"
        />
      </div>
      <img className="absolute left-[50%] bottom-[97.6rem] translate-x-[-50%] w-full h-[12.1rem]" />
    </div>
  );
};

export default Landing;
