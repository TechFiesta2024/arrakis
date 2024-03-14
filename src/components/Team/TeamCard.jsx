import Image from "next/image";
import { rgbDataURL } from "@/utils/blurryImage";
import Images from "../../../public/assets";
import Link from "next/link";

const TeamCard = ({ member }) => {
	const { name, role, image_url, linkedin, x_url, department } = member;
	return (
		<>
			<div className="border-t-[.5px] border-b-[.5px] border-r-[.5px] border-yellowish">
				<div className="flex justify-center border-b-[.5px] border-yellowish overflow-hidden ">
					<Image
						className="object-cover h-full"
						src={image_url}
						alt="team_image"
						width={800}
						height={800}
						placeholder="blur"
						blurDataURL={rgbDataURL(128, 128, 128)}
					/>
				</div>
				<div className="">
					<div className="lg:pt-6 pt-4 ">
						<p className="px-6 text-yellowish font-generalsans font-bold text-2xl">
							{name}
						</p>
						<p className="px-6 text-yellowish font-generalsans text-sm lg:pt-3 py-1">
							{role}
						</p>
					</div>
					<div className="py-3"></div>
					<div className="grid grid-cols-2 bg-yellowish border-b-[.5px] border-yellowish">
						{
							department === "Developers" && (
								<>
									<Link
										href={x_url}
										className="border-r-[.5px] border-black flex justify-center items-center py-4"
									>
										<Image
											src={Images.github}
											alt="twitter"
											className="lg:w-6 h-5"
										/>
									</Link>
									<Link href={linkedin} className="flex justify-center items-center">
										<Image
											src={Images.logoLinkedInBlack}
											alt="linkedIn"
											className="lg:w-7 h-6"
										/>
									</Link>
								</>
							)
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default TeamCard;
