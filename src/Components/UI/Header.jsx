"use client"


import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiAlignCenter, FiAlignJustify } from "react-icons/fi"
import {GrClose } from  "react-icons/gr"


const Header = ({ font }) => {

    const [isMobile, setIsMobile] = useState(false)
    const [sidebarOpened,setSidebarOpened] = useState(false)

    const changeHeaderResponsive = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        changeHeaderResponsive()
    }, [])

    // const headerContainerstyle = {

    // }

    // const headerNavStyle ={

    // }


    return (
        <header className={`z-[10000]`}>
            <div className={`container mx-auto  bg-transparent transition-all duration-300 flex ${isMobile ? `flex-col  ${sidebarOpened?`h-[300px]`: `h-[60px]`} overflow-hidden` : "items-end justify-around h-[60px]"}`}>

                <div className="logo-section flex items-end justify-between md:px-0 px-3 ">
                    <div className={`logo flex items-end justify-center gap-1  ${font.className}`}>
                        <h1 className='text-5xl text-pink-600'>G </h1>
                        <h1 className='text-5xl text-white'>Helper  </h1>
                    </div>
                   {
                    isMobile ?  <button className='text-4xl text-white bg-pink-300 rounded-md p-1' onClick={()=>setSidebarOpened(!sidebarOpened)}>
                    {sidebarOpened?  < GrClose/> :   <FiAlignJustify />}
                  </button>  : ""
                   }
                </div>


                <nav className={`${isMobile ? "mt-3" : "mt-0"} ` }>
                    <ul className={`flex ${isMobile ? "items-center justify-center flex-col" : "items-center justify-center"} gap-2`}>
                        <li className={` ${isMobile ? "w-full mt-[4px] text-center" : "w-auto"} transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1`}>
                            <Link className={`text-white transition-all duration-200 font-bold text-lg ${isMobile ? "w-full hover:bg-slate-500 block p-1" : "w-auto"}  `} href={"/"} >HOME</Link>
                        </li>
                        <li className={` ${isMobile ? "w-full mt-[4px] text-center" : "w-auto"} transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1`}>
                            <Link className={`text-white transition-all duration-200 font-bold text-lg ${isMobile ? "w-full hover:bg-slate-500 block p-1" : "w-auto"}  `} href={"/"} >BLOGS </Link>
                        </li>
                        <li className={` ${isMobile ? "w-full mt-[4px] text-center" : "w-auto"} transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1`}>
                            <Link className={`text-white transition-all duration-200 font-bold text-lg ${isMobile ? "w-full hover:bg-slate-500 block p-1" : "w-auto"}  `} href={"/"} >TRENDING </Link>
                        </li>
                        <li className={` ${isMobile ? "w-full mt-[4px] text-center" : "w-auto"} transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1`}>
                            <Link className={`text-white transition-all duration-200 font-bold text-lg ${isMobile ? "w-full hover:bg-slate-500 block p-1" : "w-auto"}  `} href={"/"} >ABOUT</Link>
                        </li>
                        <li className={` ${isMobile ? "w-full mt-[4px] text-center" : "w-auto"} transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1`}>
                            <Link className={`text-white transition-all duration-200 font-bold text-lg ${isMobile ? "w-full hover:bg-slate-500 block p-1" : "w-auto"}  `} href={"/"} >CONTACT </Link>
                        </li>

                    </ul>
                </nav>



            </div>
        </header>
    )
}

export default Header
