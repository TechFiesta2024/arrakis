import Link from "next/link"


const BootcampInfo = ({ bootcamp }) => {

    const { id, title, description, image_url } = bootcamp

    return (
        <>
            <div className='border-t-[.5px] border-b-[.5px] border-r-[.5px] border-yellowish'>
                <div className='h-[60%] border-b-[.5px] border-yellowish overflow-hidden '>
                    <img className='object-cover' src={image_url} alt="" srcset="" />
                </div>
                <div className='h-[40%] '>
                    <div className='px-6 lg:pt-6 pt-4 h-3/4'>
                        <p className='text-yellowish font-generalsans font-bold text-2xl'>{title}</p>
                        <p className='text-yellowish font-generalsans text-sm lg:pt-3 py-1'>{description}</p>
                    </div>
                    <div className='h-1/4 grid grid-cols-1 bg-yellowish border-b-[.5px] border-yellowish'>
                        <Link href={`/bootcamp/${id}`} className='border-r-[.5px] border-black flex justify-center items-center'>
                            <h1 className="text-black text-[14px] font-extrabold ">VIEW DETAILS & REGISTER</h1>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BootcampInfo