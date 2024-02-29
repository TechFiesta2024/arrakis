import Image from "next/image"
import Images from '../../../public/assets/index.js'
import SmartShapes from "../Global/SmartShapes.jsx";
import Link from "next/link.js";


const UnleashSkills = () => {
  const flexStylesCenter = "flex justify-center items-center";
  return (
    <>
      <div className="unleashskills__mainContainer border-y-[0.5px] border-yellowish  ">
        <div className=" uleashskills__container items-center justify-center w-full h-[428px] md:px-20">
          <div className="unleashtext__container flex justify-center items-center flex-col border-x-[0.5px] text-yellowish  h-[100%]  overflow-hidden">
            <h1 className='font-anton pb-4 text-[60px] md:text-[100px] lg:text-[180px] text-center'>Unleash Skills</h1>
            <Link href='/bootcamp' className={` ${flexStylesCenter} bg-red px-10 flex z-20 text-white rounded-[8px] gap-x-2 transition-transform hover:scale-x-110`}>
              <div className="buttoncontent flex py-2">
                Check Workshops
              </div>
              <Image src={Images.arrowRightYellowish} alt="arrow-right" />
            </Link>
            <SmartShapes />
          </div>

        </div>
      </div>
    </>
  )
}

export default UnleashSkills