import dynamic from "next/dynamic";
import Preloader from "@/components/Global/Preloader";

const EventWorkshopInfo = dynamic(() => import("@/components/Global/Info"), {
	loading: () => <Preloader width="8rem" height="8rem" color="red" />,
});

export default function EventPageById({ params }) {
	return <EventWorkshopInfo params={params} />;
}
