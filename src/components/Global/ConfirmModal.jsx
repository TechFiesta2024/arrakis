"use client"
import { useState } from "react";

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
				<div className="confirmation_modal">
					<div className="bg-yellowish flex flex-col gap-6 py-5 px-8 rounded-lg">
						<p className="text-black text-lg font-generalsans-semibold">{description}</p>
						<div className="flex gap-3 text-white place-content-end">
							<button className="bg-red py-1 px-2 rounded-md" onClick={hide}>Cancel</button>
							<button className="rounded-md text-black" onClick={confirm}>Confirm</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
