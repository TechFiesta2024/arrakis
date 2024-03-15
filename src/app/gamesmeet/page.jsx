import Image from "next/image"
import gamesmeetData from "../../../public/data/gamesmeet.json"
import { rgbDataURL } from "@/utils/blurryImage"
import Images from "../../../public/assets";

export default function GamesMeetPage() {
    const flexStylesBetween = "flex justify-between items-center";

    return (
        <>
            <div className="px-[1px] md:px-20 w-full">
                <div className="border-x-[.5px] border-yellowish">
                    <div className="flex justify-center items-center py-20">
                        <div className="grid grid-cols-1">
                            <div className="flex-row">
                                <span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
                                    :
                                </span>
                                <span className="text-yellowish font-anton md:text-8xl px-2 mt-4 text-5xl">
                                    GAMES MEET
                                </span>
                                <span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
                                    :
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {gamesmeetData.map((data, index) => (
                            <div key={index} className="border-t-[.5px] border-b-[.5px] border-r-[.5px] border-yellowish">
                                <div className="flex justify-center border-b-[.5px] border-yellowish overflow-hidden ">
                                    <Image
                                        className="object-cover h-[10rem]"
                                        src={data.image_url}
                                        alt="cover_img"
                                        width={800}
                                        height={800}
                                        placeholder="blur"
                                        blurDataURL={rgbDataURL(128, 128, 128)}
                                        unoptimized
                                    />
                                </div>
                                <div className="">
                                    <div className="px-6 lg:pt-6 pt-4">
                                        <p className="text-yellowish font-generalsans-semibold font-bold text-2xl">
                                            {data.eventName}
                                        </p>
                                        <div className="description-container">
                                            <p className=" text-yellowish font-generalsans text-lg lg:pt-3 py-1">
                                                {data.description}
                                            </p>
                                        </div>
                                        <p className="text-yellowish font-generalsans font-bold text-xl pt-6">Related Events</p>
                                        <div className="py-4 flex flex-row flex-wrap gap-2">
                                            {
                                                data.targetParticipants.map((event, index) => (
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
                                    <div className="grid grid-cols-1">
                                        {data?.poc.map((poc, index) => (
                                            <div className="md:col-span-1 col-span-1 border-y-[.5px] border-yellowish" key={index}>
                                                <div className="flex flex-row items-start py-6 md:py-5">
                                                    <Image
                                                        src={Images.Star2}
                                                        alt="star"
                                                        className="h-10"
                                                    />
                                                    <div className="">
                                                        <h1 className="text-yellowish font-generalsans font-semibold text-xl md:text-3xl">
                                                            {poc.name}
                                                        </h1>
                                                        <h1 className="text-grey font-generalsans font-normal text-sm md:text-lg pt-2">
                                                            {poc.contact}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}