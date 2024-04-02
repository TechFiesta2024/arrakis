import Image from 'next/image'
import Link from 'next/link'
import Images from '../../../public/assets'
import axios from 'axios'
import axiosInstance from '@/utils/axiosInstance'
import { useEffect, useState } from 'react'
import { useAuthState } from '@/context/AuthContext'
import Preloader from "../Global/Preloader";
import events from "/public/data/events.json";


export default function EventComponent() {
    const { user } = useAuthState()
    const [loading, setLoading] = useState(false);

    const [selectedType, setSelectedType] = useState("Solo")

    const handleSoloClick = () => setSelectedType("Solo");
    const handleTeamClick = () => setSelectedType("Team");

    const [soloEvents, setSoloEvents] = useState([]);
    const [teamEvents, setTeamEvents] = useState([]);
    const [memberLength, setMemberLength] = useState(1);

    useEffect(() => {
        const source = axios.CancelToken.source();
        async function getSoloEvents() {
            try {
                setLoading(true)
                const soloEventRes = await axiosInstance.get("/user", {
                    headers: {
                        email: user.email,
                    },
                });

                if (soloEventRes.status === 200) {
                    const categories = soloEventRes.data.event.map((e) => e.category);
                    setSoloEvents(events.filter((obj) => categories.toString().includes(obj.id)));
                }
            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.error("Axios error: ", err.message);
                }
                else {
                    console.error(err);
                }
            }
            finally {
                setLoading(false)
            }
        }

        async function getTeamEvents() {
            try {
                const teamEventRes = await axiosInstance.get(`/team/${user.teamId}`);

                if (teamEventRes.status === 200) {
                    const categories = teamEventRes.data.event.map((e) => e.category);
                    setTeamEvents(events.filter((obj) => categories.toString().includes(obj.id)));
                    setMemberLength(teamEventRes.data.college_members.length);
                }
            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.error("Axios error: ", err.message);
                }
                else {
                    console.error(err);
                }
            }
        }

        getSoloEvents();
        getTeamEvents();

        return () => {
            source.cancel("Request Cancelled.");
        }
    }, [])


    const active = "bg-yellowish28 ";
    const inActive = "";

    return (
        <>
            <div className={`grid grid-cols-2 w-full `}>
                <div className={`col-span-1 border-yellowish border-[.5px] cursor-pointer ${selectedType === "Solo" ? active : inActive}`} onClick={handleSoloClick}>
                    <div className='flex flex-row justify-center items-center py-6 gap-x-3'>
                        <Image src={Images.solo} alt='solo' />
                        <span className='font-generalsans text-yellowish md:text-lg'>Solo Participation</span>
                    </div>
                </div>
                <div className={`col-span-1 border-yellowish border-[.5px] cursor-pointer ${selectedType === "Team" ? active : inActive}`} onClick={handleTeamClick}>
                    <div className='flex flex-row justify-center items-center py-6 gap-x-3'>
                        <Image src={Images.people} alt='people' />
                        <span className='font-generalsans text-yellowish md:text-lg'>Team Participation</span>
                    </div>
                </div>
            </div>

            {
                loading ? <Preloader width='5rem' height='5rem' color='red' /> :
                    soloEvents.length === 0 && teamEvents.length === 0
                        ? (
                            <div className='h-[60vh] w-full flex justify-center items-center py-20 md:py-0'>
                                <Image src={Images.launch} className='h-20 w-20' alt='launch' />
                                <p className=' text-2xl font-generalsans text-yellowish28'>Register to events</p>
                            </div>
                        ) : (
                            <div className='w-full'>
                                {selectedType === "Solo" ? (
                                    <>
                                        {soloEvents.map(event => (
                                            <div key={event.id} className=' grid grid-cols-3 border-b border-yellowish h-52 md:h-28 pb-4 md:pb-0'>
                                                <div className=" col-span-3  md:col-span-1 px-4 pt-6">
                                                    <p className='font-generalsans-semibold text-2xl md:text-3xl text-yellowish'>{event.name}</p>
                                                    <p className='text-yellowish sm:text-md'>{event.concept}</p>
                                                </div>
                                                <div className="col-span-3 md:col-span-1 flex justify-between items-center gap-6 px-4 md:px-0">
                                                    {/* {['UXplore', 'ClashDevs', 'Cynox', 'Eureka', 'TraceIt', 'Entangled', 'EdrenaLine', 'SymbIoT', 'Connectify', 'FreeForm'].includes(event.name) ? */}
                                                        {/* <div className="flex justify-center items-center gap-3">
                                                            <Image src={Images.money} className='h-8 w-8' alt='money' />
                                                            <p className='text-yellowish sm:text-xl'>₹50/member</p>
                                                        </div>
                                                        : */}
                                                        <div className="flex justify-center items-center gap-3">
                                                            <Image src={Images.celebration} className='h-8 w-8' alt='celebration' />
                                                            <p className='text-yellowish sm:text-md'>Free Participation</p>
                                                        </div>
                                                    {/* } */}
                                                    {/* {['UXplore', 'ClashDevs', 'Cynox', 'Eureka', 'TraceIt', 'Entangled', 'EdrenaLine', 'SymbIoT', 'Connectify', 'FreeForm', 'WordCraftique', 'Junkraft', 'XpreXive', 'Artistix'].includes(event.name) ?
                                                        <div className="text-grey text-sm">offline submission</div>
                                                        : null
                                                    } */}
                                                        <div className="bg-yellowish px-4 text-black font-generalsans rounded-2xl">
                                                            solo
                                                        </div>
                                                </div>
                                                <div className="col-span-3  md:col-span-1 flex justify-between items-center gap-6 px-6">
                                                    <p className='text-yellowish sm:text-md'>Entry ticket will be sent later</p>
                                                    <Link href={`/events/${event.id}`}>
                                                        <Image src={Images.arrowDiag} className='h-8 w-8' alt='arrowdiagram' />
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
                                                </div>
                                                <div className="col-span-3 md:col-span-1 flex justify-between items-center gap-6 px-4 md:px-0">
                                                    <div className="flex flex-col items-start">
                                                        <div className="flex justify-center items-center gap-3">
                                                            {['UXplore', 'ClashDevs', 'Cynox', 'Eureka', 'TraceIt', 'Entangled', 'EdrenaLine', 'SymbIoT', 'Connectify', 'FreeForm'].includes(event.name) ? 
                                                            <>
                                                                <Image src={Images.money} className='h-8 w-8' alt='money' />
                                                                <p className='text-yellowish sm:text-xl'>₹{memberLength * 50}</p>
                                                            </>
                                                            : <p className='text-yellowish sm:text-md'>Free Participation</p>
                                                            }
                                                        </div>
                                                        <div className="text-grey">offline submission</div>
                                                    </div>

                                                </div>
                                                <div className="col-span-3  md:col-span-1 flex justify-between items-center gap-6 px-6">
                                                    <p className='text-yellowish sm:text-md'>Entry ticket will be sent later</p>
                                                    <Link href={`/events/${event.id}`}>
                                                        <Image src={Images.arrowDiag} className='h-8 w-8' alt='arrowdiagram' />
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
