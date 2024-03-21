"use client"
import Image from "next/image";
import { useState } from "react";
import Images from "../../../public/assets";

export default function ConfirmModal({ children, description }) {
	const [open, setOpen] = useState(false);
	const [callback, setCallback] = useState(null);

	const show = (callback) => (event) => {
		event.preventDefault();
		setOpen(true);
		event = {
			...event,
			target: { ...event.target, value: event.target.value }
		};
		setCallback({
			run: () => callback(event)
		});
	};

	const hide = () => {
		setCallback(null);
		setOpen(false);
	};

	const confirm = () => {
		callback.run();
		hide();
	};

	return (
		<>
			{children(show)}
			{open && (
				<div className="confirmation_modal w-[80%] md:h-auto md:w-auto">
					<div className="bg-yellowish flex flex-col justify-center items-center gap-4 py-5 px-8 rounded-lg h-full">
						<Image src={Images.warning} className="h-12 w-12" />
						<p className="text-black text-xl md:text-3xl font-generalsans-semibold">{description}</p>
						<span className="text-center text-black text-sm md:text-md">Once you regester you can't delete the team</span>
						<div className="flex justify-evenly items-center w-full gap-3 text-white place-content-end mt-6">
							<button className="bg-red py-1 px-2 rounded-md w-full font-generalsans" onClick={hide}>Cancel</button>
							<button className="rounded-md text-black w-full font-generalsans" onClick={confirm}>Confirm</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
