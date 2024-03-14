import Image from "next/image";
import React from "react";
import Images from "/public/assets";
import Link from "next/link";

const HelpDeskCard = ({ member }) => {
	const getUsernameFromURL = (url) => {
		const parts = url.split("/");
		return parts.pop() || parts.pop();
	};

	const { name, linkedin, x_url, phone } = member;
	const linkedin_username = getUsernameFromURL(linkedin);
	const x_username = getUsernameFromURL(x_url);

	return (
		<>
			<div className="grid grid-cols-5 border-t-[.5px] border-b-[.5px] border-r-[.5px] border-yellowish">
				<div className="col-span-4">
					<div className="lg:pt-6 pt-4">
						<p className="px-6 text-yellowish font-generalsans font-bold text-2xl">
							{name}
						</p>
					</div>
					<div className="h-[40%] ">
						<div className="grid grid-cols-2 border-b-[.5px] border-yellowish p-5">
							<Link
								href={linkedin}
								className="flex items-center text-yellowish"
							>
								<Image
									src={Images.iconLinkedinWhite}
									alt="linkedIn"
									className="lg:w-7 h-6"
								/>
								<a href={linkedin} className="font-generalsans">
									Linkedin
								</a>
							</Link>

							<Link href={x_url} className="flex items-center text-yellowish">
								<Image
									src={Images.iconXWhite}
									alt="twitter"
									className="lg:w-7 h-3"
								/>
								<a href={x_url} className="font-generalsans">
									X (Twitter)
								</a>
							</Link>

							{/* <Link href={linkedin} className=''>
                            <Image src={Images.iconLinkedinWhite} alt='linkedIn' className='lg:w-7 h-6' />
                            asd
                        </Link>
                        <Link href={x_url} className=''>
                            <Image src={Images.iconXWhite} alt='twitter' className='lg:w-4 h-3' />
                            qw
                        </Link> */}
						</div>
					</div>
				</div>
				<a
					href={`mailto:${phone}`}
					className="col-span-1 bg-red flex justify-center items-center"
				>
					<Image src={Images.iconEmail} alt="twitter" height={30} />
				</a>
			</div>
		</>
	);
};

export default HelpDeskCard;
