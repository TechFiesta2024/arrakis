"use client";

import { CampusAmbassador, CommunityPartner } from "@/components/index ";
import { useState } from "react";

export default function CollaboratePage() {
  const [showCampusAmbassador, setShowCampusAmbassador] = useState(true);
  const [showCommunityPartner, setShowCommunityPartner] = useState(false);

  const handleCampusAmbassadorClick = () => {
    setShowCampusAmbassador(true);
    setShowCommunityPartner(false);
  };

  const handleCommunityPartnerClick = () => {
    setShowCommunityPartner(true);
    setShowCampusAmbassador(false);
  };

  return (
    <>
      <div className='collab__container flex w-full px-0 md:px-20  border-yellowish text-yellowish'>
        <div className='collab__left flex w-1/2 border-x-[0.5px] flex-col'>
          <div className='collab__buttons flex w-full h-16 border-b-[0.5px]'>
            <button
              onClick={handleCampusAmbassadorClick}
              className='border-r-[0.5px] h-full w-1/2 flex justify-center items-center'
            >
              Campus Ambassador
            </button>
            <button
              onClick={handleCommunityPartnerClick}
              className='h-full w-1/2 flex justify-center items-center'
            >
              Community Partner
            </button>
          </div>

          <div className='collab__title flex h-[312px] px-[90px] justify-center flex-col border-b-[0.5px]'>
            {showCampusAmbassador && (
              <>
                <p className='text-xl'>join as</p>
                <h1 className='font-anton text-[56px]'>Campus Ambassador</h1>
                <p className='text-xl'>
                  Go through the{" "}
                  <a href='' className='underline'>
                    norms
                  </a>{" "}
                  for positive collaboration
                </p>
              </>
            )}
            {showCommunityPartner && (
              <>
                <p className='text-xl '>join as</p>
                <h1 className='font-anton text-[56px]'>Community Partner</h1>
                <p className='text-xl'>
                  Go through the{" "}
                  <a href='' className='underline'>
                    norms
                  </a>{" "}
                  for positive collaboration
                </p>
              </>
            )}
          </div>
          <div className='collab__left_input h-[400px] flex px-[90px] flex-col justify-center'>
            {showCampusAmbassador && (
              <>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>Name</label>
                  <input
                    id='name'
                    type='text'
                    placeholder='Enter your full name'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col'>
                  <label className='text-[24px] pb-4'>Contact No.</label>
                  <input
                    id='contact'
                    type='number'
                    placeholder='Enter your contact no.'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
              </>
            )}
            {showCommunityPartner && (
              <>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>Community Name</label>
                  <input
                    id='name'
                    type='text'
                    placeholder='Enter the community name'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col'>
                  <label className='text-[24px] pb-4'>
                    Community Contact No.
                  </label>
                  <input
                    id='contact'
                    type='number'
                    placeholder='Enter the community contact no.'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className='collab__right border-r-[0.5px] flex w-1/2 h-auto items-center py-8'>
          {showCampusAmbassador && (
            <>
              <div className='collab__right_input h-full flex px-[90px] flex-col w-full justify-evenly'>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>College Name</label>
                  <input
                    id='college'
                    type='text'
                    placeholder='Enter your College Name'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>Email ID</label>
                  <input
                    id='email'
                    type='email'
                    placeholder='Enter your email id'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>
                    How will you contribute in event success?
                  </label>
                  <textarea
                    id='description'
                    placeholder='Describe within 200 words'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>Twitter Profile</label>
                  <input
                    id='twitter'
                    type='url'
                    placeholder='https://x.com/username'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <button className='bg-red p-4 text-white rounded-[8px] '>
                  Submit
                </button>
              </div>
            </>
          )}

          {showCommunityPartner && (
            <>
              <div className='collab__right_input h-auto flex px-[90px] flex-col w-full justify-evenly'>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>
                    Community College Name
                  </label>
                  <input
                    id='college'
                    type='text'
                    placeholder='Enter name of the College'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>Community Email ID</label>
                  <input
                    id='email'
                    type='email'
                    placeholder='Enter the community email id'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>Twitter Profile</label>
                  <input
                    id='twitter'
                    type='url'
                    placeholder='https://x.com/username'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <button className='bg-red p-4 text-white rounded-[8px] '>
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
