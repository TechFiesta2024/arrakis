import dynamic from 'next/dynamic';
import events from '/public/data/events.json'

const EventWorkshopPage = dynamic(() => import('../Global/EventWorkshopPage'))


export default function Events() {

    const eventType = ["School", "Techfest","Humatronics"]

    return (
        <div className="md:px-20 w-full">
            <div className="border-x-[.5px] border-yellowish">
                <div className="flex justify-center items-center pt-20">
                    <div className="grid grid-cols-1">
                        <div className="flex-row">
                            <span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
                                :
                            </span>
                            <span className="text-yellowish font-anton md:text-8xl px-2 mt-4 text-5xl">
                                EVENTS
                            </span>
                            <span className="text-yellowish font-generalsans font-semibold md:text-8xl text-5xl">
                                :
                            </span>
                        </div>
                    </div>
                </div>

                <EventWorkshopPage data={events} types={eventType} />
            </div>
        </div>
    )
}