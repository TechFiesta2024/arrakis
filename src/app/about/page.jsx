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
					<div className="flex flex-row justify-center items-center gap-8 h-[152px] border-yellowish border-b-[0.5px] overflow-hidden">
						<Image src={Images.about} alt="campus" width={100} height={100} />
						<Image src={Images.AOT} alt="campus" width={150} height={150} />
					</div>
					<div className=" p-6  flex flex-col">
						<p className=" text-yellowish sm:text-[16px]">
							Techfiesta 2024 is a two day long technical festival organised by the student's of Academy of Technology. It offers various events on software & hardware technology domain. Participants will take part based on their skillset and preferences. <br /><br />
							Humatronics is a branch associated with this which will be the creative talent hunt saga. It will be the platform to invoke the inner creativity of future engineers through several events like creative writing, mathematical challenges, waste to art, extempore and many more.
							We are organizing the entire series of events through a pattern of workshops, competitions and workshop + competitions. <br /><br /> The entire flow is bellow -
							The registration opens in the second week of March, inviting eager minds to embark on a voyage of technological exploration. From the third week onwards, a series of immersive workshops will start to hone your skills in both software and hardware domains. Software domain includes Product building bootcamps, frontend engineering and problem-solving  cyber-security challenges like Capture the Flag , while hardware enthusiasts delve into the realms of maze solving, race cars, IoT problem-solving, CAD and circuit events.
							The culmination of these enriching workshops sets the stage for the grand finale tentatively scheduled for the first week of April, promising a spectacle of talent and innovation. Along with all of the aforementioned events, students can engage themselves in the events related to Humatronics also on these days.
						</p>
					</div>
					<Image src={Images.campus} className=" sm:h-full sm:w-full border-yellowish border-t-[0.5px]" alt="campus" />
					<div className="flex justify-center items-center h-[152px] border-yellowish border-y-[0.5px] flex-col overflow-hidden">
						<p className=" text-4xl text-yellowish p-6">About Academy of Technology</p>
					</div>
					<div className=" p-6  flex flex-col">
						<p className=" text-yellowish sm:text-[16px]">
							Academy of Technology (AOT), located amidst the beautiful surroundings of Adisaptagram, has been a beacon of educational excellence since its founding in 2003. More than just an engineering college, AOT is a symbol of ingenuity and dedication, weaving a lovely mix of technology and ethics.
							<br /><br />
							Founded by the visionary "Ananda Educational Development and Charitable Organisation" (AEDCO), AOT has evolved over 18 years, constantly reinventing itself to embrace the boundless horizons of engineering and technology. Our journey is not merely about imparting knowledge; it's a transformative experience that encourages every student to think differently and explore new possibilities.
							<br /><br />
							Situated on the side of G.T. Road in Adisaptagram, Hooghly, our campus is not just a physical space but a nurturing environment where academic integrity meets the vibrant spirit of innovation. AOT is not just a college; it's a preferred career destination for meritorious students, known for its academic standards and compelling campus placements.
							The culmination of these enriching workshops sets the stage for the grand finale tentatively scheduled for the first week of April, promising a spectacle of talent and innovation. Along with all of the aforementioned events, students can engage themselves in the events related to Humatronics also on these days.
							<br /><br />
							Vision:  "Aspires to be a pre-eminent deemed university of national standing in education and innovation."

							Recognition: All our academic programs bear the stamp of approval from AICTE, are recognized by the Department of Higher Education, Government of West Bengal, and affiliated with Maulana Abul Kalam Azad University of Technology, West Bengal.

							Embark on a transformative educational journey with us, where the echo of innovation reverberates, and every student is encouraged to carve their unique path.

							Welcome to Academy of Technology, where education transcends boundaries, and excellence becomes a way of life.
						</p>
					</div>



				</div>
			</div>
		</>
	);
}
