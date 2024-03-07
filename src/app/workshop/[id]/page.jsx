"use client";
import Image from "next/image";
import Link from "next/link";
import workshops from "/public/data/workshop.json";
import { useEffect, useState } from "react";
import Images from "/public/assets";
import Cookies from "js-cookie";
import axiosInstance from "@/utils/axiosInstance";

export default function WorkshopPageById({ params }) {
	const [workshop, setWorkshop] = useState({ coordinator: [] });

	useEffect(() => {
		const selectedWorkshop = workshops.find(
			(workshop) => "" + workshop.id === params.id,
		);
		setWorkshop(selectedWorkshop);
	}, []);

	async function register() {
		const userid = Cookies.get("studentId");

		try {
			const { data } = await axiosInstance.post(
				`/workshop/join/${workshop.id}`,
				{},
				{
					headers: {
						userid,
					},
				},
			);
			console.log(data);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<>
			<div className="md:px-20">
				<div className="border-x-[.5px] border-yellowish">
					<div className="pl-4 md:pl-14 py-4 md:py-6">
						<Link
							href="/workshop"
							className="inline-flex items-center text-lg gap-3"
						>
							<Image src={Images.arrowLeft} alt="arrow_left" />
							<h1 className="text-yellowish font-generalsans font-medium">
								{" "}
								Back to Workshops
							</h1>
						</Link>
					</div>
					<div className="border-y-[.5px] border-yellowish">
						<img
							src={workshop.image_url}
							alt="workshop"
							className="object-cover md:h-96 w-full"
						/>
					</div>
					<div>
						<div className=" pl-4 md:pl-14 py-7 md:py-10">
							<h1 className="text-yellowish text-3xl md:text-6xl font-generalsans font-bold">
								{workshop.title}
							</h1>
						</div>
					</div>
					<div className="border-y-[.5px]  border-yellowish ">
						<div className="grid grid-cols-2 md:grid-cols-3 ">
							<div className="col-span-1 md:col-span-1 flex justify-center items-center border-r-[.5px] border-yellowish">
								<div className="inline-flex gap-0 md:gap-2 py-4">
									<div className="flex justify-center items-center">
										<Image
											src={Images.calendar}
											alt="calendar"
											className="h-10"
										/>
									</div>
									<div>
										<h1 className="text-yellowish text-sm md:text-xl font-generalsans font-semibold">
											Date &amp; Time
										</h1>
										<h1 className="text-yellowish text-xs md:text-base font-generalsans font-normal">
											{`${workshop.date} | ${workshop.time}`}
										</h1>
									</div>
								</div>
							</div>
							<div className="col-span-1 md:col-span-1 flex justify-center items-center border-r-[.5px] border-yellowish">
								<div className="inline-flex gap-0 md:gap-2 py-4">
									<div className="flex justify-center items-center">
										<Image src={Images.map} alt="map" className="h-10" />
									</div>
									<div>
										<h1 className="text-yellowish text-sm md:text-xl font-generalsans font-semibold">
											Mode
										</h1>
										<h1 className="text-yellowish text-xs md:text-base font-generalsans font-normal">
											{`${workshop.mode} | ${workshop.destination}`}
										</h1>
									</div>
								</div>
							</div>
							<button
								className="col-span-2 md:col-span-1 flex justify-center items-center bg-red"
								onClick={register}
							>
								<div className="inline-flex gap-2 py-4">
									<div className="flex justify-center items-center">
										<Image
											src={Images.register}
											alt="register"
											className="h-10"
										/>
									</div>
									<div className="flex justify-center items-center">
										<h1 className="text-yellowish md:text-xl font-generalsans font-semibold">
											Register
										</h1>
									</div>
								</div>
							</button>
						</div>
					</div>
					<div>
						<div className="pl-4 md:pl-14 pt-7 md:pt-8">
							<h1 className="text-yellowish font-generalsans font-semibold text-3xl md:text-5xl">
								Description
							</h1>
						</div>
						<div className="pl-4 md:pl-14 py-8">
							<h1 className="text-yellowish font-generalsans font-normal text-xl md:text-2xl">
								{workshop.body}
							</h1>
						</div>
					</div>
					<div className="pl-4 md:pl-14 border-y-[.5px] border-yellowish">
						<h1 className="text-yellowish font-generalsans font-semibold text-3xl md:text-5xl py-10">
							Coordinators
						</h1>
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1">
						{workshop.coordinator.map((coordinator, index) => (
							<Link href={coordinator.contact} key={index}>
								<div className="md:col-span-1 col-span-1 border-b-[.5px] md:border-r-[.5px] border-yellowish">
									<div className="flex pl-4 md:pl-0 justify-start md:justify-center items-center gap-4 py-6 md:py-10 ">
										<div>
											<img
												src={coordinator.image_url}
												alt="coordinator"
												className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover"
											/>
										</div>
										<div>
											<div className="inline-flex gap-16 md:gap-20">
												<h1 className="text-yellowish font-generalsans font-semibold text-xl md:text-3xl">
													{coordinator.name}
												</h1>
												<Image
													src={Images.arrowRightYellowish}
													alt="arrow_yellow"
													className="text-yellowish"
												/>
											</div>
											<h1 className="text-yellowish font-generalsans font-normal text-sm md:text-base pt-2">
												{coordinator.designation}
											</h1>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
