import dynamic from "next/dynamic";
import workshops from '/public/data/workshop.json';

const EventWorkshopInfo = dynamic(() => import('@/components/Global/EventWorkshopInfo'))

export default function WorkshopPageById({ params }) {
	return (
		<EventWorkshopInfo pageData={workshops} params={params} />
	)
}
