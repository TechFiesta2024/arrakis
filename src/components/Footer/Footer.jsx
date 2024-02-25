import Image from "next/image";
import Images from "../../../public/assets";

export default function Footer() {
    return (
        <div className='footer__container px-0 md:px-20 h-40 md:h-20 w-full flex flex-col md:flex-row justify-center items-center text-yellowish border-yellowish border-t-[0.5px] text-2xl'>

            <div className="footer__left flex items-center justify-evenly w-full md:w-1/2 h-full border-b-[0.5px] border-yellowish">
                <div className="border-x-[0.5px] flex items-center justify-center border-yellowish h-full w-1/2">

                    <p className="">© Techfiesta'24</p>
                </div>
                <div className="border-x-[0.5px] flex items-center justify-center border-yellowish h-full w-1/2">
                    <p >Help Desk </p>
                </div>
            </div>
            <div className="footer__right flex items-center justify-evenly w-full md:w-1/2 h-full">
                <div className="border-x-[0.5px] flex items-center justify-center border-yellowish h-full w-1/4">
                    <Image src={Images.logoWhatsapp} />
                </div>
                <div className="border-x-[0.5px] flex items-center justify-center border-yellowish h-full w-1/4">
                    <Image src={Images.logoInstagram} />
                </div>
                <div className="border-x-[0.5px] flex items-center justify-center border-yellowish h-full w-1/4">
                    <Image src={Images.logoX} />
                </div>
                <div className="border-x-[0.5px] flex items-center justify-center border-yellowish h-full w-1/4">
                    <Image src={Images.logoLinkedIn} />
                </div>
            </div>
        </div>
    )
}