import TeamCard from "./TeamCard";

const Card = ({ filteredData }) => {
	return (
		<>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
				{filteredData.map((member, index) => (
					<TeamCard key={index} member={member} />
				))}
			</div>
		</>
	);
};

export default Card;

// mapping of TeamCard component
