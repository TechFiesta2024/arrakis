import Image from 'next/image'
import React, { useState } from 'react'
import Images from '../../../public/assets'

const EventComponent = () => {

    const handleSoloClick = () => {
        setSelectedType("Solo");
    }

    const handleTeamClick = () => {
        setSelectedType("Team");
    }

    const [selectedType, setSelectedType] = useState("Solo")

    const active =
        "bg-yellowish28 ";
    const inActive =
        "";
    
    return (
        <>
            <div className={`grid grid-cols-2 md:grid-cols-4 w-full `}>
                <div className={`col-span-1 md:col-span-1 border-yellowish border-[.5px] cursor-pointer ${selectedType === "Solo" ? active : inActive}`} onClick={handleSoloClick}>
                    <div className='flex flex-row justify-center items-center py-6 gap-x-3'>
                        <Image src={Images.solo} />
                        <span className='font-generalsans text-yellowish md:text-lg'>Solo Participation</span>
                    </div>
                </div>
                <div className={`col-span-1 md:col-span-1 border-yellowish border-[.5px] cursor-pointer ${selectedType === "Team" ? active : inActive}`} onClick={handleTeamClick}>
                    <div className='flex flex-row justify-center items-center py-6 gap-x-3'>
                        <Image src={Images.people} />
                        <span className='font-generalsans text-yellowish md:text-lg'>Team Participation</span>
                    </div>
                </div>
                <div className='col-span-2 md:col-span-2 border-yellowish border-[.5px] pl-5 cursor-text'>
                    <div className='flex flex-row justify-start items-center py-6 gap-x-3'>
                        <Image src={Images.search} className='md:h-6' />
                        <input type="text" className='outline-none bg-black placeholder-yellowish placeholder-opacity-30' placeholder='Search Your Bookings' />
                    </div>
                </div>
            </div>
            <div>
                {selectedType && (
                    <span>{selectedType}</span>
                )}
            </div>
        </>
    )
}

export default EventComponent