import dynamic from "next/dynamic";
import { useState } from "react";
import SmartShapes from "../Global/SmartShapes";
import WorkshopComponent from "./WorkshopComponent";
import EventComponent from "./EventComponent";
import TeamComponent from "./TeamComponent";


const ProfileUpdateReminder = dynamic(() => import("../Global/ProfileUpdateReminder"));

export default function Dashboard() {
	const [selectedButton, setSelectedButton] = useState("Workshop");
	const [showWorkshop, setShowWorkshop] = useState(true);
	const [showEvent, setShowEvent] = useState(false);
	const [showTeam, setShowTeam] = useState(false);

	const handleWorkshopClick = () => {
		setShowWorkshop(true);
		setShowEvent(false);
		setShowTeam(false);
		setSelectedButton("Workshop");
	};

	const handleEventClick = () => {
		setShowWorkshop(false);
		setShowEvent(true);
		setShowTeam(false);
		setSelectedButton("Event");
	};

	const handleTeamClick = () => {
		setShowWorkshop(false);
		setShowEvent(false);
		setShowTeam(true);
		setSelectedButton("Team");
	};

	const active = "bg-yellowish28 border-x-[0.5px] h-full w-1/3 flex justify-center items-center";
	const inActive = "border-x-[0.5px] h-full w-1/3 flex justify-center items-center";

	return (
		<>
			<ProfileUpdateReminder />

			<div className="flex justify-center items-start min-h-screen px-[1px] md:mx-20 border-x-[0.5px] border-yellowish text-white">
				<div className="dataState flex justify-start items-start flex-col w-full">
					<div className="flex justify-start items-center flex-col w-full h-72 overflow-hidden">
						<div className="flex items-center justify-evenly text-xs lg:text-sm w-full md:w-1/3 h-20 border-b-[0.5px] border-yellowish top-20">
							<button
								onClick={handleWorkshopClick}
								className={selectedButton === "Workshop" ? active : inActive}
							>
								Workshop
							</button>
							<button
								onClick={handleEventClick}
								className={`${selectedButton === "Event" ? active : inActive} text-yellowish `}
							>
								Event
							</button>
							<button
								onClick={handleTeamClick}
								className={`${selectedButton === "Team" ? active : inActive} text-yellowish `}
							>
								Team
							</button>
						</div>
						<div className="flex justify-center items-center text-center font-anton font-bold text-4xl md:text-5xl mt-20 text-yellowish">
							{selectedButton.toUpperCase()} BOOKINGS
						</div>
						<SmartShapes />
					</div>

					{showWorkshop && (
						<WorkshopComponent />
					)}

					{showEvent && (
						<EventComponent />
					)}

					{showTeam && (
						<TeamComponent />
					)}
				</div>
			</div>
		</>
	);
}
