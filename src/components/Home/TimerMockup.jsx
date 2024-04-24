"use client";

import { useState, useEffect } from "react";

export default function TimerMockup() {
	const targetDate = new Date("April 8, 2024 00:00:00").getTime();

	const calculateTimeRemaining = () => {
		const now = new Date().getTime();
		const timeDifference = targetDate - now;

		if (timeDifference > 0) {
			const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor(
				(timeDifference % (1000 * 60 * 60)) / (1000 * 60),
			);
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

			return {
				days,
				hours,
				minutes,
				seconds,
			};
		} else {
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}
	};

	const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

	const calculateAndSetTimeRemaining = () =>
		setTimeRemaining(calculateTimeRemaining());

	useEffect(() => {
		calculateAndSetTimeRemaining();
		const timerInterval = setInterval(calculateAndSetTimeRemaining, 1000);
		return () => clearInterval(timerInterval);
	}, []);

	const formatTimeValue = (value) => {
		return value < 10 ? `0${value}` : value;
	};

	const flexStylesCenter = "flex justify-center items-center";

	return (
		<>
			<div
				className={`prizeool-Badge_container h-[242px] w-[100%] ${flexStylesCenter} overflow-hidden`}
			>
				<div
					className={`bg-mockup bg-no-repeat h-[600px] w-[300px] whitespace-nowrap bg-contain object-cover mt-[450px] md:mt-96`}
				>
					<div className={`mt-16 ${flexStylesCenter}`}>
						<div>
							<p className="text-3xl font-generalsans-semibold  text-black ">
								{/* {`${formatTimeValue(timeRemaining.days)}:${formatTimeValue(
									timeRemaining.hours,
								)}:${formatTimeValue(timeRemaining.minutes)}:${formatTimeValue(
									timeRemaining.seconds,
								)}`} */}
								A lot of
							</p>
							<p className="font-generalsans text-md text-center text-black">
								Days left
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
