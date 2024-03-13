import Image from "next/image";
import Images from "/public/assets";

export default function EventDate() {
	return (
		<>
			<div className="eventDate_container bg-grid-pattern h-[100%] w-[100%] flex justify-center items-center">
				<div className="badge_div bg-yellowish h-[33%] w-[54.11%] rounded md:rounded-md lg:rounded-xl flex justify-between items-center gap-4 px-5 transition-transform hover:scale-110">
					<div className="bg-red h-16 w-16 rounded-lg flex items-center justify-center">
						<Image
							src={Images.iconCalendar}
							className="h-8 w-8"
							alt="calendar"
						/>
					</div>
					<div className="text-black text-2xl flex-col h-[100%]">
						<span className="font-generalsans text-xs">When?</span>
						<p className="font-generalsans-semibold">April 8 - 9</p>
					</div>
				</div>
			</div>
		</>
	);
}
