"use client";
import dynamic from "next/dynamic";
import isAllowed from "@/services/RouteProtector";
import Preloader from "@/components/Global/Preloader";

const Dashboard = dynamic(() => import("@/components/dashboard/Dashboard"), {
	loading: () => <Preloader width="8rem" height="8rem" color="red" />,
});

async function DashboardPage() {
	return <Dashboard />;
}

export default isAllowed(DashboardPage);
