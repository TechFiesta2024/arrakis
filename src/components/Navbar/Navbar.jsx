'use client'

import Link from "next/link"

export default function Navbar() {

    const isAuthenticated = false

    return (
        <div className='flex justify-center items-center gap-5'>
            <Link href='/' className='text-xl text-red-600 '>Home</Link>
            <Link href='/about' className=' text-xl text-red-600 '>About</Link>
            <Link href='/team' className='text-xl text-red-600 '>Team</Link>
            <Link href='/collaborate' className='text-xl text-red-600 '>Collaborate</Link>
            <Link href='/bootcamp' className='text-xl text-red-600 '>Bootcamp</Link>
            {isAuthenticated ? (
                <Link href='/login' className='text-xl text-red-600 '>Login</Link>
            ) : (
                <Link href='/register' className='text-xl text-red-600 '>Register</Link>
            )}

        </div>
    )
}