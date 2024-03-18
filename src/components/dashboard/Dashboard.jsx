import axios from "axios";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useAuthState } from "@/context/AuthContext";
import DataState from "./DataState";
import EmptyState from "./EmptyState";
import workshops from "/public/data/workshop.json";
import events from "/public/data/events.json";
import axiosInstance from "@/utils/axiosInstance";
import Preloader from "../Global/Preloader";

const ProfileUpdateReminder = dynamic(
	() => import("../Global/ProfileUpdateReminder"),
);

export default function Dashboard() {
	const { user } = useAuthState();
	const [loading, setLoading] = useState(false);
	const [workshop, setWorkshop] = useState([]);
	const [event, setEvent] = useState([]);
	// const [team]

	useEffect(() => {
		const source = axios.CancelToken.source();
		async function getMe() {
			try {
				setLoading(true)
				const { data } = await axiosInstance.get("/user", {
					headers: {
						email: user.email,
					},
				});
				if (data.workshop.length > 0) {
					const workshopsArray = data.workshop.map((d) => d.category);
					setWorkshop(
						workshops.filter((obj) =>
							workshopsArray.toString().includes(obj.id),
						),
					);
				}
				if(data.event.length > 0) {
					const eventArray = data.event.map((d) => d.category);
					setEvent(
						events.filter((obj) =>
							eventArray.toString().includes(obj.id),
						),
					);
				}
			} catch (err) {
				if (axios.isCancel(err)) {
					console.error("Axios error: ", err.message);
				}
				else {
					console.error(err)
				}
			}
			finally {
				setLoading(false)
			}
		}
		getMe();
		

		return () => {
			source.cancel("Request Cancelled.");
		}
	}, []);

	useEffect(() => {
		setEvent(events);
		
	},[])

	return (
		<>
			<ProfileUpdateReminder />
			{
				loading ? <Preloader width='6rem' height='6rem' color='red' /> :

					<div className="flex justify-center items-start min-h-screen px-[1px] md:mx-20 border-x-[0.5px] border-yellowish text-white">
						{workshop.length === 0 ? (
							<EmptyState />
						) : (
							<DataState workshopArray={workshop} eventArray={event} />
						)}
					</div>
			}
		</>
	);
}
