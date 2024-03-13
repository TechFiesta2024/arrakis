"use client";

import Card from "@/components/HelpDesk/Card";
import helpdeskData from "/public/data/helpdesk.json";
import Images from "/public/assets";
import Image from "next/image";
import SmartShapes from "@/components/Global/SmartShapes";

export default function HelpDeskPage() {
	const smartshape__container = "h-[100%] w-[100%] overflow-hidden";

	return (
		<>
			<div className="md:px-20">
				<div className="border-x-[.5px] border-yellowish">
					<div
						className={`flex flex-col justify-center items-center py-20 ${smartshape__container}`}
					>
						<div className="grid grid-cols-1">
							<div className="flex-row">
								<span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
									:
								</span>
								<span className="text-yellowish font-anton md:text-8xl px-2 mt-4 text-5xl">
									HELP DESK
								</span>
								<span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
									:
								</span>
							</div>
						</div>

						{/* ------------------------- Smart Shapes ----------------------------- */}

						<SmartShapes />
					</div>
					<div className="flex justify-center items-center text-yellowish border-t-[.5px]">
						<Image
							className="object-cover"
							src={Images.iconEmail}
							alt="email_logo"
							width={30}
							height={30}
						/>
						<a
							href="mailto:contact@aotfiesta24.tech"
							className="py-10 pl-5 font-generalsans lg:text-2xl"
						>
							contact@aotfiesta24.tech
						</a>
					</div>

					{/* ------------------------- Helpdesk Team Cards ----------------------------- */}

					<Card filteredData={helpdeskData} />
				</div>
			</div>
		</>
	);
}
