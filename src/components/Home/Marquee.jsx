// -----------------------------------------------------
// Data
// -----------------------------------------------------
import MarqueeData from "./MarqueeData"
// -----------------------------------------------------
// Images
// -----------------------------------------------------
import Image from "next/image";
import Images from "../../../public/assets/index.js";

const Marquee = () => {

  const flexStylesStart = "flex justify-start items-center";
  const flexStylesCenter = "flex justify-center items-center";

  return (
    <>
      <div className="slide_container border-b-[0.5px] text-yellowish overflow-hidden ">
        <div className={`slide_section w-[2080px] px-20 py-8 my-16 md:my-20 text-yellowish border-[0.5px] bg-yellowish slide-section`}>
          <div className={`slider_wrapper ${flexStylesCenter} gap-6 marquee-scroll transition-transform`}>
            {
              MarqueeData.map((data) => {
                return (
                  <div key={data.id} className={`slider_item ${flexStylesCenter} gap-6`} >
                    <p className="flex-grow z-50 text-xl md:text-2xl font-generalsans text-black whitespace-nowrap overflow-hidden">{data.text}</p>
                    <Image src={Images.Diamond2} className="h-6 w-6" alt="smart-shape" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Marquee