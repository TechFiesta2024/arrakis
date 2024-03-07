import Image from "next/image";
import Link from "next/link";
import Images from "/public/assets";

export default function WorkshopInfo({ workshop }) {
	const { id, workshopName, description, image_url } = workshop;

	return (
		<>
			<div className="border-t-[.5px] border-b-[.5px] border-r-[.5px] border-yellowish">
				<div className="flex justify-center border-b-[.5px] border-yellowish overflow-hidden ">
					<img
						className="object-cover"
						src={image_url}
						alt="cover_img"
					/>
				</div>
				<div className="">
					<div className="px-6 lg:pt-6 pt-4 h-3/4">
						<p className="text-yellowish font-generalsans font-bold text-2xl">
							{workshopName}
						</p>
						<p className="text-yellowish font-generalsans text-sm lg:pt-3 py-1">
							{description}
						</p>
					</div>
					<div className="py-4"></div>
					<div className="h-1/4 grid grid-cols-1 bg-yellowish border-b-[.5px] border-yellowish">
						<Link
							href={`/workshop/${id}`}
							className="border-r-[.5px] border-black flex justify-center items-center gap-2 py-4"
						>
							<h1 className="text-black text-[14px] font-generalsans font-bold ">
								VIEW DETAILS & REGISTER
							</h1>
							<Image src={Images.arrowRight} alt="arrow_right" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
