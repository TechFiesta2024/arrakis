import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Images from "/public/assets";
import { rgbDataURL } from "@/utils/blurryImage";

export default function EventWorkshopCard({ data }) {
	const urlPathName = usePathname();

	const { id, name, description, image_url, teamSize, relatedEvents } = data;

	const flexStylesBetween = "flex justify-between items-center";
	const flexStylesCenter = "flex justify-center items-center";

	const checkRoute = urlPathName === "/events";

	return (
		<>
			<div className="border-t-[.5px] border-b-[.5px] border-r-[.5px] border-yellowish">
				<div className="flex justify-center border-b-[.5px] border-yellowish overflow-hidden ">
					<Image
						className="object-cover h-[10rem]"
						src={image_url}
						alt="cover_img"
						width={800}
						height={800}
						placeholder="blur"
						blurDataURL={rgbDataURL(128, 128, 128)}
					/>
				</div>
				<div className="">
					<div className="px-6 lg:pt-6 pt-4">
						<p className="text-yellowish font-generalsans font-bold text-2xl">
							{name}
						</p>
						<div className="description-container h-16 overflow-hidden">
							<p className=" text-grey font-generalsans text-sm lg:pt-3 py-1">
								{description}
							</p>
						</div>
					</div>
					{checkRoute ? (
						<div className="py-8 px-6">
							<div
								className={`badge w-[40%] h-10 py-4 pr-2 pl-4 ${flexStylesBetween} bg-yellowishopc rounded-full`}
							>
								{
									teamSize === "" ?
										<>
											<div className="label">
												<span className=" font-generalsans text-yellowish text-sm">
													Team Size
												</span>
											</div>
											<div className={`badge-value bg-yellowish rounded-full w-[40%] h-8 ${flexStylesCenter}`}>
												<span className=" text-xs text-black font-generalsans-semibold">
													Solo
												</span>
											</div>
										</>
										:
										<>
											<div className="label">
												<span className=" font-generalsans text-yellowish text-sm">
													Team Size
												</span>
											</div>
											<div
												className={`badge-value bg-yellowish rounded-full w-[40%] h-8 ${flexStylesCenter}`}
											>
												<span className=" text-xs text-black font-generalsans-semibold">
													{teamSize}
												</span>
											</div>
										</>
								}

							</div>
						</div>
					) : (
						<>
							<p className="text-yellowish font-generalsans font-bold text-xl px-6">Related Events</p>
							<div className="py-8 px-6 flex flex-row flex-wrap gap-2">
								{
									relatedEvents.map((event, index) => (
										<div key={index}
											className={`badge flex flex-row gap-2 text-sm w-auto h-10 py-4 px-2 ${flexStylesBetween} bg-yellowishopc rounded-full text-yellowish`}
										>
											<div className="bg-yellowish p-3 rounded-full"></div>
											{event}
										</div>
									))
								}
							</div>
						</>
					)}
					<div className="py-4"></div>
					<div className="h-1/4 grid grid-cols-1 bg-red border-b-[.5px] border-black">
						<Link
							href={`${urlPathName}/${id}`}
							className="border-r-[.5px] border-black flex justify-center items-center gap-2 py-4 btn-hover"
						>
							<h1 className="text-white text-[14px] font-generalsans font-bold ">
								VIEW DETAILS & REGISTER
							</h1>
							<Image src={Images.iconArrowRight} alt="arrow_right" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
