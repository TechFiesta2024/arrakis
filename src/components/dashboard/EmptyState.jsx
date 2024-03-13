import Image from "next/image";
import Link from "next/link";
import Images from "/public/assets";
import SmartShapes from "../Global/SmartShapes";

export default function EmptyState() {
	return (
		<>
			<div className="flex justify-center items-center h-screen overflow-hidden md:w-full">
				<div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-10 absolute z-20">
					<div className="text-center">
						<p className="font-anton text-4xl md:text-6xl text-yellowish">
							Limited Seats,
						</p>
						<p className="font-anton text-4xl md:text-6xl text-yellowish pt-2 md:pt-4">
							Limitless possibilities.
						</p>
					</div>
					<Link
						href="/workshop"
						className="bg-red flex justify-center items-center gap-3 px-8 md:px-10 py-4 md:py-3 rounded-xl transition-transform hover:scale-x-110"
					>
						<Image src={Images.iconScreenMirror} />
						<p>Register Workshops</p>
						<Image src={Images.iconArrowRight} alt="Arrow Right Icon" />
					</Link>
				</div>
				<SmartShapes />
			</div>
			{/* <SmartShapes /> */}
		</>
	);
}
