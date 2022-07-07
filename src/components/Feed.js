import React from "react";
import Data from "./Data";
import Data3 from './Data3';
import button1 from '../images/Vector.png'
import button2 from '../images/Vector2.svg'
import button3 from '../images/Vector3.svg'
import button4 from '../images/Vector4.svg'
import button5 from '../images/Vector5.svg'
import button6 from '../images/Vector6.svg'
import button7 from '../images/Vector7.svg'
import button8 from '../images/Vector8.svg'
import bell from "../images/bell.svg";
import calender from "../images/calender.svg";
import email from "../images/email.svg";
import profile from "../images/SidebarProfile.svg";
import arrow from "../images/arrow.svg";
import search from '../images/search.svg';
import logo from '../images/logo1.svg'
import btn from '../images/modal-btn.svg'
import logo1 from '../images/modal-logo.svg'
import online from '../images/online.svg'
import MenuData from "./MenuData";
import ReactPlayer from "react-player";
import video from '../images/video-icon.svg'

import { useState } from "react";

const Feed = () => {
  const [show, setShow] = useState(true);
  const [modal, setModal] = useState(true)
  const [isOpen, setIsOpen] = useState(true);
  const [Open, setOpen] = useState(false)
  const [toggle, setToggle] = useState(1)
  const activeState = (index) => {
        setToggle(index)
  }
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
    
    <div className="flex mx-auto sm:hidden w-[320px] h-[86px] items-center align-middle text-center my-auto absolute top-[600px] left-0 right-0 z-20 bg-white">
    <div className="flex flex-row text-xs leading-[150%] justify-around mx-auto text-center items-center w-[100%] bg-gradient-to-br from-pink-600 to-purple-500 text-transparent bg-clip-text">
    <button><img src={button1} className="text-center mx-auto"/>Home</button>
    <button><img src={button2} className="text-center mx-auto"/>Posts</button>
    <button><img src={button3} className="text-center mx-auto"/>Videos</button>
    <button><img src={button4} className="text-center mx-auto"/>Podcasts</button>
    <button><svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 text-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>Menu</button>
    
    </div>
    </div>
    <div className=" mx-auto container relative navbar-Ipad flex justify-between mt-[40px] w-[100%] md:w-[90%]">
    <button><img src={logo} className="pl-[30px] block md:hidden"/></button>
    {!Open ? 
       (
        <button className="hidden md:block lg:hidden absolute top-[5px] left-[5px] z-50 hover:cursor-pointer" onClick={() => setOpen(!Open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>        
       ) : (
        <button className="text-4xl text-black z-50 fixed top-[20px] left-[50px]" onClick={() => setOpen(!Open)}>&times;</button>
        
        )
      }
      <div className={`pt-[50px] fixed top-0 left-0 lg:hidden text-left z-30 opacity-0.6 navLinks justify-center bg-gray-300 text-white space-y-14 text-lg  ${Open? 'translate-x-2 block':'translate-x-[-100%]'} w-[30vw] h-full ease-in-out duration-300 `}>
      <div className='sidebar-btns flex flex-col items-center space-y-10'>
    <button><img src={button1} /></button>
    <button><img src={button2} /></button>
    <button><img src={button3}/></button>
    <button><img src={button4}/></button>
    <button><img src={button5}/></button>
    <button><img src={button6}/></button>
    <button><img src={button7}/></button>
    <button><img src={button8}/></button>
      </div> 
       </div>
         <div className="md:flex hidden justify-center searchbar w-[60%] md:w-[90%] lg:hidden">
            <form>
              <div className="relative flex justify-center w-[120%] text-gray-400">
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
          <div className="flex lg:hidden relative md:space-x-3 px-5">
          <div className="icons space-x-3 pl-3 flex flex-row">
            <button>
              <img src={search} className="md:hidden"/>
            </button>
              <button>
                <img src={bell} />
              </button>
              <button>
                <img src={calender} className="hidden md:block lg:hidden" />
              </button>
              <button>
                <img src={email} className="hidden md:block lg:hidden" />
              </button>
            </div>
            <div className="flex ">
            <img src={profile} className="w-[40px] h-[40px]" />
            <button onClick={() => handleClick()}>
                <img src={arrow} alt="" className="h-[5.33px] md:w-[38px] lg:w-[10.67px]" />
              </button>
              </div>
              <div
                className={`bg-white rounded-md absolute z-10 top-8 space-y-4 right-0 w-[150px] p-2 transition ease-in duration-300 ${
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
    </div>
     
        <div className="flex justify-start mx-auto space-x-6 mt-[27px] pl-[50px] md:pl-[115px] xl:pl-[100px] ">
        <div onClick={() => activeState(1)} className="hover:text-gray-500 active:border-b-2 active:border-b-blue-800 ">
          Following
          </div>
          <div onClick={() => activeState(2)} className="hover:text-gray-500 active:border-b-2 active:border-b-blue-800">
          Recommended
          </div>
          </div>
          <hr className="md:w-[74%] mx-auto"/>
            <div className={toggle === 1 ?  "mx-auto relative font-Urbanist w-[87%] md:w-[84%] mt-[30px] flex-col flex hover:cursor-pointer" : "hidden"} >
              {Data.map((item) =>
                item.video === "video" ? (
            <>
              <div className="mx-auto container content space-y-2">
                <div className="mx-auto w-[85%] mt-[40px] Profile-desc flex flex-row items-center space-x-1">
                  <img src={item.image} />
                  <p className="profile-name text-base font-normal">
                    {item.profileName}
                  </p>
                  <img src={item.image2} />
                </div>
                <h2 className="font-semibold mx-auto w-[85%] text-base leading-[24px]">{item.heading}</h2>
                <p className=" font-normal w-[85%] mx-auto text-sm md:text-base leading-[21px] ">{item.para}</p>
                <video controls autoPlay className=" w-[389px] md:w-[563px] sm:w-[480px] mx-auto pb-2 rounded-xl">
                  <source src= { item.url } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
                <div className="content-footer mt-[50px] text-[#525252] flex justify-between font-normal w-[100%]">
                  <div className="reading flex flex-row space-x-1 text-[10px] sm:text-[12px] w-[55%] sm:w-[50%] ">
                    <p className="flex flex-row ">
                      {item.footerContent}
                    </p>
                    <p className=" bg-[#F5F5F5] rounded-lg">{item.paragraph2}</p>
                  </div>
                  <div className="ctn-footer-btns flex flex-row justify-between w-[34%] sm:w-[50%] md:w-[44%] lg:w-[44%] xl:w-[43%] ">
                    <div className="share flex flex-row space-x-1 ">
                      {" "}
                      <img src={item.shareButton} className="w-[11px] h-[13.98px]" />
                      <button className=" hidden md:flex w-[11px] h-[13.98px] text-[11px]">{item.shareButtonName}</button>{" "}
                    </div>
                    <div className="post flex flex-row space-x-1  ">
                      {" "}
                      <img src={item.saveButton} className="w-[11px] h-[14px]" />{" "}
                      <button className="save-post hidden text-[11px] md:flex md:flex-row w-[57px]">
                        {item.saveButtonName}
                      </button>
                    </div>
                    <img src={item.dotImage} className="w-[18px] h-[14px]" />
                    <hr />
                  </div>
                </div>
              </div>
              <hr className="mx-auto w-[100%]  mt-[44px] mb-[50px]"/>
          </>
        ) : item.audio === "audio" ? (
          <>
            <div className="mx-auto font-Urbanist w-[84%] mt-[25px] flex-col flex ">
              <div className="mx-auto content space-y-2">
                <div className="Profile-desc flex flex-row items-center space-x-1">
                  <img src={item.image} />
                  <p className="profile-name text-base font-normal">
                    {item.profileName}
                  </p>
                  <img src={item.image2} />
                </div>
                <h2 className="font-semibold text-base leading-[24px]">{item.heading}</h2>
                <p className="font-normal text-sm md:text-base leading-[21px]">{item.para}</p>
                <ReactPlayer url={item.url} playing={false} controls={true} width="310px"  className="pb-2" />
                <div className="content-footer text-[#525252] justify-between flex text-sm font-normal w-[110%] ">
                  <div className="reading flex flex-row items-start space-x-1 text-[10px] sm:text-[10px] w-[60%] sm:w-[59%] lg:w-[50%]">
                    <p className="flex ">
                      {item.footerContent}
                    </p>
                    <p>{item.paragraph2}</p>
                  </div>
                  <div className="ctn-footer-btns space-x-6 flex flex-row justify-between w-[37%] md:w-[42%] lg:w-[42%] xl:w-[46%]">                     
                      <div className="share flex text-[11px] w-[50%] md:w-[100%] ">
                      <img src={item.shareButton} className="w-[12px] h-[14px]" />
                      <button className="share hidden md:flex w-[11px] h-[14px]">{item.shareButtonName}</button>                                                        
                      </div>
                      <div className="post flex text-[11px] w-[50%] md:w-[100%] ">
                      <img src={item.saveButton} className="w-[12px] h-[14px]" />
                      <button className="save-post hidden md:flex text-[11px] md:flex-row w-[57px] h-[14px]">
                        {item.saveButtonName}
                      </button>
                      </div>                 
                    <img src={item.dotImage} className="w-[12px] sm:w-[18px] h-[14px]" />
                    <hr />
                  </div>
                </div>
              </div>
           </div>
           <hr className="mx-auto w-[100%]  mt-[44px] mb-[50px]"/>
           </> 
        ) : (
          <>
          <div className="mx-auto font-Urbanist w-[84%] mt-[17px] flex-col flex ">
              <div className="mx-auto content space-y-2">
                <div className="Profile-desc flex flex-row items-center space-x-1">
                  <img src={item.image} />
                  <p className="profile-name text-base font-normal">
                    {item.profileName}
                  </p>
                  <img src={item.image2} />
                </div>
                <h2 className="font-semibold text-base leading-[24px]">{item.heading}</h2>
                <p className="font-normal text-sm md:text-base leading-[21px]">{item.para}</p>
                <img src={item.url} className="pb-2" />
                <div className="content-footer text-[#525252] justify-between flex text-sm font-normal w-[106%] sm:w-[100%] ">
                  <div className="reading flex flex-row items-start space-x-1 text-[10px] sm::text-[12px] w-[63%] md:w-[68%] lg:w-[50%]">
                    <p className="flex ">
                      {item.footerContent}
                    </p>
                    <p>{item.paragraph2}</p>
                  </div>
                  <div className="ctn-footer-btns space-x-6 flex flex-row justify-between w-[37%] md:w-[28%%] lg:w-[42%] xl:w-[39%]">                     
                      <div className="share flex text-[11px] w-[50%] md:w-[100%] ">
                      <img src={item.shareButton} className="w-[12px] h-[14px]" />
                      <button className="share hidden md:flex w-[11px] h-[14px]">{item.shareButtonName}</button>                                                        
                      </div>
                      <div className="post flex text-[11px] w-[50%] md:w-[100%] ">
                      <img src={item.saveButton} className="w-[12px] h-[14px]" />
                      <button className="save-post hidden md:flex text-[11px] md:flex-row w-[57px] h-[14px]">
                        {item.saveButtonName}
                      </button>
                      </div>                 
                    <img src={item.dotImage} className="w-[18px] h-[14px]" />
                    <hr />
                  </div>
                </div>
              </div>
           </div>
           <hr className="mx-auto w-[100%]  mt-[44px] mb-[50px]"/>
           </>
        )
       )} 
       </div> 
        <div className={ toggle === 2 ? "mx-auto font-Urbanist  w-[84%] mt-[17px] flex-wrap hover:cursor-pointer" : "hidden"} onClick={() => activeState(2)}>
                  {Data.map((item) =>
                    item.video === "video" ? (
                    <>
                      <div className="content mt-[50px] space-y-2">
                      <div className="Profile-desc justify-between mx-auto w-[100%] lg:w-[90%] flex flex-row items-center space-x-1">
                      <div className="flex items-center space-x-1">
                      <img src={item.image} />
                      <p className="profile-name text-base font-normal">
                      {item.profileName}
                      </p>
                      <img src={item.image2} />
                      </div>
                      <div className=" flex self-end bg-gradient-to-br from-pink-600 to-purple-500 text-transparent bg-clip-text ">
                      <button className="border-[0.75px] border-gray-300 rounded-[38px] text-[12px] w-[96px] sm:font-semibold md:text-[16px] md:w-[134px] h-[41px] text-trasparent bg-clip-text font-medium">{item.followbtn}</button>
                      </div>
                </div>
                <h2 className="font-semibold mx-auto w-[85%] text-base leading-[24px]">{item.heading}</h2>
                <p className="font-normal mx-auto w-[85%] text-sm md:text-base leading-[21px]">{item.para}</p>
                <video controls autoPlay className="w-[500px] mx-auto">
                  <source src= { item.url } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
                <div className="content-footer mt-[50px] text-[#525252] flex justify-between text-sm font-normal w-[100%] lg:w-[92%]">
                  <div className="reading flex flex-row space-x-2 text-[10px] w-[63%] lg:w-[50%] ">
                    <p className="flex text-center items-center">
                      {item.footerContent}
                    </p>
                    <p className="">{item.paragraph2}</p>
                  </div>
                  <div className="ctn-footer-btns flex flex-row justify-between w-[26%] sm:w-[40%] md:w-[45%] lg:w-[45%] xl:w-[33%]">
                    <div className="flex flex-row space-x-2 text-[11px]">
                      {" "}
                      <img src={item.shareButton} className="w-[11px] h-[14px]" />{" "}
                      <button className="share hidden md:flex ">{item.shareButtonName}</button>{" "}
                    </div>
                    <div className="flex flex-row space-x-2 text-[11px]">
                      {" "}
                      <img src={item.saveButton} className="w-[11px] h-[14px]"/>{" "}
                      <button className="save-post hidden md:flex md:flex-row w-[57px] h-[15px]">
                        {item.saveButtonName}
                      </button>{" "}
                    </div>
                    <img src={item.dotImage} className="w-[20px] h-[15px]" />
                    <hr />
                  </div>
                </div>
              </div>
              <hr className="mx-auto w-[100%]  mt-[44px] mb-[50px]"/>
          </>
        ) : item.audio === "audio" ? (
          <>
          <div className="content mt-[50px] space-y-2">
                      <div className="Profile-desc justify-between w-[100%] flex flex-row items-center space-x-1">
                      <div className="flex items-center space-x-1">
                      <img src={item.image} />
                      <p className="profile-name text-base font-normal">
                      {item.profileName}
                      </p>
                      <img src={item.image2} />
                      </div>
                      <div className=" flex self-end bg-gradient-to-br from-pink-600 to-purple-500 text-transparent bg-clip-text ">
                      <button className="border-[0.75px] border-gray-300 rounded-[38px] text-[12px] w-[96px] md:text-[16px] md:w-[134px] h-[41px] text-trasparent bg-clip-text font-medium">{item.followbtn}</button>
                      </div>
                </div>
                <h2 className="font-semibold w-[85%] text-base leading-[24px]">{item.heading}</h2>
                <p className="font-normal text-sm md:text-base leading-[21px]">{item.para}</p>
                <ReactPlayer controls={true} url={item.url} playing={false} width="295px" className="pb-2"/>
                <div className="content-footer mt-[50px] text-[#525252] flex justify-between text-sm font-normal w-[100%] lg:w-[92%]">
                  <div className="reading flex flex-row space-x-2 text-[10px] w-[63%] lg:w-[50%] ">
                    <p className="flex text-center items-center">
                      {item.footerContent}
                    </p>
                    <p className="">{item.paragraph2}</p>
                  </div>
                  <div className="ctn-footer-btns flex flex-row justify-between w-[26%] sm:w-[40%] md:w-[45%] lg:w-[45%] xl:w-[33%]">
                    <div className="flex flex-row space-x-2 text-[11px]">
                      {" "}
                      <img src={item.shareButton} className="w-[11px] h-[13px]" />{" "}
                      <button className="share hidden md:flex w-[11px] h-[14px]">{item.shareButtonName}</button>{" "}
                    </div>
                    <div className="flex flex-row space-x-2 text-[11px]">
                      {" "}
                      <img src={item.saveButton}  className="w-[11px] h-[13px]"/>{" "}
                      <button className="save-post hidden md:flex md:flex-row w-[57px] h-[15px]">
                        {item.saveButtonName}
                      </button>{" "}
                    </div>
                    <img src={item.dotImage} className="w-[20px] h-[15px]" />
                    <hr />
                  </div>
                </div>
              </div>
              <hr className="mx-auto w-[100%]  mt-[44px] mb-[50px]"/>
          </>
        ) : (
          <>
            <div className="mx-auto font-Urbanist  w-[84%] mt-[17px] flex-wrap flex ">
              <div className="content mt-[50px] space-y-2">
                <div className="Profile-desc flex flex-row justify-between w-[100%] items-center space-x-1">
                <div className="flex items-center space-x-1">
                  <img src={item.image} />
                  <p className="profile-name text-base font-normal">
                    {item.profileName}
                  </p>
                  <img src={item.image2} />
                </div>
                <div className="bg-gradient-to-br from-pink-600 to-purple-500 text-transparent bg-clip-text ">
                  <button className="border-[0.75px] border-gray-300 rounded-[38px] text-[12px] md:text-[16px] w-[96px] md:w-[134px] h-[41px] text-trasparent bg-clip-text font-medium">{item.followbtn}</button>
                  </div>
                </div>
                <h2 className=" font-semibold w-[85%] text-base leading-[24px]">{item.heading}</h2>
                <p className="font-normal text-sm md:text-base leading-[21px]">{item.para}</p>
                <img src={item.url} className="pb-2 w-[95%] mx-auto " />
                <div className="content-footer mt-[50px] text-[#525252] flex justify-between text-sm font-normal w-[100%] lg:w-[92%]">
                  <div className="reading flex flex-row space-x-2 text-[10px] w-[63%] lg:w-[50%]">
                    <p className="flex text-center items-center">
                      {item.footerContent}
                    </p>
                    <p>{item.paragraph2}</p>
                  </div>
                  <div className="ctn-footer-btns flex flex-row justify-between w-[26%] sm:w-[40%] md:w-[45%] lg:w-[45%] xl:w-[37%]">
                    <div className="flex flex-row space-x-2 text-[10px]">
                      {" "}
                      <img src={item.shareButton} className="w-[11px] h-[13px]" />{" "}
                      <button className="share hidden md:flex w-[11px] h-[14px]">{item.shareButtonName}</button>{" "}
                    </div>
                    <div className="flex flex-row space-x-2 text-[11px]">
                      {" "}
                      <img src={item.saveButton} className="w-[11px] h-[13px]" />{" "}
                      <button className="save-post hidden md:flex md:flex-row w-[57px] h-[15px]">
                        {item.saveButtonName}
                      </button>{" "}
                    </div>
                    <img src={item.dotImage} className="w-[20px] h-[15px] flex items-center align-middle " />
            
                  </div>
                </div>
              </div>
        </div>
        <hr className="mx-auto w-[100%]  mt-[44px] mb-[50px]"/>
          </>
        ) 
      )} 
      </div>
  </>
  );
};

export default Feed;
