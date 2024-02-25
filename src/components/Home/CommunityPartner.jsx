"use client";
import Image from "next/image";
import Images from "../../../public/assets/index.js";
import { useState, useEffect } from "react"

const CommunityPartner = () => {
  // import React from "react";
  // const [partnersData, setPartnersData] = useState([]);


  // useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch('/api/');
  //       const data = await response.json();
  //       setPartnersData(data);
  //     };

  //     fetchData();
  //   }, []);
  const [partnersData, setPartnersData] = useState([
    { name: "Partner 1", description: "Description of Partner 1" },
    { name: "Partner 2", description: "Description of Partner 2" },
    { name: "Partner 2", description: "Description of Partner 2" },
    { name: "Partner 2", description: "Description of Partner 2" },
    { name: "Partner 2", description: "Description of Partner 2" },
    { name: "Partner 2", description: "Description of Partner 2" },
  ]);
  if (partnersData.length < 0) {
    return null;
  } else {
    return (
      <>
        <div className="communityparter__mainContainer border-y-[0.5px] border-yellowish  ">
          <div className=" communitypartner__text  justify-center w-full px-20 text-grey">
            <div className="communitypartner__textcontainer flex justify-center items-center p-3 h-[96px] ">
              <p className="md:font-generalsans font-extrabold text-xl md:text-3xl text-yellowish">
                Community Partners
              </p>
            </div>
          </div>
        </div>
        <div className="communityparter__gridcontainer border-t-[0.5px] border-yellowish  ">
          <div className=" communitypartner__text  justify-center w-full md:px-20 text-grey">
            <div className="boxcontainer  text-yellowish">
              <div className="boxgrid grid grid-cols-2 md:grid-cols-3 ">
                {partnersData.map((item, index) => (
                  <div
                    key={index}
                    className="partners col-span-1 flex justify-center py-16 md:py-20 border-x-[0.5px] border-b-[0.5px] text-yellowish"
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
  }
};

export default CommunityPartner;
