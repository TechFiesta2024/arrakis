'use client'
import { HeroSection, MarqueeComponent, UnleashSkills, CommunityPartner } from "@/components/index "


export default function Homescreen() {
    
    

    return (
        <>
            <div className="">
                <HeroSection />
                <MarqueeComponent />
                <UnleashSkills />
                <CommunityPartner/>
                
            </div>
        </>
    )
}