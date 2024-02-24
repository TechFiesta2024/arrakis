import Image from "next/image";
import Images from "../../../public/assets/index.js";
const CommunityPartner = ({ partners }) => {
  return (
    <>
      <div className="communityparter__mainContainer border-y-[0.5px] border-yellowish  ">
        <div className=" communitypartner__text  justify-center w-full px-20 text-grey">
          <div className="communitypartner__textcontainer flex justify-center items-center p-3 h-[96px] ">
            <p className="md:font-generalsans font-extrabold text-[32px]">
              Community Partners
            </p>
          </div>
          </div>
      </div>
      <div className="communityparter__gridcontainer border-t-[0.5px] border-yellowish  ">
        <div className=" communitypartner__text  justify-center w-full px-20 text-grey">
            <div className="boxcontainer  text-yellowish">
              {/* <div className="boxgrid grid md:grid-cols-3 ">
                    <div className="col-span-1 flex justify-center py-20 border-[0.5px] text-yellowish" style={{height:200}}>
                        <Image src={Images.CommImg} width={64} height={64} />
                    </div>
            </div> */}
              <div className="boxgrid grid md:grid-cols-3 ">
                {partners.map((item, index) => (
                  <div
                    key={index}
                    className="partners col-span-1 flex justify-center py-20 border-x-[0.5px] border-b-[0.5px] text-yellowish"
                    style={{ height: 200 }}
                  >
                    <Image src={Images.CommImg} width={64} height={64} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        
    </>
  );
};

export default CommunityPartner;
