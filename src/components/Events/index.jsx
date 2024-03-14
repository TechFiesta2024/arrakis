import dynamic from "next/dynamic";
import events from "/public/data/events.json";
import Image from "next/image";
import Images from "../../../public/assets";

const EventWorkshopPage = dynamic(() => import("../Global/CardContainer"));

export default function Events() {
	const eventType = new Set(events.map((event) => event.type));

	return (
		<div className="px-[1px] md:px-20 w-full">
			<div className="border-x-[.5px] border-yellowish">
				<div className="flex justify-center items-center pt-20">
					<div className="grid grid-cols-1">
						<div className="flex-row">
							<span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
								:
							</span>
							<span className="text-yellowish font-anton md:text-8xl px-2 mt-4 text-5xl">
								EVENTS
							</span>
							<span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
								:
							</span>
						</div>
					</div>
				</div>

				<EventWorkshopPage data={events} types={Array.from(eventType)} />
				<div className="fixed bottom-6 right-6 md:right-12 z-30">
					<Link href='/' className="flex items-center justify-center w-16 h-16 bg-yellowish text-white rounded-full border-[1px] border-black">
						<Image src={Images.save} alt="save" className="h-6 w-6" />
					</Link>
				</div>
			</div>
		</div>
	);
}
