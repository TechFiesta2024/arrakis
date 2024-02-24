"use client";
// -----------------------------------------------------
// Dependencies
// -----------------------------------------------------
import { useState, useEffect } from "react";
// -----------------------------------------------------
// Images
// -----------------------------------------------------
import Image from "next/image";
import Images from "../../../public/assets/index.js";

const TimerMockup = () => {
    const targetDate = new Date('April 1, 2024 00:00:00').getTime();

    const calculateTimeRemaining = () => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
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

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const flexStylesStart = "flex justify-start items-center";
    const flexStylesCenter = "flex justify-center items-center";

    return (
        <>
            <div className={`prizeool-Badge_container h-[100%] w-[100%] ${flexStylesCenter} flex-1 overflow-hidden`}>
                <div className={`bg-mockup bg-no-repeat h-[100%] w-[68%] mt-8`}>
                    <div className={`mt-12 ${flexStylesCenter}`}>
                        <div className="">
                            <p className="text-3xl font-generalsans text-black ">{timeRemaining.days}:{timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}</p>
                            <p className="font-generalsans text-md text-center text-black">Days left</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimerMockup;