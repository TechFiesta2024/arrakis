'use client'

import Link from "next/link"
import Images from '../../../public/assets/index.js'
import Image from "next/image"
import { signInWithGoogle } from "@/services/auth/firebase/googleAuth.service.js"
import { useAuthState } from "@/context/AuthContext.js"
import Cookies from "js-cookie"





export default function DesktopNavbar() {

    const { user, setUser, setIsAuthenticated, isAuthenticated } = useAuthState()

    async function signIn() {
        if (isAuthenticated) return
        const { email, avatar } = await signInWithGoogle()
        Cookies.set('email', email)
        Cookies.set('avatar', avatar)
        Cookies.set('isAuthenticated', true)
        setUser({ email, avatar })
        setIsAuthenticated(true)
    }


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

                    <Link href='/dashboard' className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center '>Dashboard</Link>

                    {!isAuthenticated ?
                        <div className='border-r-[0.5px] bg-red h-full w-1/3 flex justify-center items-center hover:cursor-pointer' onClick={signIn}>
                            Register
                        </div>
                        :
                        <div className="group h-full w-1/3">
                            <div className='border-r-[0.5px] h-full w-1/3 flex justify-center items-center hover:cursor-pointer'>
                                <Image src={user.avatar} className="avatar__image rounded-[50%]" width={44} height={44} alt="avatar" />
                            </div>
                            <ProfileHolder />
                        </div>
                    }

                </div>
            </div>
        </>
    )
}


function ProfileHolder() {
    return (
        <>
            {/* <div className="hidden group-hover:block"> */}
            <div className="profile__menu flex flex-col w-28 rounded-md border-yellowish border-[0.5px] bg-black">
                <div className="profile__page flex justify-center gap-3 border-b-yellowish-[0.5px]">
                    <Image src={Images.profile} alt="profile" />
                    <p>Profile</p>
                </div>
                <div className="logout flex justify-center">
                    <Image src={Images.logout} alt="logout" />
                    <p>Logout</p>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}