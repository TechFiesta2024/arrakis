import Image from "next/image";
import Images from "/public/assets";

const partnersData = [
	{ img: "/assets/gdsc_logo.svg", linkedIn: "" },
	{ img: "/assets/cncf_logo.svg", linkedIn: "" },
	{ img: "/assets/ieeesbaot_logo.svg", linkedIn: "" },
	{ img: "/assets/resourcio_logo.svg", linkedIn: "" },
	{ img: "/assets/scece_logo.svg", linkedIn: "" },
	{ img: "/assets/sccse_logo.svg", linkedIn: "" },
	{ img: "/assets/sccsbs_logo.svg", linkedIn: "" },
	{ img: "/assets/sceee_logo.svg", linkedIn: "" },
	{ img: "/assets/scme_logo.svg", linkedIn: "" },
];

export default function CommunityPartner() {
	if (partnersData.length < 0) {
		return null;
	} else {
		return (
			<>
				<div className="communityparter__mainContainer border-y-[0.5px] border-yellowish  ">
					<div className=" communitypartner__text  justify-center w-full px-20 text-grey">
						<div className="communitypartner__textcontainer flex justify-center items-center p-3 h-[96px] ">
							<p className="md:font-generalsans font-extrabold text-lg md:text-3xl text-yellowish">
								Community Partners
							</p>
						</div>
					</div>
				</div>
				<div className="communityparter__gridcontainer border-t-[0.5px] border-yellowish  ">
					<div className=" communitypartner__text  justify-center w-full px-[1px] md:px-20 text-grey">
						<div className="boxcontainer  text-yellowish">
							<div className="boxgrid grid grid-cols-2 md:grid-cols-3 ">
								{partnersData.map((item, index) => (
									<div
										key={index}
										className="partners col-span-1 flex justify-center py-16 md:py-14 border-x-[0.5px] border-b-[0.5px] text-yellowish"
									>
										<Image
											src={item.img}
											alt="community_partners"
											width={180}
											height={200}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
