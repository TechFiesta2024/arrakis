import WorkshopInfo from "./WorkshopInfo";

export default function WorkshopCard({ filteredData }) {
	return (
		<>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
				{filteredData.map((workshop, index) => (
					<WorkshopInfo key={index} workshop={workshop} />
				))}
			</div>
		</>
	);
};
