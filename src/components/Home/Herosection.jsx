import dynamic from "next/dynamic"
import EventDate from "./EventDate"
import MapDirection from "./MapDirection"
import ParticipateBadge from "./ParticipateBadge"
import PrizePoolBadge from "./PrizePoolBadge"
import Preloader from "../Global/Preloader"

// Client components
const FloatingCapsules = dynamic(() => import('./FloatingCapsules'))
const FocusImage = dynamic(() => import('./FocusImage'))
const TimerMockup = dynamic(() => import('./TimerMockup'), { ssr: false, loading: () => <Preloader bgHeight='15.1rem' width='3rem' height='3rem' color='red' /> })
const ProfileUpdateReminder = dynamic(() => import('../Global/ProfileUpdateReminder'))


export default function Herosection() {
    return (
        <>
            <div className="w-full h-[20%] md:px-20 absolute top-50 z-30">
                <ProfileUpdateReminder />
            </div>
            <div className=" grid grid-cols-3 w-full md:px-20 border-b text-yellowish">

                <div className="hidden md:block md:col-span-1 border-x-[0.5px] text-yellowish">
                    <ParticipateBadge />
                </div>
                <div className="col-span-3 md:col-span-1 border-x-[0.5px] text-yellowish">
                    <FloatingCapsules />
                </div>
                <div className="hidden md:block md:col-span-1 border-x-[0.5px] text-yellowish">
                    <PrizePoolBadge />
                </div>
                <div className="col-span-3 bg-black border-[0.5px] text-yellowish">
                    <FocusImage />
                </div>
                <div className="hidden md:block md:col-span-1 border-x-[0.5px] text-yellowish">
                    <EventDate />
                </div>
                <div className="col-span-3 md:col-span-1 border-x-[0.5px] text-yellowish">
                    <TimerMockup />
                </div>
                <div className="hidden md:block md:col-span-1 border-x-[0.5px] text-yellowish">
                    <MapDirection />
                </div>
            </div>
        </>
    )
}