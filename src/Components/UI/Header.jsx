"use client"


import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiAlignCenter, FiAlignJustify } from "react-icons/fi"
import { GrClose } from "react-icons/gr"


const Header = ({ font }) => {

    const [isMobile, setIsMobile] = useState(false)
    const [sidebarOpened, setSidebarOpened] = useState(false)

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
        <header className={`z-[10000]  h-auto `}>
            <div className={`container mx-auto flex md:flex-row flex-col md:items-end items-center md:justify-around justify-center ${isMobile ? `flex-col items-end justify-center` : "items-end justify-around"}`}>

                <div className=" md:w-auto w-full md:items-center logo-section flex items-end justify-between md:px-0 px-3 ">
                    <div className={`logo flex items-end justify-center gap-1  ${font.className}`}>
                        <h1 className='text-5xl text-pink-600'>G </h1>
                        <h1 className='text-5xl text-white'>Helper  </h1>
                    </div>
                    {
                        isMobile ? <button className='md:hidden block text-4xl text-white bg-pink-300 rounded-md p-1' onClick={() => setSidebarOpened(!sidebarOpened)}>
                            {sidebarOpened ? < GrClose /> : <FiAlignJustify />}
                        </button> : ""
                    }
                </div>


                <nav className={` overflow-hidden transition-all duration-300 md:h-auto h-0 md:w-auto w-full ${isMobile ? "mt-3 overflow-hidden" : "mt-0"} ${sidebarOpened?"h-[250px]":"h-0" }  `}>
                    <ul className={`flex md:flex-row flex-col ${isMobile ? "items-center justify-center flex-col" : "items-center justify-center"} gap-2`}>
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
