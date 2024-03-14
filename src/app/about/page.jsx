import Image from "next/image";
import Images from "../../../public/assets";
import SmartShapes from "@/components/Global/SmartShapes";

export default function AboutPage() {
	return (
		<>
			<div className="px-[1px] md:px-20 w-full">
				<div className="border-x-[.5px] border-yellowish">
					<div className="flex justify-center items-center h-[252px] border-yellowish border-b-[0.5px] flex-col overflow-hidden">
						<h1 className="text-yellowish text-[56px] sm:text-[64px] font-anton z-30">2019...2024</h1>
						<span className="text-yellowish text-[16px] font-generalsans">We are back after 5 years</span>
						<SmartShapes />
					</div>
					<div className="flex justify-center items-center h-[152px] border-yellowish border-b-[0.5px] flex-col overflow-hidden">
						<Image src={Images.about} alt="campus" width={100} height={100}/>
					</div>
					<div className=" p-10  flex flex-col">
						<p className=" text-yellowish text-[16px] sm:text-[32px] text-justify">
							Lorem Impsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							Lorem Impsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							Lorem Impsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							Lorem Impsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</div>

					<Image src={Images.campus} className=" sm:h-full sm:w-full border-yellowish border-t-[0.5px]" alt="campus" />

				</div>
			</div>
		</>
	);
}
