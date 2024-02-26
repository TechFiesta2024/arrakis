'use client'

import Link from "next/link"
import Images from '../../../public/assets/index.js'
import Image from "next/image"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation.js";


const LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Collaborate', href: '/collaborate' },
    { name: 'Bootcamp', href: '/bootcamp' }
]


export default function MobileNavbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [shouldMorph, setMorph] = useState(false)
    const urlPathname = usePathname()
    const isAuthenticated = false
    const isLoggedIn = true


    useEffect(() => {
        const trigger = document.createElement('div')
        trigger.style.position = 'absolute';
        trigger.style.top = '0';
        trigger.style.height = '100vh';
        document.body.appendChild(trigger)

        const obv = new IntersectionObserver(([e]) => {
            setMorph(!e.isIntersecting)
        })

        obv.observe(trigger)
        return () => obv.unobserve(trigger)
    }, [])

    useEffect(() => {
        // Hide the mobile navbar when the url changes.
        setIsOpen(false)
    }, [urlPathname])


    return (
        <>
            <div className='navbar__container flex flex-col w-full h-[100vh]'>
                <div className="navbar__top h-[80px] flex justify-between px-4 py-2 border-yellowish border-b-[0.5px]">
                    <Image src={Images.logoAot} width={60} height={30} alt="aot" />
                    <Image
                        src={isOpen ? Images.close : Images.hamburger}
                        width={30}
                        height={30}
                        alt="hamburger"
                        onClick={() => setIsOpen(!isOpen)}
                        data-morphed={shouldMorph}
                    />
                </div>

                <div className="navbar__body flex flex-col">
                    <div className="navbar__register__login flex items-center justify-center w-full h-[94px] border-yellowish border-b-[0.5px]">
                        <Link href='/register' className="bg-red flex text-yellowish px-20 py-2 rounded-xl gap-4">
                            <p>Register</p>
                            <Image src={Images.ArrowRight} alt='arrow-right' />
                        </Link>
                    </div>

                    <div className="navbar__home flex items-center justify-center w-full h-[94px] border-yellowish border-b-[0.5px]">
                        <Link href='/home' className="flex justify-between text-yellowish px-10 py-2 rounded-xl gap-4 w-full text-3xl">
                            <p>Home</p>
                            <Image src={Images.ArrowRight} width={30} height={30} alt='arrow-right' />
                        </Link>
                    </div>

                    <div className="navbar__home flex items-center justify-center w-full h-[94px] border-yellowish border-b-[0.5px]">
                        <Link href='/about' className="flex justify-between text-yellowish px-10 py-2 rounded-xl gap-4 w-full text-3xl">
                            <p>About</p>
                            <Image src={Images.ArrowRight} width={30} height={30} alt='arrow-right' />
                        </Link>
                    </div>

                    <div className="navbar__home flex items-center justify-center w-full h-[94px] border-yellowish border-b-[0.5px]">
                        <Link href='/team' className="flex justify-between text-yellowish px-10 py-2 rounded-xl gap-4 w-full text-3xl">
                            <p>Team</p>
                            <Image src={Images.ArrowRight} width={30} height={30} alt='arrow-right' />
                        </Link>
                    </div>

                    <div className="navbar__home flex items-center justify-center w-full h-[94px] border-yellowish border-b-[0.5px]">
                        <Link href='/collaborate' className="flex justify-between text-yellowish px-10 py-2 rounded-xl gap-4 w-full text-3xl">
                            <p>Collaborate</p>
                            <Image src={Images.ArrowRight} width={30} height={30} alt='arrow-right' />
                        </Link>
                    </div>

                    <div className="navbar__home flex items-center justify-center w-full h-[94px] border-yellowish border-b-[0.5px]">
                        <Link href='/bootcamp' className="flex justify-between text-yellowish px-10 py-2 rounded-xl gap-4 w-full text-3xl">
                            <p>Bootcamp</p>
                            <Image src={Images.ArrowRight} width={30} height={30} alt='arrow-right' />
                        </Link>
                    </div>

                    <div className="navbar__home flex items-center justify-center w-full h-[94px] border-yellowish border-b-[0.5px]">
                        <Link href='/dashboard' className="flex justify-between text-yellowish px-10 py-2 rounded-xl gap-4 w-full text-3xl">
                            <p>Dashboard</p>
                            <Image src={Images.ArrowRight} width={30} height={30} alt='arrow-right' />
                        </Link>
                    </div>
                </div>


            </div>
        </>
    )
}


const Profile = () => {
    return (
        <>
            
        </>
    )
}

{/* {
                        isLoggedIn && (
                            <Link href='/dashboard' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center '>Dashboard</Link>
                        )
                    }

                    {isAuthenticated ? (
                        <Link href='/login' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center'>Login</Link>
                    ) : (
                        <Link href='/register' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center '>Register</Link>
                    )} */}