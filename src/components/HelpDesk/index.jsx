import Link from "next/link";
import Image from "next/image";
import helpdeskData from "/public/data/helpdesk.json";
import Images from "/public/assets";

export default function HelpdeskCard() {
	return (
		<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
			{helpdeskData.map((member, idx) => (
				<Card key={idx} member={member} />
			))}
		</div>
	);
};


const Card = ({ member }) => {

	const { name, linkedin, x_url, email } = member;

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
						<div className="flex items-center px-5 py-5 gap-6">
							<Link
								href={linkedin}
								target="_blank"
								className="flex items-center text-yellowish"
							>
								<Image
									src={Images.iconLinkedinWhite}
									alt="linkedIn"
									className="lg:w-8 h-8"
								/>
							</Link>

							<Link
								href={x_url}
								target="_blank"
								className="flex items-center text-yellowish"
							>
								<Image
									src={Images.iconXWhite}
									alt="twitter"
									className="lg:w-8 h-4"
								/>
							</Link>
						</div>
					</div>
				</div>
				<a
				href={`mailto:${email}`}
					className="col-span-1 bg-red flex justify-center items-center"
				>
					<Image src={Images.iconEmail} alt="twitter" height={30} />
				</a>
			</div>
		</>
	);
};