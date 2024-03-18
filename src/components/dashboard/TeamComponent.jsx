import Image from 'next/image'
import React, { useState } from 'react'
import Images from '../../../public/assets'

const TeamComponent = () => {

  const [clipboardValue, setClipboardValue] = useState("ghghghg");
  const [clipboardCheck, setClipboardCheck] = useState(null);

  const clipboardText = async () => {
    try {
      await navigator.clipboard.writeText(clipboardValue)
      setClipboardCheck("copied")
      setTimeout(() => {
        setClipboardCheck(null)
      }, 2000);
    } catch (error) {
      setClipboardCheck("failed to copy")
    }
  }
  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-4 w-full h-auto`}>
        <div className='col-span-2 md:col-span-2 border-yellowish border-[.5px] cursor-text px-6 pb-10'>
          <div className="">
            <div className="pt-8 flex flex-col">
              <label className="text-[24px] pb-4 text-yellowish">Team name</label>
              <input type="text" className='bg-black border-yellowish p-4 border-[1px] rounded-md focus:outline-none' placeholder='Create your team name' />
            </div>
            {/* <button className={`flex justify-center items-center gap-2 bg-red p-4 text-white rounded-[8px] mb-8 md:mb-0 w-full mt-10`}
              type="submit"
            >
              <p>Create Team</p>
              <Image src={Images.arrowRight} className='h-6 w-6' />
            </button> */}
            <div className={`flex justify-between items-center gap-2 bg-yellowish28 p-4 text-white rounded-[8px] mb-2 w-full mt-10 h-14`}>
              <p className='text-yellowish font-generalsans' >{clipboardValue}</p>
              <Image src={Images.copy} className='h-6 w-6 cursor-pointer' onClick={clipboardText} />
            </div>
            {
              clipboardCheck ? (
                <span className=' text-greyfade font-generalsans text-sm '>{clipboardCheck}</span>
              ): null
            }
          </div>
          <div className=" font-anton text-3xl text-center text-yellowish pt-10">OR</div>
          <div className="">
            <div className="pt-8 flex flex-col">
              <label className="text-[24px] pb-4 text-yellowish">Team code</label>
              <input type="text" className='bg-black border-yellowish p-4 border-[1px] rounded-md focus:outline-none' placeholder='Enter code to join a team' />
            </div>
            <button className={`flex justify-center items-center gap-2 bg-red p-4 text-white rounded-[8px] mb-8 md:mb-0 w-full mt-10`}
              type="submit"
            >
              <p>Create Team</p>
              <Image src={Images.arrowRight} className='h-6 w-6' />
            </button>
          </div>
        </div>
        <div className='col-span-2 md:col-span-2 border-yellowish border-[.5px] pl-5 cursor-text'>

        </div>
      </div>
    </>
  )
}

export default TeamComponent