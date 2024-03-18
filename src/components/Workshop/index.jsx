import dynamic from "next/dynamic";
import workshops from "/public/data/workshop.json";
import Preloader from "../Global/Preloader";

const WorkshopPage = dynamic(() => import("../Global/CardContainer"), {
	loading: () => <Preloader width="8rem" height="8rem" color="red" />,
});

export default function Workshop() {
	const workshopType = Array.from(new Set(workshops.map((workshop) => workshop.type)))

	return (
		<div className="px-[1px] md:px-20 w-full">
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

				<WorkshopPage data={workshops} types={workshopType} />

			</div>
		</div>
	);
}
