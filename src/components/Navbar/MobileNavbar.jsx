'use client'

import Link from "next/link"
import Images from '../../../public/assets/index.js'
import Image from "next/image"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuthState } from "@/context/AuthContext.js";
import { signInWithGoogle } from "@/services/auth/firebase/googleAuth.service.js";
import Cookies from "js-cookie";


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


    const { user, isAuthenticated } = useAuthState()

    async function signIn() {
        if (isAuthenticated) return
        const result = await signInWithGoogle()
        if (result === undefined) return
        Cookies.set('email', result.email)
        Cookies.set('avatar', result.avatar)
        Cookies.set('isAuthenticated', true)
        Cookies.set('firebase_token', result.firebase_token)
        window.location.reload()
    }

    function logout() {
        Cookies.remove('email')
        Cookies.remove('avatar')
        Cookies.remove('isAuthenticated')
        Cookies.remove('firebase_token')
        window.location.href = '/'
    }


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
            <div className='navbar__container flex flex-col w-full z-[1000] fixed bg-black'>
                <div className="navbar__top h-[80px] flex justify-between px-4 py-2 border-yellowish border-b-[0.5px]">
                    <Image src={Images.logoAot} width={60} height={30} alt="aot" />
                    <Image
                        src={isOpen ? Images.close : Images.hamburger}
                        className="hamburger__icon"
                        width={30}
                        height={30}
                        alt="hamburger"
                        onClick={() => setIsOpen(!isOpen)}
                        data-morphed={shouldMorph}
                    />
                </div>

                <div className="navbar__body top-[80.5px] fixed bg-black z-50 flex flex-col" data-is-open={isOpen}>
                    <div className="navbar__register__login flex items-center justify-center w-full h-[88px] border-yellowish border-b-[0.5px]">
                        {
                            !isAuthenticated ? (
                                <div className="bg-red flex text-yellowish px-20 py-2 rounded-xl gap-4" onClick={signIn}>
                                    <p>Register</p>
                                    <Image src={Images.arrowRightYellowish} alt='arrow-right' />
                                </div>
                            ) : (
                                <div className="flex justify-between w-full px-9">
                                    <div className="flex flex-col gap-2">
                                        <Link href='/profile' className="text-white text-lg">Go to profile →</Link>
                                        <p className="text-red" onClick={logout}>Logout</p>
                                    </div>
                                    <Image src={user.avatar} alt="avatar" className="avatar__image rounded-[50%]" width={50} height={50} />
                                </div>
                            )
                        }

                    </div>

                    {LINKS.map((l, id) => (
                        <div
                            key={id}
                            className="flex items-center justify-center w-full h-[88px] border-yellowish border-b-[0.5px]"
                            data-active={l.href == urlPathname}
                            onClick={() => l.href == urlPathname && setIsOpen(false)}
                        >
                            <Link href={l.href} className="flex justify-between text-yellowish px-10 py-2 rounded-xl gap-4 w-full text-2xl">
                                <p>{l.name}</p>
                                <Image src={Images.arrowRightYellowish} width={25} height={25} alt='arrow-right' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>



            <style>
                {`
                    .navbar__body{
                        height: 100vh;
                        width: 100vw;
                    }

                    .navbar__body[data-is-open=false] {
                        opacity: 0;
                        visibility: hidden;
                        transition: all 300ms;
                    }
                    
                    .navbar__body[data-is-open=true] {
                        opacity: 1;
                        visibility: visible;
                        transition: all 300ms;
                    }
                `}
            </style>
        </>
    )
}

