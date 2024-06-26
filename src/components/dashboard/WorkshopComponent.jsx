import Image from "next/image";
import Link from "next/link";
import Images from "/public/assets";
import axios from "axios";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { useAuthState } from "@/context/AuthContext";
import Preloader from "../Global/Preloader";
import workshops from "/public/data/workshop.json";


export default function WorkshopComponent() {
  const { user } = useAuthState();
  const [loading, setLoading] = useState(false);
  const [workshop, setWorkshop] = useState([])


  useEffect(() => {
    const source = axios.CancelToken.source();
    async function getWorkshops() {
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
      }
      catch (err) {
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
    getWorkshops();

    return () => {
      source.cancel("Request Cancelled.");
    }
  }, []);

  const softwareWorkshops = workshop.filter((w) => w.type === "Software");
  const hardwareWorkshops = workshop.filter((w) => w.type === "Hardware");


  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row flex-wrap w-full justify-start items-start">
        {loading ? <Preloader width='6rem' height='6rem' color='red' /> :
          <>
            <div className="software__side flex items-center flex-col w-full lg:w-1/2 justify-center ">
              <div className="flex items-center h-20 w-full justify-center text-2xl gap-3 border-y-[0.5px] border-yellowish cursor-pointer">
                <Image
                  src={Images.iconMonitorMobile}
                  alt="Monitor Mobile Icon"
                />
                <span className="text-yellowish">Software Workshops</span>
              </div>
              {softwareWorkshops.map((data, index) => (
                <div
                  key={index}
                  className="flex w-full h-32 md:h-40 border-r-[0.5px] border-yellowish border-b-[0.5px]"
                >
                  <div className="flex flex-col justify-evenly items-start w-5/6 p-2 md:p-5">
                    <div className="font-generalsans-semibold text-2xl md:text-3xl text-yellowish">
                      {data.name}
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 text-yellowish text-xs sm:text-sm md:text-base pt-2 md:pt-0">
                      <div className="flex items-center gap-1 md:gap-1">
                        <Image
                          className="w-5"
                          src={Images.iconCalendar}
                          alt="Link2 Icon"
                        />
                        <span className="text-yellowish sm:text-xs">
                          {data.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-1">
                        <Image
                          className="w-5"
                          src={Images.iconClock}
                          alt="Link2 Icon"
                        />
                        <span className="text-yellowish sm:text-xs">
                          {data.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-1">
                        <Image
                          className="w-5"
                          src={Images.iconGlobal}
                          alt="Link2 Icon"
                        />
                        <span className="text-yellowish sm:text-xs">
                          {data.mode}
                        </span>
                      </div>
                    </div>
                    <div className="italic text-xs md:text-sm pt-2 md:pt-0">
                      <span className="text-yellowish">
                        *view details from&nbsp;
                      </span>
                      <span className="underline">
                        <Link
                          href={`/workshop/${data.id}`}
                          className="text-yellowish text-xs"
                        >
                          workshop page
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hardware__side flex items-center flex-col w-full lg:w-1/2 justify-center border-l-[0.5px] border-yellowish">
              <div className="hardware__heading flex items-center h-20 w-full justify-center text-2xl gap-3 border-y-[0.5px] border-l-[0.5px] border-yellowish cursor-pointer">
                <Image src={Images.iconCpu} alt="Monitor Mobile Icon" />
                <span className="text-yellowish">Hardware Workshops</span>
              </div>
              {hardwareWorkshops.map((data, index) => (
                <div
                  key={index}
                  className="flex w-full h-32 md:h-40 border-r-[0.5px] border-yellowish border-b-[0.5px] "
                >
                  <div className="flex flex-col justify-evenly items-start w-5/6 p-2 md:p-5">
                    <div className="font-generalsans-semibold text-2xl md:text-3xl text-yellowish">
                      {data.name}
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-5 text-yellowish text-xs sm:text-sm md:text-base pt-2 md:pt-0">
                      <div className="flex  items-center gap-1 md:gap-1">
                        <Image
                          className="w-5"
                          src={Images.iconCalendar}
                          alt="Link2 Icon"
                        />
                        <span className="text-yellowish sm:text-xs">
                          {data.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-1">
                        <Image
                          className="w-5"
                          src={Images.iconClock}
                          alt="Link2 Icon"
                        />
                        <span className="text-yellowish sm:text-xs">
                          {data.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-1">
                        <Image
                          className="w-5"
                          src={Images.map}
                          alt="Link2 Icon"
                        />
                        <span className="text-yellowish sm:text-xs">
                          {data.mode}
                        </span>
                      </div>
                    </div>
                    <div className="italic font-generalsans text-xs md:text-sm pt-2 md:pt-0">
                      <span className="text-yellowish">
                        *view details from&nbsp;
                      </span>
                      <span className="underline">
                        <Link href={`/workshop/${data.id}`} className="text-yellowish">
                          workshop page
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      </div>
    </div>
  )
}
