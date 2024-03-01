'use client'

import Link from "next/link"
import Images from '/public/assets'
import Image from "next/image"
import { signInWithGoogle } from "@/services/auth/firebase/googleAuth.service.js"
import { useAuthState } from "@/context/AuthContext.js"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation.js"


const LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Collaborate', href: '/collaborate' },
    { name: 'Bootcamp', href: '/bootcamp' },
    { name: 'Dashboard', href: '/dashboard' },
]

export default function DesktopNavbar() {

    const { user, setUser, setIsAuthenticated, isAuthenticated } = useAuthState()
    const [isOpen, setIsOpen] = useState(false);
    const urlPathName = usePathname()

    const flexStylesCenter = "flex justify-center items-center";

    async function signIn() {
        if (isAuthenticated) return
        const result = await signInWithGoogle()
        if (result === undefined) return
        // Get user uuid from messiah endpoint by email
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_MESSIAH_URL}/user/checkEmail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: result.email
                })
            })
            console.log(res)
        }
        catch (err) {
            console.error(err)
        }


        Cookies.set('email', result.email)
        Cookies.set('avatar', result.avatar)
        Cookies.set('isAuthenticated', true)
        Cookies.set('firebase_token', result.firebase_token)
        setUser({
            email: result.email,
            avatar: result.avatar,
            firebase_token: result.firebase_token
        })
        setIsAuthenticated(true)
    }

    async function logout() {
        Cookies.remove('email')
        Cookies.remove('avatar')
        Cookies.remove('isAuthenticated')
        Cookies.remove('firebase_token')
        await fetch(`${process.env.NEXT_PUBLIC_MESSIAH_URL}/user/logout`, {
            method: 'POST'
        })
        window.location.href = '/'
    }


    useEffect(() => {
        // Hide the mobile navbar when the url changes.
        setIsOpen(false)
    }, [urlPathName])


    return (
        <>
            {/* Desktop Navbar */}
            <div className='navbar__container px-0 md:px-20 md:h-20 w-full hidden lg:flex justify-center items-center text-yellowish border-yellowish text-base border-b-[0.5px]'>

                <div className="navbar__left md:flex items-center justify-evenly w-1/3 h-full">
                    <Link href='/' className='border-x-[0.5px] h-full w-1/3 flex justify-center items-center' >Home</Link>
                    <Link href='/about' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center'>About</Link>
                    <Link href='/team' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center'>Team</Link>
                </div>

                <div className="navbar__middle md:flex justify-evenly w-full md:w-1/3">
                    <Link href='/' className=''><Image src={Images.logoAot} alt="aot" /></Link>
                </div>

                <div className="navbar__right md:flex items-center justify-evenly w-1/3 h-full">

                    <Link href='/collaborate' className='border-x-[0.5px] h-full w-1/3 flex justify-center items-center'>Collaborate</Link>

                    <Link href='/bootcamp' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center'>Bootcamp</Link>

                    <Link href='/dashboard' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center '>Dashboard</Link>

                    {!isAuthenticated ?
                        <div className='border-r-[0.5px] bg-red h-full w-1/3 flex justify-center items-center hover:cursor-pointer' onClick={signIn}>
                            Register
                        </div>
                        :
                        <div className="group h-full w-1/3 z-[1000]">
                            <div className='border-r-[0.5px] h-full flex justify-center items-center hover:cursor-pointer'>
                                <Image src={user.avatar} className="avatar__image rounded-[50%]" width={44} height={44} alt="avatar" unoptimized />
                            </div>
                            <ProfileHolder onclick={logout} />
                        </div>
                    }

                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="block lg:hidden">
                <div className={`navbar__top flex justify-between items-center px-6 py-6 border text-yellowish`}>
                    <Image src={Images.logoAot} height={27} alt="aot" />
                    <Image onClick={() => setIsOpen(!isOpen)} src={isOpen ? Images.close : Images.hamburger} height={27} alt="hamburger_close" />
                </div>
                {isOpen && (
                    <div className={`flex flex-col top-0 left-0 right-0 z-50 bg-black h-screen fixed`}>
                        <div className={`flex justify-between items-center px-6 py-6`}>
                            <Image src={Images.logoAot} height={27} alt="aot" />
                            <Image onClick={() => setIsOpen(!isOpen)} src={isOpen ? Images.close : Images.hamburger} height={27} alt="hamburger_close" />
                        </div>
                        <div className={`flex flex-col top-20 left-0 right-0 z-50 bg-black h-screen fixed `}>
                            <div className="px-6 border-t-[.5px] border-yellowish py-6">
                                {
                                    !isAuthenticated ? (
                                        <div className={`${flexStylesCenter} bg-red py-2.5 gap-x-5 rounded-[8px] transition-transform hover:scale-x-110`} onClick={signIn}>
                                            <p className="text-yellowish font-generalsans font-medium">Register</p>
                                            <Image src={Images.arrowRightYellowish} alt="arrow_right" />
                                        </div>
                                    ) : (
                                        <div className="group h-full w-full z-[1000]">
                                            <div className='h-full flex justify-between items-center'>
                                                <div className="flex flex-col gap-2">
                                                    <p className=" font-generalsans text-lg text-wrap text-yellowish ">{user.email}</p>
                                                    <Link href='/profile' className="flex flex-row gap-2.5 hover:cursor-pointer">
                                                        <p className=" text-grey">Go to profile </p>
                                                        <Image src={Images.arrowRightYellowish} height={10} alt="arrow_right" />
                                                    </Link>
                                                    <p className="text-red" onClick={logout}>Logout</p>
                                                </div>
                                                <Image src={user.avatar} className="avatar__image rounded-[50%] border-yellowish" width={74} height={74} alt="avatar" unoptimized />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            {LINKS.map((l, id) => (
                                <div
                                    key={id}
                                    className="flex justify-between items-center px-6 border-t-[.5px] border-yellowish bg-black py-5"
                                    // Close navbar if requrl and href is same
                                    onClick={() => l.href == urlPathName && setIsOpen(false)}
                                >
                                    <Link href={l.href} className="flex justify-between text-yellowish px-5 py-1 rounded-xl gap-2 w-full text-2xl">
                                        <p className="text-yellowish text-2xl font-generalsans">{l.name}</p>
                                        <Image src={Images.arrowRightYellowish} height={30} alt="arrow_right" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}


function ProfileHolder({ onclick }) {
    return (
        <>
            <div className="hidden group-hover:block">
                <div className="profile__menu flex flex-col absolute translate-x-2 translate-y-[-8px] w-32 rounded-md border-yellowish border-[0.5px] bg-black z-[99999]">
                    <Link href='/profile' className="profile__page hover:cursor-pointer flex justify-center gap-3 border-b-[0.5px] pt-2 pb-2">
                        <Image src={Images.profile} alt="profile" />
                        <p>Profile</p>
                    </Link>
                    <div className="logout flex">
                        <div className="hover:cursor-pointer flex justify-center gap-2.5 p-2 m-1.5 bg-red rounded-[10px] w-full" onClick={onclick}>
                            <Image src={Images.logout} alt="logout" />
                            <p className="text-yellowish text-sm ">Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}