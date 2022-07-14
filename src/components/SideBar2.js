import React from "react";
import { useState } from "react";
import Data from "./Data2";
import profile from "../images/SidebarProfile.svg";
import arrow from "../images/arrow.svg";
import bell from "../images/bell.svg";
import calender from "../images/calender.svg";
import email from "../images/email.svg";
import calm from "../images/calm.svg";
import Data3 from './Data3'
import calm2 from '../images/calm-image.svg'
import share from '../images/share.svg'
import dots from '../images/dots.svg'


const SideBar2 = () => {
 
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    
      <div className="hidden mx-auto sticky font-Urbanist lg:block top-0 right-0 bg-white min-h-screen flex-wrap lg:w-[530px] pb-[50px] border-l-[1px] border-gray-200">
        <div className="content flex flex-col pt-[48px] space-x-1 w-[100%] pl-4">
          <div className="flex justify-between w-[53%]">
            <img src={profile} className="w-[40px] h-[40px]" />
            <div className="flex flex-col pl-2">
              <p className=" text-base font-semibold">Hi, Emily.</p>
              <p className=" text-xs font-normal">Good Afternoon!</p>
            </div>

            <div className="relative flex flex-row">
              <button onClick={() => handleClick()}>
                <img src={arrow} alt="" className="h-[5.33px] w-[10.67px]" />
              </button>
              <div
                className={`bg-white rounded-md absolute z-10 top-6 space-y-4 left-0 w-[150px] p-2 transition ease-in duration-300 ${
                  isOpen ? "hidden" : "block "
                } `}
              >
                <ul>
                  <li>Account Settings</li>
                  <li>Support</li>
                  <li>License</li>
                  <li>Sign out</li>
                </ul>
              </div>
            </div>
            <div className="icons space-x-3 pl-3 flex flex-row">
              <button>
                <img src={bell} />
              </button>
              <button>
                <img src={calender} />
              </button>
              <button>
                <img src={email} />
              </button>
            </div>
          </div>
          <div className="searchbar mt-5 w-[70%]">
            <form>
              <div className="relative flex justify-start text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute left-5 top-[10px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className="w-[91%] pr-3 pl-[3.25rem] py-2 font-normal placeholder-gray-500 text-black rounded-2xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </form>
          </div>
          <hr className="mx-auto mt-7 w-[90%]" />
          <div className="mt-[24px]">
          <h2 className=" text-base font-semibold">Suggested topics:</h2>
            {Data.map((item, id) => (
              <>
                <div className="flex items-center space-x-1 pt-[20px] px-1">
                  <img alt="profile" src={item.image} />
                  <p className=" text-base font-normal">{item.para}</p>
                  <img alt="bluetick" src={ item.image2} />
                </div>
                <div className="w-[65%]">
                  <h2 className=" text-lg font-semibold pt-[9.5px]">
                   {item.heading}
                  </h2>
                </div>
              </>
            ))}
          </div>
          <hr className="mx-auto mt-6 w-[90%]" />
          <div className="mt-6">
            <h2 className=" text-lg leading-[21.6px] font-semibold">Who to follow:</h2>
          <>
           { Data3.map((item2) => (
            <div className="flex justify-between w-[330px] items-end">
            <div className="flex space-y-5 items-end justify-between">
            <img src={item2.image} className="h-[40px] w-[40px]" />
            <div className="pl-1">
              <div className="flex items-center">
                <h2 className=" text-base font-medium">{item2.heading}</h2>
                <img alt="bluetick" src={item2.image2}/>
              </div>
              <p className=" text-xs font-normal">{item2.desc}</p>
            </div>
          </div>
         
            <span className="bg-gradient-to-br from-pink-600 to-purple-500 text-transparent bg-clip-text ">
              <button className="border-[0.75px] border-gray-300 rounded-2xl w-[78px] h-[34px] text-trasparent text-[13px] bg-clip-text font-medium">
                {item2.btn}
              </button>
            </span>
            </div>
           
           ))}
           </>
          </div>
          <hr className="mx-auto mt-6 w-[90%]" />
          <div className="footer-content-div mt-5 flex justify-between w-[335px]">
            <div className="flex justify-between w-[45%]">
            <img src={calm} />
            <h1 className=" text-lg font-semibold flex items-center">Calm </h1>
            <p className="flex items-center text-xs font-normal text-gray-400">
        Sponsored
            </p>
            </div>
            <span className="pl-7 bg-gradient-to-br from-pink-600 to-purple-500 text-transparent bg-clip-text font-medium">
              <button className="w-[109px] h-[34px] border-[0.75px] border-gray-300 rounded-lg text-center items-center text-[13px] font-medium">
                Learn more
              </button>
            </span>
          </div>
          <div className="max-w-[100%]">
          <img src={calm2} className="mt-5 w-[342px] "/>
          </div>
          <p className=" text-lg font-semibold w-[310px] mt-[16px]">Think about what love entails and what it means to love someone. Got it? Well, that’s kindness.</p>
            <div className="flex justify-end w-[340px] space-x-4 items-center mt-4">
                <img src={share}/>
                <button className="text-sm font-medium text-gray-400 flex items-center">Share</button>
                <img src={dots}/>
            </div>
            <hr className="mt-[25px] w-[68%] h-1"/>
        </div>
      </div>
    </>
  );
};

export default SideBar2;
