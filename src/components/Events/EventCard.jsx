import React from "react";
import EventInfo from "./EventInfo";

const EventCard = ({ filteredData }) => {
	return (
		<>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
				{filteredData.map((event, index) => (
					<EventInfo key={index} event={event} />
				))}
			</div>
		</>
	);
};

export default EventCard;
