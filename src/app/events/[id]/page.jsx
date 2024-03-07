import dynamic from 'next/dynamic';
import events from '/public/data/events.json'

const EventWorkshopInfo = dynamic(() => import('@/components/Global/Info'))

export default function EventPageById({ params }) {

	return (
		<EventWorkshopInfo pageData={events} params={params} />
	);
}
