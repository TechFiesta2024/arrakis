'use client'
import { EmptyState } from "@/components/dashboard/EmptyState";
import { DataState } from "@/components/dashboard/DataState";
import isProfileCompleted from "@/services/RouteProtector/ProfileCompleted";


const workshopArray = [
    {
        ware: "hardware",
        workshopName: "Workshop Name",
        date: "Mar 11-16",
        time: "7:30-9:00 pm",
        isOnline: "online",
        link: "/"
    },
    {
        ware: "software",
        workshopName: "Workshop Name",
        date: "Mar 13-17",
        time: "10:30-11:00 pm",
        isOnline: "offline",
        link: "/"
    },
    {
        ware: "software",
        workshopName: "Workshop Name",
        date: "Apr 21-26",
        time: "9:00-11:00 pm",
        isOnline: "offline",
        link: "/"
    },
    {
        ware: "software",
        workshopName: "Workshop Name",
        date: "Apr 21-26",
        time: "9:00-11:00 pm",
        isOnline: "offline",
        link: "/"
    }
]


async function DashboardPage() {
    return (
        <>
            <div className='flex justify-center items-start min-h-screen mx-2 md:mx-20 border-x-[0.5px] border-yellowish text-white'>

                {workshopArray.length === 0 ? (
                    <EmptyState />
                ) : (
                    <DataState workshopArray={workshopArray} />
                )}
            </div>
        </>
    )
}


export default isProfileCompleted(DashboardPage)
