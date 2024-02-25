// -----------------------------------------------------
// Images
// -----------------------------------------------------
import Image from 'next/image';
import Images from '../../../public/assets/index.js';

const FocusImage = () => {
    const flexStylesStart = "flex justify-start items-center";
    const flexStylesCenter = "flex justify-center items-center";

    return (
        <>
            <div className={`participate-badge_container h-[100%] w-[96vw] md:w-[100%] flex-col ${flexStylesCenter} md:${flexStylesStart} overflow-hidden`}>
                {/* -------------------------Mid Text----------------------------- */}
                <div className="relative">
                    <p className="techfiesta_text font-anton text-[80px] md:text-[180px] text-yellowish">TECHFIESTA</p>
                    <div className="humatronics_tags font-anton text-xl md:text-4xl bg-red text-black w-fit px-1 rounded border absolute bottom-6 md:bottom-14 right-0">
                        & HUMATRONICS
                    </div>
                </div>
                {/* ------------------------- Register button----------------------------- */}
                <button className={`${flexStylesCenter} bg-red px-2 py-1 md:mt-[-30px] w-[200px] md:w-[280px] z-20 rounded gap-x-3 transition-transform hover:scale-x-110`}>
                    <p>Register</p>
                    <Image src={Images.ArrowRight} alt='arrow-right' />
                </button>
                {/* ------------------------- Smart Shapes ----------------------------- */}
                <div className="w-full">
                    <div className={`mt-[-150px] flex justify-start items-start animate-rotate-star2`}>
                        <Image src={Images.Star2} className='ml-[-40px]' alt='star2' />
                    </div>
                    <div className={`mt-[-200px] flex justify-center items-center animate-rotate-diamond2`}>
                        <Image src={Images.Diamond1} className='mt-60 mr-[700px]' alt='diamond2' />
                    </div>
                    <div className={`mt-[-360px] flex justify-end items-end animate-rotate-star3`}>
                        <Image src={Images.Star3} className='mr-[40px]' alt='star3' />
                    </div>
                    <div className={`mt-[-130px] flex justify-center items-end animate-rotate-diamond2`}>
                        <Image src={Images.Diamond2} className='mt-[40px] ml-[300px]' alt='diamond1' />
                    </div> 
                </div>
            </div>
        </>
    )
}

export default FocusImage;