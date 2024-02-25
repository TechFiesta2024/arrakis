import Image from "next/image"
import Images from '../../../public/assets/index.js'


const UnleashSkills = () => {
  return (
    <>
            {/* <div className=" uleashskills__container justify-center h-[428px] w-full px-20" >
                <div className="unleashtext_container row-2 border-x-[0.5px] border-b-[0.5px] text-yellowish  h-[100%] ">
                    <div className=" flex justify-center py-20  h-[60%]">
                      <h1 className='font-anton text-[110px]'>unleash skills</h1>
                    </div>
                    <div className=" flex justify-center h-[10%]">
                    <button className='bg-red px-10 flex text-white rounded-[8px] '>
                      <div className="buttoncontent flex md:py-2">
                        Check Workshops<Image src={Images.Arrow}/>
                      </div>
                      </button>
                    </div>
                    <div className=" flex h-[30%]">
                    </div>
                    
                </div>
            </div> */}
            <div className="unleashskills__mainContainer border-y-[0.5px] border-yellowish  ">
              <div className=" uleashskills__container items-center justify-center w-full px-20" style={{height:428}}>
                <div className="unleashtext__container flex justify-center items-center flex-col border-x-[0.5px] text-yellowish  h-[100%] ">
                      <h1 className='font-anton pb-4 md:text-[128px]'>Unleash Skills</h1>
                      <button className='bg-red px-10 flex text-white rounded-[8px] '>
                        <div className="buttoncontent flex py-2">
                          Check Workshops
                        </div>
                      </button>
                </div> 
                  
              </div>
              </div>
        </>
  )
}

export default UnleashSkills