"use client";
import { useEffect, useState } from "react";
import WorkshopCard from "@/components/Workshop/WorkshopCard";
import workshops from "/public/data/workshop.json";



export default function WorkshopPage() {
	const [selectedButton, setSelectedButton] = useState("All");
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		const filtered = workshops.filter(
			(workshop) =>
				selectedButton === "All" || workshop.type === selectedButton,
		);
		setFilteredData(filtered);
	}, [selectedButton]);

	const btnClass =
		"px-5 py-3 md:w-[147px] border-x-[.5px] border-y-[.5px] border-yellowish font-generalsans text-yellowish";
	const selectedBtnClass =
		"px-5 py-3 md:w-[147px] border-x-[.5px] border-y-[.5px] border-yellowish font-generalsans text-yellowish bg-yellowish28";

	return (
		<>
			<div className="md:px-20 w-full">
				<div className="border-x-[.5px] border-yellowish">
					<div className="flex justify-center items-center pt-20">
						<div className="grid grid-cols-1">
							<div className="flex-row">
								<span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
									:
								</span>
								<span className="text-yellowish font-anton md:text-8xl px-2 mt-4 text-5xl">
									WORKSHOPS
								</span>
								<span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
									:
								</span>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center pt-8">
						<div className="grid grid-cols-1">
							<div className="flex-row justify-evenly items-center">
								<button
									onClick={() => setSelectedButton("All")}
									className={
										selectedButton === "All" ? selectedBtnClass : btnClass
									}
								>
									All
								</button>
								<button
									onClick={() => setSelectedButton("Software")}
									className={
										selectedButton === "Software" ? selectedBtnClass : btnClass
									}
								>
									Software
								</button>
								<button
									onClick={() => setSelectedButton("Hardware")}
									className={
										selectedButton === "Hardware" ? selectedBtnClass : btnClass
									}
								>
									Hardware
								</button>
							</div>
						</div>
					</div>
					<WorkshopCard filteredData={filteredData} />
				</div>
			</div>
		</>
	);
}
