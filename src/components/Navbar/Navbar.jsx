'use client'

import Link from "next/link"
import Images from '../../../public/assets/index.js'
import Image from "next/image"
export default function Navbar() {

    const isAuthenticated = false

    return (
        <>

            <div className='flex justify-center items-center gap-5 text-yellowish text-base'>
                <Link href='/' className=''>Home</Link>
                <Link href='/about' className=' '>About</Link>
                <Link href='/team' className=''>Team</Link>

                <Link href='/' className=''><Image src={Images.logoAot} /></Link>

                <Link href='/collaborate' className=''>Collaborate</Link>

                <Link href='/bootcamp' className=''>Bootcamp</Link>
                {isAuthenticated ? (
                    <Link href='/login' className=''>Login</Link>
                ) : (
                    <Link href='/register' className=' '>Register</Link>
                )}

            </div>
        </>
    )
}