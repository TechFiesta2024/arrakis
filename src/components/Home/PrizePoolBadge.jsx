import Image from "next/image";
import Images from "/public/assets";

const PrizePoolBadge = () => {
	return (
		<>
			<div className="prizeool-Badge_container bg-grid-pattern h-[100%] w-[100%] flex justify-center items-center">
				<div className="badge_div bg-yellowish h-[33%] w-[54.11%] rounded md:rounded-md lg:rounded-xl flex justify-between items-center gap-1 pl-2 pr-4 transition-transform hover:scale-110">
					<div className="bg-red h-16 w-16 rounded-lg flex items-center justify-center">
						<Image src={Images.Coin} className="h-8 w-8" alt="coin" />
					</div>
					<div className="text-black font-generalsans-semibold text-2xl flex-col h-[100%]">
						<span className="font-generalsans text-xs">🎉 Prizepool worth</span>
						<p>A LOT...</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default PrizePoolBadge;
