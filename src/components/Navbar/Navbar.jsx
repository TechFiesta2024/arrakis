'use client'

import Link from "next/link"
import Images from '../../../public/assets/index.js'
import Image from "next/image"
export default function Navbar() {

    const isAuthenticated = false
 
    return (
        <>


            <div className='navbar__container px-0 md:px-20 md:h-24 w-full flex justify-center items-center gap-5 text-yellowish text-base border-b-[1px]'>

                <div className="navbar__left flex items-center justify-evenly w-1/3 h-full">

                    <Link href='/' className='border-x-[1px] h-full w-1/3 flex justify-center items-center' >Home</Link>
                    <Link href='/about' className='border-r-[1px] h-full w-1/3 flex justify-center items-center'>About</Link>
                    <Link href='/team' className='border-r-[1px] h-full w-1/3 flex justify-center items-center'>Team</Link>
                </div>

                <div className="navbar__middle flex justify-evenly w-full md:w-1/3">

                    <Link href='/' className=''><Image src={Images.logoAot} /></Link>
                </div>
                <div className="navbar__right flex items-center justify-evenly w-1/3 h-full">

                    <Link href='/collaborate' className='border-x-[1px] h-full w-1/3 flex justify-center items-center'>Collaborate</Link>

                    <Link href='/bootcamp' className='border-r-[1px] h-full w-1/3 flex justify-center items-center'>Bootcamp</Link>
                    {isAuthenticated ? (
                        <Link href='/login' className='border-r-[1px] h-full w-1/3 flex justify-center items-center'>Login</Link>
                    ) : (
                        <Link href='/register' className='border-r-[1px] h-full w-1/3 flex justify-center items-center '>Register</Link>
                    )}


                </div>




            </div>
        </>
    )
}