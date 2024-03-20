"use client";
import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Images from "../../../public/assets";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { rgbDataURL } from "@/utils/blurryImage";
import events from "/public/data/events.json";
import workshops from "/public/data/workshop.json";
import Preloader from "./Preloader";
import { useAuthState } from "@/context/AuthContext";

export default function EventWorkshopInfo({ params }) {
  const { isAuthenticated, user } = useAuthState()

  const router = useRouter();

  const [data, setData] = useState({});
  const urlPathName = usePathname();
  const path = urlPathName.split("/")[1];

  const selectedPageData = path === 'events' ? events.find((event) => event.id === params.id) : workshops.find((workshop) => workshop.id === params.id);
  useEffect(() => {
    setData(selectedPageData);
  }, []);

  const [registering, setRegistering] = useState(false);

  async function workshopRegister() {
    if (!isAuthenticated) {
      toast.warning(`User not logged in`, {
        style: {
          color: "#010100",
          backgroundColor: "#FFF3B0",
        }
      })
      return
    }

    try {
      setRegistering(true);
      const response = await axiosInstance.post(
        `/workshop/join/${params.id}`,
        undefined,
        {
          headers: {
            userid: user.UUID
          },
        }
      );

      if (response.status === 200) {
        toast.success(`${response.data.message}`, {
          icon: <Image src={Images.logoVerify} alt="verify_logo" />,
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
    }
    catch (err) {
      if (err.response.status === 400) {
        toast.warning(`Complete your profile`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
      if (err.response.status === 401) {
        toast.warning(`${err.response.data.message}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
    }
    finally {
      setRegistering(false);
    }
  }

  async function eventRegister() {

    if (!isAuthenticated) {
      toast.warning(`User not logged in`, {
        style: {
          color: "#010100",
          backgroundColor: "#FFF3B0",
        }
      })
      return
    }

    const noModal = data.teamSize === ""; //solo
    const teamModal = parseInt(data.teamSize.charAt(0)) > 1; //only team

    const userType = user.userType;

    const body = {
      team_id: "",
      college_user_id: "",
      school_user_id: ""
    }

    //solo event for school college
    if (userType === 'college' && noModal) body.college_user_id = user.UUID
    else if (userType === 'school' && noModal) body.school_user_id = user.UUID

    //team event for school college
    else if (teamModal) body.team_id = user.teamId

    try {
      setRegistering(true);
      const response = await axiosInstance.post(
        `/events/join/${params.id}`, body
      );


      if (response.status === 200) {
        toast.success(`${response.data.message}`, {
          icon: <Image src={Images.logoVerify} alt="verify_logo" />,
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
    }
    catch (err) {
      if (err.response.status === 400) {
        toast.warning(`${err.response.data.message}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
      if (err.response.status === 404) {
        toast.warning(`${err.response.data.message}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
          },
        });
      }
      if (err.response.status === 422) {
        toast.warning(`${err.response.data.message}`, {
          style: {
            color: "#010100",
            backgroundColor: "#FFF3B0",
            border: "2px solid red",
          },
        });
      }
    }
    finally {
      setRegistering(false);
    }
  }


  const checkRoute = urlPathName === `/events/${params.id}`;

  const flexStylesBetween = "flex justify-between items-center";

  return (
    <>
      <div className="px-[1px] md:px-20">
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
            <Image
              src={data.image_url}
              alt="workshop"
              className="object-cover h-48 md:h-96 w-full"
              width={500}
              height={200}
              unoptimized
              placeholder="blur"
              blurDataURL={rgbDataURL(150, 150, 150)}
            />
          </div>
          <div>
            <div className=" pl-4 md:pl-14 py-7 md:py-10">
              <h1 className="text-yellowish text-3xl md:text-6xl font-generalsans-semibold">
                {data.name}
                <div className="text-grey text-2xl md:text-3xl pt-4 font-generalsans font-normal">
                  {data.alt_name}
                </div>
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
                <div className="inline-flex gap-2 md:gap-4 py-4">
                  <div className="flex justify-center items-center">
                    <Image src={Images.map} alt="map" className="w-10" />
                  </div>
                  <div>
                    <h1 className="text-yellowish text-sm md:text-xl font-generalsans font-semibold">
                      Mode
                    </h1>
                    <h1 className="text-yellowish text-xs font-generalsans font-normal">
                      {`${data.mode ? data.mode : "Offline"} | ${data.destination}`}
                    </h1>
                  </div>
                </div>
              </div>
              <button
                className={`col-span-2 md:col-span-1 flex justify-center items-center ${registering ? 'bg-red-faded cursor-not-allowed' : 'bg-red'}`}
                onClick={
                  !checkRoute ? workshopRegister : eventRegister
                }
                disabled={registering}
              >
                <div className="inline-flex gap-2 py-4">
                  {!registering ?
                    <>
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
                    </>
                    : <Preloader width="2.5rem" height="2.5rem" bgWidth="2.5rem" bgHeight="2.5rem" color='#FEFAE0' />
                  }
                </div>
              </button>
            </div>
          </div>
          <div>
            {
              !checkRoute && Array.isArray(data.relatedEvents) && (
                <div className="pl-4 md:pl-14 pt-7 md:pt-8">
                  <p className="text-yellowish font-generalsans font-bold text-xl">Related Events</p>
                  <div className="py-8 flex flex-row flex-wrap gap-2">
                    {
                      data.relatedEvents.map((event, index) => (
                        <div key={index}
                          className={`badge flex flex-row gap-2 text-sm w-auto h-10 py-4 px-2 ${flexStylesBetween} bg-yellowishopc rounded-full text-yellowish`}
                        >
                          <div className="bg-yellowish p-3 rounded-full"></div>
                          {event}
                        </div>
                      ))
                    }
                  </div>

                </div>
              )
            }
            <div className="pl-4 md:pl-14 pt-7 md:pt-8">
              <h1 className="text-yellowish font-generalsans-semibold text-3xl md:text-5xl">
                {checkRoute ? 'Event Details' : 'Workshop Details'}
              </h1>
            </div>

            <div className="px-4 md:px-14 py-8">
              <h1 className="text-grey font-generalsans font-normal text-lg md:text-xl">
                {data.body}
              </h1>
              {checkRoute && (
                data?.rules?.map((rule, index) => (
                  <div key={index} className="py-4">
                    <p className="text-yellowish text-xl md:text-2xl font-generalsans-semibold pb-2">
                      {rule.type}:
                    </p>
                    {Array.isArray(rule.body) ? (
                      <ul className="text-grey list-item">
                        {rule?.body.map((r, i) => (
                          <li key={i} className="text-grey font-generalsans text-md md:text-xl mt-4 md:leading-8">●{" "}{r}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-grey font-generalsans text-md md:text-xl">{rule.body}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
          {checkRoute ? (
            <>
              {data.prize && (
                <>
                  <div className="pl-4 md:pl-14 py-7 md:py-10">
                    <h1 className="text-yellowish font-generalsans font-semibold text-3xl md:text-5xl">
                      Prize Pool
                    </h1>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 ">
                    {data.prize.map((prize, index) => (
                      <div
                        className="col-span-2 md:col-span-1 flex justify-center items-center border-r-[.5px] border-y-[.5px] border-yellowish"
                        key={index}
                      >
                        <div className="inline-flex gap-0 md:gap-2 py-4">
                          <div className="flex justify-center items-center gap-4">
                            <h1 className="text-yellowish text-xl md:text-3xl font-generalsans-semibold">
                              {prize.position}
                            </h1>
                            <Image
                              src={Images.Diamond1}
                              alt="star"
                              className="h-7"
                            />
                            <h1 className="text-yellowish text-lg md:text-xl font-generalsans font-normal">
                              {prize.amount}
                            </h1>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : null}

          {
            data?.coordinators?.length > 0 &&
            <>
              <div className="pl-4 md:pl-14 border-y-[.5px] border-yellowish">
                <h1 className="text-yellowish font-generalsans font-semibold text-3xl md:text-5xl py-10 pt-24">
                  {checkRoute ? "Coordinators" : "Speakers"}
                </h1>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1">
                {data?.coordinators.map((coordinator, index) => (
                  <div className="md:col-span-1 col-span-1 border-b-[.5px] md:border-r-[.5px] border-yellowish" key={index}>
                    <div className="flex flex-row items-start pl-6 md:pl-12 gap-1 py-6 md:py-5">
                      <Image
                        src={Images.Star2}
                        alt="star"
                        className="h-10" />
                      <div className="">
                        <h1 className="text-yellowish font-generalsans font-semibold text-xl md:text-3xl">
                          {coordinator.name}
                        </h1>
                        <h1 className="text-grey font-generalsans font-normal text-sm md:text-lg pt-2">
                          {coordinator.contact}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
        </div>
      </div >
    </>
  );
}
