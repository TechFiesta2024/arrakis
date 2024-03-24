"use client";
import isAllowed from "@/services/RouteProtector";
import Dashboard from "@/components/dashboard";

async function DashboardPage() {
	return <Dashboard />;
}

export default isAllowed(DashboardPage);
