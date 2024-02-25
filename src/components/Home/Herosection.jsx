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
            {/* <div className="w-full h-[834px] md:px-20 border-b text-yellowish"> */}
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
                {/* <div className="row-1 grid md:grid-cols-3 h-[205px] md:h-[242px]">
                    <div className="hidden md:block md:col-span-1 border-x-[0.5px] text-yellowish">
                        <ParticipateBadge />
                    </div>
                    <div className="col-span-3 md:col-span-1 border-[0.5px] md:border-r-[0.5px] text-yellowish">
                        <FloatingCapsules />
                    </div>
                    <div className="hidden md:block md:col-span-1 border-r-[0.5px] text-yellowish">
                        <PrizePoolBadge />
                    </div>
                </div>
                <div className="row-2 grid md:grid-cols-1 h-[350px]">
                    <div className=" md:col-span-1 border-[0.5px] text-yellowish">
                        <FocusImage />
                    </div>
                </div>
                <div className="row-3 grid md:grid-cols-3 h-[200px] md:h-[242px] border-b-[0.5px] border-yellowish">
                    <div className="hidden md:block md:col-span-1 border-x-[0.5px]  border-yellowish">
                        <EventDate />
                    </div>
                    <div className="col-span-3 md:col-span-1 border-[0.5px] md:border-r-[0.5px]  border-yellowish">
                        <TimerMockup />
                    </div>
                    <div className="hidden md:block md:col-span-1 border-r-[0.5px]  border-yellowish">
                        <MapDirection />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Herosection