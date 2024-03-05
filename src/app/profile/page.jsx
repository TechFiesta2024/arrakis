"use client";
import dynamic from "next/dynamic";
import isAllowed from "@/services/RouteProtector";

const Profile = dynamic(() => import("@/components/Profile"));

async function ProfilePage() {
	return <Profile />;
}

export default isAllowed(ProfilePage);
