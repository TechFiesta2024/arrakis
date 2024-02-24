import { HeroSection, Marquee, UnleashSkills, CommunityPartner } from "@/components/index "


export default function Homescreen() {
    
    

    return (
        <>
            <div className="h-[100%]">
                <HeroSection />
                <Marquee />
                <UnleashSkills />
                <CommunityPartner/>
            </div>
        </>
    )
}