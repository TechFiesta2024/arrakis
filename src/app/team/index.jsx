import dynamic from "next/dynamic";
import Preloader from "@/components/Global/Preloader";

const TeamCardContainer = dynamic(() => import('@/components/Team/TeamCardContainer'), {
	loading: () => <Preloader width="8rem" height="8rem" color="red" />
})


export default function TeamPage() {
	return (
		<TeamCardContainer />
	)
}