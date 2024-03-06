import Image from "next/image";
import Link from "next/link";
import Images from "/public/assets";
import SmartShapes from "../Global/SmartShapes";

export default function EmptyState() {
	return (
		<>
			<div className="emptyState flex justify-center items-center h-[100vh] w-[100%] text-yellowish overflow-hidden pl-6">
				<div className="">
					<Image
						className="-translate-y-40"
						src={Images.iconRectangle}
						alt="Rectangle Icon"
					/>
				</div>
				<div className="flex flex-col items-center font-bold text-5xl md:text-6xl ">
					<div className="">Limited Seats,</div>
					<div className="ml-5">Limited Possibilies.</div>
					<Link href='/workshop' className="flex justify-center items-center h-12 md:h-16 bg-red text-xl w-80 gap-5 rounded-xl mt-20">
						<Image src={Images.iconScreenMirror} alt="Screen Mirror Icon" />
						<div className="">Register Workshops</div>
						<Image src={Images.iconArrowRight} alt="Arrow Right Icon" />
					</Link>
				</div>
				<div className="ml-10">
					<Image
						className="translate-y-20"
						src={Images.iconStar}
						alt="Star Icon"
					/>
				</div>
			</div>
			<SmartShapes />
		</>
	);
};
