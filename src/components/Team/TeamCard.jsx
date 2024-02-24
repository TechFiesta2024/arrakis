import Image from 'next/image'
import React from 'react'
import Images from '../../../public/assets'
import Link from 'next/link'

const TeamCard = ({ member }) => {
    
    const { name, role, image_url, linkedin, x_url } = member;
    return (
        <>
            {/* <div className='grid md:grid-cols-3 '> */}
            <div className='border-t-[.5px] border-b-[.5px] border-r-[.5px] border-yellowish'>
                    <div className='h-[60%] border-b-[.5px] border-yellowish overflow-hidden '>
                        <img className='object-cover' src={image_url} alt="" srcset="" />
                    </div>
                    <div className='h-[40%] '>
                        <div className='px-6 lg:pt-6 pt-4 h-3/4'>
                            <p className='text-yellowish font-generalsans font-bold text-2xl'>{ name }</p>
                            <p className='text-yellowish font-generalsans text-sm lg:pt-3 py-1'>{role}</p>
                        </div>
                    <div className='h-1/4 grid grid-cols-2 bg-yellowish border-b-[.5px] border-yellowish'>
                            <Link href={x_url} className='border-r-[.5px] border-black flex justify-center items-center'>
                                <Image src={Images.logoXBlack} />
                            </Link>
                            <Link href={linkedin} className='flex justify-center items-center'>
                                <Image src={Images.logoLinkedInBlack} />
                            </Link>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default TeamCard

// individual card design