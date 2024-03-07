'use client'
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Images from "../../../public/assets";
import { usePathname } from "next/navigation";

export default function EventWorkshopInfo({ pageData, params }) {
    const [data, setData] = useState({ coordinator: [] });
    const urlPathName = usePathname()
    const path = urlPathName.split('/')[1]

    useEffect(() => {
        const selectedPageData = pageData.find((d) => "" + d.id === params.id)

        setData(selectedPageData)
    }, [])

    async function register() {
        const userid = Cookies.get("studentId");

        try {
            const { data } = await axiosInstance.post(
                `/${path}/join/${params.id}`,
                {},
                {
                    headers: {
                        userid,
                    },
                },
            );
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div className="md:px-20">
                <div className="border-x-[.5px] border-yellowish">
                    <div className="pl-4 md:pl-14 py-4 md:py-6">
                        <Link
                            href={`/${path}`}
                            className="inline-flex items-center text-lg gap-3"
                        >
                            <Image src={Images.arrowLeft} alt="arrow_left" />
                            <h1 className="text-yellowish font-generalsans font-medium">
                                {" "}
                                {`Back to ${path}`}
                            </h1>
                        </Link>
                    </div>
                    <div className="border-y-[.5px] border-yellowish">
                        <img
                            src={data.image_url}
                            alt="workshop"
                            className="object-cover md:h-96 w-full"
                        />
                    </div>
                    <div>
                        <div className=" pl-4 md:pl-14 py-7 md:py-10">
                            <h1 className="text-yellowish text-3xl md:text-6xl font-generalsans font-bold">
                                {data.workshopName}
                            </h1>
                        </div>
                    </div>
                    <div className="border-y-[.5px]  border-yellowish ">
                        <div className="grid grid-cols-2 md:grid-cols-3 ">
                            <div className="col-span-1 md:col-span-1 flex justify-center items-center border-r-[.5px] border-yellowish">
                                <div className="inline-flex gap-0 md:gap-2 py-4">
                                    <div className="flex justify-center items-center">
                                        <Image
                                            src={Images.calendar}
                                            alt="calendar"
                                            className="h-10"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-yellowish text-sm md:text-xl font-generalsans font-semibold">
                                            Date &amp; Time
                                        </h1>
                                        <h1 className="text-yellowish text-xs md:text-base font-generalsans font-normal">
                                            {`${data.date} | ${data.time}`}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 md:col-span-1 flex justify-center items-center border-r-[.5px] border-yellowish">
                                <div className="inline-flex gap-0 md:gap-2 py-4">
                                    <div className="flex justify-center items-center">
                                        <Image src={Images.map} alt="map" className="h-10" />
                                    </div>
                                    <div>
                                        <h1 className="text-yellowish text-sm md:text-xl font-generalsans font-semibold">
                                            Mode
                                        </h1>
                                        <h1 className="text-yellowish text-xs md:text-base font-generalsans font-normal">
                                            {`${data.mode} | ${data.destination}`}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="col-span-2 md:col-span-1 flex justify-center items-center bg-red"
                                onClick={register}
                            >
                                <div className="inline-flex gap-2 py-4">
                                    <div className="flex justify-center items-center">
                                        <Image
                                            src={Images.register}
                                            alt="register"
                                            className="h-10"
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <h1 className="text-yellowish md:text-xl font-generalsans font-semibold">
                                            Register
                                        </h1>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="pl-4 md:pl-14 pt-7 md:pt-8">
                            <h1 className="text-yellowish font-generalsans font-semibold text-3xl md:text-5xl">
                                Description
                            </h1>
                        </div>
                        <div className="pl-4 md:pl-14 py-8">
                            <h1 className="text-yellowish font-generalsans font-normal text-xl md:text-2xl">
                                {data.body}
                            </h1>
                        </div>
                    </div>
                    <div className="pl-4 md:pl-14 border-y-[.5px] border-yellowish">
                        <h1 className="text-yellowish font-generalsans font-semibold text-3xl md:text-5xl py-10">
                            Coordinators
                        </h1>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        {data.coordinator.map((coordinator, index) => (
                            <Link href={coordinator.contact} key={index}>
                                <div className="md:col-span-1 col-span-1 border-b-[.5px] md:border-r-[.5px] border-yellowish">
                                    <div className="flex pl-4 md:pl-0 justify-start md:justify-center items-center gap-4 py-6 md:py-10 ">
                                        <div>
                                            <img
                                                src={coordinator.image_url}
                                                alt="coordinator"
                                                className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="inline-flex gap-16 md:gap-20">
                                                <h1 className="text-yellowish font-generalsans font-semibold text-xl md:text-3xl">
                                                    {coordinator.name}
                                                </h1>
                                                <Image
                                                    src={Images.arrowRightYellowish}
                                                    alt="arrow_yellow"
                                                    className="text-yellowish"
                                                />
                                            </div>
                                            <h1 className="text-yellowish font-generalsans font-normal text-sm md:text-base pt-2">
                                                {coordinator.designation}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
