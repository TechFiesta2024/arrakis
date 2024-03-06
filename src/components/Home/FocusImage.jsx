import Link from "next/link";
import Image from "next/image";
import Images from "/public/assets";
import SmartShapes from "../Global/SmartShapes.jsx";


export default function FocusImage() {
	const flexStylesStart = "flex justify-start items-center";
	const flexStylesCenter = "flex justify-center items-center";


	return (
		<>
			<div
				className={`participate-badge_container h-[100%] w-[100%] pt-6 pb-8 flex-col ${flexStylesCenter} md:${flexStylesStart} overflow-hidden`}
			>
				{/* -------------------------Mid Text----------------------------- */}
				<div className="relative">
					<p className="techfiesta_text font-anton text-[80px] md:text-[180px] text-yellowish">
						TECHFIESTA
					</p>
					<div className="humatronics_tags font-anton text-xl md:text-4xl bg-red text-black w-fit px-1 rounded border absolute bottom-6 md:bottom-14 right-0">
						& HUMATRONICS
					</div>
				</div>
				

				<Link
					href="/events"
					className={`${flexStylesCenter} bg-red px-10 py-1 md:mt-[-30px] z-20 rounded-[8px] gap-x-2 transition-transform hover:scale-x-110`}
				>
					<p>Events</p>
					<Image src={Images.arrowRightYellowish} alt="arrow-right" />
				</Link>

				{/* ------------------------- Smart Shapes ----------------------------- */}
				<SmartShapes />
			</div>
		</>
	);
}
