'use client'

import Link from "next/link"
import Images from '../../../public/assets/index.js'
import Image from "next/image"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Collaborate', href: '/collaborate' },
    { name: 'Bootcamp', href: '/bootcamp' },
    { name: 'Dashboard', href: '/dashboard' },
]


export default function MobileNavbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [shouldMorph, setMorph] = useState(false)
    const urlPathname = usePathname()
    const isAuthenticated = false
    const isLoggedIn = true


    // useEffect(() => {
    //     const trigger = document.createElement('div')
    //     trigger.style.position = 'absolute';
    //     trigger.style.top = '0';
    //     // trigger.style.height = '100vh';
    //     trigger.style.zIndex = '1';
    //     document.body.appendChild(trigger)

    //     const obv = new IntersectionObserver(([e]) => {
    //         setMorph(!e.isIntersecting)
    //     })

    //     obv.observe(trigger)
    //     return () => obv.unobserve(trigger)
    // }, [])

    // useEffect(() => {
    //     // Hide the mobile navbar when the url changes.
    //     setIsOpen(false)
    // }, [urlPathname])



    // return (
    //     <>
    //         <div className='navbar__container flex flex-col w-full static overflow-hidden'>
    //             <div className="navbar__top h-[80px] flex justify-between px-4 py-2 border-yellowish border-b-[0.5px]">
    //                 <Image src={Images.logoAot} width={60} height={30} alt="aot" />
    //                 <Image
    //                     src={isOpen ? Images.close : Images.hamburger}
    //                     className="hamburger__icon"
    //                     width={30}
    //                     height={30}
    //                     alt="hamburger"
    //                     onClick={() => setIsOpen(!isOpen)}
    //                     data-morphed={shouldMorph}
    //                 />
    //             </div>

    //             <div className="navbar__body top-[80.5px] absolute bg-black z-50 overscroll-y-none flex flex-col" data-is-open={isOpen}>
    //                 <div
    //                     className="navbar__register__login flex items-center justify-center w-full h-[88px] border-yellowish border-b-[0.5px]"
    //                     data-active={'/register' == urlPathname}
    //                 >
    //                     <Link href='/register' onClick={() => setIsOpen(false)} className="bg-red flex text-yellowish px-20 py-2 rounded-xl gap-4">
    //                         <p>Register</p>
    //                         <Image src={Images.arrowRightYellowish} alt='arrow-right' />
    //                     </Link>
    //                 </div>

    //                 {LINKS.map((l, id) => (
    //                     <div
    //                         key={id}
    //                         className="flex items-center justify-center w-full h-[88px] border-yellowish border-b-[0.5px]"
    //                         data-active={l.href == urlPathname}
    //                         onClick={() => l.href == urlPathname && setIsOpen(false)}
    //                     >
    //                         <Link href={l.href} className="flex justify-between text-yellowish px-10 py-2 rounded-xl gap-4 w-full text-2xl">
    //                             <p>{l.name}</p>
    //                             <Image src={Images.arrowRightYellowish} width={25} height={25} alt='arrow-right' />
    //                         </Link>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>



    //         <style>
    //             {`
    //                 .navbar__body{
    //                     height: 100vh;
    //                     width: 100vw;
    //                 }

    //                 .navbar__body[data-is-open=false] {
    //                     opacity: 0;
    //                     visibility: hidden;
    //                     transition: all 300ms;
    //                 }
                    
    //                 .navbar__body[data-is-open=true] {
    //                     opacity: 1;
    //                     visibility: visible;
    //                     transition: all 300ms;
    //                 }
    //             `}
    //         </style>
    //     </>
    // )
}

