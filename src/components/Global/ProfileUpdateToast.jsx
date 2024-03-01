import Image from "next/image"
import Images from "../../../public/assets"
import Link from "next/link"

const ProfileUpdateToast = () => {
    return (
        <>
            <Link href='/profile' className="profile_update_toast-container bg-yellowish py-3 flex justify-between items-center px-4 overflow-hidden">
                <div className="profile_svg-container flex justify-center items-center gap-4">
                    <div className=" bg-red h-12 w-12 rounded-full flex justify-center items-center">
                        <Image src={Images.userIcon} className=" text-yellowish" />
                    </div>
                    <p className=" font-generalsans font-bold text-black">Update your profile</p>
                </div>
                <div className="flex justify-center items-center -mt-20">
                    <Image src={Images.Diamond1} className="h-16 w-16" />
                    <Image src={Images.Diamond2} className="h-6 w-6 mt-16" />
                </div>
                <div className="arrow-container">
                    <Image src={Images.arrowRight} />
                </div>
            </Link>
        </>
    )
}

export default ProfileUpdateToast