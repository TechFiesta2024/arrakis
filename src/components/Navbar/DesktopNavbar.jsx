'use client'

import Link from "next/link"
import Images from '../../../public/assets/index.js'
import Image from "next/image"


export default function DesktopNavbar() {

    const isAuthenticated = false
    const isLoggedIn = true

    return (
        <>
            <div className='navbar__container px-0 md:px-20 md:h-20 w-full flex justify-center items-center text-yellowish border-yellowish text-base border-b-[0.5px]'>

                <div className="navbar__left md:flex items-center justify-evenly w-1/3 h-full hidden">

                    <Link href='/' className='border-x-[0.5px] h-full w-1/3 flex justify-center items-center' >Home</Link>
                    <Link href='/about' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center'>About</Link>
                    <Link href='/team' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center'>Team</Link>
                </div>

                <div className="navbar__middle flex justify-evenly w-full md:w-1/3">

                    <Link href='/' className=''><Image src={Images.logoAot} alt="aot" /></Link>
                </div>
                <div className="navbar__right md:flex items-center justify-evenly w-1/3 h-full hidden ">

                    <Link href='/collaborate' className='border-x-[0.5px] h-full w-1/3 flex justify-center items-center'>Collaborate</Link>

                    <Link href='/bootcamp' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center'>Bootcamp</Link>

                    {isLoggedIn && (
                        <Link href='/dashboard' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center '>Dashboard</Link>
                    )
                    }

                    {isAuthenticated ? (
                        <Link href='/login' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center'>Login</Link>
                    ) : (
                        <Link href='/register' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center '>Register</Link>
                    )}
                    
                </div>
            </div>
        </>
    )
}