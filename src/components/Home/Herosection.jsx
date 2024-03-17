import dynamic from "next/dynamic";
import EventDate from "./EventDate";
import MapDirection from "./MapDirection";
import ParticipateBadge from "./ParticipateBadge";
import PrizePoolBadge from "./PrizePoolBadge";
import Preloader from "../Global/Preloader";
import FocusImage from "./FocusImage";

// Client components
const FloatingCapsules = dynamic(() => import("./FloatingCapsules"));
const ProfileUpdateReminder = dynamic(
	() => import("../Global/ProfileUpdateReminder"),
);
const TimerMockup = dynamic(() => import("./TimerMockup"), {
	ssr: false,
	loading: () => (
		<Preloader bgHeight="15.1rem" width="3rem" height="3rem" color="red" />
	),
});

export default function Herosection() {
	return (
		<>
			{/* Show position conditionally */}
			<ProfileUpdateReminder />

			<div className=" grid grid-cols-3 w-full px-[1px] md:px-20 border-b border-yellowish">
				<div className="hidden md:block md:col-span-1 border-x-[0.5px] text-yellowish">
					<ParticipateBadge />
				</div>
				<div className="col-span-3 md:col-span-1 sm:border-none border-x-[0.5px] text-yellowish">
					<FloatingCapsules />
				</div>
				<div className="hidden md:block md:col-span-1 border-x-[0.5px] text-yellowish">
					<PrizePoolBadge />
				</div>
				<div className="col-span-3 border-b-[0.5px] border-x-[0.5px] border-y-[0.5px] text-yellowish">
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
	);
}
