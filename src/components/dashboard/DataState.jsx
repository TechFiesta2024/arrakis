import Image from "next/image";
import Link from "next/link";
import Images from "/public/assets";

export default function DataState({ workshopArray }) {
	console.log(workshopArray[0].workshopName);
	const softwareWorkshops = workshopArray.filter(
		(workshop) => workshop.type === "Software",
	);
	const hardwareWorkshops = workshopArray.filter(
		(workshop) => workshop.type === "Hardware",
	);

	return (
		<>
			<div className="dataState flex justify-start items-start flex-col w-full">
				<div className="flex justify-start items-center flex-col w-full h-72">
					<div className="flex items-center justify-evenly text-xs lg:text-sm w-full md:w-1/3 h-20 border-b-[0.5px] border-yellowish top-20">
						<Link
							href="/"
							className="border-x-[0.5px] h-full w-1/3 flex justify-center items-center"
						>
							Your Workshops
						</Link>
						<Link
							href="/"
							className="border-r-[0.5px] h-full w-1/3 flex justify-center items-center"
						>
							Your Events
						</Link>
						<Link
							href="/"
							className="border-r-[0.5px] h-full w-1/3 flex justify-center items-center"
						>
							Your Teams
						</Link>
					</div>
					<div className="flex justify-center items-center text-center font-anton font-bold text-4xl md:text-5xl mt-20 text-yellowish">
						WORKSHOP BOOKINGS
					</div>
				</div>
				<div className="w-full">
					<div className="flex flex-col md:flex-row flex-wrap w-full justify-start items-start">
						<div className="software__side flex items-center flex-col w-full lg:w-1/2 justify-center ">
							<div className="flex items-center h-20 w-full justify-center text-2xl gap-3 border-y-[0.5px] border-yellowish cursor-pointer">
								<Image
									src={Images.iconMonitorMobile}
									alt="Monitor Mobile Icon"
								/>
								<span className="text-yellowish">Software Workshops</span>
							</div>
							{softwareWorkshops.map((data, index) => (
								<div
									key={index}
									className="flex w-full h-32 md:h-40 border-r-[0.5px] border-yellowish border-b-[0.5px] "
								>
									<div className="flex flex-col justify-evenly items-start w-5/6 p-2 md:p-5">
										<div className="font-generalsans-semibold text-2xl md:text-3xl text-yellowish">
											{data.workshopName}
										</div>
										<div className="flex flex-wrap gap-2 md:gap-3 text-yellowish text-xs sm:text-sm md:text-base pt-2 md:pt-0">
											<div className="flex items-center gap-1 md:gap-1">
												<Image
													className="w-5"
													src={Images.iconCalendar}
													alt="Link2 Icon"
												></Image>
												<span className="text-yellowish sm:text-xs">{data.date}</span>
											</div>
											<div className="flex items-center gap-1 md:gap-1">
												<Image
													className="w-5"
													src={Images.iconClock}
													alt="Link2 Icon"
												></Image>
												<span className="text-yellowish sm:text-xs">{data.time}</span>
											</div>
											<div className="flex items-center gap-1 md:gap-1">
												<Image
													className="w-5"
													src={Images.iconGlobal}
													alt="Link2 Icon"
												></Image>
												<span className="text-yellowish sm:text-xs">{data.mode}</span>
											</div>
										</div>
										<div className="italic text-xs md:text-sm pt-2 md:pt-0">
											<span className="text-yellowish">*view details from{" "}</span>
											<span className="underline">
												<Link href="/workshop" className="text-yellowish text-xs">workshop page</Link>
											</span>
										</div>
									</div>
									<Link
										href={data.link}
										className="flex justify-center items-center w-24 sm:w-1/6 lg:w-40 bg-red border-l-[0.5px] border-yellowish"
									>
										<Image src={Images.iconLink2} className="w-10 lg:w-16" alt="Link2 Icon"></Image>
									</Link>
								</div>
							))}
						</div>
						<div className="hardware__side flex items-center flex-col w-full lg:w-1/2 justify-center">
							<div className="hardware__heading flex items-center h-20 w-full justify-center text-2xl gap-3 border-y-[0.5px] border-l-[0.5px] border-yellowish cursor-pointer">
								<Image
									src={Images.iconCpu}
									alt="Monitor Mobile Icon"
								></Image>
								<span className="text-yellowish">Hardware Workshops</span>
							</div>
							{hardwareWorkshops.map((data, index) => (
								<div
									key={index}
									className="flex w-full h-32 md:h-40 border-r-[0.5px] border-yellowish border-b-[0.5px] "
								>
									<div className="flex flex-col justify-evenly items-start w-5/6 p-2 md:p-5">
										<div className="font-generalsans-semibold text-2xl md:text-3xl text-yellowish">
											{data.workshopName}
										</div>
										<div className="flex flex-wrap gap-2 md:gap-5 text-yellowish text-xs sm:text-sm md:text-base pt-2 md:pt-0">
											<div className="flex  items-center gap-1 md:gap-1">
												<Image
													className="w-5"
													src={Images.iconCalendar}
													alt="Link2 Icon"
												></Image>
												<span className="text-yellowish sm:text-xs">{data.date}</span>
											</div>
											<div className="flex items-center gap-1 md:gap-1">
												<Image
													className="w-5"
													src={Images.iconClock}
													alt="Link2 Icon"
												></Image>
												<span className="text-yellowish sm:text-xs">{data.time}</span>
											</div>
											<div className="flex items-center gap-1 md:gap-1">
												<Image
													className="w-5"
													src={Images.map}
													alt="Link2 Icon"
												></Image>
												<span className="text-yellowish sm:text-xs">{data.mode}</span>
											</div>
										</div>
										<div className="italic font-generalsans text-xs md:text-sm pt-2 md:pt-0">
											<span className="text-yellowish">*view details from{" "}</span>
											<span className="underline">
												<Link href="/workshop" className="text-yellowish">workshop page</Link>
											</span>
										</div>
									</div>
									<Link
										href={data.link}
										className="flex justify-center items-center w-24 sm:w-1/6 lg:w-40 bg-red border-l-[0.5px] border-yellowish"
									>
										<Image src={Images.iconLink2} className="w-10 lg:w-16" alt="Link2 Icon"></Image>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
