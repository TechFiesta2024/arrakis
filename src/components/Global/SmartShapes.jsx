// -----------------------------------------------------
// Images
// -----------------------------------------------------
import Image from 'next/image';
import Images from '/public/assets';

const SmartShapes = () => {
    return (
        <>
            <div className="w-full">
                <div className={`mt-[-100px] md:mt-[-150px] flex justify-start items-start animate-rotate-star2`}>
                    <Image src={Images.Star2} className='ml-[-40px]' alt='star2' />
                </div>
                <div className={`mt-[-20px] md:mt-[-200px] flex justify-center items-center animate-rotate-diamond2`}>
                    <Image src={Images.Diamond1} className='mt-60 mr-[700px]' alt='diamond2' />
                </div>
                <div className={`mt-[-300px] md:mt-[-360px] flex justify-end items-end animate-rotate-star3`}>
                    <Image src={Images.Star3} className='mr-[40px]' alt='star3' />
                </div>
                <div className={`mt-[-250px] md:mt-[-130px] flex justify-center items-end animate-rotate-diamond2`}>
                    <Image src={Images.Diamond2} className='mt-[40px] ml-[300px]' alt='diamond1' />
                </div>
            </div>
        </>
    );
}

export default SmartShapes;