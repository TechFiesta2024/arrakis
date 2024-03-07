import Image from "next/image";
import Marquee from "react-fast-marquee";
import Images from "/public/assets";



const MarqueeData = ["Workshop", "Development", "IOT", "Circuit Challenges", "Product Pitch", "UX Design", "Swags", "Networking", "Skill Show"]


export default function MarqueeComponent(){
	const flexStylesStart = "flex justify-start items-center";
	const flexStylesCenter = "flex justify-center items-center";

	return (
		<>
			<Marquee>
				<div className="slide_container border-b-[0.5px] text-yellowish overflow-hidden ">
					<div className={`slide_section w-auto px-4 py-8 my-16 md:my-20 text-yellowish border-[0.5px] bg-yellowish slide-section`}>
						<div className={`slider_wrapper ${flexStylesCenter} gap-6 `}>
							{MarqueeData.map((data, idx) => {
								return (
									<div
										key={idx}
										className={`slider_item ${flexStylesCenter} gap-6`}
									>
										<p className="flex-grow z-50 text-xl md:text-2xl font-generalsans text-black whitespace-nowrap overflow-hidden">
											{data}
										</p>
										<Image
											src={Images.Diamond2}
											className="h-6 w-6"
											alt="smart-shape"
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</Marquee>
		</>
	);
};
