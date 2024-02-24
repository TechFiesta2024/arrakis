import EventDate from "./EventDate"
import FloatingCapsules from "./FloatingCapsules"
import FocusImage from "./FocusImage"
import ParticipateBadge from "./ParticipateBadge"
import PrizePoolBadge from "./PrizePoolBadge"
import TimerMockup from "./TimerMockup"


const Herosection = () => {
    return (
        <>
            <div className="w-full h-screen px-20 ">
                <div className="row-1 grid md:grid-cols-3 h-[30%]">
                    <div className="col-span-1 border-x-[0.5px] text-yellowish">
                        <ParticipateBadge />
                    </div>
                    <div className="col-span-1 border-r-[0.5px] text-yellowish">
                        <FloatingCapsules />
                    </div>
                    <div className="col-span-1 border-r-[0.5px] text-yellowish">
                        <PrizePoolBadge />
                    </div>
                </div>
                <div className="row-2 grid md:grid-cols-1 h-[40%]">
                    <div className="col-span-1 border text-yellowish">
                        <FocusImage />
                    </div>
                </div>
                <div className="row-3 grid md:grid-cols-3 h-[30%] border-b-[0.5px] border-yellowish">
                    <div className="col-span-1 border-x-[0.5px]  border-yellowish">
                        <EventDate />
                    </div>
                    <div className="col-span-1 border-r-[0.5px]  border-yellowish">
                        <TimerMockup />
                    </div>
                    <div className="col-span-1 border-r-[0.5px]  border-yellowish">
                        <h1>prizepool</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection