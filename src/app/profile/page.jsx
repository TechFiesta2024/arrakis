"use client"

import SmartShapes from "@/components/Global/SmartShapes";
import { useAuthState } from "@/context/AuthContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Images from "../../../public/assets";
import { rgbDataURL } from "@/utils/blurryImage";

export default function Profile() {


    const year = ['1st', '2nd', '3rd', '4th'];

    const { user } = useAuthState();



    // useEffect(() => {
    // }, [])





    const [userDetails, setUserDetails] = useState({
        name: '',
        contact: '',
        college: '',
        email: user.email,
        stream: '',
        year: ''
    })
    const handleInputChangeUserProfile = (e) => {
        const { id, value } = e.target;
        setUserDetails(([prevData]) => ({
            ...prevData,
            [id]: value
        }));
    };


    const handleSubmitChangeUserProfile = async (e) => {
        e.preventDefault();


        const user_JSON_Details = JSON.stringify(userDetails);


        try {
            const response = await fetch("https://messiah.fly.dev/user/login",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: user_JSON_Details,
                }
            );



            if (response.ok) {
                toast.success(`User profile completed`, {
                    autoClose: 3000,
                    position: "top-right",
                    icon: <Image src={Images.logoVerify} alt="whatsapp" />,
                    hideProgressBar: true,
                    style: { color: "#010100", backgroundColor: "#FEFAE0", font: "generalsans", fontSize: '14px', border: "0.5px solid #010100" },
                });
            }
        }
        catch (err) {
        }
    }



    return (
        <>
            <div className='profile__container flex flex-col md:flex-row w-full px-0 md:px-20  border-yellowish text-yellowish'>
                <div className='profile__left flex w-full md:w-1/2 border-x-[0.5px] flex-col'>
                    <div className='profile__title flex h-[312px] px-4 md:px-[90px] justify-center flex-col border-b-[0.5px] overflow-hidden'>

                        <div className="flex flex-row items-center gap-6 md:gap-4">
                            <Image
                                src={user.avatar}
                                className="border-yellowish rounded-[12px] border-[0.5px] z-[20]"
                                alt="avatar"
                                width={80}
                                height={80}
                                placeholder="blur"
                                blurDataURL={rgbDataURL(128, 128, 128)}
                            />
                            <h1 className='font-anton text-[36px] md:text-[56px]'>Setup Completion</h1>

                        </div>

                        <SmartShapes />
                    </div>
                    <div className='profile__left_input md:h-[400px] flex px-4 md:px-[90px] flex-col md:justify-center'>
                        <div className='input_name flex flex-col py-8 md:pb-8 md:pt-0'>
                            <label className='text-[24px] pb-4'>Name</label>
                            <input
                                id='name'
                                type='text'
                                // onChange={handleInputChangeCampusAmbassador}
                                defaultValue={userDetails.name}
                                placeholder='Enter your full name'
                                className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                            />
                        </div>
                        <div className='input_contact flex flex-col pb-8 md:pb-0'>
                            <label className='text-[24px] pb-4'>Contact No.</label>
                            <input
                                id='contact'
                                type='text'
                                defaultValue={userDetails.contact}
                                placeholder='Enter your contact no.'
                                className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                            />
                        </div>
                    </div>
                </div>




                <div className='profile__right border-x-[0.5px] md:border-r-[0.5px] flex w-full md:w-1/2 h-auto items-center md:py-8'>
                    <div className='collab__right_input h-full flex px-4 md:px-[90px] flex-col w-full justify-evenly'>


                        <div className='input_college flex flex-col pb-8'>
                            <label className='text-[24px] pb-4'>College Name</label>
                            <input

                                id='college'
                                type='text'
                                defaultValue={userDetails.college}
                                placeholder='Enter your College Name'
                                className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                            />
                        </div>




                        <div className='input_email flex flex-col pb-8'>
                            <label className='text-[24px] pb-4'>Email ID</label>
                            <input
                                id='email'
                                type='email'
                                defaultValue={user.email}
                                readOnly
                                placeholder='Enter your email id'
                                className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                            />
                        </div>

                        <div className='input_stream flex flex-col pb-8'>
                            <label className='text-[24px] pb-4'>Stream</label>
                            <input
                                id='stream'
                                type='text'
                                defaultValue={userDetails.stream}
                                placeholder='Enter your stream'
                                className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                            />
                        </div>

                        <div className='input_year flex flex-col pb-8'>
                            <label className='text-[24px] pb-4'>Year</label>
                            <select
                                id='year'
                                className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'>
                                defaultvalue={userDetails.year}
                                {year.map(option => (
                                    <option className="hover:bg-red" key={option} value={option}>{option}</option>
                                ))}

                            </select>

                        </div>
                        <button className='bg-red p-4 text-white rounded-[8px] mb-8 md:mb-0'>
                            Submit
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    )
}