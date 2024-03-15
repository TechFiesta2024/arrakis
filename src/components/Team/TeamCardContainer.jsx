'use client'
import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import teamData from "/public/data/team.json";

export default function TeamCardContainer() {
	const [selectedButton, setSelectedButton] = useState("Coordinators");
	const [filteredData, setFilteredData] = useState([]);

	const filtered = teamData.filter((member) => member.department === selectedButton);
	useEffect(() => {
		setFilteredData(filtered);
	}, [selectedButton]);

	const btnClass = "px-5 py-3 md:w-[147px] border-x-[.5px] border-t-[.5px] border-yellowish font-generalsans text-yellowish";
	const selectedBtnClass = "px-5 py-3 md:w-[147px] border-x-[.5px] border-t-[.5px] border-yellowish font-generalsans text-yellowish bg-yellowish28";

	return (
		<>
			<div className="px-[1px] md:px-20">
				<div className="border-x-[.5px] border-yellowish">
					<div className="flex justify-center items-center pt-20">
						<div className="grid grid-cols-1">
							<div className="flex-row">
								<span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
									:
								</span>
								<span className="text-yellowish font-anton md:text-8xl px-2 mt-4 text-5xl">
									{selectedButton.toUpperCase()}
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
									onClick={() => setSelectedButton("Coordinators")}
									className={
										selectedButton === "Coordinators"
											? selectedBtnClass
											: btnClass
									}
								>
									Coordinators
								</button>
								<button
									onClick={() => setSelectedButton("Developers")}
									className={
										selectedButton === "Developers" ? selectedBtnClass : btnClass
									}
								>
									Developers
								</button>
							</div>
						</div>
					</div>
					<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
						{filteredData.map((member, index) => (
							<TeamCard key={index} member={member} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

