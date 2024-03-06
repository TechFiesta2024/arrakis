import Image from "next/image";
import React from "react";
import Images from "/public/assets";
import Link from "next/link";

export const DataState = ({ workshopArray }) => {
	const softwareWorkshops = workshopArray.filter(
		(workshop) => workshop.type === "software",
	);
	const hardwareWorkshops = workshopArray.filter(
		(workshop) => workshop.type === "hardware",
	);
	return (
		<>
			<div className="dataState flex justify-start items-start flex-col w-full">
				<div className="flex justify-start items-center flex-col w-full h-72">
					<div className="flex items-center justify-evenly text-xs lg:text-sm w-full md:w-1/3 h-20 border-b-[0.5px] border-yellowish top-20">
						<Link
							href="/dashboard"
							className="border-x-[0.5px] h-full w-1/3 flex justify-center items-center"
						>
							Your Workshops
						</Link>
						<Link
							href="/dashboard"
							className="border-r-[0.5px] h-full w-1/3 flex justify-center items-center"
						>
							Your Events
						</Link>
						<Link
							href="/dashboard"
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
							<div className="flex items-center h-20 w-full justify-center text-2xl gap-3 border-y-[0.5px] border-yellowish">
								<Image
									src={Images.iconMonitorMobile}
									alt="Monitor Mobile Icon"
								></Image>
								Software Workshops
							</div>
							{softwareWorkshops.map((data, index) => (
								<div
									key={index}
									className="flex w-full h-32 md:h-40 border-r-[0.5px] border-yellowish border-b-[0.5px] "
								>
									<div className="flex flex-col justify-evenly items-start w-5/6 p-2 md:p-5">
										<div className="font-semibold text-2xl sm:text-3xl md:text-4xl">
											{data.workshopName}
										</div>
										<div className="flex flex-wrap gap-2 md:gap-5 text-yellowish text-xs sm:text-sm md:text-base">
											<div className="flex  items-center gap-1 md:gap-3">
												<Image
													className="w-4 sm:w-6 md:w-8"
													src={Images.iconCalendar}
													alt="Link2 Icon"
												></Image>
												{data.date}
											</div>
											<div className="flex items-center gap-1 md:gap-3">
												<Image
													className="w-4 sm:w-6 md:w-8"
													src={Images.iconClock}
													alt="Link2 Icon"
												></Image>
												{data.time}
											</div>
											<div className="flex items-center gap-1 md:gap-3">
												<Image
													className="w-4 sm:w-6 md:w-8"
													src={Images.iconCalendar}
													alt="Link2 Icon"
												></Image>
												{data.isOnline ? "Online" : "Offline"}
											</div>
										</div>
										<div className="italic text-xs md:text-sm">
											*view details from{" "}
											<span className="underline">
												<Link href="/">workshop page</Link>
											</span>
										</div>
									</div>
									<Link
										href={data.link}
										className="flex justify-center items-center w-24 sm:w-1/6 lg:w-40 bg-red border-l-[0.5px] border-yellowish"
									>
										<Image src={Images.iconLink2} alt="Link2 Icon"></Image>
									</Link>
								</div>
							))}
						</div>
						<div className="hardware__side flex items-center flex-col w-full lg:w-1/2 justify-center">
							<div className="hardware__heading flex items-center h-20 w-full justify-center text-2xl gap-3 border-y-[0.5px] border-l-[0.5px] border-yellowish">
								<Image
									src={Images.iconMonitorMobile}
									alt="Monitor Mobile Icon"
								></Image>
								Hardware Workshops
							</div>
							{hardwareWorkshops.map((data, index) => (
								<div
									key={index}
									className="flex w-full h-32 md:h-40 border-r-[0.5px] border-yellowish border-b-[0.5px] "
								>
									<div className="flex flex-col justify-evenly items-start w-5/6 p-2 md:p-5">
										<div className="font-semibold text-2xl sm:text-3xl md:text-4xl">
											{data.workshopName}
										</div>
										<div className="flex flex-wrap gap-2 md:gap-5 text-yellowish text-xs sm:text-sm md:text-base">
											<div className="flex  items-center gap-1 md:gap-3">
												<Image
													className="w-4 sm:w-6 md:w-8"
													src={Images.iconCalendar}
													alt="Link2 Icon"
												></Image>
												{data.date}
											</div>
											<div className="flex items-center gap-1 md:gap-3">
												<Image
													className="w-4 sm:w-6 md:w-8"
													src={Images.iconClock}
													alt="Link2 Icon"
												></Image>
												{data.time}
											</div>
											<div className="flex items-center gap-1 md:gap-3">
												<Image
													className="w-4 sm:w-6 md:w-8"
													src={Images.iconCalendar}
													alt="Link2 Icon"
												></Image>
												{data.isOnline}
											</div>
										</div>
										<div className="italic text-xs md:text-sm">
											*view details from{" "}
											<span className="underline">
												<Link href="/">workshop page</Link>
											</span>
										</div>
									</div>
									<Link
										href={data.link}
										className="flex justify-center items-center w-24 sm:w-1/6 lg:w-40 bg-red border-l-[0.5px] border-yellowish"
									>
										<Image src={Images.iconLink2} alt="Link2 Icon"></Image>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
