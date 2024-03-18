import Image from 'next/image'
import React, { useState } from 'react'
import Images from '../../../public/assets'
import Link from 'next/link'

const EventComponent = ({ eventArray }) => {

    const handleSoloClick = () => {
        setSelectedType("Solo");
    }

    const handleTeamClick = () => {
        setSelectedType("Team");
    }

    const [selectedType, setSelectedType] = useState("Solo")
    const [searchQuery, setSearchQuery] = useState("");

    const active =
        "bg-yellowish28 ";
    const inActive =
        "";

    const soloEventsRegistered = eventArray.filter(event => event.teamSize === '');
    console.log(soloEventsRegistered);

    const teamEventsRegistered = eventArray.filter(event => event.teamSize !== '');
    console.log(teamEventsRegistered);

    const filteredSoloEvents = soloEventsRegistered.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.concept.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredTeamEvents = teamEventsRegistered.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.concept.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                        <input type="text" value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} className='outline-none w-full h-full bg-black placeholder-yellowish placeholder-opacity-30' placeholder='Search Your Bookings' />
                    </div>
                </div>
            </div>
            <div className='w-full'>
                {/* // <div key={event.id}>{event.name}</div> */}
                {selectedType === "Solo" ? (
                    <>
                        {filteredSoloEvents.map(event => (
                            <div key={event.id} className=' grid grid-cols-3 border-b border-yellowish h-52 md:h-28 pb-4 md:pb-0'>
                                <div className=" col-span-3  md:col-span-1 px-4 pt-6">
                                    <p className='font-generalsans-semibold text-2xl md:text-3xl text-yellowish'>{event.name}</p>
                                    <p className='text-yellowish sm:text-md'>{event.concept}</p>
                                </div>
                                <div className="col-span-3 md:col-span-1 flex justify-between items-center gap-6 px-4 md:px-0">
                                    <div className="flex justify-center items-center gap-3">
                                        <Image src={Images.celebration} className='h-8 w-8' />
                                        <p className='text-yellowish sm:text-md'>Free Participation</p>
                                    </div>
                                    <div className="bg-yellowish px-4 text-black font-generalsans rounded-2xl">
                                        solo
                                    </div>
                                </div>
                                <div className="col-span-3  md:col-span-1 flex justify-between items-center gap-6 px-6">
                                    <p className='text-yellowish sm:text-md'>Entry ticket will be sent later</p>
                                    <Link href={`/events/${event.id}`}>
                                        <Image src={Images.arrowDiag} className='h-8 w-8' />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {filteredTeamEvents.map(event => (
                            <div key={event.id} className=' grid grid-cols-3 border-b border-yellowish h-52 md:h-28 pb-4 md:pb-0'>
                                <div className=" col-span-3  md:col-span-1 px-4 pt-6">
                                    <p className='font-generalsans-semibold text-2xl md:text-3xl text-yellowish'>{event.name}</p>
                                    <p className='text-yellowish sm:text-md'>{event.concept}</p>
                                </div>
                                <div className="col-span-3 md:col-span-1 flex justify-between items-center gap-6 px-4 md:px-0">
                                    <div className="flex flex-col items-start">
                                        <div className="flex justify-center items-center gap-3">
                                            <Image src={Images.money} className='h-8 w-8' />
                                            <p className='text-yellowish sm:text-xl'>₹50</p>
                                        </div>
                                        <div className="text-grey">offline submission</div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center bg-yellowishopc text-yellowish px-4 py-1 font-generalsans rounded-2xl">
                                        <Image src={Images.people} className='h-5 w-5' />
                                        Create Team
                                    </div>

                                </div>
                                <div className="col-span-3  md:col-span-1 flex justify-between items-center gap-6 px-6">
                                    <p className='text-yellowish sm:text-md'>Entry ticket will be sent later</p>
                                    <Link href={`/events/${event.id}`}>
                                        <Image src={Images.arrowDiag} className='h-8 w-8' />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default EventComponent