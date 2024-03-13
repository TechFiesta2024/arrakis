import Link from "next/link";

export default function MapDirection() {
	const academyAddress =
		"Grand Trunk Rd, Adisaptagram, Krishnapur Chandanpur, West Bengal 712502";

	return (
		<>
			<Link
				href={`https://maps.google.com?q=${encodeURIComponent(academyAddress)}`}
				target="_blank"
				rel="noopener noreferrer"
				className="participate-badge_container bg-map h-[100%] w-[100%] flex justify-end items-end object-cover bg-cover pb-6 pr-6"
			>
				<div className="bg-red w-auto px-2 py-2 rounded-md hover:scale-105 transition-transform ease-in-out delay-150">
					<p className=" font-generalsans text-sm text-center">
						Academy of Technology
					</p>
				</div>
			</Link>
		</>
	);
};
