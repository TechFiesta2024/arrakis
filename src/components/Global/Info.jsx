'use client'
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Images from "../../../public/assets";
import { usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default function EventWorkshopInfo({ pageData, params }) {
    const [data, setData] = useState({});
    const [rules, setRules] = useState([])
    const urlPathName = usePathname()
    const path = urlPathName.split('/')[1]

    useEffect(() => {
        const selectedPageData = pageData.find((d) => "" + d.id === params.id)

        setData(selectedPageData)
        setRules(selectedPageData.rules)
    }, [])
    console.log(rules)


    async function register() {
        const userid = Cookies.get("studentId");

        try {
            const response = await axiosInstance.post(`/${path}/join/${params.id}`,
                {},
                {
                    headers: {
                        userid,
                    },
                },
            );
            console.log(response);

            if (response.status === 200) {

                toast.success(`${response.data.message}`, {
                    autoClose: 3000,
                    position: "top-right",
                    icon: <Image src={Images.logoVerify} alt="whatsapp" />,
                    hideProgressBar: true,
                    style: {
                        color: "#010100",
                        backgroundColor: "#FFF3B0",
                        font: "generalsans",
                        fontSize: "14px",
                        border: "1px solid #010100",
                    },
                }
                );
            }


        } catch (err) {
            console.error(err);
        }


        // toast.success(`ok`, {
        //     autoClose: 3000,
        //     position: "top-right",
        //     icon: <Image src={Images.logoVerify} alt="whatsapp" />,
        //     hideProgressBar: true,
        //     style: {
        //         color: "#010100",
        //         backgroundColor: "#FFF3B0",
        //         font: "generalsans",
        //         fontSize: "14px",
        //         border: "1px solid #010100",
        //     },
        // }
        // );

    }

    const checkRoute = urlPathName === `/events/${params.id}`

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
                                {data.name}
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
                                        <Image src={Images.map} alt="map" className="w-10" />
                                    </div>
                                    <div>
                                        <h1 className="text-yellowish text-sm md:text-xl font-generalsans font-semibold">
                                            Mode
                                        </h1>
                                        <h1 className="text-yellowish text-xs md:text-base font-generalsans font-normal">
                                            {`${data.mode ? data.mode : 'Offline'} | ${data.destination}`}
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
                        <ToastContainer />
                    </div>
                    <div>
                        <div className="pl-4 md:pl-14 pt-7 md:pt-8">
                            {
                                checkRoute ? (
                                    <h1 className="text-yellowish font-generalsans font-semibold text-3xl md:text-5xl">
                                        Rules
                                    </h1>
                                ) : (
                                    <h1 className="text-yellowish font-generalsans font-semibold text-3xl md:text-5xl">
                                        Description
                                    </h1>
                                )
                            }

                        </div>

                        <div className="pl-4 md:pl-14 py-8">
                            {
                                checkRoute ?
                                    <h1 className="text-yellowish font-generalsans font-normal text-xl md:text-2xl">
                                        {data.body}
                                    </h1>
                                    : (
                                        rules.map((rule, index) =>
                                        (
                                            <div key={index}>
                                                <p>{rule.type}</p>
                                                {
                                                    rule.body.length > 0 ?
                                                        (<ul>
                                                            {rule?.body.map((r, i) => (
                                                                <li key={i}>{r}</li>
                                                            ))}
                                                        </ul>)
                                                        :
                                                        (
                                                            <p>{rule.body}</p>

                                                        )   
                                                }
                                            </div>
                                        ))
                                    )
                            }
                        </div>
                    </div>
                    {
                        checkRoute ? (
                            <>
                                {data.prize && (
                                    <>
                                        <div className="pl-4 md:pl-14 py-7 md:py-10">
                                            <h1 className="text-yellowish font-generalsans font-semibold text-3xl md:text-5xl">
                                                Prize Pool
                                            </h1>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 " >
                                            {data.prize.map((prize, index) => (
                                                <div className="col-span-1 md:col-span-1 flex justify-center items-center border-r-[.5px] border-y-[.5px] border-yellowish" key={index}>
                                                    <div className="inline-flex gap-0 md:gap-2 py-4">
                                                        <div>
                                                            <h1 className="text-yellowish text-xl md:text-3xl font-generalsans-semibold">
                                                                {prize.position}
                                                            </h1>
                                                            <h1 className="text-yellowish text-md md:text-xl font-generalsans font-normal">
                                                                ₹{prize.amount}
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            null
                        )
                    }
                    <ToastContainer />
                </div>
            </div>
        </>
    );
}
