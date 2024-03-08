import Image from "next/image";
import Images from "/public/assets";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="footer__container px-[1px] md:px-20 h-40 md:h-20 w-full flex flex-col md:flex-row justify-center items-center text-yellowish border-yellowish border-t-[0.5px] text-2xl">
			<div className="footer__left flex items-center justify-evenly w-full md:w-1/2 h-full border-b-[0.5px] border-yellowish">
				<div className="border-x-[0.5px] flex items-center justify-center border-yellowish h-full w-1/2">
					<p className="text-sm md:text-lg">©Techfiesta&apos;24</p>
				</div>
				<div className="border-x-[0.5px] flex items-center justify-center border-yellowish h-full w-1/2">
					<Link href="/" className="text-sm md:text-lg">
						Contact
					</Link>
				</div>
				<div className="border-x-[0.5px] flex items-center justify-center border-yellowish h-full w-1/2 bg-red">
					<Link href="/collaborate" className="text-sm md:text-lg">
						Collaborate
					</Link>
				</div>
			</div>
			<div className="footer__right flex items-center justify-evenly w-full md:w-1/2 h-full">
				<Link
					href=""
					className="border-x-[0.5px] border-b-[0.5px] flex items-center justify-center border-yellowish h-full w-1/4"
				>
					<Image
						src={Images.logoWhatsapp}
						className="h-8 w-8"
						alt="whatsapp-logo"
					/>
				</Link>
				<Link
					href=""
					className="border-x-[0.5px] border-b-[0.5px] flex items-center justify-center border-yellowish h-full w-1/4"
				>
					<Image
						src={Images.logoInstagram}
						className="h-8 w-8"
						alt="instagram-logo"
					/>
				</Link>
				<Link
					href=""
					className="border-x-[0.5px] border-b-[0.5px] flex items-center justify-center border-yellowish h-full w-1/4"
				>
					<Image src={Images.logoX} className="h-8 w-8" alt="x-logo" />
				</Link>
				<Link
					href=""
					className="border-x-[0.5px] border-b-[0.5px] flex items-center justify-center border-yellowish h-full w-1/4"
				>
					<Image
						src={Images.logoLinkedIn}
						className="h-8 w-8"
						alt="linkedin-logo"
					/>
				</Link>
			</div>
		</div>
	);
}
