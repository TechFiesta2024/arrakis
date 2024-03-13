import dynamic from "next/dynamic";
import workshops from '/public/data/workshop.json';
import Preloader from "@/components/Global/Preloader";

const EventWorkshopInfo = dynamic(() => import('@/components/Global/Info'), {
	loading: () => <Preloader width="8rem" height="8rem" color="red" />,
})

export default function WorkshopPageById({ params }) {
	return (
		<EventWorkshopInfo pageData={workshops} params={params} />
	)
}
