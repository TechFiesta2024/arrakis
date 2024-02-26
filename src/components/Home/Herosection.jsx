import EventDate from "./EventDate"
import FloatingCapsules from "./FloatingCapsules"
import FocusImage from "./FocusImage"
import MapDirection from "./MapDirection"
import ParticipateBadge from "./ParticipateBadge"
import PrizePoolBadge from "./PrizePoolBadge"
import TimerMockup from "./TimerMockup"


const Herosection = () => {
    return (
        <>
            <div className=" grid grid-cols-3 w-full md:px-20 border-b text-yellowish">
                <div className="hidden md:block md:col-span-1 border-x-[0.5px] text-yellowish">
                    <ParticipateBadge />
                </div>
                <div className="col-span-3 md:col-span-1 border-x-[0.5px] text-yellowish">
                    <FloatingCapsules canvasWidth={426} canvasHeight={244} />
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

export default Herosection