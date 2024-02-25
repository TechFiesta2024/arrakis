'use client'
import { HeroSection, Marquee, UnleashSkills, CommunityPartner } from "@/components/index "


export default function Homescreen() {
    
    

    return (
        <>
            <div className="">
                <HeroSection />
                <Marquee />
                <UnleashSkills />
                <CommunityPartner/>
                
            </div>
        </>
    )
}