"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Images from "/public/assets";
import { useAuthState } from "@/context/AuthContext";

export default function ProfileUpdateReminder() {
	const { isAuthenticated, user } = useAuthState();
	const [profileUpdateReminder, setProfileUpdateReminder] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setProfileUpdateReminder(isAuthenticated && !parseBool(user.UUID)), 900);
		return () => clearTimeout(timeout);
	}, [isAuthenticated, user.UUID]);

	return (
		// TODO make it responsive
		<div
			className={`w-full h-[20%] md:px-20 absolute ${!profileUpdateReminder
				? "translate-y-[-4.8rem] z-[-1000]"
				: "translate-y-0 transition-all duration-700 ease-linear"
				}`}
		>
			<Link
				href="/profile"
				className={`profile_update_toast_container bg-yellowish py-3 flex justify-between items-center px-4 overflow-hidden`}
			>
				<div className="profile_svg-container flex justify-center items-center gap-4">
					<div className="bg-red h-12 w-12 rounded-full flex justify-center items-center">
						<Image
							src={Images.userIcon}
							alt="usericon"
						/>
					</div>
					<p className="font-generalsans font-bold text-black">
						Update your profile
					</p>
				</div>
				<div className="flex justify-center items-center -mt-20">
					<Image src={Images.Diamond1} className="h-16 w-16" alt="diamond" />
					<Image src={Images.Diamond2} className="h-6 w-6 mt-16" alt="diamond" />
				</div>
				<Image src={Images.arrowRightRed} alt="arrow" />
			</Link>
		</div>
	);
}

function parseBool(value) {
	if (value) return true;
	return undefined;
}
