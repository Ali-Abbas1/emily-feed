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
import btn from '../images/modal-btn.svg'
import logo1 from '../images/modal-logo.svg'
import online from '../images/online.svg'
import MenuData from "./MenuData";

const SideBar2 = () => {
  const [show, setShow] = useState(true);
  const [modal, setModal] = useState(true)
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleModal = () => {
    setModal(!modal)
    setShow(!show)
  }
  return (
    <>
    <button onClick={() => handleModal()} className={`${show ? "block" : "hidden"} absolute top-[700px] sm:top-[600px] md:top-[650px] lg:top-[500px] sm:right-[150px] md:right-[130px] right-[60px] w-[40px] h-[40px] sm:w-[72px] sm:h-[72px] z-50`}><img src={btn} /></button>
    <div className={ `${!modal ? "flex flex-col ": "hidden"} bg-white absolute top-[750px] sm:top-[680px] md:top-[700px] lg:top-[530px] right-[10px]  z-50`}>
      <div className="w-[395px] h-[500px] z-50 ">
       <div className=" mx-auto w-[395px] h-[56px] justify-between px-[23px] rounded-t-xl items-center bg-gradient-to-br from-pink-600 to-purple-500 flex">
        <div className="flex space-x-2">
        <img src={logo1} className="w-[24px] h-[24px]" />
        <p className=" text-base font-semibold text-white">Welcome to Enter Here!</p>
        </div>
        <button className="text-white" onClick={() => handleModal()}>X</button>
        </div>
        <div className="bg-white flex justify-around mt-[15px] ">
          <button className="text-xs font-normal text-gray-400 tracking-wider active:bg-gradient-to-br active:from-pink-600 active:to-purple-500 active:bg-clip-text">Emergency Helpline</button>
          <button className="text-xs font-normal text-gray-400 tracking-wider active:bg-gradient-to-br active:from-pink-600 active:to-purple-500 active:bg-clip-text">Online now</button>
        </div>
        <div className="mt-[30px] flex justify-start searchbar  ">
            <form>
              <div className="relative mx-auto flex justify-center text-gray-400 w-[170%]">
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
                  className="w-[91%] pr-3 pl-9 py-2 font-normal placeholder-gray-500 text-black rounded-2xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </form>
          </div>
          <div className="overflow-y-scroll scrollbar">
            <div className="px-[24px] mt-6 flex flex-row space-x-5">
              <a className=" text-[10px] text-gray-400 font-medium bg-[#F5F5F5] rounded-2xl px-[3px] py-[8px]" >Anxiety</a>
              <a className=" text-[10px] text-gray-400 font-medium bg-[#F5F5F5] rounded-2xl px-[3px] py-[8px]">Depression</a>
              <a className=" text-[10px] text-gray-400 font-medium bg-[#F5F5F5] rounded-2xl px-[3px] py-[8px]" >Depression</a>
              <a className=" text-[10px] text-gray-400 font-medium bg-[#F5F5F5] rounded-2xl px-[3px] py-[8px]">ADHD</a>
              </div>
              <div className=" px-[24px] flex flex-row space-x-5 mt-3">
              <a className=" text-[10px] text-gray-400 font-medium bg-[#F5F5F5] rounded-2xl px-[3px] py-[8px]" >Eating Disorders</a>
              <a className=" text-[10px] text-gray-400 font-medium bg-[#F5F5F5] rounded-2xl px-[3px] py-[8px]">Borderline Personality Disorders</a>
              <a className=" text-[10px] text-gray-400 font-medium bg-[#F5F5F5] rounded-2xl px-[3px] py-[8px]">ADHD</a>
            </div>
            {MenuData.map((item) => (
              <>
              <div className="relative flex mt-4 mx-auto items-center justify-between w-[240px]">
            <img src={item.image} />
            <img src={online} className="absolute top-[25px] left-[22px]"/>
            <div className="">
                  <div className="flex items-center">
                  <p className="profile-name text-xs font-normal">
                    {item.heading}
                  </p>
                  <img src={item.image2} className="h-[15px] w-[15px]"/>
                  </div> 
                  <p className=" text-xs font-light">{item.desc}</p>                      
            </div>
            <span className="pl-[20px] bg-gradient-to-br from-pink-600 to-purple-500 text-transparent bg-clip-text ">
              <button className="border-[0.75px] border-gray-300 rounded-2xl w-[78px] h-[34px] text-trasparent bg-clip-text font-medium text-[10px]">{item.btn}</button></span>
            </div>
              </>
            ))}
            </div>
        </div>
    </div>
      <div className="hidden mx-auto sticky font-Urbanist lg:block top-0 right-0 bg-white min-h-screen flex-wrap lg:w-[530px]">
        <div className="content flex flex-col pt-[48px] space-x-1 w-[100%] pl-4">
          <div className="flex">
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
              <div className="relative flex justify-center text-gray-400">
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
                  className="w-[91%] pr-3 pl-9 py-2 font-normal placeholder-gray-500 text-black rounded-2xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </form>
          </div>
          <hr className="mx-auto mt-7 w-[90%]" />
          <div className="mt-[24px]">
          <h2 className=" text-base font-semibold">Suggested topics:</h2>
            {Data.map((item, id) => (
              <>
                <div className="flex items-center space-x-1 py-2 px-1">
                  <img alt="profile" src={item.image} />
                  <p className=" text-base font-normal">{item.para}</p>
                  <img alt="bluetick" src={ item.image2} />
                </div>
                <div className="w-[65%]">
                  <h2 className=" text-lg font-semibold">
                   {item.heading}
                  </h2>
                </div>
              </>
            ))}
          </div>
          <hr className="mx-auto mt-6 w-[90%]" />
          <div className="mt-6">
            <h2 className=" text-base font-semibold">Who to follow:</h2>
          <>
           { Data3.map((item2) => (
            <div className="mt-2 flex space-y-4 items-center justify-between w-[240px]">
            <img src={item2.image} className="h-[40px] w-[40px]" />
            <div className="pl-2">
              <div className="flex items-center">
                <h2 className=" text-base font-medium">{item2.heading}</h2>
                <img alt="bluetick" src={item2.image2}/>
              </div>
              <p className=" text-xs font-normal">{item2.desc}</p>
            </div>
            <span className="bg-gradient-to-br from-pink-600 to-purple-500 text-transparent bg-clip-text ">
              <button className="border-[0.75px] border-gray-300 rounded-2xl w-[78px] h-[34px] text-trasparent bg-clip-text font-medium">
                {item2.btn}
              </button>
            </span>
          </div>
           ))}
           </>
          </div>
          <hr className="mx-auto mt-6 w-[90%]" />
          <div className="mt-5 flex justify-between w-[300px]">
            <img src={calm} />
            <h1 className=" text-lg font-semibold flex items-center">Calm </h1>
            <p className="flex items-center text-xs font-normal text-gray-400">
        Sponsored
            </p>
            <span className="pl-7 bg-gradient-to-br from-pink-600 to-purple-500 text-transparent bg-clip-text font-medium">
              <button className="w-[109px] h-[34px] border-[0.75px] border-gray-300 rounded-lg text-center text-base">
                Learn more
              </button>
            </span>
           
          </div>
          <img src={calm2} className="mt-5 w-[300px] h-[170px]"/>
          <p className=" text-lg font-semibold w-[310px] mt-[16px]">Think about what love entails and what it means to love someone. Got it? Well, that’s kindness.</p>
            <div className="flex justify-end w-[280px] space-x-4 items-center">
                <img src={share}/>
                <button className="text-sm font-medium text-gray-400 flex items-center">Share</button>
                <img src={dots}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default SideBar2;
