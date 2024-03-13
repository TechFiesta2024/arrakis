import Image from "next/image";
import Images from "/public/assets";

export default function SuccessToast({ closeToast, message }) {
	return (
		<>
			<div className="bg-green-500 text-black p-4 rounded-md flex items-center">
				<Image
					src={Images.logoWhatsapp}
					alt="whatsapp"
					width={30}
					height={30}
				/>
				<span>{message}</span>
			</div>
		</>
	);
}
