import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Images from '../../../public/assets'
import Link from 'next/link'
import { useAuthState } from '@/context/AuthContext'
import axiosInstance from '@/utils/axiosInstance'
import events from "/public/data/events.json";
import axios from 'axios'

export default function EventComponent({ eventArray }) {
    const { user } = useAuthState()

    // console.log(user,"yyyy");
    const [teamEvents, setTeamEvents] = useState([])
    const [memberLength, setMemberLength] = useState(1)
    const [soloEvents, setSoloEvents] = useState([]);

    useEffect(() => {
        async function getTeamEvents() {
            try {
                const response = await axiosInstance.get(`/team/${user.teamId}`)

                if (response.status === 200) {
                    setMemberLength(response.data.college_members.length)
                    const categories = response.data.event.map((e) => e.category)

                    setTeamEvents(
                        events.filter((obj) =>
                            categories.toString().includes(obj.id),
                        ))
                }
            }
            catch (err) {
                // console.log(err);
            }
        }
        getTeamEvents()
    }, [])

    useEffect(() => {
        const source = axios.CancelToken.source();
        async function getMe() {
            try {
                const response = await axiosInstance.get("/user", {
                    headers: {
                        email: user.email,
                    },
                });
                const { data } = response;
                // console.log(data);
                setSoloEvents(data?.event)
                // console.log(data.event, "llll");
                if (response.status === 200) {
                    // setMemberLength(response.data.college_members.length)
                    const categories = response.data.event.map((e) => e.category)
                    // console.log(categories,"kkk");
                    setSoloEvents(
                        events.filter((obj) =>
                            categories.toString().includes(obj.id),
                        ))
                }

            } catch (err) {
                if (axios.isCancel(err)) {
                    // console.error("Axios error: ", err.message);
                }
                else {
                    // console.error(err);
                }
            }
        }
        getMe();

        return () => {
            source.cancel("Request Cancelled.");
        }
    }, []);

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

    return (
        <>
            <div className={`grid grid-cols-2 w-full `}>
                <div className={`col-span-1 border-yellowish border-[.5px] cursor-pointer ${selectedType === "Solo" ? active : inActive}`} onClick={handleSoloClick}>
                    <div className='flex flex-row justify-center items-center py-6 gap-x-3'>
                        <Image src={Images.solo} />
                        <span className='font-generalsans text-yellowish md:text-lg'>Solo Participation</span>
                    </div>
                </div>
                <div className={`col-span-1 border-yellowish border-[.5px] cursor-pointer ${selectedType === "Team" ? active : inActive}`} onClick={handleTeamClick}>
                    <div className='flex flex-row justify-center items-center py-6 gap-x-3'>
                        <Image src={Images.people} />
                        <span className='font-generalsans text-yellowish md:text-lg'>Team Participation</span>
                    </div>
                </div>
                {/* <div className='col-span-2 md:col-span-2 border-yellowish border-[.5px] pl-5 cursor-text'>
                    <div className='flex flex-row justify-start items-center py-6 gap-x-3'>
                        <Image src={Images.search} className='md:h-6' />
                        <input type="text" value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} className='outline-none w-full h-full bg-black placeholder-yellowish placeholder-opacity-30' placeholder='Search Your Bookings' />
                    </div>
                </div> */}
            </div>
            {
                soloEvents.length === 0 && teamEvents.length === 0 ? (
                    <div className='h-[60vh] w-full flex justify-center items-center py-20 md:py-0'>
                        <Image src={Images.launch} className='h-20 w-20' />
                        <p className=' text-2xl font-generalsans text-yellowish28'>Register to events</p>
                    </div>
                ) :
                    (
                        <div className='w-full'>
                            {/* // <div key={event.id}>{event.name}</div> */}
                            {selectedType === "Solo" ? (
                                <>
                                    {soloEvents.map(event => (
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
                                    {teamEvents.map((event) => (
                                        <div key={event.id} className=' grid grid-cols-3 border-b border-yellowish h-52 md:h-28 pb-4 md:pb-0'>
                                            <div className=" col-span-3  md:col-span-1 px-4 pt-6">
                                                <p className='font-generalsans-semibold text-2xl md:text-3xl text-yellowish'>{event.name}</p>
                                                {/* <p className='text-yellowish sm:text-md'>{event.concept}</p> */}
                                            </div>
                                            <div className="col-span-3 md:col-span-1 flex justify-between items-center gap-6 px-4 md:px-0">
                                                <div className="flex flex-col items-start">
                                                    <div className="flex justify-center items-center gap-3">
                                                        <Image src={Images.money} className='h-8 w-8' />
                                                        <p className='text-yellowish sm:text-xl'>₹{memberLength * 50}</p>
                                                    </div>
                                                    <div className="text-grey">offline submission</div>
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
                    )
            }

        </>
    )
}
