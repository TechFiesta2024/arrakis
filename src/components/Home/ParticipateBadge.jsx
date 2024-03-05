const ParticipateBadge = () => {
	// should be replaced with student images
	const imageUrls = [
		"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	];

	return (
		<>
			<div className="participate-badge_container bg-grid-pattern h-[100%] w-[100%] flex justify-center items-center">
				<div className="badge_div bg-yellowish h-[33%] w-[65.26%] rounded md:rounded-md lg:rounded-xl flex justify-center items-center gap-6 transition-transform hover:scale-110">
					<div className=" text-black font-generalsans-semibold text-lg">
						Participate
					</div>
					<div className="flex -space-x-2 overflow-hidden">
						{imageUrls.map((url, index) => (
							<img
								key={index}
								className="inline-block h-8 w-8 rounded-full ring-2 ring-white border text-red"
								src={url}
								alt="dps"
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ParticipateBadge;
