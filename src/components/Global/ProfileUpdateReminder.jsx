'use client'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Images from "/public/assets"
import { useAuthState } from "@/context/AuthContext"


export default function ProfileUpdateReminder() {

    const { user } = useAuthState()
    const [isProfileCompleted, setIsProfileCompleted] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setIsProfileCompleted(user.isAuthenticated && user.UUID), 5000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <Link href='/profile' className={`profile_update_toast_container bg-yellowish py-3 flex justify-between items-center px-4 overflow-hidden`}>
            <div className="profile_svg-container flex justify-center items-center gap-4">
                <div className=" bg-red h-12 w-12 rounded-full flex justify-center items-center">
                    <Image src={Images.userIcon} className=" text-yellowish" alt="usericon" />
                </div>
                <p className="font-generalsans font-bold text-black">Update your profile</p>
            </div>
            <div className="flex justify-center items-center -mt-20">
                <Image src={Images.Diamond1} className="h-16 w-16" alt="diamond" />
                <Image src={Images.Diamond2} className="h-6 w-6 mt-16" alt="diamond" />
            </div>
            <Image src={Images.arrowRight} alt="arrow" />
        </Link>
    )
}
