import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useAuthState } from "@/context/AuthContext";
import { DataState } from "./DataState";
import { EmptyState } from "./EmptyState";
import { workshop } from "/public/data/workshop_data";
import axiosInstance from "@/utils/axiosInstance";

const ProfileUpdateReminder = dynamic(
	() => import("../Global/ProfileUpdateReminder"),
);

export default function Dashboard() {
	const { user } = useAuthState();
	const [workshops, setWorkshops] = useState([]);

	useEffect(() => {
		async function getMe() {
			try {
				const { data } = await axiosInstance.get("/user/me", {
					headers: {
						userid: user.UUID,
					},
				});

				setWorkshops(
					workshop.filter((obj) => data[0].workshops.includes(obj.id)),
				);
			} catch (err) {
				console.error(err);
			}
		}
		getMe();
	}, []);

	console.log(workshops);

	return (
		<>
			<ProfileUpdateReminder />
			<div className="flex justify-center items-start min-h-screen mx-2 md:mx-20 border-x-[0.5px] border-yellowish text-white">
				{workshops.length === 0 ? (
					<EmptyState />
				) : (
					<DataState workshopArray={workshops} />
				)}
			</div>
		</>
	);
}
