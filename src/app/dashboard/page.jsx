'use client'
import { EmptyState } from "@/components/dashboard/EmptyState";
import { DataState } from "@/components/dashboard/DataState";
import isAllowed from "@/services/RouteProtector";
import workshopArray from "/public/data/workshop.json"


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


export default isAllowed(DashboardPage)
