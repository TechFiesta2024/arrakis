"use client";
import dynamic from "next/dynamic";
import isAllowed from "@/services/RouteProtector";
import Preloader from "@/components/Global/Preloader";

const Profile = dynamic(() => import("@/components/Profile"), {
	loading: () => <Preloader width="8rem" height="8rem" color="red" />,
});

async function ProfilePage() {
	return <Profile />;
}

export default isAllowed(ProfilePage);
