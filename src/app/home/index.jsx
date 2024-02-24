'use client'
import { useState, useEffect } from 'react'
import { HeroSection, Marquee, UnleashSkills, CommunityPartner } from "@/components/index "


export default function Homescreen() {
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
        { name: "Partner 2", description: "Description of Partner 2" },
      ]);

    return (
        <>
            <div className="h-[100%]">
                <HeroSection />
                <Marquee />
                <UnleashSkills />
                {partnersData.length > 0 && <CommunityPartner partners={partnersData}/>}
                {/* <CommunityPartner/> */}
            </div>
        </>
    )
}