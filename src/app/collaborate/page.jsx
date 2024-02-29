"use client";

import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Images from "../../../public/assets";
import SmartShapes from "@/components/Global/SmartShapes";


export default function CollaboratePage() {
  const [showCampusAmbassador, setShowCampusAmbassador] = useState(true);
  const [showCommunityPartner, setShowCommunityPartner] = useState(false);

  const handleCampusAmbassadorClick = () => {
    setShowCampusAmbassador(true);
    setShowCommunityPartner(false);
    setSelectedButton('Campus Ambassador');
  };

  const handleCommunityPartnerClick = () => {
    setShowCommunityPartner(true);
    setShowCampusAmbassador(false);
    setSelectedButton('Community Partner');
  };


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactNumber = (contactNumber) => {

    const contactNumberRegex = /^\d{10}$/;
    return contactNumberRegex.test(contactNumber);
  };

  const validateLinkedInURL = (linkedinURL) => {

    const linkedinURLRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
    return linkedinURLRegex.test(linkedinURL);
  };



  const [ambassorDetails, setAmbassadorDetails] = useState({
    ambassador_name: "",
    ambassador_contact: "",
    ambassador_college: "",
    ambassador_email: "",
    ambassador_description: "",
    ambassador_linkedin: "",
  });


  const resetAmbassadorDetails = () => {
    setAmbassadorDetails
      ({
        ambassador_name: "",
        ambassador_contact: "",
        ambassador_college: "",
        ambassador_email: "",
        ambassador_description: "",
        ambassador_linkedin: "",
      });
  }



  const handleInputChangeCampusAmbassador = (e) => {
    const { id, value } = e.target;
    setAmbassadorDetails((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };



  const handleSubmitCampusAmbassador = async (e) => {
    e.preventDefault();




    if (ambassorDetails.ambassador_name === "" && ambassorDetails.ambassador_contact === "" && ambassorDetails.ambassador_college === "" && ambassorDetails.ambassador_email === "" && ambassorDetails.ambassador_description === "" && ambassorDetails.ambassador_linkedin === "") {
      toast.error(`Please fill in all required fields with valid information.`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      return;
    }
    if (!validateContactNumber(ambassorDetails.ambassador_contact)) {
      toast.error(`Please enter a valid 10 digit contact number`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      return;
    }
    if (!validateEmail(ambassorDetails.ambassador_email)) {
      toast.error(`Please enter a valid email address`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      return;
    }

    if (!validateLinkedInURL(ambassorDetails.ambassador_linkedin)) {
      toast.error(`Please enter a valid LinkedIn URL`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      return;
    }
    if (!ambassorDetails.ambassador_name) {
      // Show error toast for the desired field(s)
      toast.error(`Please fill in all required fields with valid information.`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      return; // Prevent form submission if validation fails
    }





    const ambassador_JSON_Details = JSON.stringify(ambassorDetails);

    try {
      const response = await fetch("https://messiah.fly.dev/community/ambassador",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: ambassador_JSON_Details,
        });



      if (response.ok) {
        toast.success(`Campus Ambassador registered successfully`, {
          autoClose: 3000,
          position: "top-right",
          icon: <Image src={Images.logoVerify} alt="whatsapp" />,
          hideProgressBar: true,
          style: { color: "#010100", backgroundColor: "#FFF3B0", font: "generalsans", fontSize: '14px', border: "1px solid #010100" },
        });
        resetAmbassadorDetails();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Form not submitted successfully`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      resetAmbassadorDetails();
    }
  }



  const [communityPartnerDetails, setCommunityPartnerDetails] = useState({
    community_name: "",
    community_contact: "",
    community_college: "",
    community_lead_name: "",
    community_email: "",
    community_linkedin: "",
  });

  const resetCommunityPartnerDetails = () => {
    setCommunityPartnerDetails
      ({
        community_name: "",
        community_contact: "",
        community_college: "",
        community_lead_name: "",
        community_email: "",
        community_linkedin: "",
      });
  }
  const handleInputChangeCommunityPartner = (e) => {
    const { id, value } = e.target;
    setCommunityPartnerDetails((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmitCommunityPartner = async (e) => {

    e.preventDefault();


    if (communityPartnerDetails.community_name === "" && communityPartnerDetails.community_contact === "" && communityPartnerDetails.community_college === "" && communityPartnerDetails.community_lead_name === "" &&
      communityPartnerDetails.community_email === "" && communityPartnerDetails.community_linkedin === "") {
      toast.error(`Please fill in all required fields with valid information.`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      return;
    }
    if (!validateContactNumber(communityPartnerDetails.community_contact)) {
      toast.error(`Please enter a valid 10 digit contact number`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      return;
    }
    if (!validateEmail(communityPartnerDetails.community_email)) {
      toast.error(`Please enter a valid email address`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      return;
    }
    if (!validateLinkedInURL(communityPartnerDetails.community_linkedin)) {
      toast.error(`Please enter a valid LinkedIn URL`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      return;
    }



    const communityPartner_JSON_Details = JSON.stringify(communityPartnerDetails);
    try {
      const response = await fetch("https://messiah.fly.dev/community/collab",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: communityPartner_JSON_Details,
        });

      if (response.ok) {
        toast.success(`Community Partner registered successfully`, {
          autoClose: 3000,
          position: "top-right",
          icon: <Image src={Images.logoVerify} alt="whatsapp" />,
          hideProgressBar: true,
          style: { color: "#010100", backgroundColor: "#FEFAE0", font: "generalsans", fontSize: '14px', border: "0.5px solid #010100" },
        });
        resetCommunityPartnerDetails();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Form not submitted successfully`, {
        autoClose: 3000,
        position: "top-right",
        hideProgressBar: true,
        icon: false,
        style: { color: "#FFFFFF", backgroundColor: "#FF002B", fontSize: '14px', border: "1px solid #FFFFFF " },
      });
      resetCommunityPartnerDetails();
    }
  }


  const [selectedButton, setSelectedButton] = useState('Campus Ambassador');

  const collaborateButtonClass = "border-x-[0.5px] h-full w-1/2 flex justify-center items-center";
  const selectedCollaborateButtonClass = "border-x-[0.5px] h-full w-1/2 flex justify-center items-center bg-yellowish28";




  return (
    <>
      <div className='collab__container flex flex-col md:flex-row w-full px-0 md:px-20  border-yellowish text-yellowish'>
        <div className='collab__left flex w-full md:w-1/2 border-x-[0.5px] flex-col'>
          <div className='collab__buttons flex w-full h-16 border-b-[0.5px]'>
            <button
              onClick={handleCampusAmbassadorClick}

              className={selectedButton === 'Campus Ambassador' ? selectedCollaborateButtonClass : collaborateButtonClass}
            >
              Campus Ambassador
            </button>
            <button
              onClick={handleCommunityPartnerClick}

              className={selectedButton === 'Community Partner' ? selectedCollaborateButtonClass : collaborateButtonClass}
            >
              Community Partner
            </button>
          </div>

          <div className='collab__title flex h-[312px] px-4 md:px-[90px] justify-center flex-col border-b-[0.5px] overflow-hidden'>
            {showCampusAmbassador && (
              <>
                <p className='text-xl'>join as</p>
                <h1 className='font-anton text-[56px]'>Campus Ambassador</h1>
                <p className='text-xl'>
                  Go through the{" "}
                  <Link href='' className='underline'>
                    norms
                  </Link>{" "}
                  for positive collaboration
                </p>
                <SmartShapes />
              </>
            )}
            {showCommunityPartner && (
              <>
                <p className='text-xl '>join as</p>
                <h1 className='font-anton text-[56px]'>Community Partner</h1>
                <p className='text-xl'>
                  Go through the{" "}
                  <Link href='' className='underline'>
                    norms
                  </Link>{" "}
                  for positive collaboration
                </p>
                <SmartShapes />
              </>
            )}
          </div>
          <div className='collab__left_input md:h-[400px] flex px-4 md:px-[90px] flex-col md:justify-center'>
            {showCampusAmbassador && (
              <>
                <div className='input_name flex flex-col py-8 md:pb-8 md:pt-0'>
                  <label className='text-[24px] pb-4'>Name</label>
                  <input
                    id='ambassador_name'
                    type='text'
                    onChange={handleInputChangeCampusAmbassador}
                    value={ambassorDetails.ambassador_name}
                    placeholder='Enter your full name'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8 md:pb-0'>
                  <label className='text-[24px] pb-4'>Contact No.</label>
                  <input
                    id='ambassador_contact'
                    type='text'
                    onChange={handleInputChangeCampusAmbassador}
                    value={ambassorDetails.ambassador_contact}
                    placeholder='Enter your contact no.'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
              </>
            )}
            {showCommunityPartner && (
              <>
                <div className='input_name flex flex-col py-8 md:pb-8 md:pt-0'>
                  <label className='text-[24px] pb-4'>Community Name</label>
                  <input
                    id="community_name"
                    onChange={handleInputChangeCommunityPartner}
                    value={communityPartnerDetails.community_name}
                    type='text'
                    placeholder='Enter the community name'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8 md:pb-0'>
                  <label className='text-[24px] pb-4'>
                    Community Contact No.
                  </label>
                  <input
                    id="community_contact"
                    onChange={handleInputChangeCommunityPartner}
                    value={communityPartnerDetails.community_contact}
                    type='string'
                    placeholder='Enter the community contact no.'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className='collab__right border-x-[0.5px] md:border-r-[0.5px] flex w-full md:w-1/2 h-auto items-center md:py-8'>
          {showCampusAmbassador && (
            <>
              <div className='collab__right_input h-full flex px-4 md:px-[90px] flex-col w-full justify-evenly'>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>College Name</label>
                  <input

                    id='ambassador_college'
                    type='text'
                    onChange={handleInputChangeCampusAmbassador}
                    value={ambassorDetails.ambassador_college}
                    placeholder='Enter your College Name'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>Email ID</label>
                  <input
                    id='ambassador_email'
                    type='email'
                    onChange={handleInputChangeCampusAmbassador}
                    value={ambassorDetails.ambassador_email}
                    placeholder='Enter your email id'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>
                    How will you contribute in event success?
                  </label>
                  <textarea
                    id="ambassador_description"
                    onChange={handleInputChangeCampusAmbassador}
                    value={ambassorDetails.ambassador_description}
                    placeholder='Describe within 200 words'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>LinkedIn Profile</label>
                  <input
                    id="ambassador_linkedin"
                    type='url'
                    onChange={handleInputChangeCampusAmbassador}
                    value={ambassorDetails.ambassador_linkedin}
                    placeholder='https://linkedin.com/username'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <button className='bg-red p-4 text-white rounded-[8px] mb-8 md:mb-0' onClick={handleSubmitCampusAmbassador}>
                  Submit
                </button>
                <ToastContainer />
              </div>
            </>
          )}

          {showCommunityPartner && (
            <>
              <div className='collab__right_input h-auto flex px-4 md:px-[90px] flex-col w-full justify-evenly'>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>
                    Community Lead Name
                  </label>
                  <input
                    id="community_lead_name"
                    onChange={handleInputChangeCommunityPartner}
                    value={communityPartnerDetails.community_lead_name}
                    type='text'
                    placeholder='Enter the name of the Community lead'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>
                    Community College Name
                  </label>
                  <input
                    id="community_college"
                    onChange={handleInputChangeCommunityPartner}
                    value={communityPartnerDetails.community_college}
                    type='text'
                    placeholder='Enter name of the College'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>Community Email ID</label>
                  <input
                    id="community_email"
                    onChange={handleInputChangeCommunityPartner}
                    value={communityPartnerDetails.community_email}
                    type='email'
                    placeholder='Enter the community email id'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <div className='input_name flex flex-col pb-8'>
                  <label className='text-[24px] pb-4'>LinkedIn Profile</label>
                  <input
                    id="community_linkedin"
                    onChange={handleInputChangeCommunityPartner}
                    value={communityPartnerDetails.community_linkedin}
                    type='url'
                    placeholder='https://linkedin.com/username'
                    className='bg-black border-yellowish border-[0.5px] p-4 text-[20px] rounded-[12px]'
                  />
                </div>
                <button className='bg-red p-4 text-white rounded-[8px] mb-8 md:mb-0' onClick={handleSubmitCommunityPartner}>
                  Submit
                </button>
                <ToastContainer />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
