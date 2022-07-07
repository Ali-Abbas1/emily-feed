import React from 'react'
import logo from '../images/logo.svg'
import button1 from '../images/Vector.png'
import button2 from '../images/Vector2.svg'
import button3 from '../images/Vector3.svg'
import button4 from '../images/Vector4.svg'
import button5 from '../images/Vector5.svg'
import button6 from '../images/Vector6.svg'
import button7 from '../images/Vector7.svg'
import button8 from '../images/Vector8.svg'
const Sidebar = () => {
  return (
    <>
    <div className='lg:block hidden font-Urbanist '>
      <div className='sticky top-0 left-0 bg-white lg:w-[290px] flex flex-col lg:pt-[40px] space-y-48'>
          <div className='logo flex justify-end'>
              <img src={logo} alt="logo"/>
          </div>
                    <div className='sidebar-btns flex flex-col items-end space-y-10 pr-[20px]'>
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
  </div>
    </>
  )
}
export default Sidebar