"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = ({ font }) => {

    const [isMobile, setIsMobile] = useState(false)

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
        <header className='z-[10000]'>
            <div className={`container mx-auto  bg-transparent flex ${isMobile? "flex-col h-[60px] overflow-hidden":"items-center justify-around h-[60px]"}`}>
                <div className={`logo flex items-center justify-center gap-1  ${font.className}`}>
                    <h1 className='text-3xl text-pink-600'>G </h1>
                    <h1 className='text-3xl text-white'>Helper  </h1>
                </div>


                <nav className={`${isMobile ? "mt-3":"mt-0"}`}>
                    <ul className={`flex ${isMobile?"items-center justify-center flex-col":"items-center justify-center"} gap-2`}>
                        <li className='transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1'>
                            <Link className='text-white font-bold text-lg  ' href={"/"} >HOME</Link>
                        </li>
                        <li className='transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1'>
                            <Link className='text-white font-bold text-lg  ' href={"/"} >BLOGS </Link>
                        </li>
                        <li className='transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1'>
                            <Link className='text-white font-bold text-lg  ' href={"/"} >TRENDING </Link>
                        </li>
                        <li className='transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1'>
                            <Link className='text-white font-bold text-lg  ' href={"/"} >ABOUT</Link>
                        </li>
                        <li className='transition duration-500  hover:border-b-2 hover:border-b-sky-300 px-1'>
                            <Link className='text-white font-bold text-lg  ' href={"/"} >CONTACT </Link>
                        </li>

                    </ul>
                </nav>



            </div>
        </header>
    )
}

export default Header
